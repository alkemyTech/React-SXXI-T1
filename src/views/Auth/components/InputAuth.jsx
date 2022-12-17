import React from "react";
import Form from "react-bootstrap/Form";

import { InputForm } from "styled-components/GlobalFormFields/InputForm.styled";

const InputAuth = ({ value = "", type = "text", name = "", placeholder = "", isTouched = false, error = "", onChange = () => {} }) => {
  return (
    <Form.Group className="col col-12 mb-3">
      <InputForm className="px-4 py-2 " type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} />
      {isTouched && error && <Form.Text className="text-danger">{error}</Form.Text>}
    </Form.Group>
  );
};

export default InputAuth;
