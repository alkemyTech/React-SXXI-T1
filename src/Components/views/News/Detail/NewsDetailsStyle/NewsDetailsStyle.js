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
    @media screen and (min-width: 450px) {
        flex-direction: row;
        gap: 1rem;
    }
    @media screen and (min-width: 910px) {
        gap: 2.5rem;
    }
`;

export const NewsTitle = styled.h3`
    font-size: 1rem;
    color: #f5f5f5;
    @media screen and (min-width: 375px) {
        font-size: 1.2rem;
    }
    @media screen and (min-width: 750px) {
        font-size: 1.6rem;
    }
`;

export const NewsImage = styled.img`
    height: 150px;
    width: 100%;
    @media screen and (min-width: 300px) {
        height: 200px;
    }
    @media screen and (min-width: 400px) {
        height: 250px;
    }
    @media screen and (min-width: 450px) {
        height: 230px;
        width: 300px;
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
        height: 450px;
        width: 480px;
    }
`;

export const Container = styled.div`
    display: flex;
    align-items: start;
    justify-content: start;
    flex-direction: column;
    padding: 0.6rem;
    gap: 0.8rem;
    width: 100%;
    @media screen and (min-width: 450px) {
        height: 100%;
    }
`;

export const Paragraph = styled.p`
    font-size: 0.8rem;
    @media screen and (min-width: 375px) {
        font-size: 1rem;
    }
    @media screen and (min-width: 750px) {
        font-size: 1.2rem;
    }
`;