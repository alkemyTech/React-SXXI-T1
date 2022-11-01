import React from "react";
import { useFormik } from "formik";
import Form from "react-bootstrap/Form";

import InputAuth from "./components/InputAuth";
import { RegisterSchema } from "./utilities/schemas";
import { CustomButton } from "Components/GlobalComponents/CustomButton/CustomButton";

const RegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: (values) => {
      console.log(values);
      formik.resetForm();
      localStorage.setItem("token", "tokenValueExample");
    },
  });

  return (
    <Form className="d-grid gap-3 col-6" onSubmit={formik.handleSubmit}>
      <InputAuth
        value={formik.values.email}
        type="email"
        name="email"
        placeholder="Enter email"
        isTouched={formik.touched.email}
        error={formik.errors.email}
        onChange={formik.handleChange}
      />
      <InputAuth
        value={formik.values.password}
        type="password"
        name="password"
        placeholder="Enter password"
        isTouched={formik.touched.password}
        error={formik.errors.password}
        onChange={formik.handleChange}
      />
      <InputAuth
        value={formik.values.confirmPassword}
        type="password"
        name="confirmPassword"
        placeholder="Enter password confirmation"
        isTouched={formik.touched.confirmPassword}
        error={formik.errors.confirmPassword}
        onChange={formik.handleChange}
      />
      <CustomButton
        buttonClass="w-100"
        type="submit"
        background="success"
        color="success"
        text="Register"
      />
    </Form>
  );
};

export default RegisterForm;
