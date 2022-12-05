import { NewsLetter } from "./components/NewsLetter";
import { WrapFooter } from "./styled-components/WrapFooter.styled";
import { Col, Collapse, Row } from "react-bootstrap";
import { NavFooter } from "./components/NavFooter/NavFooter";
import { footerNavItems } from "utilities/navitems/navItems.util";
import { FooterLogo } from "./components/FooterLogo/FooterLogo";
import { FooterSocialNetworks } from "./components/FooterSocialNetworks/FooterSocialNetworks";
import { useFooter } from "./hooks/useFooter";
import { FooterDataLoading } from "./components/FooterDataLoading/FooterDataLoading";

const Footer = () => {
  const { contactData, loadingData, handleNewsLetter, newsLetter } = useFooter();

  return (
    <WrapFooter className="pb-2">
      <Row className="first-row m-0 p-0 d-flex justify-content-center">
        <Col className="mx-0 p-0 d-flex flex-wrap justify-content-center ">
          <FooterDataLoading loading={loadingData}>
            <NavFooter>{footerNavItems}</NavFooter>
          </FooterDataLoading>
        </Col>
      </Row>

      <Row className="second-row col col-12 p-0 my-2 mx-0 d-flex flex-wrap flex-sm-nowrap justify-content-evenly align-items-center">
        <Col className="primer-logo d-none d-sm-flex flex-column align-items-center justify-content-center col-12 col-sm-3 col-md-2">
          <FooterDataLoading loading={loadingData}>
            <FooterLogo logo={contactData?.data?.logo} name={contactData?.data?.name} />
          </FooterDataLoading>
        </Col>

        <Collapse className="mb-2" in={!newsLetter} dimension="width">
          <Col className="col col-12 col-sm-6 col-md-7 ">
            <FooterDataLoading loading={loadingData}>
              <NewsLetter handleNewsLetter={handleNewsLetter} newsLetter={newsLetter} />
            </FooterDataLoading>
          </Col>
        </Collapse>

        <Col className="segundo-logo d-flex flex-column align-items-center justify-content-center d-sm-none col-5 p-1">
          <FooterDataLoading loading={loadingData}>
            <FooterLogo logo={contactData?.data?.logo} name={contactData?.data?.name} />
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
