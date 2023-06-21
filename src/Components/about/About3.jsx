import React from "react";
import { Container, Row, Col } from "reactstrap";
import LottiePlayer from "../player";
import Bg from "../../static/lottie/about3.json";

function About3() {
  const benefits = [
    {
      icon: "bi-file-earmark-ruled",
      title: "Post Your Pitch Deck",
      description:
        "Share your compelling pitch deck on Pitchr to showcase your startup's vision, market opportunity, and growth potential. Engage investors with a professionally crafted presentation that highlights the unique aspects of your business.",
    },
    {
      icon: "bi-megaphone",
      title: "Present Your Pitch",
      description:
        "Deliver a captivating pitch to potential investors by leveraging Pitchr's platform. Share your pitch video or conduct a live presentation to effectively communicate your value proposition, competitive advantage, and revenue model.",
    },
    {
      icon: "bi-people",
      title: "Highlight Your Team",
      description:
        "Introduce your talented team members and their expertise to instill confidence in investors. Showcase the skills, experience, and passion that make your team capable of executing your startup's vision and achieving success.",
    },
  ];
  return (
    <div>
      <section className="py-4">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} lg={7} className="mb-8 mb-lg-0">
              <LottiePlayer src={Bg} />
            </Col>
            <Col xs={12} lg={5}>
              <div>
                <h2 className="mb-5">Three Simple Step To Get Started</h2>
              </div>

              {benefits.map((benefit, index) => (
                <div className="d-flex align-items-start mb-4" key={index}>
                  <div className="me-3">
                    <div className="bg-white shadow rounded-4 px-4 pt-4 pb-3 me-2 mt-2 position-relative">
                      <i className={`bi ${benefit.icon} fs-3 text-primary`}></i>{" "}
                      <span className="mt-n2 me-n2 d-inline-block bg-light-3 text-dark px-2 py-1 rounded position-absolute top-0 end-0">
                        0{index + 1}
                      </span>
                    </div>
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

export default About3;
