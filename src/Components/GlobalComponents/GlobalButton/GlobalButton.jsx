import { ButtonStyled } from "./styled-components/GlobalButton.styles";

export const GlobalButton = ({
  buttonClass = "",
  color = "default",
  background = "default",
  onClick,
  text,
  type = "button",
  disabled = false,
}) => {
  return (
    <ButtonStyled
      className={buttonClass}
      type={type}
      color={color}
      onClick={onClick}
      background={background}
      disabled={disabled}
    >
      {text}
    </ButtonStyled>
  );
};
