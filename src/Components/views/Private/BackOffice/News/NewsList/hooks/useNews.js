import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { feedbackUser } from "utilities/alerts/feedbackUser.util";
import { URLs } from "Services/ServicesURLS";
import privateService from "Services/privateApiService";
import { errorMessages } from "./../../utilities/errorMessages";
import { successMessages } from "./../../utilities/successMessages"
import { handleUserConfirm as AlertWarning } from "utilities/alerts/userConfirm.util";
import { privateRoutes } from "models/routes";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "redux/states/newsSlice";
import { filterNews } from "../../utilities/utilities";
import { encodeQueryParams } from "utilities/queryParams";


export const useNews = () => {
  const [newsData, setNewsData] = useState([]);
  const [loadingNews, setLoadingNews] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news);

  const deleteHandler = async (id) => {
    const newsFound = news.news.find((item) => id === item.id);

    if(newsFound) {
      const confirm = await AlertWarning(`¿Estas segura/o que deseas eliminar "${newsFound.name}"?`);

      if(confirm) {
        setLoadingNews(true);
        const res = await privateService.deleted(URLs.news, id);
        if (res.success) {
          feedbackUser("center", "success", successMessages.deleteNews);
          dispatch(getNews());
        } else feedbackUser("center", "error", errorMessages.deleteNews);
      }

      setLoadingNews(false);
    }
  };

  const editHandler = (id) => {
    navigate(`/${privateRoutes.BACKOFFICE}${privateRoutes.NEWSEDITFORM}${id}`);
  };

  useEffect(() => {
    // dispatch(getNews());
    // eslint-disable-next-line
    fetchNews();
  }, []);

  //TODO modificar
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

  

  return { loadingNews,  loadingDelete: loadingNews,newsData, fetchNews, deleteHandler,  editHandler };
};
