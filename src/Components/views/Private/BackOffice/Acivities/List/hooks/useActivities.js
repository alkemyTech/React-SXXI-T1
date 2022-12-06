import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { encodeQueryParams } from "utilities/queryParams";
import { errorMessages } from "../../utilities/errorMessages";
import { feedbackUser } from "utilities/alerts/feedbackUser.util";
import { handleUserConfirm as AlertWarning } from "utilities/alerts/userConfirm.util";
import { privateRoutes } from "models/routes";
import privateService from "Services/privateApiService";
import { successMessages } from "../../utilities/successMessages";
import { URLs } from "Services/ServicesURLS";
import { whatIs } from "utilities/parseDate";

export const useActivities = () => {
  const [activitiesData, setActivitiesData] = useState([]);
  const [activities, setActivities] = useState([]);
  const [loadingActivities, setLoadingActivities] = useState(true);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const editHandler = (id) => {
    navigate(`/${privateRoutes.BACKOFFICE}${privateRoutes.ACTIVITIESEDIT}/${id}`);
  };

  const deleteHandler = async (id) => {
    const find = activitiesData.find((el) => id === el.id);

    if (find) {
      const response = await AlertWarning("¿Estas segura/o que deseas eliminar la actividad?");

      if (response) {
        setLoading(true);
        const activityDeleted = await privateService.deleted(URLs.activity, id);

        if (activityDeleted) {
          await feedbackUser("center", "success", `${successMessages.deleteActivity}`);
          fetchActivities();
        } else {
          await feedbackUser("center", "error", `${errorMessages.deleteActivity}`);
        }
      }
      setLoading(false);
    }
  };

  const searchActivitiesHandler = async (searchText) => {
    const fetchParams = {};

    if (searchText.length >= 3) {
      fetchParams["search"] = searchText;
    }

    await fetchActivities(fetchParams);
  };

  const fetchActivities = async (params = {}) => {
    try {
      setLoadingActivities(true);
      const queryParams = encodeQueryParams(params);
      const queryUrl = `${URLs.activity}?${queryParams}`;
      const fetchingActivities = await privateService.get(queryUrl);

      if (fetchingActivities && !fetchingActivities.success) {
        throw new Error(fetchingActivities.message);
      }
      const dateParsing = whatIs("isArray", fetchingActivities.data, "splice", "created_at");
      setActivitiesData(dateParsing);
      setActivities(fetchingActivities.data);
    } catch (error) {
      feedbackUser("center", "error", `${errorMessages.getActivities}`);
    } finally {
      setLoadingActivities(false);
    }
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  return { activities, loadingActivities, activitiesData, loading, editHandler, deleteHandler, searchActivitiesHandler, fetchActivities };
};
