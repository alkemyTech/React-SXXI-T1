import { CustomLink } from "./styled-components/LinkReactRouter.styles";

export const LinkReactRouter = ({
  linkClass = "",
  to,
  text,
  color = "default",
  background = "default",
}) => {
  return (
    <CustomLink
      className={linkClass}
      color={color}
      background={background}
      to={to}
    >
      {text}
    </CustomLink>
  );
};
