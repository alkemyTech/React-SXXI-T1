import { NewsLetter } from "./components/NewsLetter";
import { WrapFooter } from "./styled-components/WrapFooter.styled";
import { useShowNewsLetter } from "./hooks/useShowNewsLetter";
import { Col } from "react-bootstrap";

const Footer = () => {
  const { handleNewsLetter, newsLetter } = useShowNewsLetter();

  return (
    <WrapFooter>
      <Col className="col col-12">Footer</Col>
      {!newsLetter && (
        <Col className="col col-12 d-flex justify-content-center">
          <NewsLetter handleNewsLetter={handleNewsLetter} />
        </Col>
      )}
    </WrapFooter>
  );
};

export default Footer;
