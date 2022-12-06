import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom/dist";
import { useEffect, useState } from "react";

import { convertToBase64 } from "../utilities/utilities";
import apiServices from "Services/privateApiService";
import { URLs } from "Services/ServicesURLS";
import Alert from "../../components/Alert";
import { convertUrlToBase64 } from "utilities/convertURLtoBase64.util";
import { feedbackUser } from "utilities/alerts/feedbackUser.util";
import { errorMessages } from "../utilities/errorMessages";
import { EditMembersSchema } from "../../utilities/schemas";

export const useMembersForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [imageBase64, setImageBase64] = useState("");
  const [loading, setLoading] = useState(false);
  const [member, setMember] = useState({
    name: "",
    image: "",
    description: "",
    facebookUrl: "",
    linkedinUrl: "",
  });

  useEffect(() => {
    if (id) {
      apiServices
        .get(`${URLs.member}/${id}`)
        .then((res) => {
          const { data } = res;
          setMember({
            name: data.name,
            image: data.image,
            description: data.description,
            facebookUrl: data.facebook_url,
            linkedinUrl: data.linkedin_url,
          });
        })
        .catch(() => {
          feedbackUser("center", "error", `${errorMessages.getMember}`);
        });
    }
  }, [id]);

  const backURL = "/backoffice";

  const onSubmit = async () => {
    const { name, description, facebookUrl, linkedinUrl } = values;
    const body = { name, description, image: imageBase64, facebookUrl, linkedinUrl };

    if (id) {
      const bodyEdit = {
        ...member,
        ...body,
        image: imageBase64 || (await convertUrlToBase64(member.image)),
      };
      const alertWarning = await Alert({ icon: "warning", title: "¿Seguro/a?", cancelText: "Cancelar" });

      if (alertWarning.isConfirmed) {
        setLoading(true);
        const apiResponse = await apiServices.put(`${URLs.member}/${id}`, bodyEdit);
        if (apiResponse.success) {
          setLoading(false);
          await Alert({ icon: "success", title: "Operación éxitosa" });
          navigate(backURL);
        } else {
          await feedbackUser("center", "error", `${errorMessages.editMember}`);
        }
      }
    } else {
      const alertWarning = await Alert({ icon: "warning", title: "¿Segura/o?", cancelText: "Cancelar" });
      if (alertWarning.isConfirmed) {
        setLoading(true);
        const apiResponse = await apiServices.post(URLs.member, body);
        if (apiResponse.success) {
          setLoading(false);
          await Alert({ icon: "success", title: "Operación éxitosa" });
          navigate(backURL);
        } else {
          await feedbackUser("center", "error", `${errorMessages.createMember}`);
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

  const formik = useFormik({
    initialValues: {
      name: "",
      image: "",
      description: "",
      facebookUrl: "",
      linkedinUrl: "",
    },
    onSubmit,
    validationSchema: EditMembersSchema,
  });

  const { values, errors, handleBlur, handleSubmit, handleChange, touched, setFieldValue } = formik;

  useEffect(() => {
    if (Object.keys(member).length > 0) {
      setFieldValue("name", member.name);
      setFieldValue("image", member.image);
      setFieldValue("description", member.description);
      setFieldValue("facebookUrl", member.facebookUrl);
      setFieldValue("linkedinUrl", member.linkedinUrl);
    }
  }, [member, setFieldValue]);

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
    member,
    loading,
    formik,
    handleImage,
    cancel,
    setImageBase64,
    setFieldValue,
  };
};
