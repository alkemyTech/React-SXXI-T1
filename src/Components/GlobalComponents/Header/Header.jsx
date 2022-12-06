import { Navbar, Offcanvas } from "react-bootstrap";
import { CustomImage, SubtitleText } from "styled-components/App.styled";
import logoSomosMasONG from "assets/logoSomosMasONG.svg";
import { OffcanvasHeader } from "../NavLinkReactRouter/styled-components/OffCanvasHeader.styled";
import { useHeader } from "./hooks/useHeader";
import { ContainerNav, HeaderNavbar } from "./styled-components/Header.styled";
import { HeaderNav } from "./components/HeaderNav/HeaderNav";
import { ROLE } from "MOCKAUTH";
import { DropDownComponent } from "./components/DropDownComponent/DropDownComponent";
import { headerSchemas } from "./utilities/headearSchemas.util";

const Header = ({ windowSize }) => {
  const { closeOffCanvas, isPhone, handleCloseOffCanvas, whatNavRender, isExpand, placementOffCanvas, dropDownDirection, typeRole } = useHeader();

  return (
    <HeaderNavbar className="header-nav mb-2" bg="light" expand={isExpand}>
      <ContainerNav className="container-nav" size={windowSize} role={typeRole}>
        <CustomImage className="col col-4 col-sm-2  col-lg-1" image={logoSomosMasONG} backgroundSize="contain" width=" " height="35px" />
        <Navbar.Toggle ref={closeOffCanvas} />
        <Navbar.Offcanvas placement={placementOffCanvas}>
          <OffcanvasHeader closeButton>
            <SubtitleText>{headerSchemas.titleText}</SubtitleText>
          </OffcanvasHeader>
          <Offcanvas.Body>
            <HeaderNav isPhone={isPhone} handleCloseOffCanvas={handleCloseOffCanvas} itemsNav={whatNavRender} typeRole={typeRole} />
            {typeRole && <DropDownComponent direction={dropDownDirection} typeRole={typeRole} />}
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </ContainerNav>
    </HeaderNavbar>
  );
};

export default Header;
