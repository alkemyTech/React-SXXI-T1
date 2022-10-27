import { LinkStyled } from "./styled-components/LinkReactRouter.styles";

export const LinkReactRouter = ({
  linkClass = "",
  to,
  text,
  from = undefined,
}) => {
  return (
    <LinkStyled className={linkClass} from={from} to={to}>
      {text}
    </LinkStyled>
  );
};
