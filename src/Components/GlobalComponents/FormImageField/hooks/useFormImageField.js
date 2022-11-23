import { useEffect } from "react"
import { validationMessages } from "utilities/validationMessage.util"
import { SUPPORTED_FORMATS, FILE_SIZE } from "../utilities/ImageFieldSchemas.util"
import { useConvertImageToBase64 } from "./useConvertImageToBase64"

export const useFormImageField = (setFieldValue, setImageToSend, name) => {
  const { image, convertBase64, handleResetImage } = useConvertImageToBase64()

  const handleChangeFile = (event) => {
    const file = event.target.files[0]
    if (event && file) {
      const formats = SUPPORTED_FORMATS.includes(file.type)
      const fileSize = file.size <= FILE_SIZE
      if (!formats || !fileSize) handleResetImage()
      else convertBase64(file)

      setFieldValue(name, file)
    } else {
      setFieldValue(name, undefined)
    }
  }

  useEffect(() => {
    if (image) setImageToSend(image)
    else setImageToSend(undefined)
  }, [image])

  return { image, handleChangeFile }
}
