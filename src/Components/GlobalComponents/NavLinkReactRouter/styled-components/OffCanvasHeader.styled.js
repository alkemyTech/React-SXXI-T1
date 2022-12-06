import { Offcanvas } from "react-bootstrap";
import styled from "styled-components";
import { themeColors } from "styled-components/Theme.styled";

const OffcanvasHeader = styled(Offcanvas.Header)`
  background-color: ${themeColors.betweenBlueGreed};
  h3 {
    color: ${themeColors.white}!important;
  }

  button {
    background-color: ${themeColors.gray};
  }
`;

export { OffcanvasHeader };
