import { Navbar } from "react-bootstrap";
import styled from "styled-components";
import { dropShadow } from "styled-components/App.styled";

const ContainerNav = styled.div`
  display: flex;
  flex-direction: ${({ role }) => (role ? "row-reverse" : "row")};
  justify-content: space-between;
  width: 100%;
  padding: ${({ size: { width } }) => (width < 400 ? "0 5px" : "0 1.5rem")};
`;

const HeaderNavbar = styled(Navbar)`
  ${dropShadow}
`;

export { ContainerNav, HeaderNavbar };
