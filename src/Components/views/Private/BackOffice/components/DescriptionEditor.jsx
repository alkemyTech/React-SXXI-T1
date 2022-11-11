import React from "react";
import Form from "react-bootstrap/Form";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const DescriptionEditor = ({
  label = "",
  initialData = "",
  isTouched = false,
  error = "",
  onChange = () => {},
}) => {
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <CKEditor
        editor={ClassicEditor}
        data={initialData}
        onChange={(event, editor) => {
          const data = editor.getData();
          onChange(data);
        }}
      />
      {isTouched && error && (
        <Form.Text className="text-danger">{error}</Form.Text>
      )}
    </Form.Group>
  );
};

export default DescriptionEditor;
