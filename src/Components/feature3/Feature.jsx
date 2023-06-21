import React from "react";
import { Container, Row, Col } from "reactstrap";
import CardComponent from "./FeatureCard";

function Feature() {
  const cardData = [
    {
      title: "Increased Exposure",
      description:
        "Pitchr provides startups with a broad audience of investors actively seeking investment opportunities. By joining our platform, you can increase your visibility and attract potential investors who are specifically interested in your industry and growth stage.",
      backgroundColor: "#ffebda",
      iconClass: "bi bi-person-plus",
    },
    {
      title: "Access to a Curated Network of Investors",
      description:
        "Pitchr gives you access to a curated network of investors looking for promising startups to invest in. Through our platform, you can connect with experienced investors, gain valuable insights and guidance, and secure the funding you need to fuel your growth.",
      backgroundColor: "#dbf9f9",
      iconClass: "bi bi-file-earmark-person",
    },
    {
      title: "Showcase Your Unique Value Proposition",
      description:
        "With Pitchr, you can highlight your unique value proposition and differentiate yourself from competitors. Showcase your pitch decks, videos, financial data, and other key details that capture the essence of your business. Present your startup in the best possible light and captivate the interest of potential investors.",
      backgroundColor: "#faedff",
      iconClass: "bi bi-trophy",
    },
  ];
  return (
    <div>
      <section className="px-lg-7 py-4 px-2 pb-0">
        <div className="bg-dark py-10 px-3 px-lg-8 rounded-4 position-relative overflow-hidden z-index-1">
          <Container className=" z-index-1">
            <Row className="align-items-end justify-content-between mb-6">
              <Col xs={12} lg={6} xl={6} className="order-lg-1">
                <Row className="gx-5 align-items-center text-center z-index-1">
                  <Col lg={4} md={4}>
                    <div className="counter">
                      <span
                        className="number count text-primary"
                        data-count="200"
                      >
                        200
                      </span>
                      <span className="text-primary">+</span>
                      <h6 className="mb-0 text-light">Startups</h6>
                    </div>
                  </Col>
                  <Col lg={4} md={4}>
                    <div className="counter">
                      <span
                        className="number count text-primary"
                        data-count="450"
                      >
                        450
                      </span>
                      <span className="text-primary">+</span>
                      <h6 className="mb-0 text-light">Different industries</h6>
                    </div>
                  </Col>
                  <Col lg={4} md={4}>
                    <div className="counter">
                      <span
                        className="number count text-primary"
                        data-count="666"
                      >
                        666
                      </span>
                      <span className="text-primary">+</span>
                      <h6 className="mb-0 text-light">Happy Customers</h6>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} lg={6} xl={5}>
                <div>
                  <h2 className="text-white">Here's why you should join us</h2>
                </div>
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
                  <div>
                    <CardComponent
                      title={data.title}
                      description={data.description}
                      backgroundColor={data.backgroundColor}
                      iconClass={data.iconClass}
                    />
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
          <div className="position-absolute animation-1 w-100">
            <lottie-player
              src="https://lottie.host/59ba3e9a-bef6-400b-adbb-0eb8c20c9f65/WPBRmjAinD.json"
              background="transparent"
              speed="1"
              // style="width: auto; height: auto;"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Feature;
