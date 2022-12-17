import { useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { InputForm } from "styled-components/GlobalFormFields/InputForm.styled";
import { ButtonConfirm, ContainerInputError, Errors } from "./NewsForm.Styled";
import { useNewsForm } from "./hooks/useNewsForm";
import { CustomTitle } from "Components/CustomTitle/CustomTitle";
import { FormImageField } from "Components/FormImageField/FormImageField";
import { FormCKEditorField } from "Components/FormCKEditorField/FormCKEditorField";
import FormLabel from "../components/FormLabel";
import { BackTo } from "Components/BackTo/BackTo";
import { privateRoutes } from "models/routes";

const NewsForm = () => {
  const { errors, handleBlur, handleSubmit, handleChange, touched, news, loading, formik, values, setImageBase64, setFieldValue, categories } =
    useNewsForm();

  const { id } = useParams();

  return (
    <div className="container my-5">
      <div>
        <CustomTitle title={id ? "Edita novedad" : "Crea novedad"} justify="center" wrapTextClass="text-center" wrapTitleClass="h-auto" />
      </div>
      <div>
        <BackTo wrapLink="my-4" to={"/" + privateRoutes.BACKOFFICE + "news"} />
      </div>
      <Form className="my-5 col-sm-10 col-lg-6 mx-auto" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <ContainerInputError>
            <FormLabel title="Titulo de la novedad:" />
            <InputForm type="text" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} placeholder="Titulo" />
            {errors.name && touched.name && <Errors>{errors.name}</Errors>}
          </ContainerInputError>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCategoryId">
          <ContainerInputError>
            <FormLabel title="Categoría de la novedad:" />
            <Form.Select aria-label="Seleccionar la categoria" name="category_id" onChange={handleChange} onBlur={handleBlur}>
              <option value="">Selecciona una categoria</option>
              {categories.map((category) => (
                <option value={category.id} key={category.id}>
                  {category.name}
                </option>
              ))}
            </Form.Select>
            {errors.category_id && touched.category_id && <Errors>{errors.category_id}</Errors>}
          </ContainerInputError>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicContent">
          <ContainerInputError>
            <FormLabel title="Contenido de la novedad:" />
            <FormCKEditorField
              setFieldValue={setFieldValue}
              errors={errors}
              touched={touched}
              name="content"
              placeholder="Contenido de la novedad"
              data={news.content}
            />
          </ContainerInputError>
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicImage">
          <FormLabel title="Imagen de la actividad:" />
          <FormImageField
            errors={errors}
            touched={touched}
            name="image"
            setFieldValue={formik.setFieldValue}
            setImageToSend={setImageBase64}
            imageIsEdit={news.image}
          />
        </Form.Group>
        <div className="my-5 d-flex justify-content-center">
          <ButtonConfirm className="col-7 col-lg-8 py-2 px-3" disabled={loading} background="success" color="success" type="submit">
            Confirmar
          </ButtonConfirm>
        </div>
      </Form>
    </div>
  );
};

export default NewsForm;
