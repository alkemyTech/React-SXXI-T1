import { useEffect, useState } from "react";

import { feedbackUser } from "utilities/alerts/feedbackUser.util";
import { requestMessagesSchema } from "utilities/requestMessagesSchema.util";
import { filterNews } from "../utilities/utilities";
import { URLs } from "Services/ServicesURLS";
import privateService from "Services/privateApiService";
import { encodeQueryParams } from "utilities/queryParams";

export const useNews = () => {
  const [newsData, setNewsData] = useState([]);
  const [loadingNews, setLoadingNews] = useState(true);

  const fetchNews = async (params = {}) => {
    try {
      setLoadingNews(true);
      const queryParams = encodeQueryParams(params);
      const queryUrl = `${URLs.news}?${queryParams}`;
      const fetchingNews = await privateService.get(queryUrl);

      if (fetchingNews && !fetchingNews.success)
        throw new Error(fetchingNews.message);

      const filterSlides = filterNews(fetchingNews.data);

      setNewsData(filterSlides);
    } catch (error) {
      console.error("error News", error.message);
      feedbackUser(
        "top-end",
        "error",
        `${requestMessagesSchema.problemExistTryLater} ${requestMessagesSchema.contactAdmin}`
      );
    } finally {
      setLoadingNews(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return { loadingNews, newsData, fetchNews };
};
