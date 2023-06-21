import React from "react";
import { Container, Row, Col } from "reactstrap";
import CardComponent from "./FeatureCard";
import LottiePlayer from "../player";
import Bg from "../../static/lottie/feature.json";

function Feature() {
  const cardData = [
    {
      title: "It's 2023 - Pitch Like It!",
      description:
        "Avoid the hassle of pitching physically to hundreds of investors, by building your Pitchr profile with all the core components of your startup.",
      backgroundColor: "#ffebda",
      iconClass: "bi bi-sliders2",
    },
    {
      title: "Quit The Back and Forth",
      description:
        "Quickly and easily schedule meetings with investors by syncing your Calendly URL on your Pitchr profile. Book meetings with investors without a warm intro.",
      backgroundColor: "#dbf9f9",
      iconClass: "bi bi-gear",
    },
    {
      title: "Finish Your Round in No Time",
      description:
        "Due diligence is boring. Get it over with in the easiest way possible, by uploading your due diligence pack.",
      backgroundColor: "#faedff",
      iconClass: "bi bi-images",
    },
  ];

  return (
    <div>
      <section className="px-lg-7 px-2 pb-0 pt-0">
        <div className="bg-light py-10 px-3 px-lg-8 rounded-4 position-relative overflow-hidden">
          <Container className="z-index-1">
            <Row className="align-items-end justify-content-between mb-6">
              <Col xs={12} lg={6} xl={5}>
                <div>
                  <h2>Fundraise on Autopilot</h2>
                </div>
              </Col>
              <Col xs={12} lg={6} xl={5} className="ms-auto mt-5 mt-lg-0">
                <p className="lead">
                  We have designed a three step process, so founders can focus
                  their time and energy on what really matters - running their
                  startup!
                </p>
              </Col>
            </Row>
            <Row className="gx-5">
              {cardData.map((data, index) => (
                <Col
                  style={{
                    marginTop: "2.5rem",
                    "@media screen and (minWidth: 700px)": { marginTop: 0 },
                  }}
                  lg={4}
                  md={6}
                  key={index}
                >
                  <CardComponent
                    title={data.title}
                    description={data.description}
                    backgroundColor={data.backgroundColor}
                    iconClass={data.iconClass}
                  />
                </Col>
              ))}
            </Row>
          </Container>
          <div className="position-absolute animation-2">
            <LottiePlayer src={Bg} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Feature;
