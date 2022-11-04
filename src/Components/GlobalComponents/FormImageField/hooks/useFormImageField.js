import { useEffect } from "react";
import {
  SUPPORTED_FORMATS,
  FILE_SIZE,
} from "../utilities/ImageFieldSchemas.util";
import { useConvertImageToBase64 } from "./useConvertImageToBase64";

export const useFormImageField = (setFieldValue, imageToSend) => {
  const { image, convertBase64, handleResetImage } = useConvertImageToBase64();

  const handleChangeFile = (event) => {
    const file = event.target.files[0];

    if (event && file) {
      const formats = SUPPORTED_FORMATS.includes(file.type);
      const fileSize = file.size <= FILE_SIZE;

      if (!formats || !fileSize) handleResetImage();
      else convertBase64(file);

      setFieldValue("image", file);
    } else {
      setFieldValue("image", "");
    }
  };

  useEffect(() => {
    if (image) imageToSend(image);
    else imageToSend("");
  }, [image, imageToSend]);

  return { image, handleChangeFile };
};
