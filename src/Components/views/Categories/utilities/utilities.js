import * as Yup from 'yup';

const nameRegExp = /[a-z, A-Z]/;
// const FORMAT = ['image/png', 'image/jpg'];
export const validationSchema = Yup.object().shape({
    name: Yup.string()
            .matches( nameRegExp, 'Debe ser un nombre valido' )
            .min( 4, 'El nombre debe contener almenos 4 caracteres' )
            .required( 'Campo obligatorio' ),
    image: Yup.mixed().required( 'Campo obligatorio' )
            .test( "fileFormat", "Solo formato .jpg y .png",
                value => value?.includes('image/png' || 'image/jpg')
            ),
    description: Yup.string().required( 'Campo obligatorio' )
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