import styled from "styled-components";
import { themeColors } from "styled-components/Theme.styled";

const WrapFooterStyled = styled.div`
  background-color: ${themeColors.gray};
  color: ${themeColors.black};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
`;

export { WrapFooterStyled };
