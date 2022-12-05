import { AlertMessage } from "./styled-components/AlertMessage.styled";

export const CustomAlertMessage = ({ alertClass, text, background = "default", color = "default" }) => {
  return (
    <AlertMessage className={alertClass + " my-5"} background={background} color={color}>
      {text}
    </AlertMessage>
  );
};
