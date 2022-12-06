import React from "react";
import { useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";

import DescriptionEditor from "../components/DescriptionEditor";
import Input from "../components/Input";
import { BackTo } from "Components/GlobalComponents/BackTo/BackTo";
import { privateRoutes } from "models/routes";
import { CustomTitle } from "Components/GlobalComponents/CustomTitle/CustomTitle";
import { useMembersForm } from "./hooks/useMembersForm";
import { FormImageField } from "Components/GlobalComponents/FormImageField/FormImageField";
import { ButtonConfirm } from "./MembersForm.Styled";

const EditForm = () => {
  const { id } = useParams();
  const { errors, handleSubmit, handleChange, touched, member, loading, formik, values, setImageBase64 } = useMembersForm();

  const descriptionChangeHandler = (data) => {
    formik.setFieldValue("description", data);
  };

  return (
    <section className="container my-5">
      <div className="my-5">
        <CustomTitle title={id ? "Edita miembro" : "Crea miembro"} justify="center" wrapTextClass="text-center" wrapTitleClass="d-block h-auto" />
      </div>
      <div className="my-5">
        <BackTo wrapLink="my-4" to={"/" + privateRoutes.BACKOFFICE + privateRoutes.MEMBERSLIST} />
      </div>
      <Form className="my-5 col-sm-10 col-lg-6 mx-auto d-flex flex-column gap-4" onSubmit={handleSubmit}>
        <Input
          value={values.name}
          label="Nombre del miembro:"
          type="text"
          name="name"
          placeholder="Nombre"
          isTouched={touched.name}
          error={errors.name}
          onChange={handleChange}
        />
        <FormImageField
          errors={errors}
          touched={touched}
          name="image"
          setFieldValue={formik.setFieldValue}
          setImageToSend={setImageBase64}
          imageIsEdit={member.image}
        />
        <DescriptionEditor
          label="Descripción del miembro:"
          initialData={values.description}
          isTouched={touched.description}
          error={errors.description}
          onChange={descriptionChangeHandler}
        />
        <Input
          value={values.facebookUrl}
          label="Facebook del miembro:"
          type="text"
          name="facebookUrl"
          placeholder="Url Facebook"
          isTouched={touched.facebookUrl}
          error={errors.facebookUrl}
          onChange={handleChange}
        />
        <Input
          value={values.linkedinUrl}
          label="LinkedIn del miembro:"
          type="text"
          name="linkedinUrl"
          placeholder="Url LinkedIn"
          isTouched={touched.linkedinUrl}
          error={errors.linkedinUrl}
          onChange={handleChange}
        />
        <div className="my-5 d-flex justify-content-center">
          <ButtonConfirm className="col-7 col-lg-8 py-2 px-3 mx-auto" disabled={loading} background="success" color="success" type="submit">
            Confirmar
          </ButtonConfirm>
        </div>
      </Form>
    </section>
  );
};

export default EditForm;
