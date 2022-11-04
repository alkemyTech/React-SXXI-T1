import * as Yup from 'yup';
import { validationMessages } from 'utilities/validationMessage.util';

export const validationSchema = Yup.object().shape({
  name : Yup.string()
    .min(4, validationMessages.name.fieldLength)
    .required(validationMessages.name.required),
  image: Yup.mixed().required( validationMessages.image.required)
    .test( "fileFormat", "Solo formato .jpg y .png",
      value => value?.includes('image/png' || 'image/jpg')
    ),
  description: Yup.string().required(validationMessages.description.required)
});

export const convertToBase64 = (image, setFieldValue) => {
  const reader = new FileReader();
  reader.readAsDataURL(image);
  
  reader.onload = function () {
      setFieldValue('image', reader.result);
  };
  reader.onerror = function (error) {
    console.log('Error: ', error);
  };
}
