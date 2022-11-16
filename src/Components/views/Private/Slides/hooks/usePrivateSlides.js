import { privateRoutes } from "models/routes";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { feedbackUser } from "utilities/alerts/feedbackUser.util";
import { requestMessagesSchema } from "utilities/requestMessagesSchema.util";
import { personalSlides } from "utilities/slides/slides.util";
import { getSlides } from "../interceptor/getSlides.interceptor";

export const usePrivateSlides = () => {
  const [loadSlides, setLoadSlides] = useState(false);
  const [slides, setSlides] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllSlides = async () => {
      try {
        setLoadSlides(true);
        const getData = await getSlides({});

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

    fetchAllSlides();
  }, []);

  const handleEdit = (id) => {
    navigate("/" + privateRoutes.BACKOFFICE + privateRoutes.SLIDESEDIT + id);
  };

  const handleDelete = () => {
    console.log("delete");
  };

  return { loadSlides, slides, handleEdit, handleDelete };
};
