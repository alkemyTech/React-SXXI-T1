import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Input from "./Input/Input";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .required("El email es obligatorio")
    .email("El email ingresado no es válido"),
  password: Yup.string()
    .required("La contraseña es obligatoria")
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
      "La contraseña debe tener al menos 1 letra, 1 número y 1 símbolo"
    ),
});

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
