import { useFormik } from "formik";
import { useNavigate } from "react-router-dom/dist";
import { useEffect, useState } from "react";

import apiServices from "Services/privateApiService";
import { URLs } from "Services/ServicesURLS";
import Alert from "../../components/Alert";
import { feedbackUser } from "utilities/alerts/feedbackUser.util";
import { errorMessages } from "../utilities/errorMessages";
import { EditOrganizationSchema } from "../../utilities/schemas";

export const useOrganizationForm = () => {
  const navigate = useNavigate();
  const [imageBase64, setImageBase64] = useState("");
  const [loading, setLoading] = useState(false);
  const [organization, setOrganization] = useState({
    name: "",
    logo: "",
    shortDescription: "",
    longDescription: "",
    facebookUrl: "",
    linkedinUrl: "",
    instagramUrl: "",
    twitterUrl: "",
  });

  useEffect(() => {
    apiServices
      .get(URLs.organization)
      .then((res) => {
        const { data } = res;
        setOrganization({
          name: data.name,
          logo: data.logo,
          shortDescription: data.short_description,
          longDescription: data.long_description,
          facebookUrl: data.facebook_url,
          linkedinUrl: data.linkedin_url,
          instagramUrl: data.instagram_url,
          twitterUrl: data.twitter_url,
        });
      })
      .catch((e) => {
        feedbackUser("center", "error", `${errorMessages.getOrganization}`);
      });
  }, []);

  const backURL = "/backoffice";

  const onSubmit = async () => {
    const { name, shortDescription, longDescription, facebookUrl, instagramUrl, linkedinUrl, twitterUrl } = values;
    const body = { name, logo: imageBase64, shortDescription, longDescription, facebookUrl, instagramUrl, linkedinUrl, twitterUrl };

    const alertWarning = await Alert({ icon: "warning", title: "¿Segura/o?", cancelText: "Cancelar" });
    if (alertWarning.isConfirmed) {
      setLoading(true);
      const apiResponse = await apiServices.post(`/${URLs.organization}`, body);

      if (apiResponse.success) {
        setLoading(false);
        await Alert({ icon: "success", title: "Operación éxitosa" });
        navigate(backURL);
      } else {
        await feedbackUser("center", "error", `${errorMessages.editOrganization}`);
      }

      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      logo: "",
      shortDescription: "",
      longDescription: "",
      facebookUrl: "",
      linkedinUrl: "",
      instagramUrl: "",
      twitterUrl: "",
    },
    validationSchema: EditOrganizationSchema,
    onSubmit,
  });

  const { values, errors, handleBlur, handleSubmit, handleChange, touched, setFieldValue } = formik;

  useEffect(() => {
    if (Object.keys(organization).length > 0) {
      setFieldValue("name", organization.name);
      setFieldValue("logo", organization.logo);
      setFieldValue("shortDescription", organization.shortDescription);
      setFieldValue("longDescription", organization.longDescription);
      setFieldValue("facebookUrl", organization.facebookUrl);
      setFieldValue("linkedinUrl", organization.linkedinUrl);
      setFieldValue("instagramUrl", organization.instagramUrl);
      setFieldValue("twitterUrl", organization.twitterUrl);
    }
  }, [organization, setFieldValue]);

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
    organization,
    loading,
    formik,
    cancel,
    setImageBase64,
    setFieldValue,
  };
};
