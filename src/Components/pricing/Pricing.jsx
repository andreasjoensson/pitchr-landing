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
import LottiePlayer from "../player";
function Pricing() {
  const packages = [
    {
      title: "Free",
      subTitle: "All features included",
      price: 0,
      features: [
        "Unlimited Startup Profile Creation",
        "Upload Pitch Decks and Videos",
        "Access to Investor Network",
        "Real-time Metrics and Analytics",
        "Dedicated Support",
      ],
      buttonColor: "light",
    },
  ];

  return (
    <div>
      <section className="position-relative overflow-hidden">
        <Container>
          <Row className="justify-content-center text-center mb-6">
            <Col className="col-12 col-lg-8">
              <h2>Free, Because We Believe in Your Potential</h2>
              <p className="lead">
                At Pitchr, we believe that every great idea deserves a chance to
                thrive.
              </p>
            </Col>
          </Row>
          <div className="row align-items-center">
            <div className="col-12">
              <div className="row justify-content-center align-items-center">
                {packages.map((pkg, index) => (
                  <div key={index} className="col-12 col-lg-4 mb-8 mb-lg-0">
                    <PackageCard {...pkg} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
        <div className="position-absolute animation-1">
          <LottiePlayer src="https://lottie.host/b3b9dd01-8da3-408d-bf97-301eb5efd93c/fmsV6COvHR.json" />
        </div>
      </section>
    </div>
  );
}

export default Pricing;
