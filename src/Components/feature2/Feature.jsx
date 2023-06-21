import React from "react";
import { Container, Row, Col } from "reactstrap";
import FeatureCarousel from "./FeatureCarousel";
import FeatureCard from "./FeatureCard";
function Feature() {
  const clients = [
    {
      id: 1,
      logo: require("../../static/images/client/01.png"),
    },
    {
      id: 2,
      logo: require("../../static/images/client/02.png"),
    },
    {
      id: 3,
      logo: require("../../static/images/client/03.png"),
    },
    {
      id: 4,
      logo: require("../../static/images/client/04.png"),
    },
    {
      id: 5,
      logo: require("../../static/images/client/05.png"),
    },
    {
      id: 6,
      logo: require("../../static/images/client/06.png"),
    },
  ];
  const features = [
    {
      title: "Comprehensive pitches",
      description:
        "Review comprehensive pitches asynchronously with up-front access to decks, video pitches and metrics.",
      image: require("../../static/images/features/01.png"),
    },
    {
      title: "Simple due diligence",
      description:
        "Shorten your dealflow considerably, and request access to a startup's due diligence pack with the click of a button",
      image: require("../../static/images/features/02.png"),
    },
    {
      title: "Meeting scheduling",
      description:
        "Easily schedule meetings with founders using our Calendly integration.",
      image: require("../../static/images/features/03.png"),
    },
  ];
  return (
    <div>
      <section className="bg-dark position-relative overflow-hidden z-index-1">
        <Container className="container">
          <Row className="mb-10">
            <Col className="col-12">
              <FeatureCarousel items={clients} />
            </Col>
          </Row>
          <Row className="justify-content-center text-center mb-6">
            <Col lg={8} className="col-12">
              <h6 className="border-bottom border-light border-2 d-inline-block text-primary">
                Services
              </h6>
              <h2 className="font-w-6 text-white">
                Discover new investment opportunities.
              </h2>
            </Col>
          </Row>
          <Row className="gx-5">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                image={feature.image}
                id={index}
              />
            ))}
          </Row>
        </Container>
        <div className="position-absolute animation-1 w-100">
          <lottie-player
            src="https://lottie.host/59ba3e9a-bef6-400b-adbb-0eb8c20c9f65/WPBRmjAinD.json"
            background="transparent"
            speed="1"
            //style="width: auto; height: auto;"
            loop
            autoplay
          ></lottie-player>
        </div>
      </section>
    </div>
  );
}

export default Feature;
