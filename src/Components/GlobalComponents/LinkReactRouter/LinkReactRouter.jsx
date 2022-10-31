import { CustomLink } from "./styled-components/LinkReactRouter.styles";

export const LinkReactRouter = ({
  linkClass = "",
  to,
  text,
  from = undefined,
}) => {
  return (
    <CustomLink className={linkClass} from={from} to={to}>
      {text}
    </CustomLink>
  );
};
