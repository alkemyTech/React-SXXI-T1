import { useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { InputForm } from "styled-components/GlobalFormFields/InputForm.styled";
import { ButtonConfirm, ContainerInputError, Errors } from "./TestimonialForm.Styled";
import { useTestimonialsForms } from "./hooks/useTestimonialsForms";
import { CustomTitle } from "Components/CustomTitle/CustomTitle";
import { FormImageField } from "Components/FormImageField/FormImageField";
import { FormCKEditorField } from "Components/FormCKEditorField/FormCKEditorField";
import FormLabel from "../components/FormLabel";
import { BackTo } from "Components/BackTo/BackTo";
import { privateRoutes } from "models/routes";

const TestimonialsForm = () => {
  const { errors, handleBlur, handleSubmit, handleChange, touched, testimonial, loading, formik, values, setImageBase64, setFieldValue } =
    useTestimonialsForms();

  const { id } = useParams();

  return (
    <div className="container my-5">
      <div className="my-5">
        <CustomTitle
          title={id ? "Edita  testimonio" : "Crea  testimonio"}
          justify="center"
          wrapTextClass="text-center"
          wrapTitleClass="d-block h-auto"
        />
      </div>
      <div className="my-5">
        <BackTo wrapLink="my-4" to={"/" + privateRoutes.BACKOFFICE} />
      </div>
      <Form className="my-5 col-sm-10 col-lg-6 mx-auto" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <ContainerInputError>
            <FormLabel title="Nombre del testimonio:" />
            <InputForm type="text" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} placeholder="Nombre" />
            {errors.name && touched.name && <Errors>{errors.name}</Errors>}
          </ContainerInputError>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDescription">
          <ContainerInputError>
            <FormLabel title="Descripción del testimonio:" />
            <FormCKEditorField
              setFieldValue={setFieldValue}
              errors={errors}
              touched={touched}
              name="description"
              placeholder="Descripción del testimonio"
              data={testimonial.description}
            />
          </ContainerInputError>
        </Form.Group>
        <Form.Group className="mb-5" controlId="formBasicImage">
          <FormLabel title="Imagen del testimonio:" />
          <FormImageField
            errors={errors}
            touched={touched}
            name="image"
            setFieldValue={formik.setFieldValue}
            setImageToSend={setImageBase64}
            imageIsEdit={testimonial.image}
          />
        </Form.Group>
        <div className="my-5 d-flex justify-content-center">
          <ButtonConfirm className="col-7 col-lg-8 py-2 px-3 mx-auto" disabled={loading} background="success" color="success" type="submit">
            Confirmar
          </ButtonConfirm>
        </div>
      </Form>
    </div>
  );
};

export default TestimonialsForm;
