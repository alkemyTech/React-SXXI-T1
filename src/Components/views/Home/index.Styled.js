import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin: 2rem 0;
`;

export const TitleContainer = styled.div`
    
`;
// height: 5rem;

// @media screen and (max-width: 767px) {
//     height: 2.2rem;
// }

export const Container1 = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    background-color: #C0C0C0;
`;

export const Container2 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
`;

export const MembAndTest = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #C0C0C0;
    @media screen and (max-width: 690px) {
        align-items: center;
        flex-direction: column;
    }
`;

export const ContainerImageAndP = styled.div`
    display: flex;
    flex-direction: column-reverse;
    gap: 2rem;
    align-items: center;
    background-color: #C0C0C0;
    padding: 10px;

    @media screen and (min-width: 920px) {
        flex-direction: row;
    }
`;

export const ORGImage = styled.img`
    height: 350px;
    width: 350px;
    border-radius: 5px;
`;