import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0;
    gap: 1rem;
    @media screen and (min-width: 375px) {
        gap: 1.5rem;
    }
`;

export const Container1 = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
`;

export const Container2 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;

    @media screen and (max-width: 330px) {
        flex-direction: column;
    }
`;

export const Container3 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 0.5rem;  
`;

export const MembAndTest = styled.div`
    display: flex;
    justify-content: space-around;
    @media screen and (max-width: 768px) {
        align-items: center;
        flex-direction: column;
    }
`;

export const ContainerImageAndP = styled.div`
    display: flex;
    flex-direction: column-reverse;
    gap: 1.5rem;
    align-items: center;
    background-color: #c0c0c021;
    padding: 2rem;
    transition: 1s;

    @media screen and (min-width: 920px) {
        flex-direction: row;
    }
    @media screen and (max-width: 590px) {
        font-size: 0.8rem;
    }
`;

export const ORGImage = styled.img`
    height: 120px;
    width: 140px;
    border-radius: 5px;

    @media screen and (min-width: 500px) {
        height: 150px;
        width: 190px;
    }
    @media screen and (min-width: 720px) {
        height: 200px;
        width: 260px;
    }
`;
export const Paragraph = styled.p`
    font-size: 0.7rem;
    @media screen and (min-width: 375px) {
        font-size: 0.8rem;
    }
    @media screen and (min-width: 500px) {
        font-size: 0.9rem;
    }
    @media screen and (min-width: 1200px) {
        font-size: 1rem;
    }
`;