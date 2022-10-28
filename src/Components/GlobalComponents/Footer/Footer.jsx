import { GlobalInputStyled } from "styled-components/GlobalFormStyled/GlobalInput.styled";
import { FormFooterStyled } from "./styled-components/FormFooter.styled";
import { WrapFooterStyled } from "./styled-components/WrapFooter.styled";

const Footer = () => {
  return (
    <WrapFooterStyled>
      <FormFooterStyled>
        <GlobalInputStyled>asd</GlobalInputStyled>
      </FormFooterStyled>
    </WrapFooterStyled>
  );
};

export default Footer;
