import { useEffect, useState } from "react";
import { feedbackUser } from "utilities/alerts/feedbackUser.util";
import { requestMessagesSchema } from "utilities/requestMessagesSchema.util";
import { URLs } from "Services/ServicesURLS";
import privateService from "Services/privateApiService";
import { encodeQueryParams } from "utilities/queryParams";
import { handleUserConfirm as AlertWarning } from "utilities/alerts/userConfirm.util";
import { useNavigate } from "react-router-dom";
import { whatIs } from "utilities/parseDate";

export const useCategories = () => {
  const [categoriesData, setCategoriesData] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loading, setLoading] = useState(false);
  const tHead = ["#", "Nombre", "Creado", "Acciones"];
  const myTableData = { name: "name", createdAt: "createdAt" };
  const navigate = useNavigate();

  const fetchCategories = async (params = {}) => {
    try {
      setLoadingCategories(true);
      const queryParams = encodeQueryParams(params);
      const queryUrl = `${URLs.category}?${queryParams}`;
      const fetchingCategories = await privateService.get(queryUrl);

      if (fetchingCategories && !fetchingCategories.success) throw new Error(fetchingCategories.message);
      const info = fetchingCategories.data.map((el) => {
        const date = whatIs("isString", el.created_at, "splice", "created_at");
        return {
          id: el.id,
          name: el.name,
          createdAt: date,
        };
      });
      setCategoriesData(info);
    } catch (error) {
      console.error("error Categories", error.message);
      feedbackUser("top-end", "error", `${requestMessagesSchema.problemExistTryLater} ${requestMessagesSchema.contactAdmin}`);
    } finally {
      setLoadingCategories(false);
    }
  };

  const searchCategoriesHandler = async (searchText) => {
    const fetchParams = {};

    if (searchText.length >= 3) {
      fetchParams["search"] = searchText;
    }

    await fetchCategories(fetchParams);
  };

  const handleDelete = async (id) => {
    const find = categoriesData.find((el) => id === el.id);
    if (find) {
      const confirm = await AlertWarning(`¿Estas segura/o que deseas eliminar "${find.name}"?`);
      if (confirm) {
        setLoading(true);
        const res = await privateService.deleted(URLs.category, id);
        if (res.success) {
          await feedbackUser("center", "success", "Operación éxitosa");
          fetchCategories();
        } else feedbackUser("center", "error", "Ha ocurrido un error");
      }
      setLoading(false);
    }
  };

  const toEdit = (id) => {
    navigate(`edit/${id}`);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return { loadingCategories, categoriesData, fetchCategories, searchCategoriesHandler, tHead, myTableData, toEdit, handleDelete, loading };
};
