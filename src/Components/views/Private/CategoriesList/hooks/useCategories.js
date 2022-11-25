import { useEffect, useState } from "react";

import { feedbackUser } from "utilities/alerts/feedbackUser.util";
import { requestMessagesSchema } from "utilities/requestMessagesSchema.util";
import { URLs } from "Services/ServicesURLS";
import privateService from "Services/privateApiService";
import { encodeQueryParams } from "utilities/queryParams";

export const useCategories = () => {
  const [categoriesData, setCategoriesData] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);

  const fetchCategories = async (params = {}) => {
    try {
      setLoadingCategories(true);
      const queryParams = encodeQueryParams(params);
      const queryUrl = `${URLs.category}?${queryParams}`;
      const fetchingCategories = await privateService.get(queryUrl);

      if (fetchingCategories && !fetchingCategories.success)
        throw new Error(fetchingCategories.message);

      setCategoriesData(fetchingCategories.data);
    } catch (error) {
      console.error("error Categories", error.message);
      feedbackUser(
        "top-end",
        "error",
        `${requestMessagesSchema.problemExistTryLater} ${requestMessagesSchema.contactAdmin}`
      );
    } finally {
      setLoadingCategories(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return { loadingCategories, categoriesData, fetchCategories };
};
