import { cameraIcon, pictureAdd } from "assets/images";
import { CustomImage } from "styled-components/App.styled";
import { SpanFormError } from "../SpanFormError/SpanFormError";
import { useFormImageField } from "./hooks/useFormImageField";
import { AddImageText, BoxInputFile, CameraIcon, HiddenInputFile, WrapAddImageHover, WrapInputFile } from "./styled-components/FormImageField.styled";
import { imageSchema } from "./utilities/ImageFieldSchemas.util";

export const FormImageField = ({
  wrapAllFormImageField = "py-3 d-flex flex-column align-items-center justify-content-center ",
  BoxInputFileClass = "col col-12 d-flex justify-content-center align-items-center",
  errors,
  touched,
  name,
  setFieldValue,
  setImageToSend,
  heightCustomImage = "246px",
  backgroundSize = "cover",
  imageIsEdit,
}) => {
  const { image, handleChangeFile, refInputFile, handleInputFile } = useFormImageField(setFieldValue, setImageToSend, name);

  const isImageExist = () => (
    <CustomImage
      image={image || imageIsEdit}
      height={image || imageIsEdit ? heightCustomImage : "0"}
      backgroundSize={image || imageIsEdit ? backgroundSize : "0"}
      borderRadius="8px"
    />
  );

  const imageToRender = image || imageIsEdit ? isImageExist() : pictureAdd;

  return (
    <div className={wrapAllFormImageField}>
      <WrapInputFile className="img-container" onClick={handleInputFile}>
        <BoxInputFile className={BoxInputFileClass}>{imageToRender}</BoxInputFile>
        <WrapAddImageHover className="WrapAddImageHover">
          <CameraIcon className="pe-2">{cameraIcon}</CameraIcon>
          <AddImageText className="download">{imageSchema.downloadImage}</AddImageText>
        </WrapAddImageHover>
      </WrapInputFile>

      <SpanFormError errors={errors} touched={touched} name={name} />
      <HiddenInputFile ref={refInputFile} type="file" name={name} onChange={(e) => handleChangeFile(e)} />
    </div>
  );
};
