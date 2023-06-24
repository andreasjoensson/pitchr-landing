import React from "react";
import Page_Heading from "../../Components/page-heading/Page_Heading";
import { Col, Container, Row } from "reactstrap";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import MapSection from "./MapSection";

function ContatcUs2() {
  const firstBreadcrumb = { label: "Pages", link: "/contact-us-2" };
  const secondBreadcrumb = {
    label: "Contatct Us",
    link: "/contact-us-2",
    active: true,
  };
  const contactInfo = [
    {
      region: "København",
      address: "Strikkegade 8, 1303 København K",
      phone: "+45 22 15 66 49",
      email: "info@pitchr.dk",
    },
  ];
  return (
    <div className="page-wrapper">
      <Page_Heading
        title="Contact Us"
        firstBreadcrumb={firstBreadcrumb}
        secondBreadcrumb={secondBreadcrumb}
      />
      <section>
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <ContactForm />
            </Col>
          </Row>
          <Row className="mt-8">
            <Col lg={6} className="col-12 mb-lg-0">
              <ContactInfo contactInfo={contactInfo} />
            </Col>
            <Col lg={6} className="col-12">
              <MapSection />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default ContatcUs2;
