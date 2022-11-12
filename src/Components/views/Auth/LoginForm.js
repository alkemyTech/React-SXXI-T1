import React from "react";
import { useFormik } from "formik";
import Form from "react-bootstrap/Form";

import InputAuth from "./components/InputAuth";
import { LoginSchema } from "./utilities/schemas";
import { CustomButton } from "Components/GlobalComponents/CustomButton/CustomButton";

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
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
      <CustomButton
        buttonClass="w-100"
        type="submit"
        background="success"
        color="success"
        text="Log In"
      />
    </Form>
  );
};

export default LoginForm;
