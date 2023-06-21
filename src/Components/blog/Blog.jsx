import React from "react";
import { Col, Container, Row } from "reactstrap";
import FirstBlogItem from "./FirstBlogItem";
import RemainingBlogItems from "./RemainnigBlogItem";
import { useSelector } from "react-redux";

function Blog() {
  const blogList = useSelector((state) => state.blog.blogItems);
  const firstBlog = blogList[0];
  const remainingBlogs = [blogList[1], blogList[2]];
  return (
    <div>
      <section>
        <Container>
          <Row className="align-items-end mb-6">
            <Col xs={12} md={12} lg={6} className="my-lg-0">
              <div>
                <h2 className="mb-0">
                  From Our Blog List Latest News & Article
                </h2>
              </div>
            </Col>
            <Col xs={12} md={12} lg={5} className="ms-auto">
              <p className="lead mb-0">
                Our blog is a valuable resource for startups and investors
                alike. We provide insightful tips, expert guidance, and industry
                trends to help you make informed decisions and stay ahead of the
                competition.
              </p>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col md={12} lg={5} className="mb-5 mb-lg-0">
              <FirstBlogItem blog={firstBlog} />{" "}
            </Col>
            <Col md={12} lg={7} className="mb-5 mb-lg-0">
              <RemainingBlogItems blogs={remainingBlogs} />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Blog;
