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
  width = "",
  justify = "",
  blur = "",
}) => {
  return (
    <WrapCustomTitle
      className={wrapTitleClass}
      backgroundSize={backgroundSize}
      image={image}
      width={width}
    >
      <WrapTextTitle className={wrapTextClass} justify={justify} blur={blur}>
        {title}
      </WrapTextTitle>
    </WrapCustomTitle>
  );
};
