import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom/dist";
import { useEffect, useState } from "react";

import { convertToBase64, activityValidationSchema } from "../../utilities/utilities";
import { convertUrlToBase64 } from "utilities/convertURLtoBase64.util";
import { errorMessages } from "../../utilities/errorMessages";
import { feedbackUser } from "utilities/alerts/feedbackUser.util";
import { handleUserConfirm as Alert } from "utilities/alerts/userConfirm.util";
import { privateRoutes } from "models/routes";
import privateService from "Services/privateApiService";
import { successMessages } from "../../utilities/successMessages";

export const useActivitiesForm = () => {
  const backURL = "/" + privateRoutes.BACKOFFICE + privateRoutes.ACTIVITIES;
  const { id } = useParams();
  const navigate = useNavigate();
  const [imageBase64, setImageBase64] = useState("");
  const [loading, setLoading] = useState(false);
  const [activity, setActivity] = useState({
    name: "",
    image: "",
    description: "",
  });
  const initialValues = {
    name: "",
    image: "",
    description: "",
  };

  useEffect(() => {
    if (id) {
      privateService
        .get(`/activities/${id}`)
        .then((res) => {
          const { data } = res;
          setActivity({
            name: data.name,
            image: data.image,
            description: data.description,
          });
        })
        .catch(() => {
          feedbackUser("center", "error", `${errorMessages.getActivity}`);
        });
    }
  }, [id]);

  const onSubmit = async () => {
    const { name, description } = values;
    const body = { name, description, image: imageBase64 };
    if (id) {
      const bodyEdit = {
        ...activity,
        ...body,
        image: imageBase64 || (await convertUrlToBase64(activity.image)),
      };
      const alertWarning = await Alert("¿Estas seguro/a?");

      if (alertWarning) {
        setLoading(true);
        const apiResponse = await privateService.put(`/activities`, id, bodyEdit);
        if (apiResponse.success) {
          setLoading(false);
          await feedbackUser("center", "success", `${successMessages.success}`);
          navigate(backURL);
        } else {
          await feedbackUser("center", "error", `${errorMessages.editActivity}`);
        }
      }
    } else {
      const alertWarning = await Alert("¿Estas seguro/a?");

      if (alertWarning) {
        setLoading(true);
        const apiResponse = await privateService.post(`/activities`, body);
        if (apiResponse.success) {
          setLoading(false);
          await feedbackUser("center", "success", `${successMessages.success}`);
          navigate(backURL);
        } else {
          await feedbackUser("center", "error", `${errorMessages.createActivity}`);
        }
      }
    }
  };

  function handleImage(e) {
    const image = e.target.files[0];
    if (image) {
      formik.setFieldValue("image", image);
      convertToBase64(image, setImageBase64);
    } else {
      formik.setFieldValue("image", "");
    }
  }

  const validationSchema = activityValidationSchema(id);

  const formik = useFormik({ initialValues, onSubmit, validationSchema });

  const { values, errors, handleBlur, handleSubmit, handleChange, touched, setFieldValue } = formik;

  useEffect(() => {
    if (Object.keys(activity).length > 0) {
      setFieldValue("name", activity.name);
      setFieldValue("description", activity.description);
      setFieldValue("image", activity.image);
    }
  }, [activity, setFieldValue]);

  const cancel = () => {
    navigate(backURL);
  };

  return {
    values,
    errors,
    handleBlur,
    handleSubmit,
    handleChange,
    touched,
    activity,
    loading,
    formik,
    handleImage,
    cancel,
    setImageBase64,
    setFieldValue,
  };
};
