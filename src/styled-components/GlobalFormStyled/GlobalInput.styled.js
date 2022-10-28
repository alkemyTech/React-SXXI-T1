import Form  from 'react-bootstrap/Form';
import styled from "styled-components";
import { fadeIn } from "styled-components/animation.styled";
import {
  inputTextCssStyle,
  dropShadowStyle,
} from "styled-components/App.styled";
import { themeColors } from "styled-components/Theme.styled";

const borderColors = (color) => {
  const objColors = {
    default: themeColors.black,
    gray: themeColors.black,
  };

  return objColors[color];
};

const GlobalInputStyled = styled(Form.Control)`
  ${inputTextCssStyle}
  background-color: ${themeColors.white};
  color: ${themeColors.black}!important;
  border: 1px solid ${({ color }) => borderColors(color)};
  transition: 0.5s;

  ${dropShadowStyle}

  ${fadeIn}

  &:placeholder {
    color: ${themeColors.grayBorder}!important;
  }
`;

export { GlobalInputStyled };
