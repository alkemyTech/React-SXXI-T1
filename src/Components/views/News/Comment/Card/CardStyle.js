import styled from "styled-components";

export const CommentCard = styled.div`
    display: flex;
    background-color: #028192;
    border-radius: 5px;
    gap: 0.8rem;
    padding: 0.5rem;
`;

export const CommentImg = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 50%;
`;

export const CommentText = styled.p`
    font-size: 0.8rem;
    @media screen and (min-width: 390px) {
        font-size: 0.9rem;
    }
`;

export const Button = styled.button`
    margin-left: 5px;
    border: 1px solid #0038FF;
    color: #0038FF;
    padding: 0 5px;
    border-radius: 10px;
`;