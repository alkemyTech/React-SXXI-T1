import { useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { InputForm } from "styled-components/GlobalFormFields/InputForm.styled";
import { ButtonConfirm, ContainerInputError, Errors } from "./ActivitiesForm.Styled";
import { useActivitiesForm } from "./hooks/useActivitiesForm";
import { CustomTitle } from "Components/GlobalComponents/CustomTitle/CustomTitle";
import { FormImageField } from "Components/GlobalComponents/FormImageField/FormImageField";
import { FormCKEditorField } from "Components/GlobalComponents/FormCKEditorField/FormCKEditorField";
import { BackTo } from "Components/GlobalComponents/BackTo/BackTo";
import { privateRoutes } from "models/routes";
import FormLabel from "../../components/FormLabel";

const ActivitiesForm = () => {
  const { errors, handleBlur, handleSubmit, handleChange, touched, activity, loading, formik, values, setImageBase64, setFieldValue } =
    useActivitiesForm();

  const { id } = useParams();

  return (
    <section className="container my-5">
      <div className="my-5">
        <CustomTitle title={id ? "Edita actividad" : "Crea actividad"} justify="center" wrapTextClass="text-center" wrapTitleClass="d-block h-auto" />
      </div>
      <div className="my-5">
        <BackTo wrapLink="my-4" to={"/" + privateRoutes.BACKOFFICE + privateRoutes.ACTIVITIES} />
      </div>
      <Form className="my-5 col-sm-10 col-lg-6 mx-auto" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <ContainerInputError>
            <FormLabel title="Nombre de la actividad:" />
            <InputForm type="text" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} placeholder="Nombre" />
            {errors.name && touched.name && <Errors>{errors.name}</Errors>}
          </ContainerInputError>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDescription">
          <ContainerInputError>
            <FormLabel title="Descripción de la actividad:" />
            <FormCKEditorField
              setFieldValue={setFieldValue}
              errors={errors}
              touched={touched}
              name="description"
              placeholder="Descripcion de la actividad"
              data={activity.description}
            />
          </ContainerInputError>
        </Form.Group>
        <Form.Group className="mb-5" controlId="formBasicImage">
          <FormLabel title="Imagen de la actividad:" />
          <FormImageField
            errors={errors}
            touched={touched}
            name="image"
            setFieldValue={formik.setFieldValue}
            setImageToSend={setImageBase64}
            imageIsEdit={activity.image}
          />
        </Form.Group>
        <div className="my-5 d-flex justify-content-center">
          <ButtonConfirm className="col-7 col-lg-8 py-2 px-3 mx-auto" disabled={loading} background="success" color="success" type="submit">
            Confirmar
          </ButtonConfirm>
        </div>
      </Form>
    </section>
  );
};

export default ActivitiesForm;