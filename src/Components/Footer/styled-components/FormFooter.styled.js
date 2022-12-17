import { Form } from "react-bootstrap";
import { inputTextCssStyle } from "styled-components/App.styled";
import { themeColors } from "styled-components/Theme.styled";
import styled from "styled-components";

const FormNewsLetter = styled(Form)`
  margin: 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 1rem;
  border: 1px solid ${themeColors.grayBorder};
  border-radius: 8px;
  background: linear-gradient(${themeColors.txtGray}, ${themeColors.gray});
`;

const FormFooterLabel = styled(Form.Label)`
  ${inputTextCssStyle}
`;

const FormGroup = styled(Form.Group)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const TextSubscribeNewsLetter = styled.div`
  ${inputTextCssStyle}
  color: ${themeColors.white}!important;
  margin-bottom: 1rem;
`;

export { FormNewsLetter, FormFooterLabel, FormGroup, TextSubscribeNewsLetter };
