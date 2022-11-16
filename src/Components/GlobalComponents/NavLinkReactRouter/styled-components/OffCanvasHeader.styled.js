import { Offcanvas } from "react-bootstrap";
import styled from "styled-components";
import { themeColors } from "styled-components/Theme.styled";

const OffcanvasHeader = styled(Offcanvas.Header)`
  background-color: ${themeColors.grayBorder};
`;

export { OffcanvasHeader };
