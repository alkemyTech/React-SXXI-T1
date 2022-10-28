import { Button } from "react-bootstrap";
import styled from "styled-components";
import { fadeIn } from "styled-components/animation.styled";
import {
  inputTextCssStyle,
  dropShadowStyle,
} from "styled-components/App.styled";
import { themeColors } from "styled-components/Theme.styled";

const borderColors = (color) => {
  const objColors = {
    default: themeColors.red,
    success: themeColors.blue,
    light: themeColors.black,
  };

  return objColors[color];
};

const backGroundColors = (color) => {
  const objColors = {
    default: themeColors.red,
    success: themeColors.blue,
    light: themeColors.white,
  };

  return objColors[color];
};

const colors = (color) => {
  const objColors = {
    default: themeColors.white,
    success: themeColors.white,
    light: themeColors.black,
  };

  return objColors[color];
};

const ButtonStyled = styled(Button)`
  ${inputTextCssStyle}
  background-color: ${({ backGround }) => backGroundColors(backGround)};
  color: ${({ color }) => colors(color)}!important;
  border: 1px solid ${({ color }) => borderColors(color)};
  transition: 0.5s;

  ${dropShadowStyle}

  &:hover {
    background-color: ${({ color }) => colors(color)};
    color: ${({ color }) => backGroundColors(color)}!important;
    border-color: ${({ color }) => backGroundColors(color)};
  }
`;

export { ButtonStyled };
