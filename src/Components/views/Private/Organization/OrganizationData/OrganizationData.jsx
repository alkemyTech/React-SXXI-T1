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
import { api } from "Services/axiosService";
import Swal from "sweetalert2";
import { CustomButton } from "Components/GlobalComponents/CustomButton/CustomButton";
import { CustomTitle } from "Components/GlobalComponents/CustomTitle/CustomTitle";

export default function OrganizationData() {
  const navigate = useNavigate();
  const [organizationData, setOrganizationData] = useState({
    name: "",
    image: "",
    shortDescription: "",
  });
  const urlNavigate = "/backoffice/organization/edit";

  useEffect(() => {
    api
      .get("/organization")
      .then((res) => {
        const { data } = res.data;
        setOrganizationData({
          name: data.name,
          image: data.logo,
          shortDescription: data.short_description,
        });
      })
      .catch(() => {
        Swal.fire({
          title: "Hubo un error",
          icon: "error",
          confirmButtonColor: "#0038FF",
          confirmButtonText: "Aceptar",
        }).then(() => {
          navigate("/backoffice");
        });
      });
  }, [navigate]);

  function handleClick() {
    navigate(urlNavigate);
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
          onClick={handleClick}/>
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
