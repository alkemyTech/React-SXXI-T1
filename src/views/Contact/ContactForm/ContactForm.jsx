import { ContactFormStyled, Errors, TextAreaStyled, InputStyled, ContainerInputError } from "./ContactFormStyled/ContactForm.Styled";
import { Form } from "react-bootstrap";
import { useContact } from "./useContactHook/useContact";
import { CustomButton } from "Components/CustomButton/CustomButton";

export default function ContactForm() {
  const { handleSubmit, handleBlur, handleChange, values, errors, touched, loading } = useContact();

  return (
    <ContactFormStyled onSubmit={handleSubmit}>
      <Form.Group className="mb-3 col-12 col-sm-10 col-md-9 col-lg-7">
        <ContainerInputError>
          <InputStyled
            type="text"
            placeholder="Nombre y Apellido"
            as="input"
            name="fullname"
            value={values.fullname}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.fullname && touched.fullname && <Errors>{errors.fullname}</Errors>}
        </ContainerInputError>
        <ContainerInputError>
          <InputStyled type="email" placeholder="Email" as="input" name="email" value={values.email} onBlur={handleBlur} onChange={handleChange} />
          {errors.email && touched.email && <Errors>{errors.email}</Errors>}
        </ContainerInputError>
        <ContainerInputError>
          <InputStyled
            type="tel"
            placeholder="Telefono o Celular"
            as="input"
            name="phone"
            value={values.phone}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.phone && touched.phone && <Errors>{errors.phone}</Errors>}
        </ContainerInputError>
        <ContainerInputError>
          <TextAreaStyled
            type="text"
            placeholder="Escribe tu consulta"
            rows="8"
            as="textarea"
            name="message"
            value={values.message}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.message && touched.message && <Errors>{errors.message}</Errors>}
        </ContainerInputError>
      </Form.Group>
      <CustomButton
        text={loading ? "loading.." : "Enviar Consulta"}
        disabled={loading}
        color="success"
        background="success"
        type="submit"
        buttonClass="col-12 col-sm-5 col-md-4 col-lg-3 col-xl-2"
      />
    </ContactFormStyled>
  );
}
