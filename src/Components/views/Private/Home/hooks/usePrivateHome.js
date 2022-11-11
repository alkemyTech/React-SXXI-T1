import { useFormik } from "formik";
import { useEffect, useReducer } from "react";
import { handleUserConfirm } from "utilities/alerts/userConfirm.util";
import {
  homeInitialState,
  homeReducer,
  TYPES,
} from "../home-reducer/homeReducer";
import { homeValidationSchema } from "../utilities/homeValidationSchema.util";

const MOCKDATA = {
  welcomeText: "Texto de bienvenida MOCKEADO",
  image: {
    first: "http://ongapi.alkemy.org/storage/omJKqKsIP1.jpeg",
    second: "http://ongapi.alkemy.org/storage/4xnSJYLQJY.png",
    third: "http://ongapi.alkemy.org/storage/KLY1cL8ZdG.png",
  },
};

export const usePrivateHome = () => {
  const [homeState, homeDispatch] = useReducer(homeReducer, homeInitialState);

  const handleFirstImageToSend = (value) =>
    homeDispatch({
      type: TYPES.IMAGE_TO_SEND,
      payload: { whatIs: "firstImageToSend", value },
    });
  const handleSecondImageToSend = (value) =>
    homeDispatch({
      type: TYPES.IMAGE_TO_SEND,
      payload: { whatIs: "secondImageToSend", value },
    });
  const handleThirdImageToSend = (value) =>
    homeDispatch({
      type: TYPES.IMAGE_TO_SEND,
      payload: { whatIs: "thirdImageToSend", value },
    });

  const initialValues = {
    welcomeText: "",
    firstImage: "",
    firstText: "",
    secondImage: "",
    secondText: "",
    thirdImage: "",
    thirdText: "",
  };

  const onSubmit = async () => {
    const isConfirm = await handleUserConfirm();

    if (!isConfirm) return;

    console.log("onSubmit", formik.values);
    console.log("image to send and image to edit", {
      homeState,
    });
  };

  const validationSchema = homeValidationSchema();

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  const { handleSubmit, setFieldValue } = formik;

  useEffect(() => {
    // call api to get data to edit when endpoint exists...
    homeDispatch({
      type: TYPES.IMAGE_TO_EDIT,
      payload: { whatIs: "firstImageToEdit", image: MOCKDATA.image.first },
    });
    homeDispatch({
      type: TYPES.IMAGE_TO_EDIT,
      payload: { whatIs: "secondImageToEdit", image: MOCKDATA.image.second },
    });
    homeDispatch({
      type: TYPES.IMAGE_TO_EDIT,
      payload: { whatIs: "thirdImageToEdit", image: MOCKDATA.image.third },
    });
    setFieldValue("welcomeText", MOCKDATA.welcomeText);
  }, [setFieldValue]);

  return {
    handleSubmit,
    formik,
    handleFirstImageToSend,
    homeState,
    handleSecondImageToSend,
    handleThirdImageToSend,
  };
};
