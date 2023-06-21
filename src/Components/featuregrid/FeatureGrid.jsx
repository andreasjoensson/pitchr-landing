import React from "react";
import { Container, Row, Col } from "reactstrap";

function FeatureGrid() {
  const benefits = [
    {
      icon: "bi-file-earmark-easel",
      title: "Comprehensive Pitches",
      description:
        "Review comprehensive pitches asynchronously with up-front access to decks, video pitches, and metrics. Meeting scheduling",
    },
    {
      icon: "bi bi-calendar-check",
      title: "Meeting Scheduling",
      description:
        "Easily schedule meetings with founders using our Calendly integration. Personalized filtering",
    },
    {
      icon: "bi bi-funnel",
      title: "Personalized Filtering",
      description:
        "Focus your energy on opportunities that are worth your time, by personalizing and streamlining your feed by industry and location. Simple due diligence",
    },
    {
      icon: "bi bi-archive",
      title: "Simple Due Diligence",
      description:
        "Shorten your dealflow considerably, and request access to a startup's due diligence pack with the click of a button.",
    },
  ];
  return (
    <div>
      <section>
        <Container>
          <Row className="align-items-center">
            <div>
              <h2 className="mb-5">Features</h2>
            </div>
            <Col xs={12} lg={6}>
              {benefits.slice(0, 2).map((benefit, index) => (
                <div className="d-flex align-items-start mb-4" key={index}>
                  <div className="me-3">
                    <i className={`bi ${benefit.icon} fs-3 text-primary`}></i>
                  </div>
                  <div>
                    <h5 className="mb-2">{benefit.title}</h5>
                    <p className="mb-0">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </Col>
            <Col xs={12} lg={6}>
              {benefits.slice(2, 4).map((benefit, index) => (
                <div className="d-flex align-items-start mb-4" key={index}>
                  <div className="me-3">
                    <i className={`bi ${benefit.icon} fs-3 text-primary`}></i>
                  </div>
                  <div>
                    <h5 className="mb-2">{benefit.title}</h5>
                    <p className="mb-0">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default FeatureGrid;
