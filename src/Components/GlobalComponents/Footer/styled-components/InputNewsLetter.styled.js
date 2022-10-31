import styled, { css } from "styled-components";
import { InputForm } from "styled-components/GlobalFormFields/InputForm.styled";
import { themeColors } from "styled-components/Theme.styled";

const borderColors = (color) => {
  const objColors = {
    default: themeColors.black,
    red: themeColors.red,
  };

  return objColors[color] || objColors.default;
};

const InputNewsLetter = styled(InputForm)`
  color: ${themeColors.black}!important;
  border: 1px solid ${({ color }) => borderColors(color)};

  ${({ errors, touched }) =>
    errors &&
    touched &&
    css`
      color: ${themeColors.red}!important;
      border: 1px solid ${borderColors("red")};
      outline: 1px solid ${borderColors("red")};

      ::placeholder,
      ::-webkit-input-placeholder {
        color: ${themeColors.red}!important;
      }
      :-ms-input-placeholder {
        color: ${themeColors.red}!important;
      }
    `}
`;

export { InputNewsLetter };
