import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import Bg from "../../static/lottie/heroBanner1.json";
import LottiePlayer from "../player";
import investingAnim from "./lf20_r8nsnfit.json";
import { Link } from "react-router-dom";

function HeroBanner1() {
  return (
    <div>
      <section className="overflow-hidden position-relative">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} lg={6} className="order-lg-1 ms-auto mb-lg-0">
              <LottiePlayer src={investingAnim} />
            </Col>
            <Col xs={12} lg={5}>
              <h1 className="font-w-4 mb-4">
                <span>Fundraising made</span>
                <span className="title-bg text-primary ms-2 position-relative font-w-7 d-inline-block">
                  easy
                </span>
                <br className="d-md-block d-none" /> with pitchr.
              </h1>
              <p className="lead text-dark mb-5">
                Pitch, connect, diligence - all in one app.
              </p>

              <Container>
                <Row>
                  <Link
                    to="https://app.pitcha.net/auth/sign-up/investor"
                    target="_blank"
                  >
                    <Button
                      className="custom-white-btn"
                      style={{
                        flexShrink: 0,
                        fontSize: "18",
                        background: "#2563eb",
                      }}
                    >
                      Get Started as investor
                      <i className="bi-cash-stack text-white ms-3"></i>{" "}
                    </Button>
                  </Link>
                </Row>
                <Row className="mt-3 ">
                  <Link
                    to="https://app.pitcha.net/auth/sign-up/business"
                    target="_blank"
                  >
                    <Button color="dark" style={{ flexShrink: 0 }}>
                      Get Started as startup{" "}
                      <i className="bi-graph-up text-white ms-3"></i>{" "}
                    </Button>
                  </Link>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
        <div className="position-absolute animation-1">
          <LottiePlayer src={Bg} />
        </div>
      </section>
    </div>
  );
}

export default HeroBanner1;
