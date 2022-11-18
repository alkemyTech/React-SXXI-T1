import NavLinkReactRouter from "Components/GlobalComponents/NavLinkReactRouter/NavLinkReactRouter";
import { Nav } from "react-bootstrap";
import { publicHeaderNavItems } from "utilities/navitems/navItems.util";

export const PublicHeaderNav = ({ isPhone, handleCloseOffCanvas }) => {
  return (
    <Nav className="justify-content-end flex-grow-1 pe-3">
      {publicHeaderNavItems.map((item) => (
        <NavLinkReactRouter
          key={item.text}
          text={item.text}
          to={item.to}
          navLinkClass="m-sm-1 m-lg-2"
          handleCloseToggle={isPhone ? handleCloseOffCanvas : undefined}
        />
      ))}
    </Nav>
  );
};
