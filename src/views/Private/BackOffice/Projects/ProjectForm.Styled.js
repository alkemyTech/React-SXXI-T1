import styled from "styled-components";
import { InputForm } from "styled-components/GlobalFormFields/InputForm.styled";
import { Button } from "Components/CustomButton/styled-components/Button.styled";

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

export const ButtonConfirm = styled(Button)`
  border: 1px solid #0038ff;
  &:hover {
    background-color: #f5f5f5 !important;
    color: #0038ff !important;
  }
`;

export const ButtonCancel = styled(Button)`
  border: 1px solid #ff0000;
  &:hover {
    background-color: #f5f5f5 !important;
    color: #ff0000 !important;
    border: 1px solid #ff0000;
  }
`;

export const Errors = styled.span`
  color: red;
  font-size: 15px;
  padding-left: 10px;
`;
