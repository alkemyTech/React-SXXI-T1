import { CustomNavLink } from "./styled-components/NavLinkReactRouter.styles";

const NavLinkReactRouter = ({ text, to, navLinkClass = "", handleCloseToggle = undefined, icon = "", isAdmin = undefined }) => {
  return (
    <CustomNavLink className={navLinkClass} onClick={handleCloseToggle} to={to} isadmin={isAdmin} end>
      {icon} {text}
    </CustomNavLink>
  );
};

export default NavLinkReactRouter;
