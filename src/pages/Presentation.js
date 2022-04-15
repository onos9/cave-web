import {
  faBootstrap,
  faIntercom,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import {
  faExternalLinkAlt,
  faFolder,
  faPager,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  Image,
  Nav,
  Navbar,
  OverlayTrigger,
  Row,
  Tooltip,
} from "@themesberg/react-bootstrap";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import ReactHero from "../assets/img/cave-hero-logo.svg";
import BS5IllustrationsImg from "../assets/img/illustrations/bs5-illustrations.svg";
import CalendarImg from "../assets/img/mockup-calendar-presentation.png";
import MockupPresentation from "../assets/img/mockup.jpeg";
import Testimonial1 from "../assets/img/testimonial1.png";
import {
  default as Testimonial2,
  default as Testimonial3,
} from "../assets/img/testimonial2.png";
import typography from "../data/typography";
import { Router } from "../router";

export default (state = null, action) => {
  const navigate = useNavigate();
  const location = useLocation();

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
              to={`${Router.Signin.path}/user`}
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
                {typography.app_name}
              </h1>
              <p className="text-muted fw-light mb-5 h5">
                {typography.App_description}
              </p>
              <div className="d-flex align-items-center justify-content-center">
                <Button
                  variant="secondary"
                  as={Link}
                  to={Router.Signup.path}
                  className="text-dark me-3"
                >
                  Enroll Now{" "}
                  <FontAwesomeIcon
                    icon={faExternalLinkAlt}
                    className="d-none d-sm-inline ms-1"
                  />
                </Button>
              </div>
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
        <Container className="mt-lg-n12 z-2">
          <Row className="justify-content-center ">
            <Col xs={6} md={3} className="text-center mb-4">
              <Link to={`${Router.ProgramDetail.path}/diploma`}>
                <div className="icon icon-shape icon-lg bg-white shadow-lg border-light rounded-circle mb-4">
                  <FontAwesomeIcon icon={faPager} className="text-secondary" />
                </div>
              </Link>
              <h3 className="text-muted fw-bolder">{"Diploma"}</h3>
            </Col>
            <Col xs={6} md={3} className="text-center">
              <Link to={`${Router.ProgramDetail.path}/pgdt`}>
                <div className="icon icon-shape icon-lg bg-white shadow-lg border-light rounded-circle mb-4">
                  <FontAwesomeIcon
                    color="secondary"
                    icon={faBootstrap}
                    className="text-secondary"
                  />
                </div>
              </Link>

              <h3 className="text-muted fw-bolder">{"PGDT"}</h3>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={12}>
              <Image src={MockupPresentation} alt="Mockup presentation" />
            </Col>
          </Row>
        </Container>
      </div>

      <section className="section section-md bg-soft pt-lg-3" id="events">
        <Container>
          <Row className="justify-content-between align-items-center mb-5 mb-lg-7">
            <Col lg={5} className="order-lg-2 mb-5 mb-lg-0">
              <h2>{typography.event}</h2>
              <p className="mb-3 lead fw-bold">
                The most popular front-end library in the world
              </p>
              <p className="mb-4">
                Volt React is an admin dashboard template that is built using
                React.js components using react hooks and a data-driven
                structure that can kick-start your app in no time.
              </p>
              <Button
                as={Link}
                to={Router.Dashboard.path}
                variant="secondary"
                target="_blank"
              >
                {typography.learn_more}
                <FontAwesomeIcon icon={faExternalLinkAlt} className="ms-1" />
              </Button>
            </Col>
            <Col lg={6} className="order-lg-1">
              <Image src={CalendarImg} alt="Calendar Preview" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section section-lg line-bottom-soft" id="folder">
        <Container>
          <Row>
            <Col xs={12} lg={4}>
              <div className="github-big-icon">
                {/* <FontAwesomeIcon icon={""} /> */}
              </div>
            </Col>
          </Row>
          <Row className="justify-content-between align-items-center mb-5 mb-lg-7">
            <Col lg={5}>
              <h2>{typography.about}</h2>
              <p className="mb-3 lead fw-bold"></p>
              <p className="mb-4">{typography.about_essay}</p>
              <p className="mb-4"></p>
              <Button
                as={Link}
                to={"/#"}
                variant="secondary"
                className="mb-5 mb-lg-0"
                target="_blank"
              >
                <FontAwesomeIcon icon={faIntercom} className="me-1" />{" "}
                {typography.contact_button}
              </Button>
            </Col>
            <Col lg={6} className="order-lg-1">
              <Image src={BS5IllustrationsImg} alt="Calendar Preview" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section section-lg bg-primary mb-6" id="scholarship">
        <Container>
          <Row className="justify-content-center text-center text-white mb-5">
            <Col xs={12}>
              <h2 className="fw-light mb-3">
                {typography.accomodation_scholarship_heading}
                <span className="fw-bold"></span>
                <span className="fw-bold"></span>.
              </h2>
              <p className="lead px-lg-8">{typography.s}</p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={10} xl={9}>
              <div className="position-relative">
                <div className="rounded bg-white p-4 text-dark mb-2">
                  <div className="mb-3">
                    <div className="fw-bold">
                      &gt; {typography.scholarship_online}{" "}
                      <span className="text-black-600">
                        {" "}
                        {typography.scholarship_online_brckt}
                      </span>
                    </div>
                    <div className="text-gray">
                      {typography.scholarship_online_essay}
                    </div>
                    <div className="text-gray">
                      {typography.scholarship_campus_essay_two}
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="fw-bold">
                      &gt; {typography.scholarship_campus}
                      <span className="text-black-600">
                        {" "}
                        {typography.scholarship_campus_brckt}
                      </span>
                    </div>
                    <div className="text-gray">
                      {typography.scholarship_campus_essay}
                    </div>
                    <div className="text-gray">
                      {typography.scholarship_campus_essay_two}
                    </div>
                  </div>
                  <div>
                    <div className="fw-bold">
                      &gt; {typography.off_campus_accomodation}
                    </div>
                    <div className="text-gray">
                      {typography.off_campus_accomodation_explain}
                    </div>
                    <div className="fw-bold">
                      &gt; {typography.on_campus_accomodation}
                    </div>
                    <div className="text-gray">
                      {typography.on_campus_accomodation_explain}
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-white text-center mb-0">
                <Link
                  to={"/#"}
                  className="text-white text-underline fw-bold"
                  target="_blank"
                ></Link>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section section-md bg-soft pt-lg-3" id="testimonial">
        <Container>
          <Row className="justify-content-between align-items-center mb-5 mb-lg-7">
            <Col lg={5} className="order-lg-2 mb-5 mb-lg-0">
              <h2 className="d-flex align-items-center">
                {typography.testimonies_one}
                <Badge
                  pill
                  bg="secondary"
                  text="dark"
                  className="badge-md ms-3 mb-0 fs-6"
                ></Badge>
              </h2>
              <p className="mb-3 lead fw-bold">
                {typography.testmonies_one_name}
              </p>
              <p className="mb-4">{typography.testimonies_one_essay}</p>
            </Col>
            <Col lg={6} className="order-lg-1">
              <Image
                rounded={true}
                src={Testimonial1}
                alt="MapBox Leaflet.js Custom Integration Mockup"
              />
            </Col>
          </Row>

          <Row className="justify-content-between align-items-center mb-5 mb-lg-7">
            <Col lg={5}>
              <h2 className="d-flex align-items-center">
                {typography.testimonies_two}{" "}
                <Badge
                  pill
                  bg="secondary"
                  text="dark"
                  className="badge-md ms-3 mb-0 fs-6"
                ></Badge>
              </h2>
              <p className="mb-3 lead fw-bold">
                {typography.testimonies_two_name}
              </p>
              <p className="mb-4">{typography.testimonies_two_essay} </p>
            </Col>
            <Col lg={6}>
              <Image rounded={true} src={Testimonial2} alt="Calendar Preview" />
            </Col>
          </Row>

          <Row className="justify-content-between align-items-center">
            <Col lg={5} className="order-lg-2 mb-5 mb-lg-0">
              <h2>{typography.testimonoies_three}</h2>
              <p className="mb-3 lead fw-bold">
                {typography.testimonies_three_name}
              </p>
              <p className="mb-4">{typography.testimonies_three_essay} </p>
            </Col>
            <Col lg={6} className="col-lg-6 order-lg-1">
              <Image
                rounded={true}
                src={Testimonial3}
                alt="Front pages overview"
              />
            </Col>
          </Row>
        </Container>
      </section>

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
