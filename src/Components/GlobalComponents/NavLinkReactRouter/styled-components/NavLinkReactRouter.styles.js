import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {
  backgroundAndColorByTheme,
  inputTextCssStyle,
  responsiveDesign,
  someOtherProperties,
} from "styled-components/App.styled";
import { themeColors } from "styled-components/Theme.styled";

const CustomNavLink = styled(NavLink)`
  ${inputTextCssStyle}
  margin: 5px 5px;
  border-radius: ${someOtherProperties.globalRadius};
  padding: 5px 0 0 5px;
  text-decoration: none;
  display: flex;
  justify-content: start;
  align-items: center;
  transition: 0.5s;

  ${responsiveDesign.desktop} {
    margin: 0 5px;
    padding: 5px 5px 0 0;
    justify-content: "center";
    text-align: center;
  }

  &:hover {
    background-color: ${themeColors.blue} !important;
    color: ${themeColors.blackShadow} !important;
  }

  &.active {
    ${backgroundAndColorByTheme}
    outline: 2px solid ${themeColors.blue} !important;
  }
`;

export { CustomNavLink };
