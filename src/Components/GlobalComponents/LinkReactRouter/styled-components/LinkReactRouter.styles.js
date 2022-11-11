import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  dropShadow,
  inputTextCssStyle,
  responsiveDesign,
} from "styled-components/App.styled";
import {
  backGroundColors,
  borderColors,
  colors,
} from "Components/GlobalComponents/CustomButton/styled-components/Button.styled";

const CustomLink = styled(Link)`
  ${inputTextCssStyle}
  padding: ${({ padding }) => padding || "6px 12px"};
  text-decoration: none;
  text-align: center;

  background-color: ${({ background }) => backGroundColors(background)};
  color: ${({ color }) => colors(color)}!important;
  border: 1px solid ${({ color }) => borderColors(color)};
  ${dropShadow}

  ${responsiveDesign.desktop} {
    width: 124px;
    text-align: center;
  }

  &:hover {
    background-color: ${({ color }) => colors(color)};
    color: ${({ color }) => backGroundColors(color)}!important;
    border-color: ${({ color }) => backGroundColors(color)};
  }
`;

export { CustomLink };
