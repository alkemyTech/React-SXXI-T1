import { CustomTitle } from "Components/CustomTitle/CustomTitle";
import ContactForm from "./ContactForm/ContactForm";
import { Icon, Container, ContainerIcon, Paragraph1, Paragraph2 } from "./ContactStyled/Contact.Styled";
import facebookIcon from "assets/facebookIcon2.svg";
import InstagramIcon from "assets/instagramIcon3.svg";
import TwitterIcon from "assets/icon-twitter.svg";
import LinkedinIcon from "assets/linkedin2.svg";
import publicService from "Services/publicApiService";
import { URLs } from "Services/ServicesURLS";
import { feedbackUser } from "utilities/alerts/feedbackUser.util";
import { useEffect, useState } from "react";
import { requestMessagesSchema } from "utilities/requestMessagesSchema.util";

export default function Contact() {
  const [ORGInfo, setORGInfo] = useState();
  useEffect(() => {
    publicService
      .get(URLs.organization)
      .then((res) => {
        setORGInfo(res.data);
      })
      .catch(() => feedbackUser("center", "error", `${requestMessagesSchema.problemExistTryLater}`));
  }, []);

  return (
    <div className="mt-3 mb-5">
      <CustomTitle title="Contacto" height="none" justify="center" />
      <Paragraph1>Podes contactarte con nosotros a través de:</Paragraph1>
      <Container>
        <ContainerIcon>
          <Paragraph2>
            <i>Facebook: </i>
          </Paragraph2>
          <a href={ORGInfo?.facebook_url} target="_blank" rel="noopener noreferrer">
            <Icon src={facebookIcon} alt="icono de Facebook" />
          </a>
        </ContainerIcon>
        <ContainerIcon>
          <Paragraph2>
            <i>Instagram: </i>
          </Paragraph2>
          <a href={ORGInfo?.instagram_url} target="_blank" rel="noopener noreferrer">
            <Icon src={InstagramIcon} alt="icono de Instagram" />
          </a>
        </ContainerIcon>
        <ContainerIcon>
          <Paragraph2>
            <i>Twitter: </i>
          </Paragraph2>
          <a href={ORGInfo?.twitter_url} target="_blank" rel="noopener noreferrer">
            <Icon src={TwitterIcon} alt="icono de Twitter" />
          </a>
        </ContainerIcon>
        <ContainerIcon>
          <Paragraph2>
            <i>Linkedin: </i>
          </Paragraph2>
          <a href={ORGInfo?.linkedin_url} target="_blank" rel="noopener noreferrer">
            <Icon src={LinkedinIcon} alt="icono de Linkedin" />
          </a>
        </ContainerIcon>
        <ContainerIcon>
          <Paragraph2>
            <i>Teléfono: </i>
          </Paragraph2>
          <Paragraph2>
            <i>{ORGInfo?.phone}</i>
          </Paragraph2>
        </ContainerIcon>
      </Container>
      <Paragraph1>O llenando el siguiente formulario:</Paragraph1>
      <ContactForm />
    </div>
  );
}
