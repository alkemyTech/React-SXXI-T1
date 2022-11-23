import styled from "styled-components";

export const SlideImage = styled.img`
    height: 180px;
    object-fit: cover;
    @media screen and (min-width: 357px){
        height: ${({hmin})=> hmin ? hmin : '300px'};
    }
    @media screen and (min-width: 768px){
        height: ${({hmed})=> hmed ? hmed : '320px'};
    }
    @media screen and (min-width: 975px){
        height: ${({hmax})=> hmax ? hmax : '420px'};
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