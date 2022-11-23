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
    gap: 2rem;
    align-items: center;
    background-color: #c0c0c021;
    padding: 2rem;

    @media screen and (min-width: 920px) {
        flex-direction: row;
    }
    @media screen and (max-width: 590px) {
        font-size: 0.8rem;
    }
`;

export const ORGImage = styled.img`
    height: 350px;
    width: 350px;
    border-radius: 5px;
    @media screen and (max-width: 590px) {
        height: 250px;
        width: 250px;
    }
`;