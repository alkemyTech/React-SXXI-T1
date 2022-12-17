import styled from "styled-components";
import { InputForm } from "styled-components/GlobalFormFields/InputForm.styled";
import { Button } from "Components/CustomButton/styled-components/Button.styled";
import { themeColors } from "styled-components/Theme.styled";

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

export const ButtonEdit = styled(Button)`
  background-color: ${themeColors.yellow};
  border: 1px solid ${themeColors.yellow};
  &:hover {
    background-color: ${themeColors.black};
    color: ${themeColors.yellow};
    border: 1px solid ${themeColors.yellow};
  }
`;

export const Errors = styled.span`
  color: red;
  font-size: 15px;
  padding-left: 10px;
`;
