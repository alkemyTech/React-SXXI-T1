import React from 'react'
import Form from "react-bootstrap/Form";

import { InputForm } from 'styled-components/GlobalFormFields/InputForm.styled';

const InputAuth = ({
    label = "",
    value = "",
    type = "text",
    name = "",
    placeholder = "",
    isTouched = false,
    error = "",
    onChange = () => {}
}) => {
  return (
    <Form.Group>
        <Form.Label>{label}</Form.Label>
        <InputForm
          className="px-4 py-2"
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        {isTouched && error && (
          <Form.Text className="text-danger">{error}</Form.Text>
        )}
    </Form.Group>
  )
}

export default InputAuth