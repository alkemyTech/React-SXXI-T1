import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom/dist";
import { useEffect, useState } from "react";
import { testimonialsValidationSchema } from "../utilities/utilities";
import { api } from "Services/axiosService";
import { convertUrlToBase64 } from "utilities/convertURLtoBase64.util";
import Alert from "../../components/Alert";
import { feedbackUser } from "utilities/alerts/feedbackUser.util";
import { errorMessages } from "../utilities/errorMessages";

export const useTestimonialsForms = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [imageBase64, setImageBase64] = useState("");
  const [loading, setLoading] = useState(false);
  const [testimonial, setTestimonial] = useState({
    name: "",
    description: "",
    image: "",
  });
  const initialValues = {
    name: "",
    description: "",
    image: "",
  };

  useEffect(() => {
    if (id) {
      api
        .get(`/testimonials/${id}`)
        .then((res) => {
          const { data } = res.data;
          setTestimonial({
            name: data.name,
            description: data.description,
            image: data.image,
          });
        })
        .catch(() => {
          feedbackUser("center", "error", `${errorMessages.getTestimonial}`);
        });
    }
  }, [id]);

  const backURL = "/backoffice";

  const onSubmit = async () => {
    const { name, description } = values;
    const body = { name, description, image: imageBase64 };
    if (id) {
      const bodyEdit = {
        ...testimonial,
        ...body,
        image: imageBase64 || (await convertUrlToBase64(testimonial.image)),
      };
      const alertWarning = await Alert({ icon: "warning", title: "¿Estas segura/o de enviarlo?", cancelText: "Cancelar" });

      if (alertWarning.isConfirmed) {
        setLoading(true);
        const apiResponse = await api.put(`/testimonials/${id}`, bodyEdit);
        if (apiResponse.data.success) {
          setLoading(false);
          await Alert({ icon: "success", title: "Operación éxitosa" });
          navigate(backURL);
        } else {
          feedbackUser("center", "error", `${errorMessages.editTestimonial}`);
        }
      }
    } else {
      const alertWarning = await Alert({ icon: "warning", title: "¿Estas segura/o de enviarlo?", cancelText: "Cancelar" });

      if (alertWarning.isConfirmed) {
        setLoading(true);
        const apiResponse = await api.post(`/testimonials`, body);
        if (apiResponse.data.success) {
          setLoading(false);
          await Alert({ icon: "success", title: "Operación éxitosa" });
          navigate(backURL);
        } else {
          feedbackUser("center", "error", `${errorMessages.createTestimonial}`);
        }
      }
    }
  };

  const validationSchema = testimonialsValidationSchema(id);

  const formik = useFormik({ initialValues, onSubmit, validationSchema });

  const { values, errors, handleBlur, handleSubmit, handleChange, touched, setFieldValue } = formik;

  useEffect(() => {
    if (Object.keys(testimonial).length > 0) {
      setFieldValue("name", testimonial.name);
      setFieldValue("image", testimonial.image);
      setFieldValue("description", testimonial.description);
    }
  }, [testimonial, setFieldValue]);

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
    testimonial,
    loading,
    formik,
    cancel,
    setImageBase64,
    setFieldValue,
  };
};
