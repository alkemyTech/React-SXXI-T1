import { useAbout } from "./hook/useAbout";
import { CustomTitle } from "Components/GlobalComponents/CustomTitle/CustomTitle";
import { MainContainer, CustomText } from "./about.styled";
import Members from "../Members/Detail/Members";
import { SpinnerLoad } from "Components/GlobalComponents/SpinnerLoad/SpinnerLoad";


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
        {info.longDescription !== "" ?
          <p>{info.longDescription}</p>
          :
          <SpinnerLoad />
        }
      </CustomText>
      <div>
        <CustomTitle
          title="Lista de miembros"
          justify="center"   
          wrapTextClass="text-center" 
          wrapTitleClass="h-auto" 
        />
      </div>
      <Members/>
    </MainContainer>
  )
}

export default About;