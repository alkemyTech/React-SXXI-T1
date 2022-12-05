import { useEffect, useState } from "react";

import { feedbackUser } from "utilities/alerts/feedbackUser.util";
import { URLs } from "Services/ServicesURLS";
import privateService from "Services/privateApiService";
import { encodeQueryParams } from "utilities/queryParams";
import { errorMessages } from "../../utilities/errorMessages";

export const useActivities = () => {
  const [activitiesData, setActivitiesData] = useState([]);
  const [loadingActivities, setLoadingActivities] = useState(true);

  const fetchActivities = async (params = {}) => {
    try {
      setLoadingActivities(true);
      const queryParams = encodeQueryParams(params);
      const queryUrl = `${URLs.activity}?${queryParams}`;
      const fetchingActivities = await privateService.get(queryUrl);

      if (fetchingActivities && !fetchingActivities.success) {
        throw new Error(fetchingActivities.message);
      }

      setActivitiesData(fetchingActivities.data);
    } catch (error) {
      feedbackUser("center", "error", `${errorMessages.getActivities}`);
    } finally {
      setLoadingActivities(false);
    }
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  return { loadingActivities, activitiesData, fetchActivities };
};
