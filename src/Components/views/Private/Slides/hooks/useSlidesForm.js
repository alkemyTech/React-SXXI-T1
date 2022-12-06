import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postSlides } from "../interceptor/postSlides.interceptor ";
import { useFormik } from "formik";
import { feedbackUser } from "utilities/alerts/feedbackUser.util";
import { privateRoutes } from "models/routes";
import { handleUserConfirm } from "utilities/alerts/userConfirm.util";
import { getSlides } from "../interceptor/getSlides.interceptor";
import { ascendOrderArray, getMaxOrder, personalSlides, PERSONAL_ORDER } from "utilities/slides/slides.util";
import { useSlidesEditAction } from "./useSlidesEditAction";
import { requestMessagesSchema } from "utilities/requestMessagesSchema.util";
import { putSlides } from "../interceptor/putSlides.interceptor";
import { getIndexSlide } from "../utilities/getIndexSlide.util";
import { convertUrlToBase64 } from "utilities/convertURLtoBase64.util";
import { slidesValidationSchema } from "../utilities/slidesValidationSchema.util";

export const useSlidesForm = (idSlide) => {
  const initialValues = {
    name: "",
    description: "",
    order: 0,
    image: "",
  };

  const [loadSubmitSlides, setLoadSubmitSlides] = useState(false);
  const [loadOrderSlides, setLoadOrderSlides] = useState(true);

  const { orderSlide, setOrderSlide, initialEditValues, dataSliceToEdit } = useSlidesEditAction({
    idSlide,
  });

  const [slideToChangeSelected, setSlideToChangeSelected] = useState(0);

  const [maxSlideOrder, setMaxSlideOrder] = useState(PERSONAL_ORDER);
  const orderFieldDisabled = true;

  const [imageToSend, setImageToSend] = useState("");
  const navigate = useNavigate();

  const [showSlideModal, setShowSlideModal] = useState(false);

  const validationSchema = slidesValidationSchema(orderFieldDisabled, maxSlideOrder, idSlide);
  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  const { setFieldValue } = formik;

  const handleSlideModal = () => setShowSlideModal((prevValue) => !prevValue);

  const handleImageToSend = (value) => setImageToSend(value);

  async function onSubmit() {
    try {
      setLoadSubmitSlides(true);

      const isConfirm = await handleUserConfirm();

      if (!isConfirm) return;

      let sendData;
      if (idSlide) {
        if (slideToChangeSelected > 0) {
          const firstOrderSlice = orderSlide[getIndexSlide(orderSlide, idSlide)]["order"];
          const secondOrderSlice = orderSlide[getIndexSlide(orderSlide, slideToChangeSelected)]["order"];

          const arraySlidesToChange = [orderSlide[getIndexSlide(orderSlide, idSlide)], orderSlide[getIndexSlide(orderSlide, slideToChangeSelected)]];

          const definefirstImage = imageToSend || (await convertUrlToBase64(formik.values.image));

          const defineSecondImage = await convertUrlToBase64(formik.values.image);
          if (definefirstImage && defineSecondImage && (!definefirstImage || !defineSecondImage))
            throw new Error(requestMessagesSchema.problemExistTryLater);

          const firstDataSubmit = {
            ...dataSliceToEdit,
            ...formik.values,
            image: definefirstImage,
            order: secondOrderSlice,
          };

          const secondDataSubmit = {
            ...arraySlidesToChange[1],
            image: defineSecondImage,
            order: firstOrderSlice,
          };

          let sendSlides = await Promise.all([putSlides(firstDataSubmit, idSlide), putSlides(secondDataSubmit, secondDataSubmit.id)]);

          const response = sendSlides.findIndex((result) => !result.success);

          if (response !== -1) {
            throw new Error(sendSlides[response]["message"]);
          } else {
            sendData = sendSlides[0];
          }
        } else {
          const dataSubmit = {
            ...dataSliceToEdit,
            ...formik.values,
            image: imageToSend || (await convertUrlToBase64(formik.values.image)),
          };

          sendData = await putSlides(dataSubmit, idSlide);

          if (!sendData || !sendData.success) throw new Error(sendData.message);
        }
      } else {
        const dataSubmit = {
          ...formik.values,
          image: imageToSend,
        };

        sendData = await postSlides(dataSubmit);

        if (!sendData || !sendData.success) throw new Error(sendData.message);
      }

      feedbackUser("top-end", "success", sendData.message);
      handleImageToSend("");

      navigate("/" + privateRoutes.BACKOFFICE + privateRoutes.SLIDES, { replace: "true" });
    } catch (error) {
      console.error("error useSlidesForm onSubmit", error.message);
      feedbackUser("top-end", "error", error.message);
    } finally {
      setLoadSubmitSlides(false);
    }
  }

  useEffect(() => {
    if (Object.keys(initialEditValues).length > 0) {
      setFieldValue("name", initialEditValues.name);
      setFieldValue("description", initialEditValues.description);
      setFieldValue("order", initialEditValues.order);
      setFieldValue("image", initialEditValues.image);
    }
  }, [initialEditValues, setFieldValue]);

  useEffect(() => {
    const fetchAllSlides = async () => {
      try {
        setLoadOrderSlides(true);
        const getData = await getSlides({});

        if (getData && !getData.success) throw new Error(getData.message);

        const filterSlides = personalSlides(getData.data);
        if (idSlide) {
          setOrderSlide(ascendOrderArray(filterSlides));
        } else {
          const max = getMaxOrder(filterSlides);

          setMaxSlideOrder(max);

          setFieldValue("order", max);
        }
      } catch (error) {
        console.error("error SlidesForm - fetchAllSlides", error.message);
        feedbackUser("top-end", "error", requestMessagesSchema.problemExistTryLater + " " + requestMessagesSchema.contactAdmin);
      } finally {
        setLoadOrderSlides(false);
      }
    };

    fetchAllSlides();
  }, [idSlide, setFieldValue, setMaxSlideOrder, setOrderSlide]);

  return {
    formik,
    orderFieldDisabled,
    loadSubmitSlides,
    handleImageToSend,
    loadOrderSlides,
    orderSlide,
    dataSliceToEdit,
    showSlideModal,
    handleSlideModal,
    setSlideToChangeSelected,
    slideToChangeSelected,
  };
};
