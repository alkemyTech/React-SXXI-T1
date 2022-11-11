import { CustomImage } from "styled-components/App.styled";
import { InputForm } from "styled-components/GlobalFormFields/InputForm.styled";
import { SpanFormError } from "../SpanFormError/SpanFormError";
import { useFormImageField } from "./hooks/useFormImageField";

export const FormImageField = ({
  wrapAllFormImageField = "d-flex flex-column align-items-center",
  wrapInputClass = "col col-12 col-sm-12",
  errors,
  touched,
  name,
  setFieldValue,
  setImageToSend,
  heightCustomImage = "100px",
  backgroundSize = "contain",
  imageIsEdit,
}) => {
  const { image, handleChangeFile } = useFormImageField(
    setFieldValue,
    setImageToSend,
    name
  );

  const imageToRender = image || imageIsEdit || "";

  return (
    <div className={wrapAllFormImageField}>
      <div className={wrapInputClass}>
        <InputForm
          type="file"
          name={name}
          onChange={(e) => handleChangeFile(e)}
        />
        <SpanFormError errors={errors} touched={touched} name={name} />
      </div>

      <div className="col col-12 col-sm-8 my-3">
        <CustomImage
          image={imageToRender}
          height={image || imageIsEdit ? heightCustomImage : "0"}
          backgroundSize={image || imageIsEdit ? backgroundSize : "0"}
        />
      </div>
    </div>
  );
};
