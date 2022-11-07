import * as Yup from 'yup';
import { validationMessages } from 'utilities/validationMessage.util';
import Swal from 'sweetalert2';

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