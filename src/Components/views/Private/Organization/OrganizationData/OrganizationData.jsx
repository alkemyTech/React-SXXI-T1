import {
  Container,
  Image,
  ContainerEditInf,
  EditButton,
  ContainerImage,
} from "./OrganizationDataStiled/OrganizationData.Styled";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import publicService from "Services/publicApiService";
import { URLs } from "Services/ServicesURLS";
import { feedbackUser } from "utilities/alerts/feedbackUser.util";

export default function OrganizationData() {
  const navigate = useNavigate();
  const [organizationData, setOrganizationData] = useState({
    welcomeText: "",
    image: "",
    shortDescription: "",
  });

  useEffect(() => {
    const req = async () => {
      const info = await publicService.get(URLs.organization);
      if(info.success){
        const {data} = info;
        setOrganizationData({
          welcomeText: data.welcome_text,
          image: data.logo,
          shortDescription: data.short_description
        });
      }else{
        feedbackUser('center', 'error', 'Ha ocurrido un error');
      }
    }
    req();
  }, []);

  function toEdit() {
    navigate('edit');
  }

  return (
    <Container>
      <ContainerEditInf>
        <h3>Datos de la Organización:</h3>
        <EditButton
          background="success"
          color="success"
          type="button"
          onClick={toEdit}
        >
          Editar Información
        </EditButton>
      </ContainerEditInf>

      <h1 style={{ textAlign: "center" }}>{organizationData.welcomeText}</h1>
      <ContainerImage>
        <Image src={organizationData.image} alt={organizationData.welcomeText} />
      </ContainerImage>
      <div
        dangerouslySetInnerHTML={{ __html: organizationData.shortDescription }}
      />
    </Container>
  );
}
