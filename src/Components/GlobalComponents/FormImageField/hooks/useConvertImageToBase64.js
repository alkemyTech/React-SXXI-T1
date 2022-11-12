import { useState } from "react";

export const useConvertImageToBase64 = () => {
  const [image, setImage] = useState(undefined);

  const handleResetImage = () => setImage(undefined);

  const convertBase64 = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result.toString());
    };

    reader.readAsDataURL(file);
  };

  return { image, convertBase64, handleResetImage };
};
