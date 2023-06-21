import React from "react";
import { Container, Row, Col } from "reactstrap";
import LottiePlayer from "../player";
import Bg from "../../static/lottie/about1.json";
function About() {
  const benefits = [
    {
      icon: "bi-columns-gap",
      title: "Powerful Presentations with Compelling Decks",
      description:
        "Craft visually stunning pitch decks that captivate investors and communicate your startup's unique value proposition.",
    },
    {
      icon: "bi-camera-reels",
      title: "Engage Investors with a Persuasive Video Pitch",
      description:
        "Go beyond traditional pitch decks and deliver a dynamic video pitch that grabs investors' attention. ",
    },
    {
      icon: "bi-clipboard-data",
      title: "Data-Driven Insights: Highlight Your Startup's Progress",
      description:
        "Demonstrate your startup's growth trajectory and performance metrics with ease.",
    },
    {
      icon: "bi-people",
      title: "Showcase Your Stellar Team",
      description:
        "Highlight the talented individuals behind your startup's success. Introduce your core team members, their expertise, and their track records.",
    },
  ];
  return (
    <div>
      <section>
        <Container>
          <Row className="align-items-center">
            <Col xs={12} lg={6} className="mb-8 mb-lg-0 order-lg-1">
              <LottiePlayer src={Bg} />
            </Col>
            <Col xs={12} lg={6}>
              <div>
                <h2 className="mb-5">Get Started in Minutes, Not Weeks</h2>
              </div>
              {benefits.map((benefit, index) => (
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

export default About;
