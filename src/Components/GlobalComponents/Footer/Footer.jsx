import { Form } from "react-bootstrap";
import { GlobalInputStyled } from "styled-components/GlobalFormStyled/GlobalInput.styled";
import { FormFooterStyled } from "./styled-components/FormFooter.styled";
import { WrapFooterStyled } from "./styled-components/WrapFooter.styled";

const Footer = () => {
  return (
    <WrapFooterStyled>
      <FormFooterStyled>
        <Form.Group className="mb-3">
          <GlobalInputStyled type="email" placeholder="Enter email" />
        </Form.Group>
      </FormFooterStyled>
    </WrapFooterStyled>
  );
};

export default Footer;
