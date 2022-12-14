import { SubtitleText, TitleText } from "styled-components/App.styled";
import notFound from "assets/pageNotFound.png";
import { WrapPageNotFound } from "./styled-components/WrapPageNotFound.styled";
import { ImageBody } from "../Donations/styled-components/BodyDonation.styled";
import { CustomButton } from "Components/GlobalComponents/CustomButton/CustomButton";
import { usePageNotFound } from "./hooks/usePageNotFound";

const PageNotFound = () => {
  const { seconds, handleRedirectToHome } = usePageNotFound();

  return (
    <WrapPageNotFound className="my-5">
      <div className="col col-12 col-sm-7 rounded">
        <ImageBody image={notFound} height="380px" borderRadius="8px" />
      </div>
      <div className="col col-12 col-sm-8 col-md-4 my-3 my-md-0 d-flex flex-column justify-content-center align-items-center">
        <TitleText>{seconds}</TitleText>
        <SubtitleText className="text-center">No encontramos lo que buscas. Te enviaremos a la página principal</SubtitleText>
        <CustomButton buttonClass="mt-2 col col-7 col-sm-8 col-md-6" text="Ir a home" onClick={handleRedirectToHome} />
      </div>
    </WrapPageNotFound>
  );
};

export default PageNotFound;
