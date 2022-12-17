import styled from "styled-components";
import { InputTexts } from "styled-components/App.styled";

const EllipsisContentBody = styled(InputTexts)`
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  ol {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  li {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export { EllipsisContentBody };
