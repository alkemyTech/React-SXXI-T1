import styled from "styled-components";

const RadioSlide = styled.input`
  ${({ index, checked }) => console.log(index, checked)}
  margin-right: 3px;
  cursor: pointer;
`;

export { RadioSlide };
