import React, { useState, useEffect } from "react";
import { Form, Row, Col, InputGroup } from "@themesberg/react-bootstrap";
import Datetime from "react-datetime";
import moment from "moment-timezone";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

export default ({ title, values }) => {
  const { bioData } = values;
    // useEffect(() => {
    //   console.log(bioData);
    // });
  const Datepicker = ({ as }) => {
    const [date, setDate] = useState("");

    return (
      <Form.Group as={as} className="mb-3">
        <Form.Label>Date of Birth</Form.Label>
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
                required
                autoComplete={"off"}
                name="dob"
                type="text"
                value={date ? moment(date).format("DD/MM/YYYY") : bioData?.dob}
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
    <>
      <div className="container">
        <h4 className="text-center">{title}</h4>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              defaultValue={bioData?.firstName}
              name="firstName"
              required
              type="text"
              placeholder="Enter first name"
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              defaultValue={bioData?.lastName}
              name="lastName"
              required
              type="text"
              placeholder="Enter last name"
            />
            <Form.Control.Feedback type="valid">
              Looks good!
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} controlId="formGridPassword" className="mb-3">
            <Form.Label>Select Gender</Form.Label>
            <fieldset>
              <Form.Check
                defaultChecked={bioData?.gender === "male"}
                type="radio"
                defaultValue="male"
                label="Male"
                name="gender"
              />
              <Form.Check
                defaultChecked={bioData?.gender === "female"}
                type="radio"
                defaultValue="female"
                label="Female"
                name="gender"
              />
            </fieldset>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} controlId="formGridEmail" className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              defaultValue={bioData?.phone}
              name="phone"
              required
              type="number"
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </Form.Group>
          <Datepicker as={Col} />
        </Row>
        <Form.Group as={Col} controlId="formGridOpend" className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control
            defaultValue={bioData?.address}
            name="address"
            required
            type="text"
            placeholder="Enter first name"
          />
          <Form.Control.Feedback type="invalid">
            Enter contact address.
          </Form.Control.Feedback>
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Resident country</Form.Label>
            <Form.Control
              defaultValue={bioData?.country}
              name="country"
              required
              type="text"
              placeholder="Enter country"
            />
            <Form.Control.Feedback type="invalid">
              Enter your residential country.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridOpend">
            <Form.Label>State</Form.Label>
            <Form.Control
              defaultValue={bioData?.state}
              name="state"
              required
              type="text"
              placeholder="Enter state"
            />
            <Form.Control.Feedback type="invalid">
              What state are you based.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>City</Form.Label>
            <Form.Control
              defaultValue={bioData?.city}
              name="city"
              required
              type="text"
              placeholder="Enter city"
            />
            <Form.Control.Feedback type="valid">
              Looks good!
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Zip Code</Form.Label>
            <Form.Control
              defaultValue={bioData?.zipCode}
              name="zipCode"
              required
              type="number"
            />
            <Form.Control.Feedback type="valid">
              Looks good!
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
      </div>
    </>
  );
};
