import { CustomLink } from "./styled-components/LinkReactRouter.styles";

export const LinkReactRouter = ({
  linkClass = "",
  to,
  text,
  color = "default",
  background = "default",
  icon = "",
  wrapLink = "",
  padding = "",
}) => {
  return (
    <div className={wrapLink}>
      <CustomLink
        className={linkClass}
        color={color}
        background={background}
        padding={padding}
        to={to}
      >
        {icon} {text}
      </CustomLink>
    </div>
  );
};
