import { Navbar, Offcanvas } from "react-bootstrap";
import { CustomImage, SubtitleText } from "styled-components/App.styled";
import logoSomosMasONG from "assets/logoSomosMasONG.svg";
import { OffcanvasHeader } from "../NavLinkReactRouter/styled-components/OffCanvasHeader.styled";
import { useHeader } from "./hooks/useHeader";
import { ContainerNav, HeaderNavbar } from "./styled-components/Header.styled";
import { PublicHeaderNav } from "./components/PublicNavHeader/PublicNavHeader";

const ISAUTH = false;
const Header = ({ windowSize }) => {
  const { closeOffCanvas, isPhone, handleCloseOffCanvas } = useHeader();

  return (
    <HeaderNavbar className="header-nav mb-2" bg="light" expand="md">
      <ContainerNav className="container-nav" size={windowSize}>
        <CustomImage
          className="col col-4 col-sm-2  col-lg-1"
          image={logoSomosMasONG}
          backgroundSize="contain"
          width=" "
          height="35px"
        />
        <Navbar.Toggle ref={closeOffCanvas} />
        <Navbar.Offcanvas placement="end">
          <OffcanvasHeader closeButton>
            <SubtitleText>ONG Somos Más</SubtitleText>
          </OffcanvasHeader>
          <Offcanvas.Body>
            {ISAUTH ? (
              <div>render private nav</div>
            ) : (
              <PublicHeaderNav
                isPhone={isPhone}
                handleCloseOffCanvas={handleCloseOffCanvas}
              />
            )}
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </ContainerNav>
    </HeaderNavbar>
  );
};

export default Header;
