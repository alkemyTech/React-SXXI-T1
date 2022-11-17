import { useAbout } from "./hook/useAbout";
import { CustomTitle } from "Components/GlobalComponents/CustomTitle/CustomTitle";
import MembersList from "../Members/MembersList";
import { MainContainer, CustomText } from "./about.styled";

const About = () => {
  const info = useAbout();
 
  return (
    <MainContainer>
      <div>
        <CustomTitle
          title="Nosotros"
          wrapTitleClass="d-block h-auto"
          justify="center"   
        />
      </div>
      <CustomText className="mb-5">
        <p>{info.longDescription}</p>
      </CustomText>
      <div>
        <CustomTitle
          title="Lista de miembros"
          justify="center"   
          wrapTextClass="text-center" 
          wrapTitleClass="h-auto" 
        />
      </div>
      <MembersList />
    </MainContainer>
  )
}

export default About;