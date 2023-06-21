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
          <Row>
            <Col className="col-12">
              <FeatureCarousel items={clients} />
            </Col>
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
