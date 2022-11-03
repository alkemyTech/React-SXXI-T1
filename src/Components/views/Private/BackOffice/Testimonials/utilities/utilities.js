import * as Yup from 'yup';
import { validationMessages } from 'utilities/validationMessage.util';

const nameRegExp = /[a-z, A-Z]{4}/

export const validationSchema = Yup.object().shape({
  name : Yup.string()
    .matches(nameRegExp, validationMessages.name.format)
    .min(4, validationMessages.name.fieldLength)
    .required(validationMessages.name.required),
  image: Yup.mixed().required( validationMessages.image.required)
  .test( "fileFormat", "Solo formato .jpg y .png",
      value => value?.includes('.png'||'.jpg')
  ),
  description: Yup.string().required(validationMessages.description.required)
    .max(255, validationMessages.description.fieldLength)
});
