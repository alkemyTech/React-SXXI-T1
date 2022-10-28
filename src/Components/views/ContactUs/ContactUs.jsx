import { ContainerContactStyled, TitleContactStyled, ContactFormStyled, Errors,
    TextAreaStyled, InputStyled, ButtonContact, ContainerInputError} from "./ContactUs.Styled";
import { Form } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom/dist";

export default function ContactUs(){
    const navigate = useNavigate();
    const initialValues = {
        fullname: '',
        email: '',
        phone: '',
        message: ''
    };
    function onSubmit(){
        values.fullname = '';
        values.email = '';
        values.phone = '';
        values.message = '';
        alert('hola buenas');
    }
    function handleClickIraInicio(){
        navigate('/');
    }
    const required='Campo obligatorio';
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const validationSchema = Yup.object().shape({
        fullname: Yup.string().required(required),
        email : Yup.string().email('Debe ser un email valido').required(required),
        phone: Yup.string().min(8,'Debe contener al menos 8 digitos')
                  .matches(phoneRegExp, 'Debe ser un numero de telefono valido')
                  .required(required),
        message: Yup.string().required(required)
    });
    const formik = useFormik({initialValues, onSubmit, validationSchema});
    const {handleChange, handleSubmit, values, errors, handleBlur, touched} = formik;
    return(
        <ContainerContactStyled className="col-12">
            <TitleContactStyled>¡Contactate con nosotros!</TitleContactStyled>
            <ContactFormStyled onSubmit={handleSubmit} >
                <Form.Group className="mb-3" >
                    <ContainerInputError>
                        <InputStyled type='text' placeholder='Nombre y Apellido'
                            className='col-12 col-sm-9 col-lg-7' as='input'
                            name='fullname' value={values.fullname} 
                            onBlur={handleBlur} onChange={handleChange}/>
                        {errors.fullname && touched.fullname && <Errors>{errors.fullname}</Errors>}
                    </ContainerInputError>
                    <ContainerInputError>
                        <InputStyled type='email' placeholder='Email' 
                            className='col-12 col-sm-9 col-lg-7' as='input'
                            name='email' value={values.email} 
                            onBlur={handleBlur} onChange={handleChange}/>
                        {errors.email && touched.email && <Errors>{errors.email}</Errors>}
                    </ContainerInputError>
                    <ContainerInputError>
                        <InputStyled type='tel' placeholder='Telefono o Celular'
                            className='col-12 col-sm-9 col-lg-7' as='input'
                            name='phone' value={values.phone} 
                            onBlur={handleBlur} onChange={handleChange}/>
                        {errors.phone && touched.phone && <Errors>{errors.phone}</Errors>}
                    </ContainerInputError>
                    <ContainerInputError>
                        <TextAreaStyled type='text' placeholder='Escribe tu consulta'
                            className='col-12 col-sm-9 col-lg-7' rows='8'
                            as='textarea' name='message' value={values.message} 
                            onBlur={handleBlur} onChange={handleChange}/>
                        {errors.message && touched.message && <Errors>{errors.message}</Errors>}
                    </ContainerInputError>
                </Form.Group>
                <ButtonContact
                    color="default"
                    backGround="succes"
                    type="submit">Enviar Consulta</ButtonContact>
            </ContactFormStyled>
            <ButtonContact
                    color="default"
                    backGround="succes"
                    type='button'
                    onClick={handleClickIraInicio}
            >Ir al inicio</ButtonContact>
        </ContainerContactStyled>
    )
}