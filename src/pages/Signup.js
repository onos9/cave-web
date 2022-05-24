import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faEnvelope,
  faUnlockAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faGithub,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  Col,
  Row,
  Form,
  Card,
  Button,
  FormCheck,
  Container,
  InputGroup,
  Modal,
} from "@themesberg/react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import { Router } from "../router";
import BgImage from "../assets/img/illustrations/signin.svg";
import useAuth from "../hooks/useAuth";

export default () => {
  const [email, setEmail] = useState();
  const [showDefault, setShowDefault] = useState(false);
  const { state } = useLocation();

  const handleClose = () => setShowDefault(false);

  const { auth } = useAuth();
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(document.forms.signup);
    let data = {};
    for (var key of formData.keys()) {
      data = { ...data, [key]: formData.get(key) };
    }

    if (data?.password.trim() === data?.confirm_passwoed.trim()) {
      setEmail(data.email);
      setShowDefault(true);
      auth.signup(data, state);
    }
  };

  return (
    <main>
      <Container style={{ paddingTop: "2rem" }}>
        <Modal
          as={Modal.Dialog}
          centered
          show={showDefault}
          onHide={handleClose}
        >
          <Modal.Header>
            <Modal.Title className="h6">Congratulations!</Modal.Title>
            {/* <Button variant="close" aria-label="Close" onClick={handleClose} /> */}
          </Modal.Header>
          <Modal.Body>
            <p>
              {`Your account has been created and a mail sent to <b>${email}</b>. Please verify your email address to continue your registration`}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() =>
                navigate(Router.Presentation.path, { redirect: true })
              }
            >
              I Got It
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          {/* <p className="text-center">
            <Card.Link
              as={Link}
              to={Router.Dashboard.path}
              className="text-gray-700"
            >
              <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Back to
              homepage
            </Card.Link>
          </p> */}
          <Row
            className="justify-content-center form-bg-image"
            style={{ backgroundImage: `url(${BgImage})` }}
          >
            <Col
              xs={12}
              className="d-flex align-items-center justify-content-center"
            >
              <div className="mb-4 mb-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3 className="mb-0">Create an account</h3>
                </div>
                <Form id="signup" className="mt-4" onSubmit={handleSubmit}>
                  <Form.Group id="email" className="mb-4">
                    <Form.Label>Your Email</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </InputGroup.Text>
                      <Form.Control
                        name="email"
                        autoFocus
                        required
                        type="email"
                        placeholder="example@company.com"
                      />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group id="password" className="mb-4">
                    <Form.Label>Your Password</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUnlockAlt} />
                      </InputGroup.Text>
                      <Form.Control
                        name="password"
                        required
                        type="password"
                        placeholder="Password"
                      />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group id="confirmPassword" className="mb-4">
                    <Form.Label>Confirm Password</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUnlockAlt} />
                      </InputGroup.Text>
                      <Form.Control
                        name="confirm_passwoed"
                        required
                        type="password"
                        placeholder="Confirm Password"
                      />
                    </InputGroup>
                  </Form.Group>
                  <FormCheck type="checkbox" className="d-flex mb-4">
                    <FormCheck.Input required id="terms" className="me-2" />
                    <FormCheck.Label htmlFor="terms">
                      I agree to the <Card.Link>terms and conditions</Card.Link>
                    </FormCheck.Label>
                  </FormCheck>

                  <Button variant="primary" type="submit" className="w-100">
                    Sign up
                  </Button>
                </Form>

                <div className="mt-3 mb-4 text-center">
                  <span className="fw-normal">or</span>
                </div>
                <div className="d-flex justify-content-center my-4">
                  <Button
                    variant="outline-light"
                    className="btn-icon-only btn-pill text-facebook me-2"
                    href="https://www.facebook.com/adullam.rcn/"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </Button>
                  <Button
                    variant="outline-light"
                    className="btn-icon-only btn-pill text-twitter me-2"
                    href="https://youtube.com/channel/UCg7kJOsWDdksyuUv5HiIvFg"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faYoutube} />
                  </Button>
                  {/* <Button
                    variant="outline-light"
                    className="btn-icon-only btn-pil text-dark"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </Button> */}
                </div>
                <div className="d-flex justify-content-center align-items-center mt-4">
                  <span className="fw-normal">
                    Already have an account?
                    <Card.Link
                      as={Link}
                      to={`${Router.Signin.path}/""`}
                      className="fw-bold"
                    >
                      {` Login here `}
                    </Card.Link>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};
