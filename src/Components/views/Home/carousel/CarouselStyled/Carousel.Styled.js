import styled from "styled-components";

export const SlideImage = styled.img`
    height: 180px;
    object-fit: cover;
    @media screen and (min-width: 375px){
        height: ${({hxs})=> hxs ? hxs : '180px'};
    }
    @media screen and (min-width: 576px){
        height: ${({hsm})=> hsm ? hsm : '300px'};
    }
    @media screen and (min-width: 768px){
        height: ${({hmd})=> hmd ? hmd : '350px'};
    }
    @media screen and (min-width: 992px){
        height: ${({hlg})=> hlg ? hlg : '400px'};
    }
    @media screen and (min-width: 1200px){
        height: ${({hxl})=> hxl ? hxl : '450px'};
    }

`;

export const SlideTitle = styled.h4`
    font-size: 0.8rem;
    background-color: #bdbdbd7c;
    color: black;
    border-radius: 5px;
    @media screen and (min-width: 375px) {
        font-size: 1rem;
    }
    @media screen and (min-width: 920px) {
        font-size: 1.1rem;
    }
    @media screen and (min-width: 1200px) {
        font-size: 1.3rem;
    }
`;

export const SlideDescription = styled.p`
    font-size: 0.7rem;
    background-color: #bdbdbd7c;
    color: black;
    border-radius: 5px;
    @media screen and (min-width: 375px) {
        font-size: 0.9rem;
    }
    @media screen and (min-width: 920px) {
        font-size: 1rem;
    }
    @media screen and (min-width: 1200px) {
        font-size: 1.1rem;
    }
`;