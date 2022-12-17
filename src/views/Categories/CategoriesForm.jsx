import React, { useEffect } from "react";
import { Form } from "react-bootstrap";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Formulary, Input, Errors, ContainerInputError } from "./CategoriesStyled/CategoriesStyled";
import { useCategory } from "./CategoryHook/useCategory";
import privateService from "Services/privateApiService";
import { URLs } from "Services/ServicesURLS";
import { feedbackUser as AlertError } from "utilities/alerts/feedbackUser.util";
import { CustomTitle } from "Components/CustomTitle/CustomTitle";
import { CustomButton } from "Components/CustomButton/CustomButton";
import { BackTo } from "Components/BackTo/BackTo";
import { InputImage } from "Components/FormInputsField/InputImage";
import { privateRoutes } from "models/routes";

const CategoriesForm = () => {
  const {
    id,
    handleChange,
    handleBlur,
    handleSubmit,
    schema,
    formik,
    category,
    setImageB64,
    setFieldValue,
    values,
    errors,
    touched,
    setCategory,
    loading,
    buttonText,
  } = useCategory();

  useEffect(() => {
    if (id) {
      privateService
        .get(`${URLs.category}/${id}`)
        .then((res) => {
          if (res.success) {
            const { data } = res;
            setFieldValue("name", data.name);
            setFieldValue("image", data.image);
            setFieldValue("description", data.description);
            setCategory({
              name: data.name,
              image: data.image,
              description: data.description,
            });
          } else {
            AlertError("center", "error", "Ha ocurrido un error");
          }
        })
        .catch(() => AlertError("center", "error", "Ha ocurrido un error"));
    }
  }, [id, setFieldValue, setCategory]);

  return (
    <div className="container my-5">
      <div>
        <CustomTitle
          title={id ? "Editar Categoría" : "Crear Categoría"}
          justify="center"
          wrapTextClass="text-center"
          wrapTitleClass="d-block h-auto"
        />
      </div>
      <div className="my-5">
        <BackTo wrapLink="my-4" to={"/" + privateRoutes.BACKOFFICE + privateRoutes.CATEGORIES} />
      </div>
      <Formulary className="my-5 col-sm-10 col-lg-6 mx-auto" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <ContainerInputError>
            <Form.Label>Nombre de la categoría:</Form.Label>
            <Input type="text" name="name" placeholder="Nombre" onBlur={handleBlur} value={values.name} onChange={handleChange} />
            {errors.name && touched.name && <Errors>{errors.name}</Errors>}
          </ContainerInputError>
        </Form.Group>
        <Form.Group>
          <ContainerInputError>
            <Form.Label>Agrega una descripción:</Form.Label>
            <CKEditor
              name="description"
              data={values.description}
              editor={ClassicEditor}
              config={{ placeholder: "Descripción" }}
              onChange={(event, editor) => {
                setFieldValue("description", editor.getData());
              }}
            />
            {errors.description && <Errors>{errors.description}</Errors>}
          </ContainerInputError>
        </Form.Group>
        <Form.Group>
          <InputImage formik={formik} schemas={schema} setImageToSend={setImageB64} setFieldValue={setFieldValue} imageIsEdit={category} />
        </Form.Group>
        <div className="my-2 d-flex justify-content-center">
          <CustomButton
            buttonClass="col-7 col-lg-8 py-2 px-3 mx-auto"
            text={loading ? "Loading.." : buttonText}
            color={id ? "yellow" : "success"}
            background={id ? "yellow" : "success"}
            type="submit"
            disabled={loading}
          />
        </div>
      </Formulary>
    </div>
  );
};

export default CategoriesForm;
