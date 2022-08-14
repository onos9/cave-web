import {
  faBoxOpen,
  faChevronDown,
  faClipboard,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Card,
  Col,
  Dropdown,
  Row,
  Table,
} from "@themesberg/react-bootstrap";
import moment from "moment-timezone";
import React, { useEffect, useRef, useState } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { ProfileCardWidget } from "../components/Widgets";
import useLogBook from "../hooks/useLogBook";

export default () => {
  const { logBook, logBookState } = useLogBook();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [logs, setLogs] = useState("evangelism");
  const { id } = useParams();
  const apiCall = useRef(false);
  const user = JSON.parse(searchParams.get("user"));

  useEffect(() => {
    if (apiCall.current === false) {
      logBook.getOne(id);
      return () => (apiCall.current = true);
    }
  }, []);

  const handleMenuSelect = (eventkey) => {
    // console.log(logBookState);
    setLogs(eventkey);
  };

  const Evangelism = ({ list }) => {
    console.log(list);
    const TableRow = ({ name, phone, address, email }) => {
      return (
        <tr>
          <td className="border-0">{name}</td>
          <td className="border-0">{phone}</td>
          <td className="border-0">{email}</td>
          <td className="border-0">{address}</td>
        </tr>
      );
    };
    return (
      <>
        <h4 className="pt-4 mb-4">Evangelism</h4>
        {/* <p className="mb-0">Student Practicum loogbook for PGDT and Diploma</p> */}
        {list?.map((evangelism, i) => (
          <Card
            key={`evang-${i}`}
            border="light"
            className="pt-4 mb-4 table-wrapper table-responsive shadow-sm"
          >
            <Card.Body border="light" className="shadow-sm">
              <Card.Title>
                {moment(new Date(evangelism?.date)).format("MMMM d, YYYY")}
              </Card.Title>
              <p>{evangelism?.location}</p>
              <Table
                hover
                className="border-top border-bottom border-light mb-3 user-table align-items-center"
              >
                <thead>
                  <tr>
                    <th className="border-bottom">Name</th>
                    <th className="border-bottom">Phone Number</th>
                    <th className="border-bottom">Email</th>
                    <th className="border-bottom">Address</th>
                  </tr>
                </thead>
                <tbody>
                  {evangelism?.convertInfo?.map((convert, i) => (
                    <TableRow key={`conv-${i}`} {...convert} />
                  ))}
                </tbody>
              </Table>
              <p className="float-end text-dark mb-3">
                Total Convert: {evangelism?.convertInfo?.length}
              </p>
              <Card.Footer className="border-0 d-flex flex-column">
                <p className="lead">Testimonies</p>
                <p>{evangelism?.testimonies}</p>
              </Card.Footer>
            </Card.Body>
          </Card>
        ))}
      </>
    );
  };
  const Prayer = ({ list }) => {
    return (
      <>
        <h4 className="pt-4 mb-4">Prayer</h4>
        {/* <p className="mb-0">Student Practicum loogbook for PGDT and Diploma</p> */}
        {list?.map((prayer, i) => (
          <Card
            key={`pry-${i}`}
            border="light"
            className="pt-4 mb-4 table-wrapper table-responsive shadow-sm"
          >
            <Card.Body border="light" className="shadow-sm">
              <Card.Title>
                {moment(new Date(prayer?.date)).format("MMMM d, YYYY")}
              </Card.Title>
              {console.log(prayer?.date)}
              <p className="border-bottom border-light pb-1">
                {prayer?.location}
              </p>

              <p className="lead">Description</p>
              <Card.Text>{prayer?.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </>
    );
  };

  const Exercise = ({ list }) => {
    return (
      <>
        <h4 className="pt-4 mb-4">Exercise</h4>
        {/* <p className="mb-0">Student Practicum loogbook for PGDT and Diploma</p> */}
        {list?.map((exercise, i) => (
          <Card
            key={`exe-${i}`}
            border="light"
            className="pt-4 mb-4 table-wrapper table-responsive shadow-sm"
          >
            <Card.Body className="pt-0">
              <Card.Title>Daily Exercise</Card.Title>
              <p>{exercise?.day}</p>

              <Table hover className="user-table align-items-center">
                <tbody>
                  <tr className="border-bottom">
                    <td className="border-0" style={{ width: "5%" }}>
                      Number of Chapters
                    </td>
                    <td className="border-0" style={{ width: "5%" }}>
                      {exercise?.chapters}
                    </td>
                  </tr>
                  <tr className="border-bottom">
                    <td className="border-0" style={{ width: "5%" }}>
                      Start Chapter
                    </td>
                    <td className="border-0" style={{ width: "5%" }}>
                      {exercise?.startChapter}
                    </td>
                  </tr>
                  <tr className="border-bottom">
                    <td className="border-0" style={{ width: "5%" }}>
                      End Chapter
                    </td>
                    <td className="border-0" style={{ width: "5%" }}>
                      {exercise?.endChapter}
                    </td>
                  </tr>
                  <tr className="border-bottom">
                    <td className="border-0" style={{ width: "5%" }}>
                      Tongue Exercise
                    </td>
                    <td className="border-0" style={{ width: "5%" }}>
                      {exercise?.prayerTime}
                    </td>
                  </tr>
                  <tr className="border-bottom">
                    <td className="border-0" style={{ width: "5%" }}>
                      Book Title
                    </td>
                    <td className="border-0" style={{ width: "5%" }}>
                      {exercise?.bookTitle}
                    </td>
                  </tr>
                  <tr className="border-bottom">
                    <td className="border-0" style={{ width: "5%" }}>
                      Book Author
                    </td>
                    <td className="border-0" style={{ width: "5%" }}>
                      {exercise?.author}
                    </td>
                  </tr>
                  <tr className="border-bottom">
                    <td className="border-0" style={{ width: "5%" }}>
                      Number of Pages Read
                    </td>
                    <td className="border-0" style={{ width: "5%" }}>
                      {exercise?.noPages}
                    </td>
                  </tr>
                </tbody>
              </Table>

              <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
                <p>{""}</p>
              </Card.Footer>
            </Card.Body>
          </Card>
        ))}
      </>
    );
  };

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-flex">
          <Dropdown onSelect={handleMenuSelect}>
            <Dropdown.Toggle as={Button} variant="primary">
              <FontAwesomeIcon icon={faClipboard} className="me-2" /> Logs
              <span className="icon icon-small ms-1">
                <FontAwesomeIcon icon={faChevronDown} />
              </span>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dashboard-dropdown dropdown-menu-left mt-1">
              <Dropdown.Item eventKey="evangelism">
                <FontAwesomeIcon icon={faBoxOpen} className="me-2" /> Evangelism
              </Dropdown.Item>

              <Dropdown.Divider />

              <Dropdown.Item eventKey="prayer">
                <FontAwesomeIcon
                  icon={faRocket}
                  className="text-success me-2"
                />
                Prayer Walk
              </Dropdown.Item>
              <Dropdown.Item eventKey="exercise">
                <FontAwesomeIcon
                  icon={faRocket}
                  className="text-success me-2"
                />
                Daily Exercise
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      <Row>
        <Col xs={12} xl={8}>
          {logs == "evangelism" ? (
            <Evangelism list={logBookState?.logBook?.evangelism} />
          ) : logs == "prayer" ? (
            <Prayer list={logBookState?.logBook?.prayer} />
          ) : (
            <Exercise list={logBookState?.logBook?.exercise} />
          )}
        </Col>

        <Col xs={12} xl={4}>
          <Row>
            <Col xs={12}>
              <ProfileCardWidget
                id={logBookState?.logBook?.id}
                user={user}
              />
            </Col>
            <Col xs={12}>
              {/* <ChoosePhotoWidget
                title="Select profile photo"
                photo={Profile3}
              /> */}
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
