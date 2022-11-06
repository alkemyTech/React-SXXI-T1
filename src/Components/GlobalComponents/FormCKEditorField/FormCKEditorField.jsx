import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import { useState } from "react";
import { SpanFormError } from "../SpanFormError/SpanFormError";

export const FormCKEditorField = ({
  setFieldValue,
  errors,
  touched,
  name,
  placeholder,
}) => {
  const [stateCKEditor, setStateCKEditor] = useState({
    content: "",
  });

  const onChangeCKEditor = (evt, editor) => {
    let contentEditor = editor.getData();

    if (!contentEditor) {
      setStateCKEditor({
        content: "",
      });
      setFieldValue("description", "");
    }

    setFieldValue("description", contentEditor);
    setStateCKEditor({
      content: contentEditor,
    });
  };

  return (
    <>
      <CKEditor
        name={name}
        config={{ placeholder: placeholder }}
        editor={ClassicEditor}
        content={stateCKEditor.content}
        onChange={(event, editor) => onChangeCKEditor(event, editor)}
      />
      <SpanFormError errors={errors} touched={touched} name={name} />
    </>
  );
};