import React from "react";
import { useFormik } from "formik";
import Form from "react-bootstrap/Form";

import Input from "./components/Input";
import { CustomButton } from "Components/GlobalComponents/CustomButton/CustomButton";
import { EditOrganizationSchema } from "./utilities/schemas";
import SocialMediaInput from "./components/SocialMediaInput";

const EditForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      logo: "",
      shortDescription: "",
      longDescription: "",
      socialMediaLinks: [],
    },
    validationSchema: EditOrganizationSchema,
    onSubmit: (values) => {
      console.log(values);
      formik.resetForm();
      localStorage.setItem("token", "tokenValueExample");
    },
  });

  const addLinkHandler = (newLink) => {
    const currentLinks = [...formik.values.socialMediaLinks];
    currentLinks.push(newLink);
    formik.setFieldValue("socialMediaLinks", currentLinks);
  };

  const removeLinkHandler = (link) => {
    const updatedLinks = formik.values.socialMediaLinks.filter(l => l !== link);
    formik.setFieldValue("socialMediaLinks", updatedLinks);
  }

  return (
    <Form className="d-grid gap-3" onSubmit={formik.handleSubmit}>
      <Input
        value={formik.values.name}
        label="Name:"
        type="text"
        name="name"
        placeholder="Enter name"
        isTouched={formik.touched.name}
        error={formik.errors.name}
        onChange={formik.handleChange}
      />
      <Input
        label="Logo:"
        type="file"
        name="logo"
        placeholder="Upload the logo"
        isTouched={formik.touched.logo}
        error={formik.errors.logo}
        onChange={(event) => {
          const file = event.target.files[0];
          console.log(file);
          formik.setFieldValue("logo", file);
        }}
      />
      <Input
        value={formik.values.shortDescription}
        label="Short Description:"
        type="text"
        name="shortDescription"
        placeholder="Enter a short descripction"
        isTouched={formik.touched.shortDescription}
        error={formik.errors.shortDescription}
        onChange={formik.handleChange}
      />
      <Input
        value={formik.values.longDescription}
        label="Long Description:"
        type="text"
        name="longDescription"
        placeholder="Enter a long descripction"
        isTouched={formik.touched.longDescription}
        error={formik.errors.longDescription}
        onChange={formik.handleChange}
      />
      <SocialMediaInput
        onAddLink={addLinkHandler}
        onRemoveLink={removeLinkHandler}
        links={formik.values.socialMediaLinks}
      />
      <CustomButton
        buttonClass="w-100"
        type="submit"
        background="success"
        color="success"
        text="Editar"
      />
    </Form>
  );
};

export default EditForm;
