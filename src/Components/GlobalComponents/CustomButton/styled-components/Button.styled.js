import styled from "styled-components";
import { fadeIn } from "styled-components/animation.styled";
import { inputTextCssStyle, dropShadow } from "styled-components/App.styled";
import { themeColors } from "styled-components/Theme.styled";
import { Button as BootstrapButton } from "react-bootstrap";

const borderColors = (color) => {
  const objColors = {
    default: themeColors.red,
    success: themeColors.blue,
    light: themeColors.black,
  };

  return objColors[color];
};

const backGroundColors = (background) => {
  const objColors = {
    default: themeColors.red,
    success: themeColors.blue,
    light: themeColors.white,
  };

  return objColors[background];
};

const colors = (color) => {
  const objColors = {
    default: themeColors.white,
    success: themeColors.white,
    light: themeColors.black,
  };

  return objColors[color];
};
const Button = styled(BootstrapButton)`
  ${inputTextCssStyle}
  background-color: ${({ background }) => backGroundColors(background)};
  color: ${({ color }) => colors(color)}!important;
  border: 1px solid ${({ color }) => borderColors(color)};
  transition: 0.5s;

  ${dropShadow}

  ${fadeIn}

  &:hover {
    background-color: ${({ color }) => colors(color)};
    color: ${({ color }) => backGroundColors(color)}!important;
    border-color: ${({ color }) => backGroundColors(color)};
  }
`;

export { Button };
