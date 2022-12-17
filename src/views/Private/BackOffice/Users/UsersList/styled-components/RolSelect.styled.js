import { Form } from "react-bootstrap";
import styled from "styled-components";
import { inputTextCssStyle } from "styled-components/App.styled";

const FormSelect = styled(Form.Select)`
  ${inputTextCssStyle}
`;

const SelectOptions = styled.option`
  ${inputTextCssStyle}
`;

export { FormSelect, SelectOptions };
