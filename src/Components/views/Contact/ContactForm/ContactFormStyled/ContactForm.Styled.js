import styled from "styled-components";
import { Form } from "react-bootstrap";
import { InputForm } from "styled-components/GlobalFormFields/InputForm.styled";

export const ContainerContactStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ContactFormStyled = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`;

export const TextAreaStyled = styled(InputForm)`
  border-radius: 6px;
  padding: 10px;
  resize: none;
`;

export const InputStyled = styled(InputForm)`
  border-radius: 6px;
  padding: 8px 10px;
`;

export const ContainerInputError = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

export const Errors = styled.span`
  color: red;
  font-size: 15px;
  padding-left: 10px;
`;
