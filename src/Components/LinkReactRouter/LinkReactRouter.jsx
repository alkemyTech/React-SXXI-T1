import { CustomLink } from "./styled-components/LinkReactRouter.styles";

export const LinkReactRouter = ({
  linkClass = "",
  to,
  text,
  color = "default",
  border = undefined,
  background = "default",
  icon = "",
  wrapLink = "",
  padding = "",
  onClick = undefined,
  borderRadius = "",
}) => {
  return (
    <div className={wrapLink}>
      <CustomLink
        className={linkClass}
        color={color}
        background={background}
        padding={padding}
        to={to}
        border={border}
        borderradius={borderRadius}
        onClick={onClick}>
        {icon} {text}
      </CustomLink>
    </div>
  );
};
