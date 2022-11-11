import React from "react";
import { useFormik } from "formik";
import Form from "react-bootstrap/Form";

import { CustomButton } from "Components/GlobalComponents/CustomButton/CustomButton";
import DescriptionEditor from "../components/DescriptionEditor";
import FileInput from "../components/FileInput";
import Input from "../components/Input";
import SocialMediaInput from "../components/SocialMediaInput";
import { EditMembersSchema } from "../utilities/schemas";

const EditForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      image: {},
      description: "",
      socialMediaLinks: [],
    },
    validationSchema: EditMembersSchema,
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
    const updatedLinks = formik.values.socialMediaLinks.filter(
      (l) => l !== link
    );
    formik.setFieldValue("socialMediaLinks", updatedLinks);
  };

  const imageChangeHandler = (event) => {
    const file = event.target.files[0];
    formik.setFieldValue("image", file);
  }

  const descriptionChangeHandler = (data) => {
    formik.setFieldValue("description", data);
  };

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
      <FileInput
        label="Image:"
        filename={formik.values.image.name}
        name="image"
        btnText="Upload the image"
        isTouched={formik.touched.image}
        error={formik.errors.image}
        onChange={imageChangeHandler}
      />
      <DescriptionEditor
        label="Description:"
        initialData={formik.initialValues.description}
        isTouched={formik.touched.description}
        error={formik.errors.description}
        onChange={descriptionChangeHandler}
      />
      <SocialMediaInput
        onAddLink={addLinkHandler}
        onRemoveLink={removeLinkHandler}
        links={formik.values.socialMediaLinks}
        isTouched={formik.touched.socialMediaLinks}
        error={formik.errors.socialMediaLinks}
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
