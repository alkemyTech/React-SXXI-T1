import { Form } from "react-bootstrap";
import styled from "styled-components";
import { fadeIn } from "styled-components/animation.styled";
import { inputTextCssStyle, dropShadow } from "styled-components/App.styled";
import { themeColors } from "styled-components/Theme.styled";

const borderColors = (color) => {
  const objColors = {
    default: themeColors.black,
    gray: themeColors.gray,
  };

  return objColors[color];
};

const InputForm = styled(Form.Control)`
  ${inputTextCssStyle}
  background-color: ${themeColors.white};
  color: ${themeColors.black}!important;
  border: 1px solid ${({ color }) => borderColors(color)};
  border-radius: 8px;
  padding: 10px;
  transition: 0.5s;
  height: ${({ height }) => height};

  ${dropShadow};

  ${fadeIn};

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${themeColors.grayBorder}!important;
  }
  :-ms-input-placeholder {
    color: ${themeColors.grayBorder}!important;
  }
`;

export { InputForm };
