import { privateRoutes } from "models/routes";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSlides, slidesRequest, slidesResetNotification } from "redux/states/slides";
import privateService from "Services/privateApiService";
import { URLs } from "Services/ServicesURLS";
import { feedbackUser } from "utilities/alerts/feedbackUser.util";
import { handleUserConfirm } from "utilities/alerts/userConfirm.util";
import { encodeQueryParams } from "utilities/queryParams";
import { requestMessagesSchema } from "utilities/requestMessagesSchema.util";
import { privateSlidesSchema } from "../utilities/slidesSchema.util";

export const usePrivateSlides = () => {
  const navigate = useNavigate();

  const { loadSlides, slides, slidesToRender, error, successRequest } = useSelector((store) => store.slides);
  const dispatch = useDispatch();

  const handleEdit = (id) => {
    navigate("/" + privateRoutes.BACKOFFICE + privateRoutes.SLIDESEDIT + id);
  };

  const handleDelete = async (id, title) => {
    try {
      dispatch(slidesRequest());
      const confirmDelete = await handleUserConfirm(privateSlidesSchema.confirmDeleteSlides + title);

      if (!confirmDelete) return;

      const deletedSlice = await privateService.deleted(URLs.slides, id);
      if (!deletedSlice || !deletedSlice.success) throw new Error(deletedSlice.message);
      feedbackUser("top-end", "success", privateSlidesSchema.deleteSuccessfully);
    } catch (error) {
      console.error("error", error.message);
      feedbackUser("top-end", "error", requestMessagesSchema.problemExistTryLater + " " + requestMessagesSchema.contactAdmin);
    } finally {
      fetchSlides();
    }
  };

  async function fetchSlides(params = {}) {
    dispatch(slidesRequest());
    const queryParams = encodeQueryParams(params);
    const queryUrl = queryParams ? `${URLs.slides}?${queryParams}` : URLs.slides;

    dispatch(getSlides(queryUrl));
  }

  const searchSlidesHandler = (searchText) => {
    const fetchParams = {};

    if (searchText.length >= 3) {
      fetchParams["search"] = searchText;
    }

    fetchSlides(fetchParams);
  };

  useEffect(() => {
    if (error) {
      feedbackUser("top-end", "error", requestMessagesSchema.problemExistTryLater + " " + requestMessagesSchema.contactAdmin);
      dispatch(slidesResetNotification());
    } else if (successRequest) dispatch(slidesResetNotification());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slides, error, successRequest]);

  useEffect(() => {
    fetchSlides();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    loadSlides,
    slides,
    slidesToRender,
    handleEdit,
    handleDelete,
    searchSlidesHandler,
  };
};
