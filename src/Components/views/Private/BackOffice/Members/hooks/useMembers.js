import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { feedbackUser } from "utilities/alerts/feedbackUser.util";
import { URLs } from "Services/ServicesURLS";
import privateService from "Services/privateApiService";
import { encodeQueryParams } from "utilities/queryParams";
import { errorMessages } from "../utilities/errorMessages";
import { handleUserConfirm as AlertWarning } from "utilities/alerts/userConfirm.util";
import { privateRoutes } from "models/routes";

export const useMembers = () => {
  const [membersData, setMembersData] = useState([]);
  const [loadingMembers, setLoadingMembers] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchMembers = async (params = {}) => {
    try {
      setLoadingMembers(true);
      const queryParams = encodeQueryParams(params);
      const queryUrl = `${URLs.member}?${queryParams}`;
      const fetchingMembers = await privateService.get(queryUrl);

      if (fetchingMembers && !fetchingMembers.success) throw new Error(fetchingMembers.message);

      setMembersData(fetchingMembers.data);
    } catch (error) {
      feedbackUser("top-end", "error", errorMessages.getMembers);
    } finally {
      setLoadingMembers(false);
    }
  };

  const handleDelete = async (id) => {
    const memberFound = membersData.find((el) => id === el.id);

    if (memberFound) {
      const confirm = await AlertWarning(`¿Estas segura/o que deseas eliminar "${memberFound.name}"?`);

      if (confirm) {
        setLoading(true);
        const res = await privateService.deleted(URLs.member, id);
        if (res.success) {
          feedbackUser("center", "success", "Operación éxitosa");
          fetchMembers();
        } else feedbackUser("center", "error", errorMessages.deleteMember);
      }

      setLoading(false);
    }
  };

  const handleEdit = (id) => {
    navigate(`/${privateRoutes.BACKOFFICE}${privateRoutes.MEMBERSEDITFORM}${id}`);
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  return { loadingMembers, loadingDelete: loading, membersData, fetchMembers, handleDelete, handleEdit };
};
