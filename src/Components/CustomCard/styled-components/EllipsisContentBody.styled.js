import styled, { css } from "styled-components";
import { InputTexts } from "styled-components/App.styled";
import { whatStyle } from "./SectionsCard.styled";

const attr = css`
  border: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  ${whatStyle};
  transition: 0.5s;
`;

const EllipsisContentBody = styled(InputTexts)`
  p {
    ${attr}
  }

  ol {
    ${attr}
  }

  li {
    ${attr}
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    ${attr}
  }
`;

export { EllipsisContentBody };
