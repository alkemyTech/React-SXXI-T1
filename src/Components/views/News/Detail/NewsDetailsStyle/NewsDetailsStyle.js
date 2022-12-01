import styled from "styled-components";

export const MainContent = styled.div`
    display: flex;
    flex-direction: column;
`;

export const NewsCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #028192;
    border-radius: 5px;
    box-shadow: 2px 2px 8px black;
    @media screen and (min-width: 620px) {
        flex-direction: row;
        gap: 1rem;
    }
    @media screen and (min-width: 910px) {
        gap: 2.5rem;
    }
`;


export const NewsImage = styled.img`
    width: 100%;
    border-radius: 5px;
    @media screen and (min-width: 375px) {
        height: 250px;
    }
    @media screen and (min-width: 500px) {
        height: 270px;
    }
    @media screen and (min-width: 910px) {
        height: 300px;
        width: 350px;
    }
    @media screen and (min-width: 1100px) {
        height: 350px;
        width: 400px;
    }
    @media screen and (min-width: 1300px) {
        height: 410px;
        width: 570px;
    }
`;

export const Container = styled.div`
    display: flex;
    align-items: start;
    justify-content: start;
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
    width: 100%;
    @media screen and (min-width: 450px) {
        height: 100%;
    }
`;
export const NewsTitle = styled.h3`
    font-size: 1.1rem;
    color: #f5f5f5;
    @media screen and (min-width: 375px) {
        font-size: 1.2rem;
    }
    @media screen and (min-width: 800px) {
        font-size: 1.4rem;
    }
`;

export const Paragraph = styled.p`
    font-size: 0.9rem;
    @media screen and (min-width: 375px) {
        font-size: 1rem;
    }
    @media screen and (min-width: 800px) {
        font-size: 1.1rem;
    }
`;

export const ContainerP = styled.div`
    width: 100%;
    height: 100%;
    overflow: auto;
`;