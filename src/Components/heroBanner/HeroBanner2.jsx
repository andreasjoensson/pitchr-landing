import React, { useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "reactjs-popup/dist/index.css";
import LottiePlayer from "../player";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import Hero2 from "./dlf10_K3Nf22rRI1.json";
import Bg from "../../static/lottie/hero2bg.json";

function HeroBanner2() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleClick = () => {
    window.location.href = "https://app.pitcha.net/auth/sign-up/investor";
  };

  return (
    <div>
      <section className="px-lg-10 pb-0 pt-5">
        <div className="overflow-hidden position-relative bg-light-3 z-index-1 rounded-4 py-10">
          <Container className="z-index-1">
            <Row className="align-items-center">
              <Col xs={12} lg={6} className="mb-8 mb-lg-0">
                <LottiePlayer src={Hero2} />
              </Col>
              <Col xs={12} lg={6} className="ps-lg-8">
                <h1 className="font-w-6 mb-5">Invest with Confidence </h1>
                <p className="lead mb-6">
                  We provide the best investment opportunities.
                </p>
                <div>
                  <Button color="dark" className="me-3" onClick={handleClick}>
                    Let's Get Started
                  </Button>
                  <div
                    onClick={openModal}
                    className="me-3"
                    style={{
                      paddingTop: "4px",
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
                        maxWidth: "100%",
                        maxHeight: "100%",
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
                        src="https://firebasestorage.googleapis.com/v0/b/pitchr-d3d71.appspot.com/o/videos%2FInvestors.mp4?alt=media&token=1f87bacf-457b-4ed2-a5b2-94ecef4ed1aa"
                        title="Video Player"
                        //allowFullScreen
                      ></iframe>
                    </div>
                  </Modal>
                </div>
              </Col>
            </Row>
          </Container>
          <div className="position-absolute animation-1 w-100">
            <LottiePlayer src={Bg} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroBanner2;
