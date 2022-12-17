import { SubtitleText, TitleText } from "styled-components/App.styled";
import { CustomButton } from "../CustomButton/CustomButton";
import { useComponentErrorView } from "./hooks/useComponentErrorView";
import { WrapComponentErrorView } from "./styled-components/WrapViewLoadError.styled";

const ComponentErrorView = ({ children, text, where = undefined, setReturnToHome = undefined }) => {
  const { seconds, handleRedirectToHome } = useComponentErrorView(where, setReturnToHome);

  return (
    <WrapComponentErrorView className="my-5">
      <div className="col col-12 col-sm-7 rounded">{children}</div>
      <div className="col col-12 col-sm-8 col-md-4 my-3 my-md-0 d-flex flex-column justify-content-center align-items-center">
        <TitleText>{seconds}</TitleText>
        <SubtitleText className="text-center">{text}</SubtitleText>
        <CustomButton buttonClass="mt-2 col col-7 col-sm-8 col-md-6" text="Ir a home" onClick={handleRedirectToHome} />
      </div>
    </WrapComponentErrorView>
  );
};

export default ComponentErrorView;
