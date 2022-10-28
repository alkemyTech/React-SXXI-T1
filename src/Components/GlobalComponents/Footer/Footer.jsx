import { NewsLetter } from "./components/NewsLetter";
import { WrapFooterStyled } from "./styled-components/WrapFooter.styled";

const Footer = () => {
  return (
    <WrapFooterStyled>
      <NewsLetter />
    </WrapFooterStyled>
  );
};

export default Footer;
