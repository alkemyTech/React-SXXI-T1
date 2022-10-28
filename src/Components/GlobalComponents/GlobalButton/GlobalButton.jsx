import { ButtonStyled } from "./styled-components/GlobalButton.styles";

export const GlobalButton = ({
  buttonClass = "",
  color = "default",
  backGround = "default",
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
      disabled={disabled}
    >
      {text}
    </ButtonStyled>
  );
};
