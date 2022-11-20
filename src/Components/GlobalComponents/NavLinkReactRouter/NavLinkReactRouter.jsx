import { CustomNavLink } from "./styled-components/NavLinkReactRouter.styles";

const NavLinkReactRouter = ({
  text,
  to,
  navLinkClass = "",
  handleCloseToggle = undefined,
  icon = ''
}) => {
  return (
    <CustomNavLink
      className={navLinkClass}
      onClick={handleCloseToggle}
      to={to}
      end
    >
      {icon} {text}
    </CustomNavLink>
  );
};

export default NavLinkReactRouter;
