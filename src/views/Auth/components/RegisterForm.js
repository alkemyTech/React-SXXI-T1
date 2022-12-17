import React from "react";
import { CustomButton } from "Components/CustomButton/CustomButton";
import InputAuth from "./InputAuth";
import { FormAuth } from "../styled.components/Auth.styled";
import { useRegister } from "../hooks/useRegister";
import { SpinnerLoad } from "Components/Loading/SpinnerLoad/SpinnerLoad";

const RegisterForm = ({ text }) => {
  const { formik, loadingRegister } = useRegister();
  return (
    <FormAuth
      className="form-container col col-10 my-3 p-0 p-sm-1 d-flex flex-column justify-content-center align-items-center"
      onSubmit={formik.handleSubmit}>
      <InputAuth
        value={formik.values.name}
        type="text"
        name="name"
        placeholder="Ingresar nombre"
        isTouched={formik.touched.name}
        error={formik.errors.name}
        onChange={formik.handleChange}
      />

      <InputAuth
        value={formik.values.email}
        type="email"
        name="email"
        placeholder="Ingresar email"
        isTouched={formik.touched.email}
        error={formik.errors.email}
        onChange={formik.handleChange}
      />
      <InputAuth
        value={formik.values.password}
        type="password"
        name="password"
        placeholder="Ingresar constraseña"
        isTouched={formik.touched.password}
        error={formik.errors.password}
        onChange={formik.handleChange}
      />
      <InputAuth
        value={formik.values.confirmPassword}
        type="password"
        name="confirmPassword"
        placeholder="Confirmar contraseña"
        isTouched={formik.touched.confirmPassword}
        error={formik.errors.confirmPassword}
        onChange={formik.handleChange}
      />
      <CustomButton buttonClass="col col-8" type="submit" background="success" color="success" text={text} />
      {loadingRegister && <SpinnerLoad />}
    </FormAuth>
  );
};

export default RegisterForm;
