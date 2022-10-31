import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  inputTextCssStyle,
  responsiveDesign,
} from "styled-components/App.styled";
import { themeColors } from "../../../../styled-components/Theme.styled";

const CustomLink = styled(Link)`
  ${inputTextCssStyle}
  width: ${({ from }) => (from ? "100%" : "50%")};
  background-color: ${themeColors.white}!important;
  color: ${themeColors.black}!important;
  border-radius: 8px;
  outline: 1px solid ${themeColors.black};
  padding: 5px !important;
  text-decoration: none;
  text-align: center;

  ${responsiveDesign.desktop} {
    width: 124px;
    text-align: center;
  }

  &:hover {
    background-color: ${themeColors.blue};
    color: ${themeColors.white} !important;
    outline: 1px solid ${themeColors.blue};
  }
`;

export { CustomLink };
