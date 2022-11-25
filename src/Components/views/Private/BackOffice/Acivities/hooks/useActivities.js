import { useEffect, useState } from "react";

import { feedbackUser } from "utilities/alerts/feedbackUser.util";
import { requestMessagesSchema } from "utilities/requestMessagesSchema.util";
import { URLs } from "Services/ServicesURLS";
import privateService from "Services/privateApiService";
import { encodeQueryParams } from "utilities/queryParams";

export const useActivities = () => {
  const [activitiesData, setActivitiesData] = useState([]);
  const [loadingActivities, setLoadingActivities] = useState(true);

  const fetchActivities = async (params = {}) => {
    try {
      setLoadingActivities(true);
      const queryParams = encodeQueryParams(params);
      const queryUrl = `${URLs.activity}?${queryParams}`;
      const fetchingActivities = await privateService.get(queryUrl);

      if (fetchingActivities && !fetchingActivities.success)
        throw new Error(fetchingActivities.message);

      setActivitiesData(fetchingActivities.data);
    } catch (error) {
      console.error("error Activities", error.message);
      feedbackUser(
        "top-end",
        "error",
        `${requestMessagesSchema.problemExistTryLater} ${requestMessagesSchema.contactAdmin}`
      );
    } finally {
      setLoadingActivities(false);
    }
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  return { loadingActivities, activitiesData, fetchActivities };
};
