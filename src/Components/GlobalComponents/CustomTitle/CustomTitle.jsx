import { TitleText } from "styled-components/App.styled";
import { WrapCustomTitle } from "./styled-components/WrapCustomTitle.styled";

export const CustomTitle = ({ wrapTitleClass = "", title }) => {
  return (
    <WrapCustomTitle className={wrapTitleClass}>
      <TitleText>{title}</TitleText>
    </WrapCustomTitle>
  );
};
