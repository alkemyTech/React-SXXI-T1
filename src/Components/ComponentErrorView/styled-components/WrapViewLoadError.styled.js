import styled from "styled-components";
import { fadeIn } from "styled-components/animation.styled";
import { responsiveTemplate } from "styled-components/responsiveTemplate.styled";

export const WrapComponentErrorView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  ${fadeIn}
  ${responsiveTemplate.desktop} {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }
  ${responsiveTemplate.extraLarge} {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }
`;
