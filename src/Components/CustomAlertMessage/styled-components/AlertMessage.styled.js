import { Alert } from "react-bootstrap";
import styled from "styled-components";
import { backGroundColors, borderColors, colors } from "Components/CustomButton/styled-components/Button.styled";
import { fadeIn } from "styled-components/animation.styled";
import { inputTextCssStyle } from "styled-components/App.styled";

export const AlertMessage = styled(Alert)`
  ${inputTextCssStyle};
  font-weight: bold !important;
  background-color: ${({ background }) => backGroundColors(background)};
  color: ${({ color }) => colors(color)}!important;
  border: 1px solid ${({ color }) => borderColors(color)};
  text-align: center;

  ${fadeIn}
`;
