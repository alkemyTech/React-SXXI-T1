import { CustomTitle } from "Components/GlobalComponents/CustomTitle/CustomTitle";
import ContactForm from "./ContactForm/ContactForm";

export default function Contact(props){

    return(
        <div>
            <CustomTitle title='Contacto' height="5rem" justify="center"/>
            <div style={{display: 'flex', gap: '1rem', marginTop: '1rem'}}>
                <a href={props.facebook} target="_blank" rel="noopener noreferrer">
                    <h4>Facebook</h4>
                </a>
                <a href={props.instagram} target="_blank" rel="noopener noreferrer">
                    <h4>Instagram</h4>
                </a>
                <a href={props.twitter} target="_blank" rel="noopener noreferrer">
                    <h4>Twitter</h4>
                </a>
                <a href={props.linkedin} target="_blank" rel="noopener noreferrer">
                    <h4>Linkedin</h4>
                </a>
            </div>
            <ContactForm />
        </div>
    )
}