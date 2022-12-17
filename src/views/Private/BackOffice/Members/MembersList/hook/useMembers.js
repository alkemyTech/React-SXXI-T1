import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { feedbackUser } from "utilities/alerts/feedbackUser.util";
import { URLs } from "Services/ServicesURLS";
import privateService from "Services/privateApiService";
import { errorMessages } from "../../utilities/errorMessages";
import { handleUserConfirm as AlertWarning } from "utilities/alerts/userConfirm.util";
import { privateRoutes } from "models/routes";
import { useDispatch, useSelector } from "react-redux";
import { getMembers } from "redux/states/membersSlice";

export const useMembers = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const member = useSelector((state) => state.member);

  const handleDelete = async (id) => {
    const memberFound = member.members.find((el) => id === el.id);

    if (memberFound) {
      const confirm = await AlertWarning(`¿Estas segura/o que deseas eliminar "${memberFound.name}"?`);

      if (confirm) {
        setLoading(true);
        const res = await privateService.deleted(URLs.member, id);
        if (res.success) {
          feedbackUser("center", "success", "Operación éxitosa");
          dispatch(getMembers());
        } else feedbackUser("center", "error", errorMessages.deleteMember);
      }

      setLoading(false);
    }
  };

  const handleEdit = (id) => {
    navigate(`/${privateRoutes.BACKOFFICE}${privateRoutes.MEMBERSEDITFORM}${id}`);
  };

  useEffect(() => {
    dispatch(getMembers());
    // eslint-disable-next-line
  }, []);

  const searchMembersHandler = async (searchText) => {
    if (searchText.length >= 2) {
      dispatch(getMembers(`?search=${searchText}`));
    } else dispatch(getMembers());
  };

  return { member, loadingDelete: loading, handleDelete, handleEdit, searchMembersHandler };
};
