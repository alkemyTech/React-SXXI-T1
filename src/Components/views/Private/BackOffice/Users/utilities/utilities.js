import * as Yup from 'yup';
import { validationMessages } from 'utilities/validationMessage.util';

const FORMAT = ['image/png', 'image/jpg', 'image/jpeg'];

export const validationSchema = Yup.object().shape({
  name : Yup.string()
    .min(4, validationMessages.name.fieldLength)
    .required(validationMessages.name.required),
  email : Yup.string().required(validationMessages.email.required),
  role_id : Yup.string().required(validationMessages.role_id.required),
  profile_image: Yup.mixed()
    .required( validationMessages.image.required)
    .test( "fileFormat", "Solo formato .png, .jpg y .jpeg",
      value => value && FORMAT.includes(value.type)
    )
});