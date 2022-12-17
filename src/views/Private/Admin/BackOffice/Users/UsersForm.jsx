import Form from "react-bootstrap/Form";
import { InputForm } from "styled-components/GlobalFormFields/InputForm.styled";
import { CustomButton } from "Components/CustomButton/CustomButton";
import { ContainerInputError, Errors } from "./styled-components/UsersForm.styled";
import { useUsersForm } from "./hook/useUsersForm";
import Title from "./Title";

const UsersForm = () => {
  const { values, errors, handleBlur, handleSubmit, handleChange, touched } = useUsersForm();

  return (
    <div className="container">
      <Title text="Usuarios" />
      <Form className="mb-5" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <ContainerInputError>
            <InputForm type="text" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} placeholder="Nombre" />
            {errors.name && touched.name && <Errors>{errors.name}</Errors>}
          </ContainerInputError>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <ContainerInputError>
            <InputForm type="email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder="E-Mail" />
            {errors.email && touched.email && <Errors>{errors.email}</Errors>}
          </ContainerInputError>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicImage">
          <ContainerInputError>
            <Form.Label>Imagen de perfil:</Form.Label>
            <InputForm
              type="file"
              name="profilephoto"
              value={values.image}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Ingresa la imagen de perfil..."
              alt="testimonial form image"
            />
            {errors.image && touched.image && <Errors>{errors.image}</Errors>}
          </ContainerInputError>
        </Form.Group>
        <Form.Select aria-label="Default select example">
          <option>Seleccione su rol</option>
          <option value="1">Usuario</option>
          <option value="2">Administrador</option>
          {errors.rol && touched.rol && <Errors>{errors.rol}</Errors>}
        </Form.Select>
        <Form.Group className="mb-3" controlId="formBasicName">
          <ContainerInputError>
            <InputForm type="password" name="password" value={values.password} onChange={handleChange} onBlur={handleBlur} placeholder="Password" />
            {errors.password && touched.password && <Errors>{errors.password}</Errors>}
          </ContainerInputError>
        </Form.Group>
        <CustomButton type="submit" color="success" background="success" text="Send" />
      </Form>
    </div>
  );
};

export default UsersForm;
