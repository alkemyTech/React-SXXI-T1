import { useAbout } from "./hook/useAbout";
import { CustomTitle } from "Components/CustomTitle/CustomTitle";
import { MainContainer, CustomText } from "./about.styled";
import Members from "../Members/Detail/Members";
import { useSkeleton } from "hooks/useSkeleton";

const About = () => {
  const { loadingAbout, aboutData } = useAbout();
  const { titleSkeleton, textSkeleton } = useSkeleton();

  return (
    <MainContainer>
      <div>
        <CustomTitle title="Nosotros" wrapTitleClass="d-block h-auto" justify="center" />
      </div>
      <CustomText className="mb-5">{loadingAbout ? <>{textSkeleton}</> : <p>{aboutData.longDescription}</p>}</CustomText>
      <div>
        {aboutData.title !== "" ? (
          <CustomTitle title="Lista de miembros" justify="center" wrapTextClass="text-center" wrapTitleClass="h-auto" />
        ) : (
          <>{titleSkeleton}</>
        )}
      </div>
      <Members />
    </MainContainer>
  );
};

export default About;
