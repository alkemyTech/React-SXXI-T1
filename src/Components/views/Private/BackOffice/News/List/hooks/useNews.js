import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { feedbackUser } from "utilities/alerts/feedbackUser.util";
import { filterNews } from "../../utilities/utilities";
import { handleUserConfirm as AlertWarning } from "utilities/alerts/userConfirm.util";
import { URLs } from "Services/ServicesURLS";
import privateService from "Services/privateApiService";
import { encodeQueryParams } from "utilities/queryParams";
import { errorMessages } from "../../utilities/errorMessages";
import { privateRoutes } from "models/routes";
import { successMessages } from "../../utilities/successMessages";

export const useNews = () => {
  const [newsData, setNewsData] = useState([]);
  const [news, setNews] = useState([]);
  const [loadingNews, setLoadingNews] = useState(true);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const editHandler = (id) => {
    navigate(`/${privateRoutes.BACKOFFICE}${privateRoutes.NEWSEDITFORM}${id}`);
  };

  const deleteHandler = async (id) => {
    const find = newsData.find((element) => id === element.id);

    if (find) {
      const response = await AlertWarning("¿Estas segura/o que deseas eliminar la novedad?");

      if (response) {
        setLoading(true);
        const activityDeleted = await privateService.deleted(URLs.news, id);

        if (activityDeleted) {
          await feedbackUser("center", "success", `${successMessages.deleteNews}`);
          fetchNews();
        } else {
          await feedbackUser("center", "error", `${errorMessages.deleteNews}`);
        }
      }
      setLoading(false);
    }
  };

  const searchNewsHandler = async (searchText, selectedCategory) => {
    const fetchParams = {};

    if (selectedCategory.length > 0) {
      fetchParams["category"] = selectedCategory;
    }

    if (searchText.length >= 3) {
      fetchParams["search"] = searchText;
    }

    await fetchNews(fetchParams);
  };

  const fetchNews = async (params = {}) => {
    try {
      setLoadingNews(true);
      const queryParams = encodeQueryParams(params);
      const queryUrl = `${URLs.news}?${queryParams}`;
      const fetchingNews = await privateService.get(queryUrl);

      if (fetchingNews && !fetchingNews.success) {
        throw new Error(fetchingNews.message);
      }

      const filterSlides = filterNews(fetchingNews.data);

      setNewsData(filterSlides);
    } catch (error) {
      feedbackUser("center", "error", `${errorMessages.getNews}`);
    } finally {
      setLoadingNews(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return { loadingNews, editHandler, deleteHandler, searchNewsHandler, newsData, fetchNews };
};
