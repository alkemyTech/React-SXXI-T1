import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
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

    @media screen and (max-width: 400px) {
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
    height: 130px;
    width: 140px;
    border-radius: 5px;

    @media screen and (min-width: 400px) {
        height: 150px;
        width: 190px;
    }
    @media screen and (min-width: 700px) {
        height: 250px;
        width: 260px;
    }
`;