import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import LottiePlayer from "../player";

function About2() {
  return (
    <div>
      <section className="py-4">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} lg={6} className=" mb-lg-0 order-lg-1">
              <LottiePlayer src="https://lottie.host/f83a82e9-604e-4d44-9fcb-e889c7b5404b/EuPKpfBQSu.json" />
            </Col>
            <Col xs={12} lg={6} className="pt-10">
              <h6 className="border-bottom border-dark border-2 d-inline-block">
                Curated startups
              </h6>
              <h2 className="font-w-6">Unlocking Opportunities for Success</h2>
              <p className="lead mb-4">
                We showcase key details, including industry focus, funding
                stage, and notable highlights, allowing you to explore
                investment prospects that align with your interests and goals.
                With our comprehensive startup profiles, you can make informed
                investment decisions and seize opportunities for growth.
              </p>
              <div className="d-flex align-items-start mb-3">
                <div className="me-3">
                  <i className="bi bi-check2-all fs-2 text-primary"></i>
                </div>
                <div>
                  <h6 className="mb-2">
                    Efficiently Find the Perfect Investment Opportunities
                  </h6>
                  <p className="mb-0">
                    At Pitchr, we've revolutionized the process of discovering
                    startups. Our advanced filtering capabilities enable
                    investors to narrow down their search and find the perfect
                    investment opportunities faster than ever before.
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-start">
                <div className="me-3">
                  <i className="bi bi-check2-all fs-2 text-primary"></i>
                </div>
                <div>
                  <h6 className="mb-2">
                    Streamlined Communication for Investor-Startup Collaboration
                  </h6>
                  <p className="mb-0">
                    Pitchr facilitates seamless connectivity between investors
                    and startups. Our platform provides a user-friendly
                    interface that allows you to connect with promising startups
                    effortlessly
                  </p>
                </div>
              </div>

              <Link
                className="btn btn-dark mt-6"
                to="https://app.pitchr.dk/auth/sign-up/investor"
              >
                Get Started
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default About2;
