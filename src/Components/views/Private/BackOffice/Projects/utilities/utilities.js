import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { validationMessages } from 'utilities/validationMessage.util';
import { FILE_SIZE } from 'Components/GlobalComponents/FormImageField/utilities/ImageFieldSchemas.util';

const FORMAT = ['image/png', 'image/jpg', 'image/jpeg'];

export const activityValidationSchema = (
    id
  ) => {
    const validationSchema = Yup.object().shape({
        title : Yup.string().required(validationMessages.title.required),
        description: Yup.string().required(validationMessages.description.required),
        image: Yup.mixed()
            .test("format", validationMessages.image.format, (value) => {
                return id
                    ? value
                    : value && FORMAT.includes(value.type);
                }
            )
            .test(
                "fileSize", 
                validationMessages.image.fieldSize,
                (value) =>
                    id ? value : value && value.size <= FILE_SIZE
            )
            .required(validationMessages.image.required),
        due_date: Yup.string().required(validationMessages.due_date.required)
    });

    return validationSchema;
}

export const convertToBase64 = (image, setImage) => {
    const reader = new FileReader();
    
    reader.onloadend = function () {
        setImage(reader.result.toString());
    };

    reader.readAsDataURL(image);
    
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