import { Dropdown, Image as BootstrapImage } from "react-bootstrap"
import styled from "styled-components"
import { fadeIn } from "styled-components/animation.styled"
import { dropShadow, filterSaturate, inputTextCssStyle, responsiveDesign } from "styled-components/App.styled"
import { themeColors } from "styled-components/Theme.styled"

const Image = styled(BootstrapImage)`
  width: 40px;
  height: 40px;

  ${dropShadow};
  ${fadeIn}

  &:hover {
    ${filterSaturate}
  }
`

const DropdownToggle = styled(Dropdown.Toggle)`
  background: rgba(0, 0, 0, 0) !important;
  border: none !important;
  padding: 0;
  transition: 0.5s;

  &:after {
    display: none;
  }
`

const DropdownMenu = styled(Dropdown.Menu)`
  ${inputTextCssStyle}
  left: 0 !important;
  z-index: 3;
  padding: 0px 0px 10px 0px;

  transition: 0.5s;
  ${fadeIn({ time: "0.5s" })}

  ${responsiveDesign.tablet} {
    left: ${(props) => (props.role === "admin" ? "0" : "5px")} !important;
  }

  ${responsiveDesign.desktop} {
    left: ${(props) => (props.role === "admin" ? "0" : "-102px")} !important;
  }
`

const DropdownItem = styled(Dropdown.Item)`
  padding: 15px;

  transition: 0.5s;
  ${fadeIn({ time: "0.5s" })}

  ${responsiveDesign.tablet} {
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
`

export { Image, DropdownMenu, DropdownItem, DropdownToggle }
