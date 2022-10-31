import styled from "styled-components";
import { Form } from "react-bootstrap";
// <<<<<<< HEAD
// import { GlobalInputStyled } from "styled-components/GlobalFormStyled/GlobalInput.styled";
// import { ButtonStyled } from "Components/GlobalComponents/GlobalButton/styled-components/GlobalButton.styles";

// export const ContainerContactStyled = styled.div({
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '1rem',
//     maxWidth: '1200px'
// });

// export const TitleContactStyled = styled.h1({
//     display: 'flex',
//     '@media(max-width: 430px)': {
//         fontSize: '1.3rem'
//     }
// });

// export const ContactFormStyled = styled(Form)`
//     diplay: flex;
//     flex-direction: column;
//     gap: 1rem;
//     margin-top: 1rem
// `;
// export const TextAreaStyled = styled(GlobalInputStyled)`
//     border-radius: 6px;
//     padding: 10px;
//     resize: none;
// `;
// export const InputStyled = styled(GlobalInputStyled)`
//     border-radius: 6px;
//     padding: 8px 10px;
// `;
// export const Button = styled(ButtonStyled)`
//     width: 150px;
//     height: 40px;
//     font-size: 1rem;
//     border: none;
//     &:hover{
//         color: #0038FF!important;
//         background-color: #f5f5f5!important;
//         border: 1px solid #0038FF;
//     }
//     @media screen and (max-width: 430px) {
//         width: 100%;
//     }
// `;
// export const ButtonIrInicio = styled(ButtonStyled)`
//     width: 150px;
//     height: 40px;
//     font-size: 1rem;
//     border: none;
//     background-color: #FF0000;
//     &:hover{
//         color: black!important;
//         background-color: #f5f5f5!important;
//         border: 1px solid #FF0000;
//         color: #FF0000!important;
//     }
//     @media screen and (max-width: 430px) {
//         width: 100%;
//     }
// `;

// export const ContainerInputError = styled.div`
//     display: flex;
//     flex-direction: column;
//     margin-top: 1rem;
// `;
// export const Errors = styled.span`
//     color: red;  
//     font-size: 15px;
//     padding-left: 10px;
// `;
// =======
import { InputForm } from "styled-components/GlobalFormFields/InputForm.styled";
import { Button as CustomButton } from "Components/GlobalComponents/CustomButton/styled-components/Button.styled";

export const ContainerContactStyled = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  maxWidth: "1200px",
});

export const TitleContactStyled = styled.h1({
  display: "flex",
  "@media(max-width: 430px)": {
    fontSize: "1.3rem",
  },
});

export const ContactFormStyled = styled(Form)`
  diplay: flex;
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
export const Button = styled(CustomButton)`
  width: 150px;
  height: 40px;
  font-size: 1rem;
  border: none;
  &:hover {
    color: #0038ff !important;
    background-color: #f5f5f5 !important;
    border: 1px solid #0038ff;
  }
  @media screen and (max-width: 430px) {
    width: 100%;
  }
`;
export const ButtonIrInicio = styled(Button)`
  width: 150px;
  height: 40px;
  font-size: 1rem;
  border: none;
  background-color: #ff0000;
  &:hover {
    color: black !important;
    background-color: #f5f5f5 !important;
    border: 1px solid #ff0000;
    color: #ff0000 !important;
  }
  @media screen and (max-width: 430px) {
    width: 100%;
  }
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
