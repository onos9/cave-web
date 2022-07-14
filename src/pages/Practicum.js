import {
  faFacebookF,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faCalendarAlt, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faEnvelope,
  faLocationArrow,
  faUnlockAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormCheck,
  InputGroup,
  Modal,
  Row,
  Nav,
  Tab,
  Alert,
} from "@themesberg/react-bootstrap";
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import BgImage from "../assets/img/illustrations/signin.svg";
import useAuth from "../hooks/useAuth";
import { Router } from "../router";
import useLogBook from "../hooks/useLogBook";
import Datetime from "react-datetime";
import moment from "moment-timezone";

export default () => {
  const { logBook, logBookState } = useLogBook();
  const [email, setEmail] = useState();
  const [tabKey, setTabKey] = useState("logbook");
  const [showDefault, setShowDefault] = useState(false);
  const [logbook, setLogbook] = useState(false);
  const [temp, setTemp] = useState({});
  const [tempData, setTempData] = useState([]);
  const [date, setDate] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (logBookState?.login) {
      setLogbook(true);
      setTabKey("info");
    }
    console.log(logBookState);
    const timer = setTimeout(() => setShowMessage(false), 3000);
    return () => clearTimeout(timer);
  }, [logBookState]);

  const handleClose = () => setShowDefault(false);
  const handleTabSelection = (key) => setTabKey(key);
  const handleAdd = () => {
    setTempData((prev) => [...prev, temp]);
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setTemp((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelected = (e) => {
    console.log(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(document.forms[tabKey]);
    let data = {};
    let exercise = [];
    for (var key of formData.keys()) {
      data = { ...data, [key]: formData.get(key) };
    }

    if (!logbook) {
      setEmail(data.email);
      logBook.create(data);
      return;
    }

    const name =
      tabKey === "evangelism"
        ? "convertInfo"
        : tabKey === "exercise"
        ? "exercise"
        : tabKey === "prayer"
        ? "prayerWalk"
        : null;

    if (tabKey === "exercise") {
      data = {
        bibleRead: tempData,
        day: data.day,
        author: data.author,
        bookTitle: data.bookTitle,
        prayerTime: data.prayerTime,
        noPages: data.noPages,
      };
      exercise.push(data);
      logBook.updateOne({ exercise: exercise }, logBookState?.logBook?.id);
      setTempData([]);
      setTemp({});
      setShowMessage(true);
      return;
    }

    data[name] = tempData;
    setTempData([]);
    setTemp({});

    console.log(data);
    logBook.updateOne(data, logBookState?.logBook?.id);
    setShowMessage(true);
  };

  const Datepicker = ({ date, setDate, as, name, onChange }) => {
    return (
      <Form.Group as={as} className="mb-3">
        <Form.Label>Date</Form.Label>
        <Datetime
          as={as}
          timeFormat={false}
          closeOnSelect={true}
          onChange={setDate}
          renderInput={(props, openCalendar) => (
            <InputGroup>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faCalendarAlt} />
              </InputGroup.Text>
              <Form.Control
                autoComplete={"off"}
                name={name}
                type="text"
                value={date ? moment(date).format("DD/MM/YYYY") : "dd/mm/yyyy"}
                placeholder="dd/mm/yyyy"
                onFocus={openCalendar}
                onChange={onChange}
              />
            </InputGroup>
          )}
        />
      </Form.Group>
    );
  };

  return (
    <main>
      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          {" "}
          <Alert
            show={showMessage}
            variant="success"
            onClose={() => setShowMessage(false)}
          >
            <Alert.Heading>LogBook Updated Successfully</Alert.Heading>
          </Alert>
          <Row className="justify-content-center">
            <div className="mb-4 mb-lg-0 bg-white shadow-soft border rounded border-light p-lg-5 w-100">
              <div className="text-center text-md-center mb-4 mt-md-0">
                <h3 className="mb-0">Practicum LogBook</h3>
              </div>
              {logbook ? (
                <Tab.Container
                  defaultActiveKey="info"
                  onSelect={handleTabSelection}
                >
                  <Nav fill variant="pills" className="flex-column flex-sm-row">
                    <Nav.Item>
                      <Nav.Link eventKey="info" className="mb-sm-3 mb-md-0">
                        Student Information
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        eventKey="evangelism"
                        className="mb-sm-3 mb-md-0"
                      >
                        Evangelism
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="prayer" className="mb-sm-3 mb-md-0">
                        Prayer Walk
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="exercise" className="mb-sm-3 mb-md-0">
                        Daily Exercise
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="info" className="py-4">
                      <Form
                        id="info"
                        className="mt-4 justify-content-center"
                        onSubmit={handleSubmit}
                      >
                        <div className="text-left text-md-left mb-4 mt-md-0">
                          <p className="mb-0">
                            Enter your student details here
                          </p>
                        </div>
                        <hr />
                        <Row>
                          <Col
                            xs={6}
                            className="align-items-center justify-content-center"
                          >
                            <Form.Group id="full-name" className="mb-4">
                              <Form.Label>Full Name</Form.Label>
                              <InputGroup>
                                <InputGroup.Text></InputGroup.Text>
                                <Form.Control
                                  name="fullName"
                                  autoFocus
                                  type="text"
                                  placeholder="John Doe"
                                />
                              </InputGroup>
                            </Form.Group>
                          </Col>
                          <Col
                            xs={6}
                            className="align-items-center justify-content-center"
                          >
                            <Form.Group id="maric-number" className="mb-4">
                              <Form.Label>Matric Number</Form.Label>
                              <InputGroup>
                                <InputGroup.Text></InputGroup.Text>
                                <Form.Control
                                  name="matricNumber"
                                  autoFocus
                                  type="text"
                                  placeholder="Enter Matric Number..."
                                />
                              </InputGroup>
                            </Form.Group>
                          </Col>
                        </Row>

                        <Button variant="primary" type="submit">
                          Save
                        </Button>
                      </Form>
                    </Tab.Pane>
                    <Tab.Pane eventKey="evangelism" className="py-4">
                      <Form
                        id="evangelism"
                        className="mt-4 justify-content-center"
                        onSubmit={handleSubmit}
                      >
                        <div className="text-left text-md-left mb-4 mt-md-0">
                          <h5 className="mb-0">Basic Information</h5>
                        </div>
                        <hr />
                        <Row>
                          <Col
                            xs={6}
                            className="align-items-center justify-content-center"
                          >
                            <Form.Group id="converts" className="mb-4">
                              <Form.Label>Converts</Form.Label>
                              <InputGroup>
                                <InputGroup.Text></InputGroup.Text>
                                <Form.Control
                                  name="converts"
                                  autoFocus
                                  type="number"
                                  placeholder="Enter number of souls that commited to Jesus..."
                                />
                              </InputGroup>
                            </Form.Group>
                          </Col>
                          <Col
                            xs={6}
                            className="align-items-center justify-content-center"
                          >
                            <Form.Group id="location" className="mb-4">
                              <Form.Label>Location</Form.Label>
                              <InputGroup>
                                <InputGroup.Text></InputGroup.Text>
                                <Form.Control
                                  name="location"
                                  autoFocus
                                  type="text"
                                  placeholder="Enter the location of envangelism"
                                />
                              </InputGroup>
                            </Form.Group>
                          </Col>
                        </Row>

                        <Row className="mb-0">
                          <Col
                            xs={10}
                            className="align-items-center justify-content-center mb-0"
                          >
                            <h5>Contact details of converts</h5>
                          </Col>
                          <Col
                            xs={2}
                            className="align-items-center justify-content-center mb-0"
                          >
                            <Button
                              onClick={handleAdd}
                              size="sm"
                              variant="outline-gray"
                            >
                              Add convert
                            </Button>
                          </Col>
                        </Row>

                        <hr />

                        <Row>
                          <Col
                            xs={6}
                            className="align-items-center justify-content-center"
                          >
                            <Form.Group id="name" className="mb-4">
                              <InputGroup>
                                <InputGroup.Text></InputGroup.Text>
                                <Form.Control
                                  name="name"
                                  autoFocus
                                  type="text"
                                  placeholder="Name"
                                  onChange={handleChange}
                                />
                              </InputGroup>
                            </Form.Group>
                          </Col>
                          <Col
                            xs={6}
                            className="align-items-center justify-content-center"
                          >
                            <Form.Group id="phone" className="mb-4">
                              <InputGroup>
                                <InputGroup.Text></InputGroup.Text>
                                <Form.Control
                                  name="phone"
                                  autoFocus
                                  type="text"
                                  placeholder="Phone"
                                  onChange={handleChange}
                                />
                              </InputGroup>
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col
                            xs={6}
                            className="align-items-center justify-content-center"
                          >
                            <Form.Group id="email" className="mb-4">
                              <InputGroup>
                                <InputGroup.Text></InputGroup.Text>
                                <Form.Control
                                  name="email"
                                  autoFocus
                                  type="email"
                                  placeholder="Email"
                                  onChange={handleChange}
                                />
                              </InputGroup>
                            </Form.Group>
                          </Col>
                          <Col
                            xs={6}
                            className="align-items-center justify-content-center"
                          >
                            <Form.Group id="address" className="mb-4">
                              <InputGroup>
                                <InputGroup.Text></InputGroup.Text>
                                <Form.Control
                                  name="address"
                                  autoFocus
                                  type="text"
                                  placeholder="Address"
                                  onChange={handleChange}
                                />
                              </InputGroup>
                            </Form.Group>
                          </Col>
                        </Row>

                        <Button variant="primary" type="submit">
                          Save
                        </Button>
                      </Form>
                    </Tab.Pane>
                    <Tab.Pane eventKey="prayer" className="py-4">
                      <Form
                        id="prayer"
                        className="mt-4 justify-content-center"
                        onSubmit={handleSubmit}
                      >
                        <div className="text-left text-md-left mb-4 mt-md-0">
                          <p className="mb-0">
                            {`Report on prayer walk activity (nature of teritory, miracles, challenge, testimonies, etc)`}
                          </p>
                        </div>

                        <Row>
                          <Col
                            xs={6}
                            className="align-items-center justify-content-center"
                          >
                            <Form.Group id="prayerLocation" className="mb-4">
                              <Form.Label>Location</Form.Label>
                              <InputGroup>
                                <InputGroup.Text></InputGroup.Text>
                                <Form.Control
                                  name="prayerLocation"
                                  autoFocus
                                  type="text"
                                  placeholder="Enter Loaction "
                                />
                              </InputGroup>
                            </Form.Group>
                          </Col>
                        </Row>
                        <hr />
                        <Row>
                          <Col xs={12} className="">
                            <Datepicker
                              date={date}
                              setDate={setDate}
                              onChange={handleChange}
                              name="prayerDate"
                            />
                            <Form.Group className="mb-3">
                              <Form.Label>Description</Form.Label>
                              <Form.Control
                                onChange={handleChange}
                                name="description"
                                as="textarea"
                              />
                            </Form.Group>
                            <Button
                              className="float-end mb-3"
                              variant="outline-gray"
                              size="sm"
                              onClick={handleAdd}
                            >
                              Add prayer walk
                            </Button>
                          </Col>
                        </Row>

                        <Button variant="primary" type="submit">
                          Save
                        </Button>
                      </Form>
                    </Tab.Pane>
                    <Tab.Pane eventKey="exercise" className="py-4">
                      <Form
                        id="exercise"
                        className="mt-4 justify-content-center"
                        onSubmit={handleSubmit}
                      >
                        <hr />
                        <Form.Group controlId="formGridClass" className="mb-3">
                          <Form.Label>Day of the week</Form.Label>
                          <Form.Select name="day">
                            <option hidden>Select Day</option>
                            <option value="Monday">Monday</option>
                            <option value="Tuesday">Tuesday</option>
                            <option value="Tuesday">Wednesday</option>
                            <option value="Thursday">Thursday</option>
                            <option value="Friday">Friday</option>
                            <option value="Saturday">Saturday</option>
                            <option value="Sunday">Sunday</option>
                          </Form.Select>
                        </Form.Group>
                        <div className="text-left text-md-left mb-4 mt-md-0">
                          <h5 className="mb-0">{`Enter daily exercise (Bible reading, daily prayer time and literature)`}</h5>
                        </div>
                        <hr />
                        <Row>
                          <Col
                            xs={4}
                            className="align-items-center justify-content-center"
                          >
                            <Row>
                              <Col
                                xs={12}
                                className="align-items-center justify-content-center"
                              >
                                <Form.Group id="book" className="mb-4">
                                  <InputGroup>
                                    <InputGroup.Text></InputGroup.Text>
                                    <Form.Control
                                      name="book"
                                      autoFocus
                                      type="text"
                                      placeholder="Book"
                                      onChange={handleChange}
                                    />
                                  </InputGroup>
                                </Form.Group>
                              </Col>
                              <Col
                                xs={12}
                                className="align-items-center justify-content-center"
                              >
                                <Form.Group id="chapter" className="mb-4">
                                  <InputGroup>
                                    <InputGroup.Text></InputGroup.Text>
                                    <Form.Control
                                      name="chapter"
                                      autoFocus
                                      type="text"
                                      placeholder="Chapter"
                                      onChange={handleChange}
                                    />
                                  </InputGroup>
                                </Form.Group>
                                <Button
                                  variant="outline-gray"
                                  size="sm"
                                  onClick={handleAdd}
                                >
                                  Add Bible
                                </Button>
                              </Col>
                            </Row>
                          </Col>
                          <Col
                            xs={4}
                            className="align-items-center justify-content-center"
                          >
                            <Row>
                              <Col
                                xs={12}
                                className="align-items-center justify-content-center"
                              >
                                <Form.Group id="prayer-time" className="mb-4">
                                  <InputGroup>
                                    <InputGroup.Text></InputGroup.Text>
                                    <Form.Control
                                      name="prayerTime"
                                      autoFocus
                                      type="text"
                                      placeholder="Prayer Time (Hrs)"
                                    />
                                  </InputGroup>
                                </Form.Group>
                              </Col>
                            </Row>
                          </Col>
                          <Col
                            xs={4}
                            className="align-items-center justify-content-center"
                          >
                            <Row>
                              <Col
                                xs={12}
                                className="align-items-center justify-content-center"
                              >
                                <Form.Group id="author" className="mb-4">
                                  <InputGroup>
                                    <InputGroup.Text></InputGroup.Text>
                                    <Form.Control
                                      name="author"
                                      autoFocus
                                      type="text"
                                      placeholder="Author"
                                    />
                                  </InputGroup>
                                </Form.Group>
                              </Col>
                              <Col
                                xs={12}
                                className="align-items-center justify-content-center"
                              >
                                <Form.Group id="book-title" className="mb-4">
                                  <InputGroup>
                                    <InputGroup.Text></InputGroup.Text>
                                    <Form.Control
                                      name="bookTitle"
                                      autoFocus
                                      type="text"
                                      placeholder="Book Title"
                                    />
                                  </InputGroup>
                                </Form.Group>
                                <Form.Group id="no-pages" className="mb-4">
                                  <InputGroup>
                                    <InputGroup.Text></InputGroup.Text>
                                    <Form.Control
                                      name="noPages"
                                      autoFocus
                                      type="text"
                                      placeholder="Number of Pages"
                                    />
                                  </InputGroup>
                                </Form.Group>
                              </Col>
                            </Row>
                          </Col>
                        </Row>

                        <Button variant="primary" type="submit">
                          Save
                        </Button>
                      </Form>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              ) : (
                <Form id="logbook" className="mt-4" onSubmit={handleSubmit}>
                  <Form.Group id="email" className="mb-4">
                    <Form.Label>Your Email</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </InputGroup.Text>
                      <Form.Control
                        name="email"
                        required
                        autoFocus
                        type="email"
                        placeholder="example@company.com"
                      />
                    </InputGroup>
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Go to LogBook
                  </Button>
                </Form>
              )}
            </div>
          </Row>
        </Container>
      </section>
    </main>
  );
};
