import styled from "styled-components"
import { filterSaturate } from "styled-components/App.styled"

const WrapSlide = styled.div`
  padding: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  transition: 0.5s;

  &:hover {
    ${filterSaturate}
    outline: 1px solid hsla(187, 97%, 29%, 1);
  }
`

export { WrapSlide }
