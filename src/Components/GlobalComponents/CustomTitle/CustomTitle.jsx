import { WrapCustomTitle, WrapTextTitle } from "./styled-components/WrapCustomTitle.styled";

export const CustomTitle = ({
  wrapTitleClass = "",
  wrapTextClass = "",
  title,
  image = "",
  backgroundSize = "",
  width = "",
  height = "",
  justify = "",
  blur = "",
}) => {
  return (
    <WrapCustomTitle className={"WrapCustomTitle my-4 " + wrapTitleClass} backgroundSize={backgroundSize} image={image} width={width} height={height}>
      <WrapTextTitle className={"WrapTextTitle my-2 " + wrapTextClass} justify={justify} blur={blur}>
        {title}
      </WrapTextTitle>
    </WrapCustomTitle>
  );
};
