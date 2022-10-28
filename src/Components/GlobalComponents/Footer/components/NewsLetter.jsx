import { GlobalButton } from "Components/GlobalComponents/GlobalButton/GlobalButton";
import { GlobalInputStyled } from "styled-components/GlobalFormStyled/GlobalInput.styled";
import {
  FormGroupStyled,
  FormNewsLetterStyled,
  TextSubscribeNewsLetterStyled,
} from "../styled-components/FormFooter.styled";

export const NewsLetter = () => {
  return (
    <FormNewsLetterStyled className="col col-12 col-sm-6">
      <TextSubscribeNewsLetterStyled>
        Suscribite al NewsLetter para poder recibir actualizaciones
      </TextSubscribeNewsLetterStyled>

      <FormGroupStyled className="mb-3 col col-12">
        <GlobalInputStyled
          className="me-1 col col-12"
          type="email"
          placeholder="Ingresá tu correo"
        />
        <GlobalButton
          buttonClass="col col-10 col-sm-5 mt-2 "
          text="Enviar"
          color="success"
          background="success"
        />
      </FormGroupStyled>
    </FormNewsLetterStyled>
  );
};
