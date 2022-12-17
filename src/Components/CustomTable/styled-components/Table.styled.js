import { Table } from "react-bootstrap";
import styled from "styled-components";
import { inputTextCssStyle } from "styled-components/App.styled";
import { themeColors } from "styled-components/Theme.styled";

const THead = styled.thead`
  background-color: ${themeColors.blue};
  color: ${themeColors.white};
`;

const CustomTable = styled(Table)`
  ${inputTextCssStyle};
`;

export { THead, CustomTable };
