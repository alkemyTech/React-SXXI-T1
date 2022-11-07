import * as Yup from 'yup';
import { validationMessages } from 'utilities/validationMessage.util';

const FORMAT = ['image/png', 'image/jpg', 'image/jpeg'];

export const validationSchema = Yup.object().shape({
  name : Yup.string()
    .min(4, validationMessages.name.fieldLength)
    .required(validationMessages.name.required),
  image: Yup.mixed().required( validationMessages.image.required)
    .test( "fileFormat", "Solo formato .png, .jpg y .jpeg",
      value => value && FORMAT.includes(value.type)
    ),
  description: Yup.string().required(validationMessages.description.required)
});

export const convertToBase64 = (image, setImage) => {
  const reader = new FileReader();
  reader.readAsDataURL(image);
  
  reader.onload = function () {
      setImage(reader.result);
  };
  reader.onerror = function (error) {
    console.log('Error: ', error);
  };
}
