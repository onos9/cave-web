import {
  faBoxOpen,
  faCalendar,
  faChevronDown,
  faClipboard,
  faLocationArrow,
  faRocket,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Card,
  Col,
  Dropdown,
  ListGroup,
  Row,
  Image,
} from "@themesberg/react-bootstrap";
import React, { useEffect, useRef } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import {
  ProfileCardWidget,
  RankingWidget,
  TeamMembersWidget,
} from "../components/Widgets";
import teamMembers from "../data/teamMembers";
import useLogBook from "../hooks/useLogBook";
import Profile3 from "../assets/img/team/profile-picture-3.svg";
import moment from "moment-timezone"

export default () => {
  const { logBook, logBookState } = useLogBook();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const { id } = useParams();
  const apiCall = useRef(false);
  const user = JSON.parse(searchParams.get("user"));

  useEffect(() => {
    if (apiCall.current === false) {
      logBook.getOne(id);
      return () => (apiCall.current = true);
    }
  }, []);

  const Evangelism = (props) => {
    const Convert = (props) => {
      const { name, statusKey, image, icon, btnText } = props;
      const status = {
        online: { color: "success", label: "Online" },
        inMeeting: { color: "warning", label: "In a meeting" },
        offline: { color: "danger", label: "Offline" },
      };

      const statusColor = status[statusKey]
          ? status[statusKey].color
          : "danger",
        statusLabel = status[statusKey] ? status[statusKey].label : "Offline";

      return (
        <ListGroup.Item className="px-0">
          <Row className="align-items-center">
            <Col className="col-auto">
              <a href="#top" className="user-avatar">
                <Image src={Profile3} className="rounded-circle" />
              </a>
            </Col>
            <Col className="ms--2">
              <h4 className="h6 mb-0">
                <a href="#!">{name}</a>
              </h4>
              <span className={`text-${statusColor}`}>● </span>
              <small>{statusLabel}</small>
            </Col>
            <Col className="col-auto">
              <Button variant="tertiary" size="sm">
                <FontAwesomeIcon icon={icon} className="me-1" /> {btnText}
              </Button>
            </Col>
          </Row>
        </ListGroup.Item>
      );
    };
    return (
      <Card
        border="light"
        className="pt-4 mb-4 table-wrapper table-responsive shadow-sm"
      >
        <Card.Body className="pt-0">
          <Card.Title>{props.fullName}</Card.Title>
          <Table hover className="user-table align-items-center">
            <thead>
              <tr className="border-bottom">{moment(created_at).fromNow()}</tr>
              <tr>
                <tr>
                  <th className="border-bottom">Name</th>
                  <th className="border-bottom">Phone Number</th>
                  <th className="border-bottom">Email</th>
                  <th className="border-bottom">Address</th>
                </tr>
              </tr>
            </thead>
            {logBookState?.list ? (
              <tbody>
                {logBookState?.list.map((logbook) => (
                  <TableRow key={`enroll-${logbook.id}`} {...logbook} />
                ))}
              </tbody>
            ) : null}
          </Table>
          <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
            <Nav>
              <Pagination className="mb-2 mb-lg-0">
                <Pagination.Prev>Previous</Pagination.Prev>
                <Pagination.Item active>1</Pagination.Item>
                <Pagination.Item>2</Pagination.Item>
                <Pagination.Item>3</Pagination.Item>
                <Pagination.Item>4</Pagination.Item>
                <Pagination.Item>5</Pagination.Item>
                <Pagination.Next>Next</Pagination.Next>
              </Pagination>
            </Nav>
            <small className="fw-bold">
              Showing{" "}
              <b>
                {logBookState?.list?.length ? logBookState?.list?.length : 0}
              </b>{" "}
              out of <b>25</b> entries
            </small>
          </Card.Footer>
        </Card.Body>
      </Card>
    );
  };
  const Prayer = (props) => {
    return (
      <Card border="light" className="shadow-sm">
        <Card.Title className="m-4 mb-0">Prayer Walk</Card.Title>
        <Card.Body>
          <div className="d-block mb-4">
            <div className="d-flex align-items-center pt-2">
              <div className="icon icon-shape icon-sm icon-shape-quaternary rounded me-3">
                <FontAwesomeIcon icon={faLocationArrow} />
              </div>
              <div className="d-block">
                <label className="mb-0">Location</label>
                <h4 className="mb-0">{props?.location}</h4>
              </div>
            </div>
            <div className="d-flex align-items-center pt-2">
              <div className="icon icon-shape icon-sm icon-shape-quaternary rounded me-3">
                <FontAwesomeIcon icon={faCalendar} />
              </div>
              <div className="d-block">
                <label className="mb-0">Dtae</label>
                <h4 className="mb-0">{props?.date}</h4>
              </div>
            </div>
          </div>
          <h6>Description</h6>
          <p>{props?.description}</p>
        </Card.Body>
      </Card>
    );
  };

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-flex">
          <Dropdown>
            <Dropdown.Toggle as={Button} variant="primary">
              <FontAwesomeIcon icon={faClipboard} className="me-2" /> Action
              <span className="icon icon-small ms-1">
                <FontAwesomeIcon icon={faChevronDown} />
              </span>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dashboard-dropdown dropdown-menu-left mt-1">
              <Dropdown.Item>
                <FontAwesomeIcon icon={faBoxOpen} className="me-2" />{" "}
                Acknowledge
              </Dropdown.Item>

              <Dropdown.Divider />

              <Dropdown.Item>
                <FontAwesomeIcon
                  icon={faRocket}
                  className="text-success me-2"
                />{" "}
                Close Logbook
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      <Row>
        <Col xs={12} xl={8}>
          <Col xs={6} className=" mb-4">
            <Evangelism />
          </Col>
          <Col xs={6} className="px-0 mb-4">
            <RankingWidget />
          </Col>
          <Col xs={6} className=" mb-4">
            <Evangelism />
          </Col>
        </Col>

        <Col xs={12} xl={4}>
          <Row>
            <Col xs={12}>
              <ProfileCardWidget user={user} />
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
