import { Player } from "@lottiefiles/react-lottie-player";
import React, { useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import { Button, Col, Container, Row } from "reactstrap";
import heroAnim from "./lf20_pcspmx46.json";

function HeroBanner3() {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleClick = () => {
    window.location.href = "https://app.pitchr.dk/auth/sign-up/business";
  };

  const words = [
    "web design",
    "creative ideas",
    "mobile design",
    "WebApp",
    "Agency",
    "Marketing",
    "Designer",
    "Developer",
  ];
  return (
    <div>
      <section className="overflow-hidden position-relative">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="order-lg-1 ms-auto mb-8 mb-lg-0">
              <Player src={heroAnim} className="player" loop autoplay />
            </Col>
            <Col md={6}>
              <h1 className="font-w-4">Secure </h1>
              <h1 className="font-w-4 text-primary">funding</h1>

              <p className="lead my-5 text-dark">
                Pitchr offers startups a unique platform to showcase their
                business, connect with investors, and unlock growth
                opportunities.
              </p>
              <div>
                <Button color="dark" className="me-3" onClick={handleClick}>
                  Let's Get Started
                </Button>
                <div
                  onClick={openModal}
                  style={{
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                  }}
                >
                  <i className="bi bi-play-circle-fill text-primary me-2 fs-3 align-middle"></i>
                  <span>Watch Video</span>
                </div>

                <Modal
                  isOpen={isModalOpen}
                  onRequestClose={closeModal}
                  contentLabel="Video Modal"
                  style={{
                    overlay: {
                      position: "fixed",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: "rgba(0, 0, 0, 0.75)",
                      zIndex: 9999, // Higher zIndex to appear on top
                    },
                    content: {
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      maxWidth: "80%",
                      maxHeight: "80%",
                      overflow: "auto",
                      outline: "none",
                      backgroundColor: "white",
                    },
                  }}
                >
                  <div className="w-100 h-100">
                    <iframe
                      className="w-100 h-100 position-relative"
                      scrolling="no"
                      frameBorder="0"
                      src="https://firebasestorage.googleapis.com/v0/b/pitchr-d3d71.appspot.com/o/videos%2Femployees.mp4?alt=media&token=227d48f8-8fbd-428e-9fc8-a686a701eb87"
                      title="Video Player"
                      //allowFullScreen
                    ></iframe>
                  </div>
                </Modal>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="position-absolute animation-1">
          <Player
            src="https://lottie.host/59ba3e9a-bef6-400b-adbb-0eb8c20c9f65/WPBRmjAinD.json"
            className="player"
            style={{ width: "auto", height: "auto" }}
            background="transparent"
            loop
            autoplay
          />
        </div>
      </section>
    </div>
  );
}

export default HeroBanner3;
