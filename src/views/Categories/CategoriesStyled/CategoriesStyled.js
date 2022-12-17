import styled from "styled-components";
import { Form } from "react-bootstrap";
import { InputForm } from "styled-components/GlobalFormFields/InputForm.styled";

export const Formulary = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const Input = styled(InputForm)`
  border: 1px solid #bdbdbd;
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
