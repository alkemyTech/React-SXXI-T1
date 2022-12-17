import { ImageAuth, WrapAuth } from "./styled.components/Auth.styled";
import handsPorra from "assets/handsPorra.png";
import { WrapFirstCol, WrapImageSecondCol } from "styled-components/App.styled";
import { LinkReactRouter } from "Components/LinkReactRouter/LinkReactRouter";
import { SpinnerLoad } from "Components/Loading/SpinnerLoad/SpinnerLoad";
import { authSchemas } from "./utilities/schemas";
import { useAuth } from "./hooks/useAuth";

const Auth = () => {
  const { whatFormRender, whatForm, loadingUser } = useAuth();

  return (
    <WrapAuth className="mb-2 col col-12 d-flex flex-column flex-sm-row justify-content-center align-items-center">
      <WrapFirstCol className="col col-10 col-sm-6 d-flex flex-column align-items-center justify-content-between">
        {whatFormRender}
        <LinkReactRouter
          text={authSchemas[whatForm]["linkText"]}
          to={authSchemas[whatForm]["toLink"]}
          color="light"
          background="rgba(0,0,0, 0)"
          border="none"
          borderRadius="none"
          wrapLink="border-bottom border-dark"
          linkClass="rounded-top"
        />
        {loadingUser && <SpinnerLoad />}
      </WrapFirstCol>
      <WrapImageSecondCol className="col col-10 col-sm-6 h-100">
        <ImageAuth className="p-0 p-sm-2" image={handsPorra} height="100%" />
      </WrapImageSecondCol>
    </WrapAuth>
  );
};

export default Auth;
