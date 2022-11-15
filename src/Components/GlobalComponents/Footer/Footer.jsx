import { NewsLetter } from "./components/NewsLetter";
import { WrapFooter } from "./styled-components/WrapFooter.styled";
import { useShowNewsLetter } from "./hooks/useShowNewsLetter";
import { Col, Row } from "react-bootstrap";
import { NavFooter } from "./components/NavFooter/NavFooter";
import { publicNavItems } from "utilities/navitems/navItems.util";
import { FooterLogo } from "./components/FooterLogo/FooterLogo";
import { FooterSocialNetworks } from "./components/FooterSocialNetworks/FooterSocialNetworks";
import { useFooter } from "./hooks/useFooter";
import { FooterDataLoading } from "./components/FooterDataLoading/FooterDataLoading";

const Footer = () => {
  const { handleNewsLetter, newsLetter } = useShowNewsLetter();
  const { contactData, loadingData } = useFooter();

  return (
    <WrapFooter className="mt-4 py-3">
      <Row className="m-0 p-0 d-flex justify-content-center">
        <Col className="mx-0 p-0 d-flex flex-wrap justify-content-center ">
          <FooterDataLoading loading={loadingData}>
            <NavFooter>{publicNavItems}</NavFooter>
          </FooterDataLoading>
        </Col>
      </Row>

      <Row className="col col-12 p-0 my-3 mx-0 d-flex flex-wrap flex-sm-nowrap justify-content-evenly align-items-center">
        <Col className="d-none d-sm-flex flex-column align-items-center justify-content-center col-12 col-sm-2 col-md-2">
          <FooterDataLoading loading={loadingData}>
            <FooterLogo
              logo={contactData?.data?.logo}
              name={contactData?.data?.name}
            />
          </FooterDataLoading>
        </Col>

        {newsLetter && (
          <Col className="col col-12 col-sm-6 col-md-5 ">
            <FooterDataLoading loading={loadingData}>
              <NewsLetter handleNewsLetter={handleNewsLetter} />
            </FooterDataLoading>
          </Col>
        )}

        <Col className="d-flex flex-column align-items-center justify-content-center d-sm-none col-5">
          <FooterDataLoading loading={loadingData}>
            <FooterLogo
              logo={contactData?.data?.logo}
              name={contactData?.data?.name}
            />
          </FooterDataLoading>
        </Col>

        <Col className="mx-0 px-0 d-flex justify-content-center col-6 col-sm-3 col-md-2">
          <FooterDataLoading loading={loadingData}>
            <FooterSocialNetworks contactData={contactData} />
          </FooterDataLoading>
        </Col>
      </Row>
    </WrapFooter>
  );
};

export default Footer;
