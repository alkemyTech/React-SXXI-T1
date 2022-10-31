import styled from "styled-components";
import { smallTextCssStyle } from "styled-components/App.styled";
import { themeColors } from "styled-components/Theme.styled";

const CustomFormError = styled.span`
  ${smallTextCssStyle};
  color: ${themeColors.red}!important;
`;

export { CustomFormError };
