import React from "react";
import Form from "react-bootstrap/Form";

import { InputForm } from "styled-components/GlobalFormFields/InputForm.styled";

const FileInput = ({
  label = "",
  filename = "No file selected",
  name = "",
  btnText = "",
  isTouched = false,
  error = "",
  onChange = () => {},
}) => {
  return (
    <Form.Group>
      <Form.Label className="d-block">{label}</Form.Label>
      <InputForm
        id={name}
        className="d-none"
        type="file"
        name={name}
        onChange={onChange}
      />
      <div>
        <Form.Label className="btn btn-secondary mb-0" htmlFor={name}>
          {btnText}
        </Form.Label>
        <span className="ms-2">{filename}</span>
      </div>
      {isTouched && error && (
        <Form.Text className="text-danger">{error}</Form.Text>
      )}
    </Form.Group>
  );
};

export default FileInput;
