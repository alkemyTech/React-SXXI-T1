import { CustomTitle } from "Components/GlobalComponents/CustomTitle/CustomTitle";
import { Link } from "react-router-dom";
import CarouselComponent from "./carousel/Carousel";
import {
  MainContainer,
  TitleContainer,
  Container1,
  ContainerImageAndP,
  Container2,
  MembAndTest,
  ORGImage,
} from "./index.Styled";
import { CustomButton } from "Components/GlobalComponents/CustomButton/CustomButton";
import { privateRoutes, routes } from "models/routes";
import { useEffect, useState } from "react";
import { api } from "Services/axiosService";
import Swal from "sweetalert2";

const Home = () => {
  const [info, setInfo] = useState({
    welcomeText: "",
    organizationImage: "",
    shortDescription: "",
  });

  useEffect(() => {
    api("/organization")
      .then((res) => {
        const { data } = res.data;
        setInfo({
          welcomeText: data.welcome_text,
          organizationImage: data.logo,
          shortDescription: data.short_description,
        });
      })
      .catch(() => {
        Swal.fire({
          title: "Hubo un error",
          icon: "error",
          confirmButtonColor: "#0038FF",
          confirmButtonText: "Aceptar",
        });
      });
  }, []);

  return (
    <MainContainer>
      <TitleContainer>
        <CustomTitle
          title={info.welcomeText ? info.welcomeText : "Bienvenida/o"}
          height="none"
        />
      </TitleContainer>

      <CarouselComponent endPoint="slides" content="description" />

      <ContainerImageAndP className="rounded">
        <p dangerouslySetInnerHTML={{ __html: info.shortDescription }} />
        <ORGImage src={info.organizationImage} alt="Logo de la organización" />
      </ContainerImageAndP>

      <MembAndTest className="rounded">
        <Container1 className="col-10 col-sm-6 col-md-5 rounded">
          <Container2>
            <h4>Miembros: </h4>
            <Link to={routes.MEMBERS}>
              <CustomButton
                text={`Ver más...`}
                color="success"
                background="success"
              />
            </Link>
          </Container2>
          <CarouselComponent endPoint="members" content="description" />
        </Container1>
        <Container1 className="col-10 col-sm-6 col-md-5 rounded">
          <Container2>
            <h4>Testimonios: </h4>
            <Link to={routes.TESTIMONIALS}>
              <CustomButton
                text={`Ver más...`}
                color="success"
                background="success"
              />
            </Link>
          </Container2>
          <CarouselComponent endPoint="testimonials" content="description" />
        </Container1>
      </MembAndTest>

      <Container1 className="rounded">
        <Container2>
          <h4>Novedades: </h4>
          <Link to={routes.NEWS}>
            <CustomButton
              text={`Ver más...`}
              color="success"
              background="success"
            />
          </Link>
        </Container2>
        <CarouselComponent endPoint="news" content="content" />
      </Container1>
    </MainContainer>
  );
};

export default Home;
