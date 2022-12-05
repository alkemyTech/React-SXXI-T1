import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import { useState } from "react";
import { SkeletonLoader } from "../Loading/SkeletonLoader/SkeletonLoader";
import { SpanFormError } from "../SpanFormError/SpanFormError";

export const FormCKEditorField = ({ setFieldValue, errors, touched, name, placeholder, data = "", load = false }) => {
  const [stateCKEditor, setStateCKEditor] = useState({
    content: "",
  });

  const onChangeCKEditor = (evt, editor) => {
    let contentEditor = editor.getData();

    if (!contentEditor) {
      setStateCKEditor({
        content: "",
      });
      setFieldValue(name, "");
    }

    setFieldValue(name, contentEditor);
    setStateCKEditor({
      content: contentEditor,
    });
  };

  return (
    <>
      {load ? (
        <SkeletonLoader placeClass="placeClass col col-12  w-100 h-100" spanClass="spanClass h-100 w-100" height="141px" />
      ) : (
        <>
          <CKEditor
            name={name}
            data={data}
            config={{ placeholder: placeholder }}
            editor={ClassicEditor}
            content={stateCKEditor.content}
            onChange={(event, editor) => onChangeCKEditor(event, editor)}
          />
          <SpanFormError errors={errors} touched={touched} name={name} />
        </>
      )}
    </>
  );
};
