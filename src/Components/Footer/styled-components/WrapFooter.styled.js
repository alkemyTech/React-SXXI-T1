import styled from "styled-components";
import { themeColors } from "styled-components/Theme.styled";
import { Row } from "react-bootstrap";

const WrapFooter = styled(Row)`
  background-color: ${themeColors.gray};
  color: ${themeColors.black};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  box-shadow: 0px -4px 4px rgb(50 50 50 / 50%);
`;

export { WrapFooter };
