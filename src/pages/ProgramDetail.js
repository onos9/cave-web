import {
  faExternalLinkAlt,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Card,
  Col,
  Container,
  Image,
  Nav,
  Navbar,
  Row,
} from "@themesberg/react-bootstrap";
import React from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import ReactHero from "../assets/img/cave-hero-logo.svg";
import Diploma from "../assets/img/cover_diploma.jpg";
import PGDT from "../assets/img/cover_diploma2.jpg";
import Caption from "../assets/img/cover_pgdt2.jpg";
import typography from "../data/typography";
import { Router } from "../router";

export default (state = null, action) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  return (
    <>
      <Navbar
        variant="dark"
        expand="lg"
        bg="dark"
        className="navbar-transparent navbar-theme-primary sticky-top"
      >
        <Container className="position-relative justify-content-between px-3">
          <Navbar.Brand
            as={HashLink}
            to={Router.Presentation.path}
          ></Navbar.Brand>
          <Image
            width={100}
            height="auto"
            src={ReactHero}
            className="img-responsive"
          />
          <div className="d-flex align-items-center">
            <Navbar.Collapse id="navbar-default-primary">
              <Nav className="navbar-nav-hover align-items-lg-center">
                <Nav.Link
                  as={HashLink}
                  to={Router.Admission.path}
                  className="d-sm-none d-xl-inline"
                >
                  Admissions
                </Nav.Link>
                <Nav.Link as={HashLink} to="#events">
                  Events
                </Nav.Link>
                <Nav.Link as={HashLink} to="#about">
                  About Us
                </Nav.Link>

                <Nav.Link as={HashLink} to="#scholarship">
                  Scholarship
                </Nav.Link>
                <Nav.Link as={HashLink} to="#testimonial">
                  Testimonial
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Button
              as={HashLink}
              to={Router.Signin.path}
              variant="outline-white"
              className="ms-3"
            >
              <FontAwesomeIcon icon={faSignInAlt} className="me-1" />
              Login
            </Button>
          </div>
        </Container>
      </Navbar>
      <section
        className="section-header overflow-hidden pt-5 pt-lg-6 pb-9 pb-lg-12 bg-primary text-white"
        id="home"
      >
        <Container>
          <Row>
            <Col xs={12} className="text-center">
              <div className="react-big-icon d-none d-lg-block">
                <span className="fab fa-react"></span>
              </div>
              <h1 className="fw-bolder text-secondary">
                {"Post Graduate Diploma in Theology"}
              </h1>
              <p className="text-muted fw-light mb-5 h5">{""}</p>
              <div className="d-flex justify-content-center flex-column mb-6 mb-lg-5 mt-5">
                <div className="text-center">
                  <a
                    href="https://themesberg.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <p className="text-muted font-small m-0"></p>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
          <figure
            style={{ border: "2px solid black red" }}
            className="position-absolute bottom-0 left-0 w-100 d-none d-md-block mb-n2"
          >
            <svg
              className="fill-soft"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 3000 185.4"
            >
              <path d="M3000,0v185.4H0V0c496.4,115.6,996.4,173.4,1500,173.4S2503.6,115.6,3000,0z" />
            </svg>
          </figure>
        </Container>
      </section>

      <div className="section pt-0">
        <Container className="mt-n10 mt-lg-n12 z-2">
          <Row className="justify-content-center">
            <Col xs={12}>
              <Image src={PGDT} alt="Mockup presentation" />
            </Col>
          </Row>
        </Container>
      </div>

      {id === "pgdt" ? (
        <section className="section section-md bg-soft pt-lg-3" id="events">
          <Container>
            <Row className="justify-content-between align-items-center mb-5 mb-lg-7">
              <Col lg={5} className="order-lg-2 mb-5 mb-lg-0">
                <h2>PGDT</h2>
                <p className="mb-3 lead fw-bold">
                  Post Graduate Diploma in Theology
                </p>
                <p className="mb-4">
                  Bible Exposition students come from all professions and walks
                  of life, seeking to enhance their relationship with God. The
                  Master of Arts in Bible Exposition provides you with
                  specialized knowledge and skills to understand, apply and
                  communicate the Scriptures effectively.
                </p>
                <Button as={Link} to={Router.Signup.path} variant="secondary">
                  Enroll Now
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="ms-1" />
                </Button>
              </Col>
              <Col lg={6} className="order-lg-1">
                <Image
                  className="rounded"
                  src={Caption}
                  alt="Calendar Preview"
                />
              </Col>
            </Row>
            <Row>
              <h2>Whate you will learn</h2>
              <p className="mb-4">
                You will learn exegesis, enabling you to interpret Scripture,
                and will practice biblical exposition through preaching or
                teaching. After completing this degree program you will be able
                to:
              </p>

              <ul className="ms-5">
                <li className="mb-4">
                  Practice sound exegesis and exposition of the biblical text
                </li>
                <li className="mb-4">
                  Trace key theological themes through Scripture
                </li>
                <li className="mb-4">
                  Communicate biblical truth with the goal of life
                  transformation
                </li>
                <li className="mb-4">
                  Contextualize Scripture to a variety of cultures
                </li>
              </ul>
            </Row>
            <Row>
              <h2>Program Format</h2>
              <p className="mb-4">
                Volt React is an admin dashboard template that is built using
                React.js components using react hooks and a data-driven
                structure that can kick-start your app in no time.
              </p>
              <ul className="ms-5">
                <li className="mb-4">
                  Either residential 16-week format or fully online in a 6-week
                  or 8-week format
                </li>
                <li className="mb-4">
                  Hybrid residential/online format available
                </li>
                <li className="mb-4">
                  Complete in 24 months, taking one course at a time
                </li>
              </ul>
            </Row>

            <Row>
              <h2>Admission Requirements</h2>
              <p className="mb-4">
                Volt React is an admin dashboard template that is built using
                React.js components using react hooks and a data-driven
                structure that can kick-start your app in no time.
              </p>
              <ul className="ms-5">
                <li className="mb-4">Completed application</li>
                <li className="mb-4">
                  Official transcripts for highest earned degree and any
                  master’s degree work
                </li>
                <li className="mb-4">Church leader reference</li>
                <li className="mb-4">
                  Application Essay (800 words total, typed)
                </li>
                <li className="mb-4">A GPA of 2.5 or higher</li>
              </ul>
              <p className="mb-3 lead fw-bold">
                Our Master of Arts in Bible Exposition graduates pursue the
                following positions:
              </p>
              <ul className="ms-5">
                <li className="mb-4">Assistant/associate pastor</li>
                <li className="mb-4">Non-pastoral staff teacher</li>
                <li className="mb-4">Para-church ministry teacher</li>
                <li className="mb-4">Marketplace Bible teacher</li>
                <li className="mb-4">Bible institute teacher</li>
              </ul>
            </Row>
            <Row>
              <h2>Program Fees</h2>
              <p className="mb-4">
                Volt React is an admin dashboard template that is built using
                React.js components using react hooks and a data-driven
                structure that can kick-start your app in no time.
              </p>
              <ul className="ms-5">
                <li className="mb-4">Time- and cost-efficient degree design</li>
                <li className="mb-4">
                  Centered on Scripture, integrating biblical interpretation
                  with spiritual formation and ministry skills
                </li>
                <li className="mb-4">
                  Learn how to communicate the Bible in a variety of practical
                  ministry contexts
                </li>
                <li className="mb-4">
                  Taught by faculty who are actively engaged in exposition
                  through preaching, teaching, and research
                </li>
                <li className="mb-4">
                  Logos Bible software is offered to registered students at no
                  additional cost
                </li>
                <li className="mb-4">Nationally- and regionally-accredited</li>
              </ul>
            </Row>
          </Container>
        </section>
      ) : (
        <section className="section section-md bg-soft pt-lg-3" id="events">
          <Container>
            <Row className="justify-content-between align-items-center mb-5 mb-lg-7">
              <Col lg={5} className="order-lg-2 mb-5 mb-lg-0">
                <h2>Diploma</h2>
                <p className="mb-3 lead fw-bold">Diploma in Theology</p>
                <p className="mb-4">
                  Bible Exposition students come from all professions and walks
                  of life, seeking to enhance their relationship with God. The
                  Master of Arts in Bible Exposition provides you with
                  specialized knowledge and skills to understand, apply and
                  communicate the Scriptures effectively.
                </p>
                <Button as={Link} to={Router.Signup.path} variant="secondary">
                  Enroll Now
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="ms-1" />
                </Button>
              </Col>
              <Col lg={6} className="order-lg-1">
                <Image
                  className="rounded"
                  src={Diploma}
                  alt="Calendar Preview"
                />
              </Col>
            </Row>
            <Row>
              <h2>Whate you will learn</h2>
              <p className="mb-4">
                You will learn exegesis, enabling you to interpret Scripture,
                and will practice biblical exposition through preaching or
                teaching. After completing this degree program you will be able
                to:
              </p>

              <ul className="ms-5">
                <li className="mb-4">
                  Practice sound exegesis and exposition of the biblical text
                </li>
                <li className="mb-4">
                  Trace key theological themes through Scripture
                </li>
                <li className="mb-4">
                  Communicate biblical truth with the goal of life
                  transformation
                </li>
                <li className="mb-4">
                  Contextualize Scripture to a variety of cultures
                </li>
              </ul>
            </Row>
            <Row>
              <h2>Program Format</h2>
              <p className="mb-4">
                Volt React is an admin dashboard template that is built using
                React.js components using react hooks and a data-driven
                structure that can kick-start your app in no time.
              </p>
              <ul className="ms-5">
                <li className="mb-4">
                  Either residential 16-week format or fully online in a 6-week
                  or 8-week format
                </li>
                <li className="mb-4">
                  Hybrid residential/online format available
                </li>
                <li className="mb-4">
                  Complete in 24 months, taking one course at a time
                </li>
              </ul>
            </Row>

            <Row>
              <h2>Admission Requirements</h2>
              <p className="mb-4">
                Volt React is an admin dashboard template that is built using
                React.js components using react hooks and a data-driven
                structure that can kick-start your app in no time.
              </p>
              <ul className="ms-5">
                <li className="mb-4">Completed application</li>
                <li className="mb-4">
                  Official transcripts for highest earned degree and any
                  master’s degree work
                </li>
                <li className="mb-4">Church leader reference</li>
                <li className="mb-4">
                  Application Essay (800 words total, typed)
                </li>
                <li className="mb-4">A GPA of 2.5 or higher</li>
              </ul>
              <p className="mb-3 lead fw-bold">
                Our Master of Arts in Bible Exposition graduates pursue the
                following positions:
              </p>
              <ul className="ms-5">
                <li className="mb-4">Assistant/associate pastor</li>
                <li className="mb-4">Non-pastoral staff teacher</li>
                <li className="mb-4">Para-church ministry teacher</li>
                <li className="mb-4">Marketplace Bible teacher</li>
                <li className="mb-4">Bible institute teacher</li>
              </ul>
            </Row>
            <Row>
              <h2>Program Fees</h2>
              <p className="mb-4">
                Volt React is an admin dashboard template that is built using
                React.js components using react hooks and a data-driven
                structure that can kick-start your app in no time.
              </p>
              <ul className="ms-5">
                <li className="mb-4">Time- and cost-efficient degree design</li>
                <li className="mb-4">
                  Centered on Scripture, integrating biblical interpretation
                  with spiritual formation and ministry skills
                </li>
                <li className="mb-4">
                  Learn how to communicate the Bible in a variety of practical
                  ministry contexts
                </li>
                <li className="mb-4">
                  Taught by faculty who are actively engaged in exposition
                  through preaching, teaching, and research
                </li>
                <li className="mb-4">
                  Logos Bible software is offered to registered students at no
                  additional cost
                </li>
                <li className="mb-4">Nationally- and regionally-accredited</li>
              </ul>
            </Row>
          </Container>
        </section>
      )}

      <footer className="footer py-6 bg-dark text-white">
        <Container>
          <Row>
            <Col md={4}>
              <Navbar.Brand
                as={HashLink}
                to="#home"
                className="me-lg-3 mb-3 d-flex align-items-center"
              >
                <Image src={ReactHero} />
                <span className="ms-2 brand-text"></span>
              </Navbar.Brand>
              <p> {typography.info_details}</p>
              <p> {typography.info_details_two}</p>
              <p> {typography.info_details_three}</p>
              <p> {typography.info_details_four}</p>
            </Col>
            <Col xs={6} md={2} className="mb-5 mb-lg-0">
              <span className="h5">{typography.site_map}</span>
              <ul className="links-vertical mt-2">
                <li>
                  <Card.Link
                    // target="_blank"
                    href="#"
                  >
                    {typography.site_map_events}
                  </Card.Link>
                </li>
                <li>
                  <Card.Link
                    // target="_blank"
                    href="#"
                  >
                    {typography.site_map_courses}
                  </Card.Link>
                </li>
                <li>
                  <Card.Link
                    // target="_blank"
                    href="#"
                  >
                    About Us
                  </Card.Link>
                </li>
                <li>
                  <Card.Link
                    // target="_blank"
                    href="#"
                  >
                    {typography.site_map_enrollment}
                  </Card.Link>
                </li>
                <li>
                  <Card.Link
                    // target="_blank"
                    href="#"
                  >
                    {typography.site_map_programs}
                  </Card.Link>
                </li>
              </ul>
            </Col>
            <Col xs={6} md={2} className="mb-5 mb-lg-0">
              <span className="h5">{typography.special_courses}</span>
              <ul className="links-vertical mt-2">
                <li>
                  <Card.Link as={Link} to={"/#"} target="_blank">
                    {typography.christian_apologetics}
                  </Card.Link>
                </li>
                <li>
                  <Card.Link as={Link} to={"/#"} target="_blank">
                    {typography.kairos}
                  </Card.Link>
                </li>
                <li>
                  <Card.Link
                    // target="_blank"
                    href="#"
                  >
                    {typography.student_work_ymc}
                  </Card.Link>
                </li>
              </ul>
            </Col>
            <Col xs={12} md={4} className="mb-5 mb-lg-0">
              <span className="h5 mb-3 d-block">Subscribe</span>
              <form action="#">
                <div className="form-row mb-2">
                  <div className="col-12">
                    <input
                      type="email"
                      className="form-control mb-2"
                      placeholder="example@company.com"
                      name="email"
                      aria-label="Subscribe form"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-secondary text-dark shadow-soft btn-block"
                      data-loading-text="Sending"
                    >
                      <span>Subscribe</span>
                    </button>
                  </div>
                </div>
              </form>
              <p className="text-muted font-small m-0">
                We’ll never share your details. See our{" "}
                <Card.Link className="text-white" href="#">
                  Privacy Policy
                </Card.Link>
              </p>
            </Col>
          </Row>
          <hr className="bg-gray my-5" />
          <Row>
            <Col className="mb-md-2">
              <Card.Link
                href="https://Beznet.com"
                // target="_blank"
                className="d-flex justify-content-center"
              >
                <Image
                  src={""}
                  height={35}
                  className="d-block mx-auto mb-3"
                  alt="Beznet Logo"
                />
              </Card.Link>
              <div
                className="d-flex text-center justify-content-center align-items-center"
                role="contentinfo"
              >
                <p className="font-weight-normal font-small mb-0">
                  Copyright © Beznet 2019-
                  <span className="current-year">2021</span>. All rights
                  reserved.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};
