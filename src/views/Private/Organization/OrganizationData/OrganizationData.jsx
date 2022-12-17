import {
  Container,
  Image,
  ContainerEditInf,
  Paragraph,
  ContainerImage,
  Container1,
  ButtonEdit,
} from "./OrganizationDataStiled/OrganizationData.Styled";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import publicService from "Services/publicApiService";
import { URLs } from "Services/ServicesURLS";
import { feedbackUser } from "utilities/alerts/feedbackUser.util";
import { CustomTitle } from "Components/CustomTitle/CustomTitle";
import { SkeletonLoader } from "Components/Loading/SkeletonLoader/SkeletonLoader";
import { BackTo } from "Components/BackTo/BackTo";
import { privateRoutes } from "models/routes";

export default function OrganizationData() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [organizationData, setOrganizationData] = useState({
    name: "",
    image: "",
    shortDescription: "",
  });

  useEffect(() => {
    setLoading(true);
    publicService
      .get(URLs.organization)
      .then((res) => {
        if (res.success) {
          const { data } = res;
          setOrganizationData({
            name: data.name,
            image: data.logo,
            shortDescription: data.short_description,
          });
        } else {
          feedbackUser("center", "error", "Ha ocurrido un error");
        }
      })
      .catch(() => feedbackUser("center", "error", "Ha ocurrido un error"))
      .finally(() => setLoading(false));
  }, []);

  function toEdit() {
    navigate("edit");
  }

  return (
    <Container>
      <ContainerEditInf>
        <BackTo text="Ir a Dashboard" wrapLink="col-12 col-sm-4 col-md-5 col-lg-3" to={"/" + privateRoutes.BACKOFFICE} />
        <ButtonEdit className="col-12 col-sm-4 col-lg-3" onClick={toEdit}>
          Editar Información
        </ButtonEdit>
      </ContainerEditInf>
      <h3>Datos de la Organización:</h3>
      <Container1>
        {loading ? (
          <>
            <SkeletonLoader xs={12} />
            <SkeletonLoader xs={12} />
            <SkeletonLoader xs={12} />
            <SkeletonLoader xs={12} />
            <SkeletonLoader xs={12} />
            <SkeletonLoader xs={12} />
            <SkeletonLoader xs={12} />
          </>
        ) : (
          <>
            <CustomTitle wrapTextClass="text-center" title={organizationData.name ? organizationData.name : "Sin titulo"} height="none" />

            <ContainerImage>
              <Image src={organizationData.image} alt={organizationData.name ? organizationData.name : "Sin logo"} />
            </ContainerImage>
            <Paragraph
              dangerouslySetInnerHTML={{ __html: organizationData.shortDescription ? organizationData.shortDescription : "Sin descripción" }}
            />
          </>
        )}
      </Container1>
    </Container>
  );
}
