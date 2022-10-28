import { ContainerContactStyled, TitleContactStyled, ContactFormStyled 
} from "./ContactUs.Styled";
import { GlobalInputStyled } from "styled-components/GlobalFormStyled/GlobalInput.styled";
import { Form } from "react-bootstrap";
import { GlobalButton } from "Components/GlobalComponents/GlobalButton/GlobalButton";
import { useState } from "react";

export default function ContactUs(){
    const [data, setData] = useState({
        fullname: '',
        email: '',
        phone: '',
        message: ''
    });
    function handleChange(e){
        e.preventDefault();
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }
    function handleSubmit(e){
        e.preventDefault();
        setData({
            fullname: '',
            email: '',
            phone: '',
            message: ''
        });
        alert('hola buenas');
    }
    function handleClick(e){
        e.preventDefault();
        alert('Hola');
    }
    console.log(data);
    return(
        <ContainerContactStyled className="col-12">
            <TitleContactStyled>¿Queres contribuir?</TitleContactStyled>
            <GlobalButton
                className='col col-10'
                buttonClass = 'button'
                color = "default"
                backGround = "default"
                onClick = {handleClick}
                text = 'Contribuir'
                type = "button"
                />
            <TitleContactStyled>¡Contactate con nosotros!</TitleContactStyled>
            <ContactFormStyled onSubmit={handleSubmit} >
                <Form.Group className="mb-3" >

                    <GlobalInputStyled type='text' placeholder='Nombre y Apellido'
                        className='mb-3 col col-sm-10 col-md-12'
                        name='fullname' value={data.fullname} onChange={handleChange}/>

                    <GlobalInputStyled type='email' placeholder='Email' 
                        className='mb-3 col col-sm-10 col-md-12'
                        name='email' value={data.email} onChange={handleChange}/>

                    <GlobalInputStyled type='tel' placeholder='Telefono o Celular'
                        className='mb-3 col col-sm-10 col-md-12'
                        name='phone' value={data.phone} onChange={handleChange}/>

                    <GlobalInputStyled type='text' placeholder='Escribe tu consulta'
                        className='mb-3 col col-sm-10 col-md-12'
                    as='textarea' name='message' value={data.message} 
                     onChange={handleChange}/>
                    
                </Form.Group>
                <GlobalButton 
                    buttonClass = 'button'
                    color = "default"
                    backGround = "succes"
                    text = 'Enviar Consulta'
                    type = "submit"
                />
            </ContactFormStyled>
            <GlobalButton 
                    buttonClass='button'
                    color="default"
                    backGround="succes"
                    text='Ir al inicio'
                    type="submit"
                    className='col col-10 col-sm-5 mt-2'
            />
        </ContainerContactStyled>
    )
}