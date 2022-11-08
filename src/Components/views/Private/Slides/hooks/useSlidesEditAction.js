import { useState } from "react";
import { useEffect } from "react";
import { feedbackUser } from "utilities/alerts/feedbackUser.util";
import { requestMessagesSchema } from "utilities/requestMessagesSchema.util";
import { getSlides } from "../interceptor/getSlides.interceptor";

export const useSlidesEditAction = ({ setInitialValues, idSlide }) => {
  const [orderSlide, setOrderSlide] = useState([]);

  const [initialEditValues, setInitialEditValues] = useState({});

  const [dataSliceToEdit, setDataSliceToEdit] = useState({});

  useEffect(() => {
    const fetchdataSlide = async () => {
      try {
        const getData = await getSlides({ id: idSlide });
        if (getData && !getData.success) throw new Error(getData.message);

        setDataSliceToEdit(getData.data);

        setInitialEditValues({
          name: getData.data.name,
          description: getData.data.description,
          order: getData.data.order,
          image: getData.data.image,
        });
      } catch (error) {
        console.error("error SlidesForm - fetchAllSlides", error.message);
        feedbackUser(
          "top-end",
          "success",
          requestMessagesSchema.problemExistTryLater +
            " " +
            requestMessagesSchema.contactAdmin
        );
      }
    };

    if (idSlide) {
      fetchdataSlide();
    }
  }, [idSlide, setInitialValues]);

  return {
    orderSlide,
    setOrderSlide,
    dataSliceToEdit,
    initialEditValues,
  };
};
