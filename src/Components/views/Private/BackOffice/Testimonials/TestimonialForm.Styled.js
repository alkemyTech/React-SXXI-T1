import styled from "styled-components";
import { InputForm } from "styled-components/GlobalFormFields/InputForm.styled";

export const TextArea = styled(InputForm)`
  border-radius: 6px;
  padding: 10px;
  resize: none;
  min-height: 200px;
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