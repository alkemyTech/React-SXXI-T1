import {
  WrapCustomTitle,
  WrapTextTitle,
} from "./styled-components/WrapCustomTitle.styled";

export const CustomTitle = ({
  wrapTitleClass = "",
  wrapTextClass = "",
  title,
  image = "",
  backgroundSize = "",
  minHeight = "",
  width = "",
  justify = "",
  blur = "",
}) => {
  return (
    <WrapCustomTitle
      className={wrapTitleClass}
      backgroundSize={backgroundSize}
      minHeight={minHeight}
      image={image}
      width={width}
    >
      <WrapTextTitle className={wrapTextClass} justify={justify} blur={blur}>
        {title}
      </WrapTextTitle>
    </WrapCustomTitle>
  );
};
