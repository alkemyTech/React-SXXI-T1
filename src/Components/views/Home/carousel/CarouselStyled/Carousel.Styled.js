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
    background-color: #bdbdbda1;
    color: black;
    border-radius: 5px;
    @media screen and (max-width: 690px){
        font-size: 1rem;
    }
`;

export const SlideDescription = styled.p`
    font-size: 1.1rem;
    background-color: #bdbdbda1;
    color: black;
    border-radius: 5px;
    @media screen and (max-width: 690px){
        font-size: 0.8rem;
    }
`;