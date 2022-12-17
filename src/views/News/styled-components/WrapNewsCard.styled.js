import styled from "styled-components";
import { fadeIn } from "styled-components/animation.styled";

export const WrapNewsCard = styled.div`
  min-height: ${({ show }) => (show ? "auto" : "250px")};
  transition: 0.5s;

  ${fadeIn({ time: "1.5s" })}
`;
