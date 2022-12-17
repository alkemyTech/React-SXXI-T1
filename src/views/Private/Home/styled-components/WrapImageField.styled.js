import styled from "styled-components";
import { fadeIn } from "styled-components/animation.styled";
import { dropShadow } from "styled-components/App.styled";
import { themeColors } from "styled-components/Theme.styled";

export const WrapImageField = styled.div`
  margin: 1rem 0px;
  padding: 5px 2px;
  border: 1px solid ${themeColors.grayBorder};
  border-radius: 8px;
  ${dropShadow}

  ${fadeIn}
`;
