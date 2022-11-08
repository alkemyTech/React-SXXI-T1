import styled from "styled-components";

export const SlideImage = styled.img`
    height: 180px;
    @media screen and (min-width: 577px){
        height: 230px;
    }
    @media screen and (min-width: 768px){
        height: 330px;
    }
    @media screen and (min-width: 975px){
        height: 388px;
    }
`;

export const SlideTitle = styled.h4`
    font-size: 1.5rem;
    text-shadow: 1px 1px 2px black;
    @media screen and (max-width: 690px){
        font-size: 1rem;
    }
`;

export const SlideDescription = styled.p`
    font-size: 1.1rem;
    text-shadow: 1px 1px 2px black;
    @media screen and (max-width: 690px){
        font-size: 0.8rem;
    }
`;