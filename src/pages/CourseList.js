import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faCog,
  faHome,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import {
  Col,
  Row,
  Form,
  Button,
  ButtonGroup,
  Breadcrumb,
  InputGroup,
  Dropdown,
} from "@themesberg/react-bootstrap";

import { EnrollmentTable } from "../components/Tables";
import useUser from "../hooks/useUser";
import useLogBook from "../hooks/useLogBook";

export default () => {
  const { user, userState } = useUser();
  const { logBook, logBookState } = useLogBook();
  const [userList, setUserList] = useState();
  const [group, setGroup] = useState("0");
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    if (logBookState?.success) setUpdating(false);
  }, [logBookState]);

  useEffect(() => {
    const isUsers = !!userState?.list;
    if (!isUsers) user.getAll();
    setUserList(userState?.list?.filter((user) => user.role === "student"));
  }, [userState?.list]);

  const handleCloseAll = (status) => {
    logBook.updateMany({ status });
    setUpdating(true);
  };
  const handleGroupChange = ({ target }) => {
    setGroup(target.value);
  };

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <Breadcrumb
            className="d-none d-md-inline-block"
            listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}
          >
            <Breadcrumb.Item>
              <FontAwesomeIcon icon={faHome} />
            </Breadcrumb.Item>
            <Breadcrumb.Item>Adullam</Breadcrumb.Item>
            <Breadcrumb.Item active>LogBook</Breadcrumb.Item>
          </Breadcrumb>
          <h4>Log Book</h4>
          <p className="mb-0">
            Student Practicum loogbook for PGDT and Diploma
          </p>
        </div>
        <div className="btn-toolbar mb-2 mb-md-0">
          <ButtonGroup>
            <Button
              onClick={() => handleCloseAll("Closed")}
              variant="outline-primary"
              size="sm"
              disabled={updating}
            >
              {updating && (
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
              )}
              {"  Close All"}
            </Button>
            <Button variant="outline-primary" size="sm">
              Export
            </Button>
          </ButtonGroup>
        </div>
      </div>

      <div className="table-settings mb-4">
        <Row className="justify-content-between align-items-center">
          <Col xs={8} md={6} lg={3} xl={4}>
            <InputGroup>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faCog} />
              </InputGroup.Text>
              <Form.Select onChange={handleGroupChange} name="day">
                <option hidden>Select Group</option>
                <option value="1">Group 1</option>
                <option value="2">Group 2</option>
                <option value="3">Group 3</option>
                <option value="4">Group 4</option>
                <option value="5">Group 5</option>
                <option value="6">Group 6</option>
                <option value="7">Group 7</option>
              </Form.Select>
            </InputGroup>
          </Col>
        </Row>
      </div>
      {userList ? (
        <div>
          {userList?.map((user) => (
            <EnrollmentTable
              updating={updating}
              group={group}
              key={`user-${user.id}`}
              {...user}
            />
          ))}
        </div>
      ) : null}
    </>
  );
};
