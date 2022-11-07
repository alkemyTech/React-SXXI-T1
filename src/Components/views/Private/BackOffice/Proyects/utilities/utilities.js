import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { validationMessages } from 'utilities/validationMessage.util';

const FORMAT = ['image/png', 'image/jpg', 'image/jpeg'];
  
export const validationSchema = Yup.object().shape({
    title : Yup.string().required(validationMessages.title.required),
    description: Yup.string()
                  .required(validationMessages.description.required)
                  .max(255, validationMessages.description.fieldLength),
    image: Yup.mixed().required(validationMessages.image.required)
                .test( "fileFormat", "Solo formato .jpg y .png",
                  value => value && FORMAT.includes(value.type)
                ),
    due_date: Yup.string().required(validationMessages.date.required)
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