import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { validationMessages } from 'utilities/validationMessage.util';

const FORMAT = ['image/png', 'image/jpg', 'image/jpeg'];
const nameRegExp = /[a-z, A-Z]{4}/

export const validationSchema = Yup.object().shape({
  name : Yup.string()
            .min(4, validationMessages.name.fieldLength)
            .matches(nameRegExp, validationMessages.name.format)
            .required(validationMessages.name.required),
  image: Yup.string()
              .required(validationMessages.image.required)
              .test( "fileFormat", "Solo formato .png, .jpg y .jpeg",
                value => value && FORMAT.includes(value.type)
              ),
  description: Yup.string().required(validationMessages.description.required)
});

export const convertToBase64 = (image, setImage) => {
  const reader = new FileReader();
  reader.readAsDataURL(image);
  
  reader.onloadend = function () {
      setImage(reader.result.toString());
  };
  reader.onerror = function (error) {
    console.log('Error: ', error);
  };
}


export const Alert = ({icon, title, cancelText})=>{
  return Swal.fire({
          title: title,
          icon: icon,
          iconColor: '#0038FF',
          showCancelButton: cancelText ? true : false,
          confirmButtonColor: '#0038FF',
          cancelButtonColor: cancelText ? '#FF0000' : false,
          confirmButtonText: 'Aceptar',
          cancelButtonText: cancelText ? 'Cancelar' : false
      })
  }