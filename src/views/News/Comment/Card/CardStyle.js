import styled from "styled-components";

export const CommentCard = styled.div`
  display: flex;
  background-color: #f8f9fa;
  border-radius: 5px;
  gap: 0.8rem;
  padding: 1rem;
  box-shadow: 2px 2px 8px black;
  transition: 1s;
  @media screen and (min-width: 1000px) {
    gap: 1.5rem;
  }
  &:hover {
    background-color: #028192;
    color: #f8f9fa;
  }
`;

export const CommentImg = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

export const CommentText = styled.p`
  font-size: 0.8rem;
  @media screen and (min-width: 375px) {
    font-size: 0.9rem;
  }
  @media screen and (min-width: 800px) {
    font-size: 1rem;
  }
  @media screen and (min-width: 1100px) {
    font-size: 1.1rem;
  }
`;

export const Button = styled.button`
  margin-left: 5px;
  background-color: #0038ff;
  border: solid 1px #0038ff;
  font-size: 0.8rem;
  color: #f5f5f5;
  padding: 0 5px;
  border-radius: 10px;
  &:hover {
    background-color: transparent;
    border: 1px solid #0038ff;
    color: #0038ff;
  }
`;
