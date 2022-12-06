import { useState } from "react";
import { useEffect } from "react";
import privateService from "Services/privateApiService";
import { feedbackUser } from "utilities/alerts/feedbackUser.util";
import { requestMessagesSchema } from "utilities/requestMessagesSchema.util";
import { slidesAdapter } from "../adapter/slides.adapter";

export const useSlidesEditAction = ({ setInitialValues, idSlide, restURL }) => {
  const [orderSlide, setOrderSlide] = useState([]);

  const [initialEditValues, setInitialEditValues] = useState({});

  const [dataSliceToEdit, setDataSliceToEdit] = useState({});

  useEffect(() => {
    const fetchdataSlide = async () => {
      try {
        let url = restURL + "/" + idSlide;
        const getData = await privateService.get(url);
        if (getData && !getData.success) throw new Error(getData.message);

        const dataAdapter = slidesAdapter(getData.data);

        setDataSliceToEdit(dataAdapter);

        setInitialEditValues({
          name: getData.data.name,
          description: getData.data.description,
          order: getData.data.order,
          image: getData.data.image,
        });
      } catch (error) {
        console.error("error SlidesForm - fetchAllSlides", error.message);
        feedbackUser("top-end", "error", requestMessagesSchema.problemExistTryLater + " " + requestMessagesSchema.contactAdmin);
      }
    };

    if (idSlide) {
      fetchdataSlide();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idSlide, setInitialValues]);

  return {
    orderSlide,
    setOrderSlide,
    dataSliceToEdit,
    initialEditValues,
  };
};
