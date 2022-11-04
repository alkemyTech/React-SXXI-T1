import { CustomImage } from "styled-components/App.styled";
import { InputForm } from "styled-components/GlobalFormFields/InputForm.styled";
import { SpanFormError } from "../SpanFormError/SpanFormError";
import { useFormImageField } from "./hooks/useFormImageField";

export const FormImageField = ({
  errors,
  touched,
  name,
  setFieldValue,
  imageToSend,
}) => {
  const { image, handleChangeFile } = useFormImageField(
    setFieldValue,
    imageToSend
  );

  return (
    <>
      <div className="col col-12 col-sm-8">
        <InputForm
          type="file"
          name={name}
          onChange={(e) => handleChangeFile(e)}
        />
        <SpanFormError errors={errors} touched={touched} name={name} />
      </div>
      {image && (
        <div className="col col-12 col-sm-8 my-3">
          <CustomImage image={image} height="250px" backgroundSize="contain" />
        </div>
      )}
    </>
  );
};
