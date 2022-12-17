import { Navbar } from "react-bootstrap";
import styled from "styled-components";
import { fadeIn } from "styled-components/animation.styled";
import { dropShadow } from "styled-components/App.styled";
import { responsiveTemplate } from "styled-components/responsiveTemplate.styled";

const ContainerNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${({ role }) => (role === "admin" ? "space-between" : "end")};
  padding: ${({ size: { width } }) => (width < 400 ? "0 5px" : "0 1rem")};
`;

const HeaderNavbar = styled(Navbar)`
  ${dropShadow}
  ${fadeIn({ time: "0.5s" })}
`;

const WrapButtonOffCanvas = styled.div`
  display: flex;
  justify-content: ${({ role }) => (role === "admin" ? "start" : "end")};

  ${responsiveTemplate.desktop} {
    padding: 10px 15px;
    display: ${({ role }) => (role === "admin" ? "flex" : "none")};
  }

  ${responsiveTemplate.extraLarge} {
    padding: 10px 15px;
    display: ${({ role }) => (role === "admin" ? "flex" : "none")};
  }
`;

export { ContainerNav, HeaderNavbar, WrapButtonOffCanvas };
