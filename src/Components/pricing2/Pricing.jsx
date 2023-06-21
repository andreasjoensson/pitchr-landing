import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";
import PackageCard from "./PackageCard";
function Pricing() {
  const packages = [
    {
      title: "Free",
      subTitle: "Unleash the Power of Pitchr",
      price: "0",
      features: [
        "Unlimited Startup Profile Creation",
        "Upload Pitch Decks and Videos",
        "Access to Investor Network",
        "Real-time Metrics and Analytics",
        "Dedicated Support",
      ],
      buttonColor: "primary",
    },
  ];
  return (
    <div>
      <section className="position-relative overflow-hidden">
        <Container>
          <Row className="justify-content-center text-center mb-6">
            <Col className="col-12 col-lg-8">
              <h2>Experience the Power of Pitchr, Completely Free!</h2>
              <p className="lead">
                At Pitchr, we believe in empowering startups and investors
                without any financial barriers. Our platform is completely free
                to use, allowing you to unlock the full potential of your
                business without worrying about costs.
              </p>
            </Col>
          </Row>
          <div className="row align-items-center">
            <div className="col-12">
              <div className="row gx-0 mx-auto align-items-center">
                {packages.map((pkg, index) => (
                  <div
                    key={index}
                    className="col-12 mx-auto col-lg-4 mb-8 mb-lg-0"
                  >
                    <PackageCard {...pkg} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
        <div className="position-absolute animation-1">
          <lottie-player
            src="https://lottie.host/b3b9dd01-8da3-408d-bf97-301eb5efd93c/fmsV6COvHR.json"
            background="transparent"
            speed="1"
            style={{ width: "auto", height: "auto" }}
            loop
            autoplay
          ></lottie-player>
        </div>
      </section>
    </div>
  );
}

export default Pricing;
