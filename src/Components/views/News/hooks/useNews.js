import { useEffect, useState } from "react";
import { feedbackUser } from "utilities/alerts/feedbackUser.util";
import { requestMessagesSchema } from "utilities/requestMessagesSchema.util";
import { getNews } from "../interceptor/getNews.interceptor";
import { filterNews } from "../utilities/filterNews.util";

export const useNews = () => {
  const [newsData, setNewsData] = useState([]);
  const [loadingNews, setLoadingNews] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const fetchingNews = await getNews();

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

    fetchNews();
  }, []);

  return { loadingNews, newsData };
};
