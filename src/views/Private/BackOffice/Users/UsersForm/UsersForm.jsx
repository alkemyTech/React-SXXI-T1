import Form from "react-bootstrap/Form";
import { InputForm } from "styled-components/GlobalFormFields/InputForm.styled";
import { ContainerInputError, Errors, UserFormSelect } from "./UsersForm.Styled";
import { useUsersForm } from "./hooks/useUsersForm";
import { CustomTitle } from "Components/CustomTitle/CustomTitle";
import FormLabel from "../../components/FormLabel";
import { BackTo } from "Components/BackTo/BackTo";
import { privateRoutes } from "models/routes";
import { CustomButton } from "Components/CustomButton/CustomButton";
import { InputImage } from "Components/FormInputsField/InputImage";
import { SpinnerLoad } from "Components/Loading/SpinnerLoad/SpinnerLoad";

const UsersForm = () => {
  const { errors, handleBlur, handleSubmit, handleChange, touched, user, loading, formik, values, setImageBase64, roles, userId } = useUsersForm();

  return (
    <div className="container my-5">
      <div>
        <CustomTitle title={userId ? "Editar usuario" : "Crear usuario"} justify="center" wrapTextClass="text-center" wrapTitleClass="h-auto" />
      </div>
      <div className="my-3">
        <BackTo wrapLink="my-4" to={"/" + privateRoutes.BACKOFFICE + privateRoutes.USERS} />
      </div>
      {loading && <SpinnerLoad />}
      <Form className="my-3 col-sm-10 col-lg-6 mx-auto" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <ContainerInputError>
            <FormLabel title="Nombre del usuario:" />
            <InputForm type="text" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} placeholder="Nombre" />
            {errors.name && touched.name && <Errors>{errors.name}</Errors>}
          </ContainerInputError>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicRoleId">
          <ContainerInputError>
            <FormLabel title="Rol del usuario:" />
            <UserFormSelect aria-label="Seleccionar un rol" name="role_id" onChange={handleChange} onBlur={handleBlur}>
              <option value="">Selecciona un rol</option>
              {roles.map((rol) => (
                <option value={rol.id} key={rol.id}>
                  {rol.name}
                </option>
              ))}
            </UserFormSelect>
            {errors.role_id && touched.role_id && <Errors>{errors.role_id}</Errors>}
          </ContainerInputError>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <ContainerInputError>
            <FormLabel title="Email del usuario:" />
            <InputForm type="text" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder="Email" />
            {errors.email && touched.email && <Errors>{errors.email}</Errors>}
          </ContainerInputError>
        </Form.Group>
        <Form.Group className="mb-3">
          <ContainerInputError>
            <FormLabel title="Constraseña:" />
            <InputForm type="password" name="password" value={values.password} onChange={handleChange} onBlur={handleBlur} placeholder="Password" />
            {errors.password && touched.password && <Errors>{errors.password}</Errors>}
          </ContainerInputError>
        </Form.Group>
        <Form.Group className="mb-4" controlId="formBasicImage">
          <FormLabel title="Imagen del usuario:" />
          <InputImage formik={formik} setImageToSend={setImageBase64} imageIsEdit={user.profile_image} schemas={{ name: "profile_image" }} />
        </Form.Group>
        <div className="my-3 d-flex justify-content-center">
          <CustomButton
            type="submit"
            buttonClass="col col-10 col-sm-8"
            color={userId ? "yellow" : "success"}
            background={userId ? "yellow" : "success"}
            text={userId ? "Editar" : "Confirmar"}
          />
        </div>
      </Form>
    </div>
  );
};

export default UsersForm;
