import styled from "styled-components";
import { fadeIn } from "styled-components/animation.styled";
import { responsiveTemplate } from "styled-components/responsiveTemplate.styled";

export const WrapSectionDonation = styled.div`
  ${fadeIn}
`;

export const WrapBodyDonation = styled.div`
  height: 50%;

  ${responsiveTemplate.tablet} {
    height: 65%;
  }

  ${responsiveTemplate.desktop} {
    height: 50%;
  }

  ${responsiveTemplate.extraLarge} {
    height: 75%;
  }

  ${fadeIn}
`;
