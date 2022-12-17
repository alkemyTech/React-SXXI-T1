import React from "react";
import Form from "react-bootstrap/Form";

import Input from "../components/Input";
import { ButtonEdit } from "./OrganizationForm.Styled";
import DescriptionEditor from "../components/DescriptionEditor";
import { CustomTitle } from "Components/CustomTitle/CustomTitle";
import { BackTo } from "Components/BackTo/BackTo";
import { privateRoutes } from "models/routes";
import { FormImageField } from "Components/FormImageField/FormImageField";
import { useOrganizationForm } from "./hooks/useOrganizationForm";

const OrganizationForm = () => {
  const { errors, handleBlur, handleSubmit, handleChange, touched, organization, loading, formik, values, setImageBase64 } = useOrganizationForm();

  const shortDescriptionChangeHandler = (data) => {
    formik.setFieldValue("shortDescription", data);
  };

  return (
    <section className="container my-5">
      <div className="my-5">
        <CustomTitle title={"Editar Organización"} justify="center" wrapTextClass="text-center" wrapTitleClass="d-block h-auto" />
      </div>
      <div className="my-5">
        <BackTo wrapLink="my-4" to={"/" + privateRoutes.BACKOFFICE + privateRoutes.ORGANIZATIONDATA} />
      </div>
      <Form className="my-5 col-sm-10 col-lg-6 mx-auto d-flex flex-column gap-4" onSubmit={handleSubmit}>
        <Input
          value={values.name}
          label="Nombre de la organización:"
          type="text"
          name="name"
          placeholder="Nombre"
          isTouched={touched.name}
          error={errors.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <FormImageField
          errors={errors.logo}
          touched={touched.logo}
          name="logo"
          setFieldValue={formik.setFieldValue}
          setImageToSend={setImageBase64}
          imageIsEdit={organization.logo}
        />
        <DescriptionEditor
          label="Descripción corta de la organización:"
          initialData={values.shortDescription}
          isTouched={touched.shortDescription}
          error={errors.shortDescription}
          onChange={shortDescriptionChangeHandler}
        />
        <Input
          value={values.longDescription}
          label="Descripción larga de la organización:"
          type="text"
          name="longDescription"
          placeholder="Descripción larga"
          isTouched={touched.longDescription}
          error={errors.longDescription}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Input
          value={values.facebookUrl}
          label="Facebook de la organización:"
          type="text"
          name="facebookUrl"
          placeholder="Url Facebook"
          isTouched={touched.facebookUrl}
          error={errors.facebookUrl}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Input
          value={values.linkedinUrl}
          label="LinkedIn de la organización:"
          type="text"
          name="linkedinUrl"
          placeholder="Url LinkedIn"
          isTouched={touched.linkedinUrl}
          error={errors.linkedinUrl}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Input
          value={values.instagramUrl}
          label="Instragram de la organización:"
          type="text"
          name="instagramUrl"
          placeholder="Url Instagram"
          isTouched={touched.instagramUrl}
          error={errors.instagramUrl}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Input
          value={values.twitterUrl}
          label="Twitter de la organización:"
          type="text"
          name="twitterUrl"
          placeholder="Url Twitter"
          isTouched={touched.twitterUrl}
          error={errors.twitterUrl}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <div className="my-5 d-flex justify-content-center">
          <ButtonEdit className="col-7 col-lg-8 py-2 px-3 mx-auto" disabled={loading} type="submit">
            Editar
          </ButtonEdit>
        </div>
      </Form>
    </section>
  );
};

export default OrganizationForm;
