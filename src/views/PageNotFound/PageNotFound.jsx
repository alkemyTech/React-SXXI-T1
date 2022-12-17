import notFound from "assets/pageNotFound.png";
import { ImageBody } from "../Donations/styled-components/BodyDonation.styled";
import ComponentErrorView from "Components/ComponentErrorView/ComponentErrorView";

const PageNotFound = () => {
  return (
    <ComponentErrorView text="No existe la página que buscas. Te enviaremos a la página principal">
      <ImageBody image={notFound} height="380px" borderRadius="8px" />
    </ComponentErrorView>
  );
};

export default PageNotFound;
