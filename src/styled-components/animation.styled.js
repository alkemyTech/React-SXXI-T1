import styled, { css, keyframes } from "styled-components";

const InKeyFrames = keyframes`
    from{
        filter: blur(5px);
        opacity: 0;
    }

    to{
        filter: blur(0);
        opacity: 1;
    }
`;

const fadeIn = ({ time = "1.5s", type = "ease" } = {}) => css`
  animation: ${time} ${InKeyFrames} ${type};
`;

const Animate = styled.div`
  ${fadeIn}
`;

export { fadeIn, Animate };
