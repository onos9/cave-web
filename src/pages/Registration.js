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
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import ReactHero from "../assets/img/cave-hero-logo.svg";
import Welcome from "../components/Welcome";
import Wizard from "../components/Wizard";
import useAuth from "../hooks/useAuth";
import useUser from "../hooks/useUser";
import { Router } from "../router";

export default () => {
  const [isForm, setIsForm] = useState(false);
  const { user, userState } = useUser();
  const { authState } = useAuth();

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
    setIsForm(true)
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
      <div className="input_group mb-10 w-75 ">
        <Container>
          {isForm ? (
            <Wizard />
          ) : (
            <>
              <Welcome />
              <Col xm={12} sm={4}>
                {" "}
                <Form id="start" onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Form.Group className="mb-3" controlId="formGridPassword">
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
                    <Form.Group controlId="formGridClass" className="mb-3">
                      <Form.Label>What Program are you appling for?</Form.Label>
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
                  <Button
                    type="submit"
                    variant="outline-primary"
                    className="m-1"
                  >
                    <FontAwesomeIcon icon={faArrowRight} className="me-2" />
                    Get Started
                  </Button>
                </Form>
              </Col>
            </>
          )}
        </Container>
      </div>

      <div className="bodybg" />
    </>
  );
};
