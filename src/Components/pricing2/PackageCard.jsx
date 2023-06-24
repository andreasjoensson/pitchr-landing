import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardText, CardTitle } from "reactstrap";

const PackageCard = ({ title, subTitle, price, features, buttonColor }) => (
  <Card className={"rounded-4"}>
    <CardBody className="py-8 px-6">
      <div className="mb-2 d-flex align-items-center">
        <i className="bi bi-award fs-1 text-primary me-2"></i>
        <CardTitle tag="h5" className={"mb-0"}>
          {title}
        </CardTitle>
      </div>
      <CardText className={"text-muted mb-4"}>{subTitle}</CardText>
      <div className={`d-flex text-dark border-bottom border-light pb-4 mb-4`}>
        <span className={"h6 text-dark mb-0 mt-2"}>$</span>
        <span className={"price display-2 fw-bold"}>{price}</span>
        <span className={"h6 align-self-end mb-1"}>/mo</span>
      </div>
      {features.map((feature, index) => (
        <div key={index} className="d-flex align-items-center mb-3">
          <div className="me-2">
            <i className="bi bi-check-lg text-primary"></i>
          </div>
          <p className={`mb-0 `}>{feature}</p>
        </div>
      ))}
      <Link to="https://app.pitchr.dk/auth/sign-up/business">
        <Button
          block
          color={buttonColor}
          outline
          className="mt-5 mt-5 btn btn-outline-dark d-block w-100"
        >
          Get started
        </Button>
      </Link>
    </CardBody>
  </Card>
);
export default PackageCard;
