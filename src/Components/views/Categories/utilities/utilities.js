import * as Yup from 'yup';
import Swal from 'sweetalert2';

const nameRegExp = /[a-z, A-Z]/;
const FORMAT = ['image/png', 'image/jpg', 'image/jpeg'];
export const validationSchema = Yup.object().shape({
    name: Yup.string()
            .matches( nameRegExp, 'Debe ser un nombre valido' )
            .min( 4, 'El nombre debe contener almenos 4 caracteres' )
            .required( 'Campo obligatorio' ),
    image: Yup.mixed().required( 'Campo obligatorio' )
            .test( "fileFormat", "Solo formato .jpg y .png",
                value => value && FORMAT.includes(value.type)
            ),
    description: Yup.string().required( 'Campo obligatorio' )
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