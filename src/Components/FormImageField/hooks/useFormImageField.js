import { useEffect, useRef } from "react";
import { SUPPORTED_FORMATS, FILE_SIZE } from "../utilities/ImageFieldSchemas.util";
import { useConvertImageToBase64 } from "./useConvertImageToBase64";

export const useFormImageField = (setFieldValue, setImageToSend, name) => {
  const { image, convertBase64, handleResetImage } = useConvertImageToBase64();

  const refInputFile = useRef();

  const handleInputFile = () => {
    refInputFile.current.click();
  };

  const handleChangeFile = (event) => {
    const file = event.target.files[0];
    if (event && file) {
      const formats = SUPPORTED_FORMATS.includes(file.type);
      const fileSize = file.size <= FILE_SIZE;
      if (!formats || !fileSize) handleResetImage();
      else convertBase64(file);

      setFieldValue(name, file);
    } else {
      setFieldValue(name, undefined);
    }
  };

  useEffect(() => {
    if (image) setImageToSend(image);
    else setImageToSend(undefined);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [image]);

  return { image, handleChangeFile, refInputFile, handleInputFile };
};
