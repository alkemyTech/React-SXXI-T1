import { ContainerContactStyled, InputStyled, TitleContactStyled, 
    InputMessageStyled} from "./ContactUs.Styled"

export default function ContactUs(){

    return(
        <ContainerContactStyled>
            <TitleContactStyled>¡Contactate con nosotros!</TitleContactStyled>
            <InputStyled type='text' placeholder='Nombre y Apellido'/>
            <InputStyled type='email' placeholder='Email'/>
            <InputStyled type='tel' placeholder='Telefono o Celular'/>
            <InputMessageStyled rows='8' cols='8'/>
        </ContainerContactStyled>
    )
}