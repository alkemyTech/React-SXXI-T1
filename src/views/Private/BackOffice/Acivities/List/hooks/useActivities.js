import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { errorMessages } from "../../utilities/errorMessages";
import { feedbackUser } from "utilities/alerts/feedbackUser.util";
import { handleUserConfirm as AlertWarning } from "utilities/alerts/userConfirm.util";
import { privateRoutes } from "models/routes";
import privateService from "Services/privateApiService";
import { successMessages } from "../../utilities/successMessages";
import { URLs } from "Services/ServicesURLS";
import { getActivities } from "redux/states/activitiesSlice";

export const useActivities = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const activityData = useSelector((state) => state.activity);

  const navigate = useNavigate();

  const editHandler = (id) => {
    navigate(`/${privateRoutes.BACKOFFICE}${privateRoutes.ACTIVITIESEDIT}/${id}`);
  };

  const deleteHandler = async (id) => {
    const find = activityData.activities.find((el) => id === el.id);

    if (find) {
      const response = await AlertWarning("¿Estas segura/o que deseas eliminar la actividad?");

      if (response) {
        setLoading(true);
        const activityDeleted = await privateService.deleted(URLs.activity, id);

        if (activityDeleted) {
          await feedbackUser("center", "success", `${successMessages.deleteActivity}`);
          dispatch(getActivities());
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

    dispatch(getActivities(fetchParams));
  };

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  return { activity: activityData, loadingDelete: loading, editHandler, deleteHandler, searchActivitiesHandler };
};
