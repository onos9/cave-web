import {
  faBoxOpen, faChevronDown,
  faClipboard, faRocket
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  Button,
  Card,
  Col,
  Dropdown, Row, Table
} from "@themesberg/react-bootstrap"
import moment from "moment-timezone"
import React, { useEffect, useRef } from "react"
import { useLocation, useParams, useSearchParams } from "react-router-dom"
import {
  ProfileCardWidget
} from "../components/Widgets"
import useLogBook from "../hooks/useLogBook"

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
        {list?.map((evangelism, i) => (
          <Card
            key={`evang-${i}`}
            border="light"
            className="pt-4 mb-4 table-wrapper table-responsive shadow-sm"
          >
            <Card.Body border="light" className="shadow-sm">
              <Card.Header className="border-bottom border-light d-flex justify-content-between">
                {moment(evangelism?.date).fromNow()}
                <p>{evangelism?.location}</p>
              </Card.Header>
              <Table hover className="user-table align-items-center">
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
              <p className="float-end text-info">
                Total: {evangelism?.convertInfo?.length}
              </p>
              <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
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
        {list?.map((prayer, i) => (
          <Card
            key={`pry-${i}`}
            border="light"
            className="pt-4 mb-4 table-wrapper table-responsive shadow-sm"
          >
            <Card.Body className="pt-0">
              <Card.Title className="m-4 mb-0">Prayer Walk</Card.Title>
              <p>{moment(created_at).fromNow()}</p>
              <Table hover className="user-table align-items-center">
                <thead>
                  <tr className="border-bottom">Description</tr>
                </thead>
                <tbody>
                  <tr className="border-bottom">{prayer?.description}</tr>
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

  const Exercise = ({ list }) => {
    return (
      <>
        {list?.map((exercise, i) => (
          <Card
            key={`exe-${i}`}
            border="light"
            className="pt-4 mb-4 table-wrapper table-responsive shadow-sm"
          >
            <Card.Body className="pt-0">
              <Card.Title className="m-4 mb-0">Daily Exercise</Card.Title>
              <p>{exercise?.day}</p>

              <Table hover className="user-table align-items-center">
                <thead>
                  <tr className="border-bottom">
                    <th className="border-0" style={{ width: "5%" }}>
                      Start Chapter
                    </th>
                    <th className="border-0" style={{ width: "5%" }}>
                      Start Chapter
                    </th>
                    <th className="border-0" style={{ width: "5%" }}>
                      End Chapter
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-bottom">
                    <td className="border-0" style={{ width: "5%" }}>
                      <code>{exercise?.chapters}</code>
                    </td>
                    <td className="border-0" style={{ width: "5%" }}>
                      <code>{exercise?.startChapter}</code>
                    </td>
                    <td className="border-0" style={{ width: "5%" }}>
                      <code>{exercise?.endChapter}</code>
                    </td>
                  </tr>
                </tbody>
                <tfoot></tfoot>
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
          <Dropdown>
            <Dropdown.Toggle as={Button} variant="primary">
              <FontAwesomeIcon icon={faClipboard} className="me-2" /> Logs
              <span className="icon icon-small ms-1">
                <FontAwesomeIcon icon={faChevronDown} />
              </span>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dashboard-dropdown dropdown-menu-left mt-1">
              <Dropdown.Item>
                <FontAwesomeIcon icon={faBoxOpen} className="me-2" /> Evangelism
              </Dropdown.Item>

              <Dropdown.Divider />

              <Dropdown.Item>
                <FontAwesomeIcon
                  icon={faRocket}
                  className="text-success me-2"
                />
                Prayer Walk
              </Dropdown.Item>
              <Dropdown.Item>
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
          <Evangelism list={logBookState?.logBook?.evangelism} />
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
