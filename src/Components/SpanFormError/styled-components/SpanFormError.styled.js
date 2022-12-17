import styled from "styled-components";
import { fadeIn } from "styled-components/animation.styled";
import { smallTextCssStyle } from "styled-components/App.styled";
import { themeColors } from "styled-components/Theme.styled";

const CustomFormError = styled.span`
  ${smallTextCssStyle};
  color: ${themeColors.red}!important;

  ${fadeIn}
`;

export { CustomFormError };
