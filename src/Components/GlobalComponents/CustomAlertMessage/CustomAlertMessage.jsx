import { AlertMessage } from "./styled-components/AlertMessage.styled";

export const CustomAlertMessage = ({ alertClass, text, background = "default", color = "default" }) => {
  return (
    <AlertMessage className={alertClass} background={background} color={color}>
      {text}
    </AlertMessage>
  );
};
