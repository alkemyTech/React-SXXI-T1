import { InputTextsStyled } from "styled-components/App.styled";
import { NavLinkStyled } from "./styled-components/NavLinkReactRouter.styles";

const NavLinkReactRouter = ({
  icon,
  name,
  to,
  navLinkClass = "",
  handleCloseToggle = undefined,
  privated = undefined,
}) => {
  return (
    <NavLinkStyled className={navLinkClass} onClick={handleCloseToggle} to={to}>
      <InputTextsStyled>
        {icon} {name}
      </InputTextsStyled>
    </NavLinkStyled>
  );
};

export default NavLinkReactRouter;
