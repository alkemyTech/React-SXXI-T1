import { CustomTitle } from "Components/GlobalComponents/CustomTitle/CustomTitle";
import { Link } from "react-router-dom";
import CarouselComponent from "./carousel/Carousel";
import { MainContainer, Container1, ContainerImageAndP,
  Container2, MembAndTest, ORGImage } from './indexStyled/index.Styled';
import { CustomButton } from "Components/GlobalComponents/CustomButton/CustomButton";
import { routes } from "models/routes";
import { useEffect, useState } from "react";
import { api } from "Services/axiosService";
import Swal from "sweetalert2";

const Home = () => {
  const [info, setInfo] = useState({
    welcomeText: '',
    organizationImage: '',
    shortDescription: ''
  });

  useEffect(() => {
    api('/organization')
    .then(res => {
      const {data} = res.data;
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
    <MainContainer className="mt-3 mb-5">
      
      <div>
        <CustomTitle title={ info.welcomeText ? info.welcomeText : 'Bienvenida/o'} height='none'/>
      </div>

      <CarouselComponent endPoint='slides' content='description' hmin={'300px'} hmed={'350px'} hmax={'460px'}/>
      
      <ContainerImageAndP className='rounded'>
        <p dangerouslySetInnerHTML={{__html: info.shortDescription}}/>
        <ORGImage className='shadow' src={info.organizationImage} alt='Logo de la organización'/>
      </ContainerImageAndP>
      <div className='p-3' style={{backgroundColor: '#c0c0c021'}}>
        <MembAndTest className="rounded">
          <Container1 className="col-10 col-sm-8 col-md-6 col-lg-5 col-xl-4 rounded">
            <Container2>
              <h4>Miembros: </h4>
              <Link to={routes.ABOUT}>
                <CustomButton text={`Ver más...`} color="success" background="success"/>
              </Link>
            </Container2>
            <CarouselComponent endPoint='members' content='description'/>
          </Container1>
          <Container1 className="col-10 col-sm-8 col-md-6 col-lg-5 col-xl-4 rounded">
            <Container2>
              <h4>Testimonios: </h4>
              <Link to={routes.TESTIMONIALS}>
                <CustomButton text={`Ver más...`} color="success" background="success"/>
              </Link>
            </Container2>
            <CarouselComponent endPoint='testimonials' content='description'/>
          </Container1>
        </MembAndTest>
        <div className="d-flex justify-content-center">
          <Container1 className="col-10 col-sm-8 col-md-12 col-lg-11 col-xl-10 rounded">
            <Container2>
              <h4>Novedades: </h4>
              <Link to={routes.NEWS}>
                <CustomButton text={`Ver más...`} color="success" background="success"/>
              </Link>
            </Container2>
            <CarouselComponent endPoint='news' content='content'/>
          </Container1>
        </div>
      </div>
    </MainContainer>
  );
};

export default Home;
