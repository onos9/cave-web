import {
  faBoxOpen,
  faCartArrowDown,
  faChartPie,
  faChevronDown,
  faClipboard,
  faRocket,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Col,
  Dropdown,
  Row,
  Card,
  Badge,
  ListGroup,
} from "@themesberg/react-bootstrap";
import React, { useRef, useEffect } from "react";
import { GeneralInfoForm } from "../components/Forms";
import { ChoosePhotoWidget, ProfileCardWidget } from "../components/Widgets";
import { Nav, Tab } from '@themesberg/react-bootstrap';

import Profile3 from "../assets/img/team/profile-picture-3.jpg";
import useLogBook from "../hooks/useLogBook";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

export default () => {
  const { logBook, logBookState } = useLogBook();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const { id } = useParams();
  const apiCall = useRef(false);
  const user = JSON.parse(searchParams.get("user"))
  
  useEffect(() => {
    if (apiCall.current === false) {
      logBook.getOne(id);
      return () => (apiCall.current = true);
    }
  }, []);


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
          <Card border="light" className="bg-white shadow-sm mb-4">
            <Card.Body>
              <h5 className="mb-4">Evangelism</h5>
              <p>
                Photo booth stumptown tote bag Banksy, elit small batch freegan
                sed. Craft beer elit seitan exercitation, photo booth et 8-bit
                kale chips proident chillwave deep v laborum. Aliquip veniam
                delectus, Marfa eiusmod Pinterest in do umami readymade swag.
              </p>
            </Card.Body>
          </Card>
          <Card border="light" className="bg-white shadow-sm mb-4">
            <Card.Body>
              <h5 className="mb-4">Prayer Walk</h5>
              <ListGroup as="ol" numbered>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Subheading</div>
                    Cras justo odio
                  </div>
                  <Badge bg="primary" pill>
                    14
                  </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Subheading</div>
                    Cras justo odio
                  </div>
                  <Badge bg="primary" pill>
                    14
                  </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Subheading</div>
                    Cras justo odio
                  </div>
                  <Badge bg="primary" pill>
                    14
                  </Badge>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
          <Card border="light" className="bg-white shadow-sm mb-4">
            <Card.Body>
              <h5 className="mb-4">Daily Exercise</h5>
              <p>
                Day handsome addition horrible sensible goodness two contempt.
                Evening for married his account removal. Estimable me disposing
                of be moonlight cordially curiosity.
              </p>
            </Card.Body>
          </Card>
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
