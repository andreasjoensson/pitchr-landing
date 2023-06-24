import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Col, Container, Nav, Row } from "reactstrap";
import { setSelectedPortFolio } from "../../store/reducer/portFolioReducer";

function Portfolio() {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("all");
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const portfolioItems = useSelector((state) => state.portFolio.portFolioItems);

  const filteredPortfolioItems =
    activeTab === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeTab);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const prevSrc =
    filteredPortfolioItems[
      (photoIndex + filteredPortfolioItems.length - 1) %
        filteredPortfolioItems.length
    ].imgSrc;
  const nextSrc =
    filteredPortfolioItems[(photoIndex + 1) % filteredPortfolioItems.length]
      .imgSrc;

  return (
    <div>
      <section>
        <Container>
          <Row className="align-items-end mb-8">
            <Col xs="12" lg="5">
              <h2 className="mb-5 mb-lg-0">
                Join the hottest industries in acquiring funding.
              </h2>
            </Col>
          </Row>
          <Row>
            {filteredPortfolioItems.map((item, index) => (
              <Col key={index} lg="4" md="6" className="mb-5">
                <div className="hover-translate position-relative bg-white shadow p-3 rounded-4">
                  <img
                    className="img-fluid w-100 rounded-4"
                    src={item.imgSrc}
                    alt=""
                  />
                  <div className="portfolio-title d-flex justify-content-between align-items-center mt-3">
                    <div>
                      <small className="mb-2">{item.category}</small>
                      <h6 className="mb-0">
                        <span className="btn-link">{item.title}</span>
                      </h6>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      {isOpen && (
        <Lightbox
          mainSrc={filteredPortfolioItems[photoIndex].imgSrc}
          nextSrc={nextSrc}
          prevSrc={prevSrc}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + filteredPortfolioItems.length - 1) %
                filteredPortfolioItems.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % filteredPortfolioItems.length)
          }
        />
      )}
    </div>
  );
}

export default Portfolio;
