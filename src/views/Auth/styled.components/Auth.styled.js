import { Form } from "react-bootstrap";
import styled from "styled-components";
import { fadeIn } from "styled-components/animation.styled";
import { CustomImage, dropShadow, filterSaturate } from "styled-components/App.styled";

const WrapAuth = styled.div`
  ${fadeIn}
`;

const ImageAuth = styled(CustomImage)`
  border-radius: 8px;
  ${fadeIn}
  ${dropShadow};

  &:hover {
    ${filterSaturate}
  }
`;

const FormAuth = styled(Form)`
  ${fadeIn}
`;

export { WrapAuth, ImageAuth, FormAuth };
