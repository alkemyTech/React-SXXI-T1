import styled from "styled-components";
import { fadeIn } from "styled-components/animation.styled";
import { CustomImage, dropShadow, filterSaturate } from "styled-components/App.styled";

export const WrapBodyDonation = styled.div`
  ${fadeIn}
`;

export const ImageBody = styled(CustomImage)`
  border-radius: 8px;
  ${fadeIn}
  ${dropShadow};

  &:hover {
    ${filterSaturate}
  }
`;
