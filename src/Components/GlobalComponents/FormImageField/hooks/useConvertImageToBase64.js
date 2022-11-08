import { useState } from "react";

export const useConvertImageToBase64 = () => {
  const [image, setImage] = useState("");

  const handleResetImage = () => setImage("");

  const convertBase64 = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result.toString());
    };

    reader.readAsDataURL(file);
  };

  return { image, convertBase64, handleResetImage };
};
