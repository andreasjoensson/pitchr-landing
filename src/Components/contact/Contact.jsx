import React from "react";
import { Button, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import BgImage from "../../static/images/bg/01.png";

function Contact() {
  return (
    <div>
      <Container>
        <Row className="row">
          <Col className="col-12">
            <div
              className="bg-dark p-4 p-lg-10 rounded-4 text-center"
              style={{
                backgroundImage: `url(${BgImage})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h2 className="text-white mb-0 font-w-7">
                Accelerate Your Success with Pitchr <br />
                Join our Expansive Network Today
              </h2>
              <p className="text-light my-4">
                Our platform empowers startups like yours to connect,
                collaborate, and thrive in a dynamic ecosystem.{" "}
              </p>

              <Link
                to="https://app.pitchr.dk/auth/sign-up/business"
                className="btn btn-primary"
              >
                Let's Get Started
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
