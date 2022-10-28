import React from "react";
import { useFormik } from "formik";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Input from "./components/Input";
import { LoginSchema } from "./utilities/schemas";

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      console.log(values);
      formik.resetForm();
      localStorage.setItem("token", "tokenValueExample");
    },
  });

  return (
    <Form className="d-grid gap-3" onSubmit={formik.handleSubmit}>
      <Input
        value={formik.values.email}
        type="email"
        name="email"
        placeholder="Enter email"
        isTouched={formik.touched.email}
        error={formik.errors.email}
        onChange={formik.handleChange}
      />
      <Input
        value={formik.values.password}
        type="text"
        name="password"
        placeholder="Enter password"
        isTouched={formik.touched.password}
        error={formik.errors.password}
        onChange={formik.handleChange}
      />
      <Button className="w-100 py-2" variant="primary" type="submit">
        Log In
      </Button>
    </Form>
  );
};

export default LoginForm;
