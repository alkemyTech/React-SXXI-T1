import {
  Container,
  Image,
  ContainerEditInf,
  Paragraph,
  ContainerImage,
  Container1
} from "./OrganizationDataStiled/OrganizationData.Styled";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import publicService from "Services/publicApiService";
import { URLs } from "Services/ServicesURLS";
import { feedbackUser } from "utilities/alerts/feedbackUser.util";
import { CustomButton } from "Components/GlobalComponents/CustomButton/CustomButton";
import { CustomTitle } from "Components/GlobalComponents/CustomTitle/CustomTitle";

export default function OrganizationData() {
  const navigate = useNavigate();
  const [organizationData, setOrganizationData] = useState({
    name: "",
    image: "",
    shortDescription: "",
  });

  useEffect(() => {
    const req = async () => {
      const info = await publicService.get(URLs.organization);
      if(info.success){
        const {data} = info;
        setOrganizationData({
          name: data.name,
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
        <CustomButton
          buttonClass="col-12 col-sm-4 col-lg-3"
          text='Editar Información'
          background="success"
          color="success"
          onClick={toEdit}/>
      </ContainerEditInf>
      <Container1>
      <CustomTitle wrapTextClass="text-center" title={organizationData.name} height='none'/>
      
      <ContainerImage>
        <Image src={organizationData.image} alt={organizationData.name ? organizationData.name : 'Somos Más logo'} />
      </ContainerImage>
      <Paragraph
        dangerouslySetInnerHTML={{ __html: organizationData.shortDescription }}
      />
      </Container1>
    </Container>
  );
}
