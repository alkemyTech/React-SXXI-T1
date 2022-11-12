import React from "react";
import Form from "react-bootstrap/Form";

const FormLabel = ( { title } ) => {
  return (
    <Form.Label 
        className="mt-3">
        { title }
    </Form.Label>
  )
}

export default FormLabel;