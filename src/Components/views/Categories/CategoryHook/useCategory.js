import privateService from "Services/privateApiService";
import { URLs } from "Services/ServicesURLS";
import { handleUserConfirm as AlertWarning } from "utilities/alerts/userConfirm.util";
import { feedbackUser as Alert } from "utilities/alerts/feedbackUser.util";
import { validationSchema } from "../utilities/utilities";
import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { convertUrlToBase64 } from "utilities/convertURLtoBase64.util";

export const useCategory = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const schema = { name: "image" };
  const buttonText = id ? "Editar" : "Confirmar";
  const [category, setCategory] = useState({
    name: "",
    image: "",
    description: "",
  });
  const [imageB64, setImageB64] = useState("");
  const initialValues = {
    name: "",
    image: "",
    description: "",
  };

  const createCategory = (body) => {
    AlertWarning("¿Estas Segura/o que deseas crear la categoría?").then((confirm) => {
      if (confirm) {
        privateService
          .post(URLs.category, body)
          .then((res) => {
            if (res.success) {
              Alert("center", "success", "Categoría Creada").then(() => {
                setFieldValue("name", "");
                setFieldValue("image", "");
                setFieldValue("description", "");
                setImageB64("");
                navigate("/backoffice/categories");
              });
            } else Alert("center", "error", "Ha ocurrido un error");
          })
          .catch(() => Alert("center", "error", "Ha ocurrido un error"))
          .finally(() => setLoading(false));
      } else setLoading(false);
    });
  };

  const editCategory = (id, body) => {
    AlertWarning("¿Estas Segura/o que deseas editar la categoría?").then((confirm) => {
      if (confirm) {
        privateService
          .put(URLs.category, id, body)
          .then((res) => {
            if (res.success) {
              Alert("center", "success", "Categoría Actualizada").then(() => {
                setFieldValue("name", "");
                setFieldValue("image", "");
                setFieldValue("description", "");
                setImageB64("");
                navigate("/backoffice/categories");
              });
            } else Alert("center", "error", "Ha ocurrido un error");
          })
          .catch(() => Alert("center", "error", "Ha ocurrido un error"))
          .finally(() => setLoading(false));
      } else setLoading(false);
    });
  };

  const onSubmit = async () => {
    const { name, description } = values;
    const body = { name, description, image: imageB64 ? imageB64 : await convertUrlToBase64(category.image) };
    setLoading(true);
    if (id) {
      editCategory(id, body);
    } else {
      createCategory(body);
    }
  };
  const formik = useFormik({ initialValues, onSubmit, validationSchema });
  const { handleChange, handleSubmit, values, errors, handleBlur, touched, setFieldValue } = formik;

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    handleBlur,
    touched,
    setFieldValue,
    imageB64,
    setImageB64,
    id,
    category,
    setCategory,
    schema,
    loading,
    formik,
    buttonText,
  };
};
