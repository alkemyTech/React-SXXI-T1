import React from "react";
import { CustomButton } from "Components/CustomButton/CustomButton";
import { FormAuth } from "../styled.components/Auth.styled";
import { useLogin } from "../hooks/useLogin";
import InputAuth from "./InputAuth";

const LoginForm = ({ text }) => {
  const { formik } = useLogin();

  return (
    <FormAuth
      className="form-container col col-10 my-3 p-0 p-sm-1 d-flex flex-column justify-content-center align-items-center"
      onSubmit={formik.handleSubmit}>
      <InputAuth
        value={formik.values.email}
        type="email"
        name="email"
        placeholder="Ingresar Email"
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
      <CustomButton buttonClass="col col-8" type="submit" background="success" color="success" text={text} />
    </FormAuth>
  );
};

export default LoginForm;
