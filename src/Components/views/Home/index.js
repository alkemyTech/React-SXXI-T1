import { CustomTitle } from "Components/GlobalComponents/CustomTitle/CustomTitle";
import { Link } from "react-router-dom";
import CarouselComponent from "./carousel/Carousel";
import { MainContainer, Container1, ContainerImageAndP,
  Container2, MembAndTest, ORGImage, Container3 } from './indexStyled/index.Styled';
import { CustomButton } from "Components/GlobalComponents/CustomButton/CustomButton";
import { routes } from "models/routes";
import { useEffect } from "react";
import prublicService from "Services/publicApiService";
import { URLs } from "Services/ServicesURLS";
import { useIndexHook } from "./useIndexHook/useIndexHook";
import { Collapse } from "react-bootstrap";
import { feedbackUser } from "utilities/alerts/feedbackUser.util";

const Home = () => {
  const {info, setInfo, minSize, show, handleClick, handleResize, handleShow} = useIndexHook();
  useEffect(() => {
    prublicService.get(URLs.organization)
      .then(res => {
        const { data } = res;
        if(res.success) {
          setInfo({
            welcomeText: data.welcome_text,
            organizationImage: data.logo,
            shortDescription: data.short_description,
          });
        } else feedbackUser('center', 'error', 'Ha ocurrido un error');
      })
      .catch(() => feedbackUser('center', 'error', 'Ha ocurrido un error'));

  }, [setInfo]);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);
   
  return (
    <MainContainer className="mt-3 mb-5">
      
      <div className="text-center">
        <CustomTitle title={ info.welcomeText ? info.welcomeText : 'Bienvenida/o'} height='none'/>
      </div>

      <CarouselComponent endPoint='slides' content='description' hsm={'200px'} hmd={'250px'} hlg={'350px'} hxl={'500px'}/>
      
      <ContainerImageAndP className='rounded'>
        { minSize ? 
            <Container3>
              <CustomButton onClick={handleShow} text={show ? 'Ocultar' : 'Ver'}/>
              <Collapse in={show} timeout={500}>
                <p dangerouslySetInnerHTML={{ __html: info.shortDescription }}/>
              </Collapse>
            </Container3>
                  : 
            <p dangerouslySetInnerHTML={{ __html: info.shortDescription }}/>}
        
        <ORGImage className='shadow' src={info.organizationImage} alt='Logo de la organización'/>
      </ContainerImageAndP>
      <div className='p-3' style={{backgroundColor: '#c0c0c021'}}>
        <MembAndTest className="rounded">
          <Container1 className="col-10 col-sm-8 col-md-6 col-lg-5 col-xl-4 rounded">
            <Container2>
              <h4>Miembros: </h4>
              <Link to={routes.ABOUT}>
                <CustomButton text={`Ver más`} color="success" background="success"/>
              </Link>
            </Container2>
            <CarouselComponent endPoint='members' content='description' hxs={'300px'} hsm={'380px'} hxl={'480px'}/>
          </Container1>
          <Container1 className="col-10 col-sm-8 col-md-6 col-lg-5 col-xl-4 rounded">
            <Container2>
              <h4>Testimonios: </h4>
                <CustomButton text={`Ver más`} color="success" background="success" onClick={handleClick}/>
            </Container2>
            <CarouselComponent endPoint='testimonials' content='description' hxs={'300px'} hsm={'380px'} hxl={'480px'}/>
          </Container1>
        </MembAndTest>
        <div className="d-flex justify-content-center">
          <Container1 className="col-12 col-sm-8 col-md-12 col-lg-11 col-xl-10 rounded">
            <Container2>
              <h4>Novedades: </h4>
              <Link to={routes.NEWS}>
                <CustomButton text={`Ver más`} color="success" background="success"/>
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