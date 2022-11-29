import { useEffect, useState } from "react";

import { feedbackUser } from "utilities/alerts/feedbackUser.util";
import { requestMessagesSchema } from "utilities/requestMessagesSchema.util";
import { URLs } from "Services/ServicesURLS";
import privateService from "Services/privateApiService";

export const useCategories = () => {
  const [categoriesData, setCategoriesData] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoadingCategories(true);
        const queryUrl = URLs.category;
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

    fetchCategories();
  }, []);

  return { loadingCategories, categoriesData };
};
