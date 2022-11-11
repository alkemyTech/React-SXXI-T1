import styled from "styled-components";
import { InputTexts } from "styled-components/App.styled";
import { whatStyle } from "./SectionsCard.styled";

const EllipsisContentBody = styled(InputTexts)`
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    ${whatStyle};
  }

  ol {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    ${whatStyle};
  }

  li {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    ${whatStyle};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    ${whatStyle};
  }
`;

export { EllipsisContentBody };
