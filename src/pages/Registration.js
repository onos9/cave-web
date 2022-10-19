import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  Image,
  Navbar,
  Row,
} from "@themesberg/react-bootstrap";
import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { CSSTransition } from "react-transition-group";
import ReactHero from "../assets/img/cave-hero-logo.svg";
import Welcome from "../components/Welcome";
import Wizard from "../components/Wizard";
import Done from "../components/Wizard/Done";
import useAuth from "../hooks/useAuth";
import useUser from "../hooks/useUser";

export default () => {
  const [isForm, setIsForm] = useState(false);
  const { user, userState } = useUser();
  const { authState } = useAuth();
  const [showMessage, setShowMessage] = useState(false);
  const [showDefault, setShowDefault] = useState(false);
  const [checked, setChecked] = useState(true);
  const handleClose = () => setShowDefault(true);
  const handleCheck = () => setChecked((prev) => !prev);

  const [online, setOnline] = useState(
    authState?.user?.programOption === "Online"
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(document.forms.start);
    let data = {};
    for (var key of formData.keys()) {
      data = { ...data, [key]: formData.get(key) };
    }
    user.updateOne(data, authState.user.id);
    setIsForm(true);
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
            to="https://www.adullam.ng"
            className="me-lg-3 d-flex align-items-center"
          >
            <Image src={ReactHero} height={60} width={"auto"} />
            <span className="ms-2 brand-text d-none d-md-inline"></span>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <CSSTransition
        in={showMessage}
        timeout={300}
        classNames="alert"
        unmountOnExit
      >
        <Alert variant="success" onClose={() => setShowMessage(false)}>
          <Alert.Heading>Credential Added Successfully</Alert.Heading>
          <p>Fill the form again to add more credentials if any</p>
        </Alert>
      </CSSTransition>
      <Done handleClose={handleClose} showDefault={showDefault} />
      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          <Row className="justify-content-center form-bg-image">
            <Col
              xs={12}
              className="d-flex align-items-center justify-content-center"
            >
              <div className="mb-4 mb-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                {isForm ? (
                  <Wizard onDone={setShowDefault} />
                ) : (
                  <>
                    <div className="text-center text-md-center mb-4 mt-md-0">
                      <Welcome />
                    </div>
                    <Form className="mt-4" id="start" onSubmit={handleSubmit}>
                      <Row className="mb-3">
                        <Form.Group
                          className="mb-4"
                          controlId="formGridPassword"
                        >
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
                              defaultValue="OnCampus"
                              label="On Campus"
                              name="programOption"
                            />
                          </fieldset>
                        </Form.Group>
                        <Form.Group controlId="formGridClass" className="mb-4">
                          <Form.Label>
                            What Program are you appling for?
                          </Form.Label>
                          <Form.Select name="program" required>
                            <option hidden>choose...</option>
                            <option>PGDT</option>
                            <option>Diploma</option>
                          </Form.Select>
                          <Form.Control.Feedback type="valid">
                            Looks good!
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Row>
                      <Row>
                        <Form.Group className="mb-3">
                          <Form.Check
                            onChange={handleCheck}
                            name="scholarship"
                            type="switch"
                            label="Check this if interested in scholarship"
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>State Reason</Form.Label>
                          <Form.Control
                            disabled={checked}
                            name="scholReason"
                            as="textarea"
                            rows="2"
                          />
                        </Form.Group>
                      </Row>

                      <Button
                        type="submit"
                        variant="outline-primary"
                        className="m-1"
                      >
                        <FontAwesomeIcon icon={faArrowRight} className="me-2" />
                        Get Started
                      </Button>
                    </Form>
                  </>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <div className="bodybg" />
    </>
  );
};
