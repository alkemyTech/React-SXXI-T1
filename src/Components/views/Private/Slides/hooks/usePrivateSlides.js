import { privateRoutes } from "models/routes";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import privateService from "Services/privateApiService";
import { URLs } from "Services/ServicesURLS";
import { feedbackUser } from "utilities/alerts/feedbackUser.util";
import { encodeQueryParams } from "utilities/queryParams";
import { requestMessagesSchema } from "utilities/requestMessagesSchema.util";
import { personalSlides } from "utilities/slides/slides.util";

export const usePrivateSlides = () => {
  const [loadSlides, setLoadSlides] = useState(false);
  const [slides, setSlides] = useState([]);
  const navigate = useNavigate();

  const fetchSlides = async (params = {}) => {
    try {
      setLoadSlides(true);
      const queryParams = encodeQueryParams(params);
      const queryUrl = `${URLs.slides}?${queryParams}`;
      const getData = await privateService.get(queryUrl);

      if (getData && !getData.success) throw new Error(getData.message);

      setSlides(personalSlides(getData.data));
    } catch (error) {
      console.error("error SlidesForm - fetchAllSlides", error.message);
      feedbackUser(
        "top-end",
        "error",
        requestMessagesSchema.problemExistTryLater +
          " " +
          requestMessagesSchema.contactAdmin
      );
    } finally {
      setLoadSlides(false);
    }
  };

  useEffect(() => {
    fetchSlides();
  }, []);

  const handleEdit = (id) => {
    navigate("/" + privateRoutes.BACKOFFICE + privateRoutes.SLIDESEDIT + id);
  };

  const handleDelete = () => {
    console.log("delete");
  };

  return { loadSlides, slides, handleEdit, handleDelete, fetchSlides };
};
