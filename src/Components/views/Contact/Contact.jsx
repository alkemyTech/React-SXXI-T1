import { CustomTitle } from "Components/GlobalComponents/CustomTitle/CustomTitle";
import ContactForm from "./ContactForm/ContactForm";
import { Icon, Container, ContainerIcon } from './Contact.Styled';
import facebookIcon from 'assets/facebookIcon2.svg';
import InstagramIcon from 'assets/instagramIcon3.svg';
import TwitterIcon from 'assets/icon-twitter.svg';
import LinkedinIcon from 'assets/linkedin2.svg';

export default function Contact({ facebookURL, instagramURL, twitterURL, linkedinURL, phone }){

    return(
        <div>
            <CustomTitle title='Contacto' height="5rem" justify="center"/>
            <p style={{fontSize: '1.5rem', marginTop: '1rem'}}>
                Podes contactarte con nosotros a través de:
            </p>
            <Container>
                <ContainerIcon>
                    <p>Facebook: </p>
                    <a href={facebookURL} target="_blank" rel="noopener noreferrer">
                        <Icon src={facebookIcon} alt="icono de Facebook" />
                    </a>
                </ContainerIcon>
                <ContainerIcon>
                    <p>Instagram: </p>
                    <a href={instagramURL} target="_blank" rel="noopener noreferrer">
                        <Icon src={InstagramIcon} alt="icono de Instagram" />
                    </a>
                </ContainerIcon>
                <ContainerIcon>
                    <p>Twitter: </p>
                    <a href={twitterURL} target="_blank" rel="noopener noreferrer">
                        <Icon src={TwitterIcon} alt="icono de Twitter" />
                    </a>
                </ContainerIcon>
                <ContainerIcon>
                    <p>Linkedin: </p>
                    <a href={linkedinURL} target="_blank" rel="noopener noreferrer">
                        <Icon src={LinkedinIcon} alt="icono de Linkedin" />
                    </a>
                </ContainerIcon>
                <ContainerIcon>
                    <p>Telefono: </p>
                    <p>{phone}</p>
                </ContainerIcon>
            </Container>
            <p style={{fontSize: '1.5rem', marginTop: '0.5rem'}}>
                O llenando el siguiente formulario:
            </p>
            <ContactForm />
        </div>
    )
}