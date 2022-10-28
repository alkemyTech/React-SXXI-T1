import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const LoginForm = () => {
  const [initialValues, setInitialValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setInitialValues({ ...initialValues, email: e.target.value });
    }
    if (e.target.name === "password") {
      setInitialValues({ ...initialValues, password: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(initialValues);
    localStorage.setItem("token", "tokenValueExample");
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Control
            className="px-4 py-2"
            type="text"
            name="email"
            value={initialValues.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Control
            className="px-4 py-2"
            type="text"
            name="password"
            value={initialValues.password}
            onChange={handleChange}
            placeholder="Enter Password"
          />
        </Form.Group>
        <Button className="w-100 py-2" variant="primary" type="submit">
          Log In
        </Button>
      </Form>
    </>
  );
};

export default LoginForm;
