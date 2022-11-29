import { useAbout } from "./hook/useAbout"
import { CustomTitle } from "Components/GlobalComponents/CustomTitle/CustomTitle"
import { MainContainer, CustomText } from "./about.styled"
import Members from "../Members/Detail/Members"
import { useSkeleton } from "hooks/useSkeleton"


const About = () => {
  const { loadingAbout, aboutData, fetchAbout } = useAbout();
  const { titleSkeleton, textSkeleton } = useSkeleton();

  return (
    <MainContainer>
      <div>
        {aboutData.title !== "" ?
          <CustomTitle
            title="Nosotros"
            wrapTitleClass="d-block h-auto"
            justify="center"   
          />
          :
          <>
            {  titleSkeleton }
          </>
        }
      </div>
      <CustomText className="mb-5">
        {aboutData.longDescription !== "" ?
          <p>{aboutData.longDescription}</p>
          :
          <>
            { textSkeleton }
          </>
        }
      </CustomText>
      <div>
        {aboutData.title !== "" ?
          <CustomTitle
            title="Lista de miembros"
            justify="center"   
            wrapTextClass="text-center" 
            wrapTitleClass="h-auto" 
          />
          :
          <>
            {  titleSkeleton }
          </>
        }
    </div>
      <Members />
    </MainContainer>
  )
}

export default About;