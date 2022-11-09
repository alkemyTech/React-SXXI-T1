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
    border: 1px solid #0038FF;
    &:hover {
        background-color: #f5f5f5 !important;
        color: #0038FF !important;
      }
`;
export const ButtonCancel = styled(Button)`
    border: 1px solid #FF0000;
    &:hover {
        background-color: #f5f5f5 !important;
        color: #FF0000 !important;
        border: 1px solid #FF0000;
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