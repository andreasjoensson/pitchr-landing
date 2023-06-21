import React, { useState, useRef, useEffect } from "react";
import TestimonialsCarousel from "./TestimonialCarousel";
import { Col, Row } from "reactstrap";

function Testimonial() {
  const items = [
    {
      id: 1,
      image: require("../../static/images/people/guy.png"),
      name: "Oliver Jensen",
      position: "Investor",
      quote:
        "Pitchr has been a game-changer for us. It's like a magnet, attracting top-notch startups and investment opportunities. Once you're here, it's hard to leave. Pitchr has become a big name in the investment landscape.",
    },
    {
      id: 2,
      image: require("../../static/images/people/whiteguy.png"),
      name: "Jonas Rain",
      position: "Founder",
      quote:
        "Pitchr has transformed the way we connect with investors. It's a platform we're proud to be associated with. The opportunities it offers are exceptional, and once you experience it, you'll find it hard to leave. Our startup owes much of its success to Pitchr.",
    },
    {
      id: 3,
      image: require("../../static/images/people/woman.png"),
      name: "Kendra Luna",
      position: "Startup Founder",
      quote:
        "Pitchr has been a game-changer for us. It's not just a platform; it's a community that fosters growth and connections. Once you become a part of Pitchr, it's difficult to imagine building your startup without it. Our journey has been greatly enhanced by Pitchr.",
    },
    {
      id: 4,
      image: require("../../static/images/people/rachel.png"),
      name: "Rachel John",
      position: "Venture Capitalist",
      quote:
        "Pitchr has become our go-to platform for discovering promising startups. It's like a magnet for innovation and exceptional ideas. Once you experience the power of Pitchr, you'll realize why it's hard to leave. It has truly established itself as a big name in the startup ecosystem.",
    },
  ];

  return (
    <div>
      <section className="px-lg-7 px-2 pb-0">
        <div className="bg-light-2 py-10 px-3 px-lg-8 rounded-4">
          <div className="container">
            <div className="row justify-content-center text-center mb-6">
              <div className="col-12 col-lg-8">
                <div>
                  <h2>Client All Over The World Sent Us Awesome Feedback</h2>
                </div>
              </div>
            </div>
            <Row className="mx-lg-n10">
              <Col>
                <TestimonialsCarousel items={items} />
              </Col>
            </Row>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
