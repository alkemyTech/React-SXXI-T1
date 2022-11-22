import React from "react";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import Form from "react-bootstrap/Form";

import { CustomButton } from "Components/GlobalComponents/CustomButton/CustomButton";
import DescriptionEditor from "../components/DescriptionEditor";
import FileInput from "../components/FileInput";
import Input from "../components/Input";
import SocialMediaInput from "../components/SocialMediaInput";
import { EditMembersSchema } from "../utilities/schemas";
import { BackTo } from "Components/GlobalComponents/BackTo/BackTo";
import { privateRoutes } from "models/routes";
import { CustomTitle } from "Components/GlobalComponents/CustomTitle/CustomTitle";

const EditForm = () => {
  const { id } = useParams();
  const formik = useFormik({
    initialValues: {
      name: "",
      image: {},
      description: "",
      socialMediaLinks: [],
    },
    validationSchema: EditMembersSchema,
    onSubmit: (values) => {
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
  };

  const descriptionChangeHandler = (data) => {
    formik.setFieldValue("description", data);
  };

  return (
    <div className="container my-5">
      <div>
        <CustomTitle
          title={id ? "Edita el miembro" : "Crea un miembro"}
          justify="center"
          wrapTextClass="text-center"
          wrapTitleClass="h-auto"
        />
      </div>
      <div>
        <BackTo
          wrapLink="my-4"
          to={"/" + privateRoutes.BACKOFFICE + "members"}
        />
      </div>
      <Form
        className="d-grid gap-3 col col-12 col-sm-10 col-md-8 col-lg-6 my-3"
        onSubmit={formik.handleSubmit}
      >
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
          buttonClass="mt-2 col-sm-5 col-md-3 mx-2"
          type="submit"
          background="success"
          color="success"
          text="Editar"
        />
      </Form>
    </div>
  );
};

export default EditForm;
