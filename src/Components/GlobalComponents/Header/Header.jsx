import { Navbar, Offcanvas } from "react-bootstrap";
import { CustomImage, SubtitleText } from "styled-components/App.styled";
import logoSomosMasONG from "assets/logoSomosMasONG.svg";
import { OffcanvasHeader } from "../NavLinkReactRouter/styled-components/OffCanvasHeader.styled";
import { useHeader } from "./hooks/useHeader";
import { ContainerNav, HeaderNavbar, WrapButtonOffCanvas } from "./styled-components/Header.styled";
import { HeaderNav } from "./components/HeaderNav/HeaderNav";
import { DropDownComponent } from "./components/DropDownComponent/DropDownComponent";
import { headerSchemas } from "./utilities/headearSchemas.util";

const Header = ({ windowSize }) => {
  const { closeOffCanvas, isPhone, handleCloseOffCanvas, whatNavRender, isExpand, placementOffCanvas, dropDownDirection, typeRole } = useHeader();

  return (
    <HeaderNavbar className="header-nav mb-2 p-2" bg="light" expand={isExpand}>
      <CustomImage className="col col-4 col-sm-2 col-lg-1" image={logoSomosMasONG} backgroundSize="contain" width=" " height="35px" />
      <ContainerNav className="container-nav col-8 col-sm-10 col-lg-11" size={windowSize} role={typeRole}>
        <WrapButtonOffCanvas className="col col-9 col-sm-10" role={typeRole}>
          <Navbar.Toggle ref={closeOffCanvas} />
        </WrapButtonOffCanvas>
        <Navbar.Offcanvas placement={placementOffCanvas}>
          <OffcanvasHeader closeButton>
            <SubtitleText>{headerSchemas.titleText}</SubtitleText>
          </OffcanvasHeader>
          <Offcanvas.Body>
            <HeaderNav isPhone={isPhone} handleCloseOffCanvas={handleCloseOffCanvas} itemsNav={whatNavRender} typeRole={typeRole} />
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        {typeRole && <DropDownComponent direction={dropDownDirection} typeRole={typeRole} />}
      </ContainerNav>
    </HeaderNavbar>
  );
};

export default Header;
