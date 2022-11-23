import { addingIcon, cameraIcon, pictureAdd } from "assets/images"
import { useRef } from "react"
import styled from "styled-components"
import { CustomImage, SubtitleText } from "styled-components/App.styled"
import { themeColors } from "styled-components/Theme.styled"
import { SpanFormError } from "../SpanFormError/SpanFormError"
import { useFormImageField } from "./hooks/useFormImageField"

export const FormImageField = ({
  wrapAllFormImageField = "py-3 d-flex flex-column align-items-center justify-content-center ",
  wrapInputClass = "col col-12",
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
  const refInputFile = useRef()

  const { image, handleChangeFile } = useFormImageField(setFieldValue, setImageToSend, name)

  // const imageToRender = image || imageIsEdit || addingIcon({ width: "28px", height: "50px" })

  const isImageExist = () => (
    <CustomImage
      image={image || imageIsEdit}
      height={image || imageIsEdit ? heightCustomImage : "0"}
      backgroundSize={image || imageIsEdit ? backgroundSize : "0"}
      borderRadius="8px"
    />
  )

  // const imageToRender =
  //   image || imageIsEdit ? (
  //     isImageExist()
  //   ) : (
  //     <div className="d-flex flex-column align-items-center justify-content-center">
  //       <SubtitleText>Imagen</SubtitleText>
  //       {addingIcon({ width: "28px", height: "50px" })}
  //     </div>
  //   )

  const imageToRender = image || imageIsEdit ? isImageExist() : pictureAdd

  const handleInputFile = () => {
    console.log("click")
    refInputFile.current.click()
  }

  return (
    <div className={wrapAllFormImageField}>
      <WrapInputFile className="img-container" onClick={handleInputFile}>
        <BoxInputFile className={BoxInputFileClass}>{imageToRender}</BoxInputFile>
        <WrapDownloadQr className="WrapDownloadQr">
          <CameraIcon className="pe-2">{cameraIcon}</CameraIcon>
          <AddImageText className="download">Cargar Imagen</AddImageText>
        </WrapDownloadQr>
      </WrapInputFile>

      <SpanFormError errors={errors} touched={touched} name={name} />
      <HiddenInputFile ref={refInputFile} type="file" name={name} onChange={(e) => handleChangeFile(e)} />
    </div>
  )
}

const BoxInputFile = styled.div`
  border: 2px dashed ${themeColors.grayBorder};
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.15);
  width: 250px;
  height: 250px;
  cursor: pointer;
`

const HiddenInputFile = styled.input`
  position: absolute;
  opacity: 0;
  filter: alpha(opacity=0);
  margin: 0;
  padding: 0;
  bottom: 6px;
`
const WrapInputFile = styled.div`
  width: 250px;
  height: 250px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border-radius: 8px;

  &:before {
    content: "";
    width: inherit;
    height: inherit;
    position: absolute;
    background: #000;
    opacity: 0;
    transition: opacity 0.3s linear;
  }

  &:hover:before {
    opacity: 0.75;
  }

  &:hover {
    .WrapDownloadQr {
      top: 35%;
    }
  }
`

const WrapDownloadQr = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: inherit;
  color: #fff;
  text-align: center;
  position: absolute;
  top: 100%;
  transition: top 0.3s linear;
`

const CameraIcon = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  height: 70px;
  min-height: 79px;
  width: 73px;
`

const AddImageText = styled(SubtitleText)`
  padding: 0 22px 0 10px;
  border-radius: 8px;
  backdrop-filter: blur(10px);
  color: ${themeColors.white}!important;
`

/*
componente antes:
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
*/
