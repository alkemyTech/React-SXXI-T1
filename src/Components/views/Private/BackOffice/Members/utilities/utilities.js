export const convertToBase64 = (image, setImage) => {
  const reader = new FileReader();

  reader.onloadend = function () {
    setImage(reader.result.toString());
  };

  reader.readAsDataURL(image);
};
