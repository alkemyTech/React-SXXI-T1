import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { feedbackUser } from "utilities/alerts/feedbackUser.util";
import { privateRoutes } from "models/routes";
import { handleUserConfirm } from "utilities/alerts/userConfirm.util";
import { ascendOrderArray, getMaxOrder, personalSlides, PERSONAL_ORDER } from "utilities/slides/slides.util";
import { useSlidesEditAction } from "./useSlidesEditAction";
import { requestMessagesSchema } from "utilities/requestMessagesSchema.util";
import { getIndexSlide } from "../utilities/getIndexSlide.util";
import { convertUrlToBase64 } from "utilities/convertURLtoBase64.util";
import { slidesValidationSchema } from "../utilities/slidesValidationSchema.util";
import privateService from "Services/privateApiService";
import { URLs } from "Services/ServicesURLS";
import { slidesAdapter } from "../adapter/slides.adapter";

export const useSlidesForm = (idSlide) => {
  const initialValues = {
    name: "",
    description: "",
    order: 0,
    image: "",
  };

  let restURL = URLs.slides;

  const [loadSubmitSlides, setLoadSubmitSlides] = useState(false);
  const [loadOrderSlides, setLoadOrderSlides] = useState(true);

  const { orderSlide, setOrderSlide, initialEditValues, dataSliceToEdit } = useSlidesEditAction({
    idSlide,
    restURL,
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

  const isEdit = async () => {
    let dataEdit;
    if (slideToChangeSelected > 0) {
      const firstOrderSlice = orderSlide[getIndexSlide(orderSlide, idSlide)]["order"];
      const secondOrderSlice = orderSlide[getIndexSlide(orderSlide, slideToChangeSelected)]["order"];

      const arraySlidesToChange = [orderSlide[getIndexSlide(orderSlide, idSlide)], orderSlide[getIndexSlide(orderSlide, slideToChangeSelected)]];

      const definefirstImage = imageToSend || (await convertUrlToBase64(formik.values.image));

      const defineSecondImage = await convertUrlToBase64(arraySlidesToChange[1]["image"]);

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

      let sendSlides = await Promise.all([
        privateService.put(restURL, idSlide, firstDataSubmit),
        privateService.put(restURL, secondDataSubmit.id, secondDataSubmit),
      ]);

      const response = sendSlides.findIndex((result) => !result.success);

      if (response !== -1) {
        throw new Error(sendSlides[response]["message"]);
      } else {
        dataEdit = sendSlides[0];
      }
    } else {
      const dataSubmit = {
        ...dataSliceToEdit,
        ...formik.values,
        image: imageToSend || (await convertUrlToBase64(formik.values.image)),
      };

      dataEdit = await privateService.put(restURL, idSlide, dataSubmit);

      if (!dataEdit || !dataEdit.success) throw new Error(dataEdit.message);
    }

    return dataEdit;
  };

  async function onSubmit() {
    try {
      setLoadSubmitSlides(true);

      const isConfirm = await handleUserConfirm();

      if (!isConfirm) return;

      let sendData;

      if (idSlide) {
        sendData = await isEdit();
      } else {
        const dataSubmit = {
          ...formik.values,
          image: imageToSend,
        };

        sendData = await privateService.post(restURL, dataSubmit);

        if (!sendData || !sendData.success) throw new Error(sendData.message);
      }

      feedbackUser("top-end", "success", requestMessagesSchema.successfullyOperation);
      handleImageToSend("");

      navigate("/" + privateRoutes.BACKOFFICE + privateRoutes.SLIDES, { replace: "true" });
    } catch (error) {
      if (!error.message) feedbackUser("top-end", "error", error.message);

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

        const getData = await privateService.get(restURL);

        if (getData && !getData.success) throw new Error(getData.message);

        const dataAdapter = getData.data.map((slice) => slidesAdapter(slice));

        const filterSlides = personalSlides(dataAdapter);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
