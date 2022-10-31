import { CustomNavLink } from "./styled-components/NavLinkReactRouter.styles";

const NavLinkReactRouter = ({
  text,
  to,
  navLinkClass = "",
  handleCloseToggle = undefined,
}) => {
  return (
    <CustomNavLink className={navLinkClass} onClick={handleCloseToggle} to={to}>
      {text}
    </CustomNavLink>
  );
};

export default NavLinkReactRouter;
