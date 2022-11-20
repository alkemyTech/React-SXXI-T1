import NavLinkReactRouter from "Components/GlobalComponents/NavLinkReactRouter/NavLinkReactRouter";
import { ROLE } from "MOCKAUTH";
import { Nav } from "react-bootstrap";

export const HeaderNav = ({ isPhone, handleCloseOffCanvas, itemsNav }) => {
  const clickCloseOffcanvas =
    isPhone || ROLE ? handleCloseOffCanvas : undefined;

  return (
    <Nav className="justify-content-end flex-grow-1 pe-3">
      {itemsNav.map((item) => (
        <NavLinkReactRouter
          key={item.text}
          text={item.text}
          to={item.to}
          navLinkClass="m-sm-1 m-lg-2"
          handleCloseToggle={clickCloseOffcanvas}
          icon={item.icon}
        />
      ))}
    </Nav>
  );
};