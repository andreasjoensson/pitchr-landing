import React, { useState } from "react";
import { Col, Container, Row, Card } from "reactstrap";
import Accordion from "./Accordian";
import LottiePlayer from "../player";

function Faq() {
  const accordionItems = [
    {
      id: 1,
      title: "How does Pitchr work?",
      content:
        "Pitchr operates as a comprehensive platform that connects startups and investors. Startups can create profiles, upload pitch decks, videos, and financial data to showcase their business. Investors can explore these profiles, filter startups based on their criteria, and initiate contact. Pitchr provides a seamless and efficient way for startups and investors to connect, collaborate, and foster successful partnerships.",
    },
    {
      id: 2,
      title: "What makes Pitchr a great idea for startups?",
      content:
        "Pitchr offers startups a unique opportunity to gain exposure, attract potential investors, and expand their network. By showcasing their key details, such as industry, funding stage, and highlights, startups can captivate investor interest and stand out from the crowd. Pitchr streamlines the process of connecting with investors, facilitating meaningful collaborations that can drive growth and success for startups.",
    },
    {
      id: 3,
      title: "Why should investors choose Pitchr?",
      content:
        "Pitchr provides investors with access to a curated selection of promising startups across various industries. The platform offers advanced filtering options, allowing investors to refine their search based on specific criteria and investment preferences. With Pitchr, investors can efficiently discover, evaluate, and connect with startups, saving time and effort while maximizing their investment potential.",
    },
    {
      id: 4,
      title: "How does Pitchr ensure the quality of startups on the platform?",
      content:
        "Pitchr employs a rigorous vetting process to maintain the quality of startups on the platform. Our team carefully evaluates each startup's information, ensuring they meet certain criteria and standards. We strive to feature startups with strong potential and viable business models, offering investors a curated selection of high-quality investment opportunities.",
    },
    {
      id: 5,
      title: "Is my information secure on the Pitchr platform?",
      content:
        "At Pitchr, we prioritize the security and confidentiality of your information. We implement industry-standard security measures to safeguard your data from unauthorized access, loss, or misuse. You can trust that your personal and investment-related information is protected within our secure platform.",
    },
  ];

  return (
    <div>
      <section className="py-4">
        <Container>
          <Row>
            <Col>
              <div className="bg-light-2 p-lg-8 p-4 rounded-4">
                <Row className="align-items-center justify-content-between">
                  <Col xs={12} lg={6} className="mb-4 mb-lg-0">
                    <Card className="bg-transparent border-0">
                      <div>
                        <h6 className="border-bottom border-dark border-2 d-inline-block">
                          F.A.Q.
                        </h6>
                        <h2 className="font-w-6">
                          Find All Your Related Questions
                        </h2>
                      </div>
                      <lottie-player
                        src="https://lottie.host/f57c02a8-9265-4873-b44a-f00a5a068318/eDbndF0d2e.json"
                        background="transparent"
                        speed="1"
                        //style="width: auto; height: auto;"
                        loop
                        autoplay
                      ></lottie-player>
                    </Card>
                  </Col>
                  <Col xs={12} lg={6} xl={5}>
                    <Accordion accordionItems={accordionItems} />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Faq;
