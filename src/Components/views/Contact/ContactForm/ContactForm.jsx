import { ContainerContactStyled, ContactFormStyled, Errors,
    TextAreaStyled, InputStyled, Button, ContainerInputError,
    ButtonIrInicio} from "./ContactForm.Styled";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom/dist";
import { useContact } from "./useContactHook/useContact";

export default function ContactForm(){
    const navigate = useNavigate();
    const { handleSubmit, handleBlur, handleChange, values, errors, touched } = useContact();

    function handleClickIraInicio(){
        navigate('/');
    }
    
    return(
        <ContainerContactStyled className="col-12 mb-5">
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
                <Button
                    color="default"
                    background="success"
                    type="submit">
                        Enviar Consulta
                </Button>
            </ContactFormStyled>
            <ButtonIrInicio
                color="default"
                type='button'
                onClick={handleClickIraInicio}>
                    Ir al inicio
            </ButtonIrInicio>
        </ContainerContactStyled>
    )
}