import { Nav, Navbar as BootstrapNavbar, Offcanvas } from "react-bootstrap";
import {
  CustomImage,
  dropShadow,
  InputTexts,
} from "styled-components/App.styled";
import logoSomosMasONG from "assets/logoSomosMasONG.svg";
import styled from "styled-components";

const Header = ({ windowSize }) => {
  return (
    <Navbar className="mb-4" bg="light" expand="md">
      <ContainerNav size={windowSize}>
        <CustomImage
          className="col col-4 col-sm-2  col-lg-1"
          image={logoSomosMasONG}
          backgroundSize="contain"
          width=" "
          height="35px"
        />
        <Navbar.Toggle />
        <Navbar.Offcanvas placement="end">
          <Offcanvas.Header closeButton>
            <InputTexts>ONG Somos Más</InputTexts>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </ContainerNav>
    </Navbar>
  );
};

export default Header;

const ContainerNav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: ${({ size: { width } }) => (width > 1199 ? "1200px" : "100%")};
  padding: ${({ size: { width } }) => (width < 400 ? "0 5px" : "0 1.5rem")};
`;

const Navbar = styled(BootstrapNavbar)`
  ${dropShadow}
`;

/**
COMO: Usuario
QUIERO: Visualizar un encabezado en la Web Pública
PARA: Poder navegar por las distintas secciones

Criterios de aceptación: Crear header para Web Pública. Renderizará un menú de navegación en base a un array de datos. Los mismos contendrán un texto a mostrar, link hacia dónde dirigirán y la posibilidad de renderizarse si el usuario es logueado o no. Agregar en el componente Header, los links de página "Inicio", "Nosotros", "Contacto" y los links de acceso a las Landing page de las "Campañas"  Estos links deberán mostrarse activos si la url actual coincide con la que tienen asignada.
 */

/**
 * 
 <NavDropdown title="Dropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
 */
