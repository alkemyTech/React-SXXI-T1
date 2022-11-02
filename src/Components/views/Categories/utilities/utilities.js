import * as Yup from 'yup';

const nameRegExp = /[a-z, A-Z]/
export const validationSchema = Yup.object().shape({
    name: Yup.string()
            .matches( nameRegExp, 'Debe ser un nombre valido' )
            .min( 4, 'El nombre debe contener almenos 4 caracteres' )
            .required( 'Campo obligatorio' ),
    image: Yup.mixed().required( 'Campo obligatorio' )
            .test( "fileFormat", "Solo formato .jpg y .png",
                value => value?.includes('.png'||'.jpg')
            ),
    description: Yup.string().required( 'Campo obligatorio' )
});