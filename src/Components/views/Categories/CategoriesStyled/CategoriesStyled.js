import styled from "styled-components";
import { Form } from "react-bootstrap";
import { InputForm } from "styled-components/GlobalFormFields/InputForm.styled";
import { Button } from "Components/GlobalComponents/CustomButton/styled-components/Button.styled";

export const Formulary = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const Input = styled(InputForm)`
  border: 1px solid #bdbdbd;
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

export const ContainerInputError = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Errors = styled.span`
  color: red !important;
  font-size: 15px;
  padding-left: 10px;
`;
export const PreviewImg = styled.img`
  height: 100px;
  width: 150px;
  border-radius: 0.3rem;
  margin-top: 0.4rem;
`;
