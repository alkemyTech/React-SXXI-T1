import { useEffect, useState } from "react";
import { feedbackUser } from "utilities/alerts/feedbackUser.util";
import { requestMessagesSchema } from "utilities/requestMessagesSchema.util";
import { URLs } from "Services/ServicesURLS";
import privateService from "Services/privateApiService";
import { handleUserConfirm as AlertWarning } from "utilities/alerts/userConfirm.util";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "redux/states/categoriesSlice";

export const useCategories = () => {
  const [loading, setLoading] = useState(false);
  const tHead = ["#", "Nombre", "Creado", "Acciones"];
  const myTableData = { name: "name", createdAt: "createdAt" };
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category);
  const navigate = useNavigate();

  const searchCategoriesHandler = async (searchText) => {
    if (searchText.length >= 3) {
      dispatch(getCategories(`?search=${searchText}`));
    } else dispatch(getCategories());
  };

  const handleDelete = (id) => {
    const find = category.categories.find((el) => id === el.id);
    if (find) {
      AlertWarning(`¿Estas segura/o que deseas eliminar "${find.name}"?`).then((confirm) => {
        if (confirm) {
          setLoading(true);
          privateService
            .deleted(URLs.category, id)
            .then((res) => {
              if (res.success) {
                feedbackUser("center", "success", "Categoría Eliminada");
                dispatch(getCategories());
              } else feedbackUser("center", "error", requestMessagesSchema.problemExistTryLater);
            })
            .catch(() => feedbackUser("center", "error", requestMessagesSchema.problemExistTryLater))
            .finally(() => setLoading(false));
        }
      });
    }
  };

  const toEdit = (id) => {
    navigate(`edit/${id}`);
  };

  useEffect(() => {
    dispatch(getCategories());
    // eslint-disable-next-line
  }, []);

  return {
    category,
    searchCategoriesHandler,
    tHead,
    myTableData,
    toEdit,
    handleDelete,
    loading,
  };
};
