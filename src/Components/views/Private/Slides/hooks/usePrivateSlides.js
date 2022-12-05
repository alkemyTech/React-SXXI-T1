import { privateRoutes } from "models/routes";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import privateService from "Services/privateApiService";
import { URLs } from "Services/ServicesURLS";
import { feedbackUser } from "utilities/alerts/feedbackUser.util";
import { handleUserConfirm } from "utilities/alerts/userConfirm.util";
import { encodeQueryParams } from "utilities/queryParams";
import { requestMessagesSchema } from "utilities/requestMessagesSchema.util";
import { personalSlides } from "utilities/slides/slides.util";
import { privateSlidesSchema } from "../utilities/slidesSchema.util";

export const usePrivateSlides = () => {
  const [loadSlides, setLoadSlides] = useState(false);
  const [slides, setSlides] = useState([]);
  const [slidesToRender, setSlidesToRender] = useState([]);
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate("/" + privateRoutes.BACKOFFICE + privateRoutes.SLIDESEDIT + id);
  };

  const handleDelete = async (id, title) => {
    try {
      setLoadSlides(true);
      const confirmDelete = await handleUserConfirm(privateSlidesSchema.confirmDeleteSlides + title);

      if (!confirmDelete) return;

      const deletedSlice = await privateService.deleted(URLs.slides, id);

      if (!deletedSlice || !deletedSlice.success) throw new Error(deletedSlice.message);

      feedbackUser("top-end", "success", privateSlidesSchema.deleteSuccessfully);

      fetchSlides();
    } catch (error) {
      console.error("error", error.message);
      feedbackUser("top-end", "error", requestMessagesSchema.problemExistTryLater + " " + requestMessagesSchema.contactAdmin);
    } finally {
      setLoadSlides(false);
    }
  };

  async function fetchSlides(params = {}) {
    try {
      setLoadSlides(true);
      const queryParams = encodeQueryParams(params);

      const queryUrl = queryParams ? `${URLs.slides}?${queryParams}` : URLs.slides;

      const getData = await privateService.get(queryUrl);

      if (getData && !getData.success) throw new Error(getData.message);

      const adaptingSlides = personalSlides(getData.data);

      !slides.length && setSlides(adaptingSlides);
      setSlidesToRender(adaptingSlides);
    } catch (error) {
      console.error("error SlidesForm - fetchAllSlides", error.message);
      feedbackUser("top-end", "error", requestMessagesSchema.problemExistTryLater + " " + requestMessagesSchema.contactAdmin);
    } finally {
      setLoadSlides(false);
    }
  }

  const searchSlidesHandler = async (searchText) => {
    const fetchParams = {};

    if (searchText.length >= 3) {
      fetchParams["search"] = searchText;
    }

    await fetchSlides(fetchParams);
  };

  useEffect(() => {
    fetchSlides();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { loadSlides, slides, slidesToRender, handleEdit, handleDelete, searchSlidesHandler };
};
