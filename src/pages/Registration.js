import { faArrowRight, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Container,
  Image,
  Nav,
  Navbar,
  Form,
  Row,
  Col,
} from "@themesberg/react-bootstrap";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import ReactHero from "../assets/img/cave-hero-logo.svg";
import Welcome from "../components/Welcome";
import Wizard from "../components/Wizard";
import useAuth from "../hooks/useAuth";
import { Router } from "../router";

export default () => {
  const [isForm, setIsForm] = useState(false);
  const location = useLocation();
  const { auth, authState } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setIsForm(location.state.isForm);
  }, [location]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(document.forms.start);
    const programOption = formData.get("programOption");
    if (!auth?.user) {
      navigate(Router.Signin.path, {
        state: {
          path: location.pathname,
          isForm: true,
          programOption: programOption,
          program: location.state.program,
        },
        replace: true,
      });
    }
  };

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
            to="#home"
            className="me-lg-3 d-flex align-items-center"
          >
            <Image src={ReactHero} height={60} width={"auto"} />
            <span className="ms-2 brand-text d-none d-md-inline"></span>
          </Navbar.Brand>

          <div className="d-flex align-items-center">
            <Navbar.Collapse id="navbar-default-primary">
              <Nav className="navbar-nav-hover align-items-lg-center">
                <Nav.Link as={HashLink} to="#events">
                  Events
                </Nav.Link>
                <Nav.Link as={HashLink} to="#pages">
                  Courses
                </Nav.Link>
                <Nav.Link
                  as={HashLink}
                  to={Router.Admission.path}
                  className="d-sm-none d-xl-inline"
                >
                  Admissions
                </Nav.Link>
                <Nav.Link as={HashLink} to={Router.Registration.path}>
                  Enrollment
                </Nav.Link>
                <Nav.Link as={HashLink} to="#programs">
                  Programs
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
      <div className="input_group mb-10 w-75 ">
        <Container>
          {!authState?.user && !isForm ? (
            <>
              <Welcome />
              <Form id="start" onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Program Option</Form.Label>
                    <fieldset>
                      <Form.Check
                        required
                        type="radio"
                        defaultValue="Online"
                        label="Online"
                        name="programOption"
                      />
                      <Form.Check
                        required
                        type="radio"
                        defaultValue="OffCampus"
                        label="Off Campus"
                        name="programOption"
                      />
                    </fieldset>
                  </Form.Group>
                </Row>
                <Button type="submit" variant="outline-primary" className="m-1">
                  <FontAwesomeIcon icon={faArrowRight} className="me-2" />
                  Get Started
                </Button>
              </Form>
            </>
          ) : (
            <Wizard />
          )}
        </Container>
      </div>

      <div className="bodybg" />
    </>
  );
};
