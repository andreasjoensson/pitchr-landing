import React from "react";
import { Container, Row, Col } from "reactstrap";
import LottiePlayer from "../player";
import Bg from "../../static/lottie/counter.json";

function Counter() {
  return (
    <div>
      <section className="pb-0">
        <Container className="container">
          <Row className="align-items-center justify-content-between">
            <Col
              xs={12}
              xl={5}
              lg={6}
              className="mb-8 mb-lg-0 position-relative"
            >
              <Row className="gx-5 align-items-center text-center z-index-1">
                <Col lg={6} md={6}>
                  <div className="counter bg-white rounded-4 p-5 py-7 shadow">
                    <span className="number count text-dark" data-count="200">
                      200
                    </span>
                    <span className="text-dark">+</span>
                    <h6 className="mb-0 text-muted">Funds</h6>
                  </div>
                </Col>
                <Col lg={6} md={6} mt-5>
                  <div className="counter bg-white rounded-4 p-5 py-7 shadow">
                    <span className="number count text-dark" data-count="450">
                      450
                    </span>
                    <span className="text-dark">+</span>
                    <h6 className="mb-0 text-muted">Industries</h6>
                  </div>
                  <div className="counter bg-white rounded-4 p-5 py-7 shadow mt-7">
                    <span className="number count text-dark" data-count="666">
                      666
                    </span>
                    <span className="text-dark">+</span>
                    <h6 className="mb-0 text-muted">Angel investors</h6>
                  </div>
                </Col>
              </Row>
              <div className="position-absolute animation-1 opacity-1">
                <LottiePlayer src={Bg} />
              </div>
            </Col>
            <Col xs={12} xl={6} lg={6}>
              <div>
                <h2>Leverage Our Vast Investor Network</h2>
                <p className="lead mb-4">
                  Connect with a diverse and extensive network of investors
                  through Pitchr. Our platform provides you with unparalleled
                  access to a wide range of potential investors, from angel
                  investors to venture capitalists.
                </p>
              </div>
              <div className="d-flex align-items-start mb-3">
                <div className="me-3">
                  <i className="bi bi-check2-all fs-2 text-primary"></i>
                </div>
                <div>
                  <h6 className="mb-2">Effortless Meeting Scheduling</h6>
                  <p className="mb-0">
                    Connecting with founders has never been easier. Pitchr
                    integrates seamlessly with Calendly, enabling you to
                    schedule meetings with startup founders hassle-free.
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-start">
                <div className="me-3">
                  <i className="bi bi-check2-all fs-2 text-primary"></i>
                </div>
                <div>
                  <h6 className="mb-2">Comprehensive Pitch Review</h6>
                  <p className="mb-0">
                    Review investment pitches at your convenience. With Pitchr,
                    you can assess startups' presentations, decks, video
                    pitches, and key metrics asynchronously.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Counter;
