import styled from "styled-components";
import { CustomImage, TitleText } from "styled-components/App.styled";

const WrapCustomTitle = styled(CustomImage)`
  display: flex;
  justify-content: center;
  z-index: -1;
`;

const WrapTextTitle = styled(TitleText)`
  display: flex;
  justify-content: ${({ justify }) => justify || "center"};
  backdrop-filter: blur(${({ blur }) => blur || "0px"});
  padding: 5px;
  z-index: -1;
`;

export { WrapCustomTitle, WrapTextTitle };
