import { Alert } from "react-bootstrap";
import styled from "styled-components";
import { backGroundColors, borderColors, colors } from "Components/GlobalComponents/CustomButton/styled-components/Button.styled";

export const AlertMessage = styled(Alert)`
  background-color: ${({ background }) => backGroundColors(background)};
  color: ${({ color }) => colors(color)}!important;
  border: 1px solid ${({ color }) => borderColors(color)};
`;
