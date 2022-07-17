import {
  faFacebookF,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCalendarAlt,
  faIdCard,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
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
  const [showAlert, setShowAlert] = useState(false);
  const [alertTitle, setAlertTitle] = useState();
  const [alertMessage, setAlertMessage] = useState();
  const [formData, setFormData] = useState();

  useEffect(() => {
    if (logBookState?.login) {
      setLogbook(true);
      setTabKey("evangelism");
    }

    // console.log(logBookState);
  }, [logBookState]);

  useEffect(() => {
    // if (alertTitle) setShowAlert(true);
  }, [alertMessage, alertTitle]);

  const handleTabSelection = (key) => setTabKey(key);
  const handleSignOut = () => window.location.reload(false);

  const handleAdd = (btn) => {
    setTempData((prev) => [...prev, temp]);
    document.getElementById(tabKey).reset();
    setAlertTitle(`${btn} added successfully!`);
    setAlertMessage(`Add more if any`);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  const handleFormDataChange = ({ target }) => {
    const { name, value } = target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // console.log(formData);
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setTemp((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = {};
    const formData = new FormData(document.forms[tabKey]);
    for (var key of formData.keys()) {
      data = { ...data, [key]: formData.get(key) };
    }

    if (!logbook) {
      setEmail(data.email);
      logBook.create(data);
      return;
    }

    if (tabKey === "evangelism") {
      data = {
        evangelism: [
          {
            converts: data.converts,
            location: data.evangelismLocation,
            date: data.evangelismDate,
            testimonies: data.testimonies,
            convertInfo: tempData,
          },
        ],
      };
    }

    if (tabKey === "prayer") {
      data = {
        prayer: [
          {
            location: data.prayerLocation,
            date: data.prayerDate,
            description: data.description,
          },
        ],
      };
    }

    if (tabKey === "exercise") {
      data = {
        exercise: [
          {
            bibleRead: tempData,
            day: data.day,
            author: data.author,
            bookTitle: data.bookTitle,
            prayerTime: data.prayerTime,
            noPages: data.noPages,
          },
        ],
      };
    }

    logBook.updateOne(data, logBookState?.logBook?.id);

    const alertType = tabKey[0].toUpperCase() + tabKey.slice(1);
    setAlertTitle(`${alertType} updated successfully!`);
    setAlertMessage(`Add more if any`);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);

    setDate({});
    setFormData({});
    setTempData([]);
    setTemp({});
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
                onChange={() => {}}
              />
            </InputGroup>
          )}
        />
      </Form.Group>
    );
  };

  return (
    <main>
      <Alert
        className="m-4 w-25 position-absolute top-0 end-0 fade-in-right"
        show={showAlert}
        variant="success"
      >
        <Alert.Heading>{alertTitle}</Alert.Heading>
        <p>{alertMessage}</p>
      </Alert>
      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          {logbook ? (
            <Row className="justify-content-center">
              <div className="mb-4 mb-lg-0 bg-white shadow-soft border rounded border-light p-lg-5 w-100">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3 className="mb-0">Practicum LogBook</h3>
                </div>
                <Tab.Container
                  defaultActiveKey="evangelism"
                  onSelect={handleTabSelection}
                >
                  <Nav fill variant="pills" className="flex-column flex-sm-row">
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
                            xs={4}
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
                                  defaultValue={formData?.converts}
                                  placeholder="Enter Number of converts..."
                                  onChange={handleFormDataChange}
                                />
                              </InputGroup>
                            </Form.Group>
                          </Col>
                          <Col
                            xs={4}
                            className="align-items-center justify-content-center"
                          >
                            <Form.Group id="location" className="mb-4">
                              <Form.Label>Location</Form.Label>
                              <InputGroup>
                                <InputGroup.Text></InputGroup.Text>
                                <Form.Control
                                  name="evangelismLocation"
                                  autoFocus
                                  type="text"
                                  defaultValue={formData?.evangelismLocation}
                                  placeholder="Enter the location of envangelism"
                                  onChange={handleFormDataChange}
                                />
                              </InputGroup>
                            </Form.Group>
                          </Col>

                          <Datepicker
                            as={Col}
                            xs={4}
                            date={date}
                            setDate={setDate}
                            name="evangelismDate"
                          />
                        </Row>
                        <h5>Contact details of converts</h5>
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
                            <Button
                              className="float-end"
                              onClick={() => handleAdd("Convert")}
                              size="sm"
                              variant="outline-gray"
                            >
                              Add convert
                            </Button>
                          </Col>
                        </Row>
                        <Row>
                          <Col xs={12} className="">
                            <Form.Group className="mb-3">
                              <Form.Label>Testimonies</Form.Label>
                              <Form.Control
                                onChange={handleChange}
                                name="testimonies"
                                rows={4}
                                as="textarea"
                                defaultValue="Testimonies of heallings, miracles, deliverance etc"
                              />
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
                                  defaultValue={
                                    logBookState?.logBook?.prayerLocation
                                  }
                                  placeholder="Enter Loaction "
                                />
                              </InputGroup>
                            </Form.Group>
                          </Col>
                          <Datepicker
                            as={Col}
                            date={date}
                            setDate={setDate}
                            onChange={handleChange}
                            name="prayerDate"
                          />
                        </Row>
                        <hr />
                        <Row>
                          <Col xs={12} className="">
                            <Form.Group className="mb-3">
                              <Form.Label>Description</Form.Label>
                              <Form.Control
                                onChange={handleChange}
                                name="description"
                                rows={4}
                                as="textarea"
                              />
                            </Form.Group>
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
                          <Form.Select
                            onChange={handleFormDataChange}
                            name="day"
                            value={formData?.day}
                          >
                            <option hidden>Select Day</option>
                            <option value="Monday">Monday</option>
                            <option value="Tuesday">Tuesday</option>
                            <option value="Wednesday">Wednesday</option>
                            <option value="Thursday">Thursday</option>
                            <option value="Friday">Friday</option>
                            <option value="Saturday">Saturday</option>
                            <option value="Sunday">Sunday</option>
                          </Form.Select>
                        </Form.Group>
                        <div className="text-left text-md-left mb-4 mt-md-0">
                          <p className="mb-0">{`Enter daily exercise (Bible reading, daily prayer time and literature)`}</p>
                        </div>
                        <hr />
                        <Row>
                          <Col
                            xs={6}
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
                            xs={6}
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
                              className="float-end mb-4"
                              onClick={() => handleAdd("Bible")}
                              size="sm"
                              variant="outline-gray"
                            >
                              Add bible
                            </Button>
                          </Col>
                        </Row>
                        <Row>
                          <Col
                            xs={4}
                            className="align-items-center justify-content-center"
                          >
                            <Form.Group id="author" className="mb-4">
                              <InputGroup>
                                <InputGroup.Text></InputGroup.Text>
                                <Form.Control
                                  onChange={handleFormDataChange}
                                  defaultValue={formData?.author}
                                  name="author"
                                  autoFocus
                                  type="text"
                                  placeholder="Author"
                                />
                              </InputGroup>
                            </Form.Group>
                          </Col>
                          <Col
                            xs={4}
                            className="align-items-center justify-content-center"
                          >
                            <Form.Group id="book-title" className="mb-4">
                              <InputGroup>
                                <InputGroup.Text></InputGroup.Text>
                                <Form.Control
                                  onChange={handleFormDataChange}
                                  defaultValue={formData?.bookTitle}
                                  name="bookTitle"
                                  autoFocus
                                  type="text"
                                  placeholder="Book Title"
                                />
                              </InputGroup>
                            </Form.Group>
                          </Col>
                          <Form.Group as={Col} id="no-pages" className="mb-4">
                            <InputGroup>
                              <InputGroup.Text></InputGroup.Text>
                              <Form.Control
                                onChange={handleFormDataChange}
                                defaultValue={formData?.noPages}
                                name="noPages"
                                autoFocus
                                type="text"
                                placeholder="Number of Pages"
                              />
                            </InputGroup>
                          </Form.Group>
                        </Row>
                        <Row>
                          <Col
                            xs={4}
                            className="align-items-center justify-content-center"
                          >
                            <Form.Group id="prayer-time" className="mb-4">
                              <InputGroup>
                                <InputGroup.Text></InputGroup.Text>
                                <Form.Control
                                  onChange={handleFormDataChange}
                                  defaultValue={formData?.prayerTime}
                                  name="prayerTime"
                                  autoFocus
                                  type="text"
                                  placeholder="Prayer Time (Hrs)"
                                />
                              </InputGroup>
                            </Form.Group>
                          </Col>
                        </Row>
                        <Button variant="primary" type="submit">
                          Save
                        </Button>
                        <Button
                          className="float-end m-1"
                          variant="light"
                          type="button"
                          onClick={handleSignOut}
                        >
                          Sign Out
                        </Button>
                      </Form>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </Row>
          ) : (
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
                    <h3 className="mb-0">Sign in to your logbook</h3>
                  </div>

                  <Form id="logbook" className="mt-4" onSubmit={handleSubmit}>
                    <Form.Group id="full-name" className="mb-4">
                      <Form.Label>Full name</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <FontAwesomeIcon icon={faUser} />
                        </InputGroup.Text>
                        <Form.Control
                          name="fullName"
                          required
                          type="text"
                          placeholder="Enter your name in full"
                        />
                      </InputGroup>
                    </Form.Group>
                    <Form.Group id="email" className="mb-4">
                      <Form.Label>Email</Form.Label>
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
                    <Form.Group id="matricNumber" className="mb-4">
                      <Form.Label>Matric Number</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <FontAwesomeIcon icon={faIdCard} />
                        </InputGroup.Text>
                        <Form.Control
                          name="matricNumber"
                          required
                          type="text"
                          placeholder="Enter your matric number"
                        />
                      </InputGroup>
                    </Form.Group>
                    <Form.Group controlId="formGridClass" className="mb-4">
                      <Form.Label>Program Option</Form.Label>
                      <Form.Select
                        onChange={handleFormDataChange}
                        name="programOption"
                      >
                        <option hidden>Select Program Option</option>
                        <option value="PGDT">PGDT</option>
                        <option value="Diploma">Diploma</option>
                      </Form.Select>
                    </Form.Group>
                    <Button variant="primary" type="submit" className="w-100">
                      Go to logbook
                    </Button>
                  </Form>
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </section>
    </main>
  );
};
