import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import LottiePlayer from "../player";

function Footer() {
  const navigate = useNavigate();
  const socialMedia = [
    { icon: "bi-twitter", link: "https://twitter.com/PitchrVc" },
    { icon: "bi-linkedin", link: "https://www.linkedin.com/company/pitchrdk/" },
  ];
  return (
    <div>
      <footer className="py-11 position-relative overflow-hidden">
        <Container className="z-index-1">
          <Row>
            <Col md={12} lg={4} className="pe-lg-7">
              <Link className="footer-logo" to="index">
                <img className="img-fluid" src="images/logo.png" alt="" />
              </Link>
              <p className="my-4">
                Pitchr is a cutting-edge platform designed to facilitate
                meaningful connections between investors and startups. Our fully
                responsive and versatile solution empowers you to build a
                thriving business by leveraging the creative potential of
                Pitchr.
              </p>
              <ul className="media-icon list-unstyled">
                <ListGroupItem className="mb-2">
                  <Link to="mailto:skytouchinfotech01@gmail.com" className="h6">
                    info@pitchr.dk
                  </Link>
                </ListGroupItem>
                <ListGroupItem>
                  <Link to="tel:+4522156649" className="h6">
                    +45 22 15 66 49
                  </Link>
                </ListGroupItem>
              </ul>
            </Col>

            <Col md={6} lg={2} className="mt-6 mt-lg-0 footer-menu">
              <h5 className="mb-4">Legal</h5>
              <Nav className="navbar-nav list-unstyled mb-0">
                <NavItem className="mb-3">
                  <Link to="/terms-and-conditions" className="nav-link">
                    Terms Of Service
                  </Link>
                </NavItem>
                <NavItem className="mb-3">
                  <Link to="/privacy-policy" className="nav-link">
                    Privacy Policy
                  </Link>
                </NavItem>
              </Nav>
            </Col>
            <Col md={8} lg={4} className="mt-6 mt-lg-0">
              <h5 className="mb-4">Our Address</h5>
              <div className="mb-3 text-muted" style={{ fontSize: "16px" }}>
                Strikkegade 8, 1303 København K
              </div>

              <ul horizontal className="list-inline  mb-3">
                {socialMedia.map((item, index) => (
                  <ListGroupItem
                    key={index}
                    className="list-inline-item"
                    style={{ display: "inline-block", marginRight: "10px" }}
                  >
                    <Link to="#" className="text-dark fs-3">
                      <item.icon />
                      <i className={`bi ${item.icon}`}></i>
                    </Link>
                  </ListGroupItem>
                ))}
              </ul>
              <div className="subscribe-form">
                <form
                  id="mc-form"
                  className="d-flex align-items-center shadow p-2 rounded bg-white"
                >
                  <input
                    type="email"
                    // value=""
                    name="EMAIL"
                    className="email form-control bg-light border-0 me-2"
                    id="mc-email"
                    placeholder="Enter your email address"
                    required=""
                  />
                  <input
                    className="btn btn-dark"
                    type="submit"
                    name="subscribe"
                    value="Subscribe"
                  />
                </form>
              </div>
            </Col>
          </Row>
          <Row className="mt-7">
            <Col className="text-center text-dark">
              Copyright 2023{" "}
              <u>
                <a href="#">Pitchr </a>
              </u>
              | All Rights Reserved
            </Col>
          </Row>
        </Container>
        <div className="position-absolute animation-1 opacity-1">
          <LottiePlayer src="https://lottie.host/59ba3e9a-bef6-400b-adbb-0eb8c20c9f65/WPBRmjAinD.json" />
        </div>
      </footer>
    </div>
  );
}

export default Footer;
