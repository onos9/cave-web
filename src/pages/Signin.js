import { faEnvelope, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormCheck,
  InputGroup,
  Row,
} from "@themesberg/react-bootstrap";
import { useEffect, useState } from "react";
import {
  Link,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import BgImage from "../assets/img/illustrations/signin.svg";
import Preloader from "../components/Preloader";
import useAuth from "../hooks/useAuth";
import { Router } from "../router";

export default () => {
  const { auth, authState } = useAuth();
  const navigate = useNavigate();
  const { state, search } = useLocation();
  const [loaded, setLoaded] = useState(false);
  const [route, setRoute] = useState(Router.Dashboard.path);
  const [logbook, setLogbook] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const { id } = useParams();

  useEffect(() => {
    if (authState?.login && id == "register")
      navigate(Router.Registration.path, { replace: true });

    if (id == "logbook") setLogbook(true);

    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, [authState?.login]);

  useEffect(() => {
    if (search?.includes("reg_tk") && id == "register") {
      const token = searchParams.get("reg_tk");
      auth.verify(token);
      if (authState?.isVerified)
        navigate(Router.Registration.path, { replace: true });
    }
  }, [authState?.isVerified]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let data = Object.fromEntries(formData);

    const toRoute = logbook ? Router.Practicum.path : Router.Dashboard.path;
    setRoute(toRoute);

    auth.signin(data, { ...state, route: toRoute });
  };

  return (
    <main>
      <Preloader show={loaded ? false : true} />
      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          <Row
            className="justify-content-center form-bg-image"
            style={{ backgroundImage: `url(${BgImage})` }}
          >
            <Col
              xs={12}
              className="d-flex align-items-center justify-content-center"
            >
              <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3 className="mb-0">Sign in to our platform</h3>
                </div>

                <Form id="signin" className="mt-4" onSubmit={handleSubmit}>
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
                  <Form.Group>
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
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <Form.Check type="checkbox">
                        <FormCheck.Input id="defaultCheck5" className="me-2" />
                        <FormCheck.Label
                          htmlFor="defaultCheck5"
                          className="mb-0"
                        >
                          Remember me
                        </FormCheck.Label>
                      </Form.Check>
                      <Card.Link className="small text-end">
                        Lost password?
                      </Card.Link>
                    </div>
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100">
                    Sign in
                  </Button>
                </Form>

                {/* <div className="mt-3 mb-4 text-center">
                  <span className="fw-normal">or login with</span>
                </div> */}
                <div className="d-flex justify-content-center my-4">
                  {/* <Button
                    variant="outline-light"
                    className="btn-icon-only btn-pill text-facebook me-2"
                    href="https://www.facebook.com/adullam.rcn/"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </Button> */}
                  {/* <Button
                    variant="outline-light"
                    className="btn-icon-only btn-pill text-twitter me-2"
                    href="#"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </Button> */}
                  {/* <Button
                    variant="outline-light"
                    className="btn-icon-only btn-pil text-google"
                    href="https://youtube.com/channel/UCg7kJOsWDdksyuUv5HiIvFg"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faYoutube} />
                  </Button> */}
                </div>

                <div className="d-flex justify-content-center align-items-center mt-4">
                  <span className="fw-normal">
                    Not registered?
                    <Card.Link
                      as={Link}
                      to={
                        logbook
                          ? `${Router.Signup.path}/logbook`
                          : `${Router.Signup.path}/${id}`
                      }
                      state={{ ...state }}
                      className="fw-bold"
                    >
                      {` Create account `}
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
