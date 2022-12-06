import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { inputTextCssStyle, responsiveDesign, someOtherProperties } from "styled-components/App.styled";
import { themeColors } from "styled-components/Theme.styled";

const CustomNavLink = styled(NavLink)`
  ${inputTextCssStyle}
  margin: 5px 5px;
  border-radius: ${someOtherProperties.globalRadius};
  padding: 10px;
  text-decoration: none;
  display: flex;
  justify-content: start;
  align-items: center;
  transition: 0.5s;
  gap: 1rem;

  ${responsiveDesign.desktop} {
    /* margin: 0 5px; */
    padding: 5px;
    justify-content: "center";
    text-align: center;
  }

  &:hover {
    background-color: ${themeColors.blue};
    color: ${themeColors.white};
  }

  &.active {
    outline: 2px solid ${themeColors.blue};
  }
`;

export { CustomNavLink };
