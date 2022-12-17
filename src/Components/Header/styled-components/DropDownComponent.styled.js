import { Dropdown as BootstrapDropDown, Image as BootstrapImage } from "react-bootstrap";
import styled from "styled-components";
import { fadeIn } from "styled-components/animation.styled";
import { dropShadow, filterSaturate, inputTextCssStyle } from "styled-components/App.styled";
import { responsiveTemplate } from "styled-components/responsiveTemplate.styled";
import { themeColors } from "styled-components/Theme.styled";

const DropDown = styled(BootstrapDropDown)`
  display: ${({ role }) => (role ? "flex" : "none")};
`;

const Image = styled(BootstrapImage)`
  width: 40px;
  height: 40px;

  ${dropShadow};
  ${fadeIn}

  &:hover {
    ${filterSaturate}
  }
`;

const DropdownToggle = styled(BootstrapDropDown.Toggle)`
  background: rgba(0, 0, 0, 0) !important;
  border: none !important;
  padding: 0;
  transition: 0.5s;

  &:after {
    display: none;
  }
`;

const DropdownMenu = styled(BootstrapDropDown.Menu)`
  ${inputTextCssStyle}
  left: -102px !important;
  z-index: 3;
  padding: 0px 0px 10px 0px;

  transition: 0.5s;
  ${fadeIn({ time: "0.5s" })}
`;

const DropdownItem = styled(BootstrapDropDown.Item)`
  padding: 15px;

  transition: 0.5s;
  ${fadeIn({ time: "0.5s" })}

  ${responsiveTemplate.tablet} {
    padding: 10px 15px;
  }

  ${responsiveTemplate.desktop} {
    padding: 10px 15px;
  }

  ${responsiveTemplate.extraLarge} {
    padding: 10px 15px;
  }

  &:hover {
    background-color: ${themeColors.blue};
    color: ${themeColors.white} !important;
  }

  &.disabled {
    color: ${themeColors.white};
    background: ${themeColors.betweenBlueGreed};
  }
`;

export { Image, DropdownMenu, DropdownItem, DropdownToggle, DropDown };
