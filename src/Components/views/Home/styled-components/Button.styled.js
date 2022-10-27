import styled from "styled-components";
import { Button } from "react-bootstrap";
import { disabledCssStyle } from "../../../styled-components/App.styled";

const ButtonStyled = styled(Button)`
  ${disabledCssStyle};
`;

export { ButtonStyled };
