import React, { useState, useEffect } from 'react'
import { Form, Row, Col, InputGroup } from '@themesberg/react-bootstrap'
import Datetime from "react-datetime"
import moment from "moment-timezone"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons"

export default ({ handleChange }) => {
    const [bio, setBio] = useState({})
    const [data, setData] = useState({})
    let temp = { route: 'bio' }

    useEffect(() => {
        setBio(prev => ({ ...prev, ...{ bio: data } }))
    }, [data])

    useEffect(() => {
        //console.log(bio)
        handleChange(bio)
    }, [bio])

    const onChange = (e) => {
        temp[e.target.name] = e.target.value
        setData((d) => ({ ...d, ...temp }))
    }

    const Datepicker = () => {
        const [birthday, setBirthday] = React.useState("")

        return (
            <Form.Group className="mb-3">
                <Form.Label>Resumption Date</Form.Label>
                <Datetime
                    as={Col}
                    timeFormat={ false }
                    closeOnSelect={ false }
                    onChange={ setBirthday }
                    renderInput={ (props, openCalendar) => (
                        <InputGroup>
                            <InputGroup.Text><FontAwesomeIcon icon={ faCalendarAlt } /></InputGroup.Text>
                            <Form.Control
                                required
                                type="text"
                                value={ birthday ? moment(birthday).format("MM/DD/YYYY") : "" }
                                placeholder="mm/dd/yyyy"
                                onFocus={ openCalendar }
                                onChange={ () => { } } />
                        </InputGroup>
                    ) } />
            </Form.Group>
        )
    }

    return (
        <>
            <div className="container">
                <h4 id="register">Student Information</h4>
                <Row className="mb-3">
                    <Form.Group as={ Col } controlId="formGridEmail">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control required isInvalid type="text" placeholder="Enter first name" />
                        <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={ Col } controlId="formGridPassword">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control required isValid type="text" placeholder="Enter last name" defaultValue="John" />
                        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={ Col } controlId="formGridPassword">
                        <Form.Label>Other Name</Form.Label>
                        <Form.Control required isValid type="text" placeholder="Enter last name" defaultValue="John" />
                        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={ Col } controlId="formGridPassword">
                        <Form.Label>Select Gender</Form.Label>
                        <fieldset>
                            <Form.Check
                                defaultChecked
                                type="radio"
                                defaultValue="option1"
                                label="Male"
                                name="gender"
                                id="male"
                                htmlFor="male"
                            />

                            <Form.Check
                                type="radio"
                                defaultValue="option2"
                                label="Female"
                                name="gender"
                                id="female"
                                htmlFor="female"
                            />
                        </fieldset>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group controlId="formGridEmail">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control required isValid type="number" />
                        <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
                    </Form.Group>
                    <Datepicker />
                </Row>
                <Form.Group as={ Col } controlId="formGridOpend">
                    <Form.Label>Contact</Form.Label>
                    <Form.Control required isInvalid type="text" placeholder="Enter first name" />
                    <Form.Control.Feedback type="invalid">Enter contact address.</Form.Control.Feedback>
                </Form.Group>
                <Row className="mb-3">
                    <Form.Group as={ Col } controlId="formGridEmail">
                        <Form.Label>Resident country</Form.Label>
                        <Form.Control required isInvalid type="number" defaultValue="1234" />
                        <Form.Control.Feedback type="invalid">Enter your residential country.</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={ Col } controlId="formGridOpend">
                        <Form.Label>State</Form.Label>
                        <Form.Control required isInvalid type="text" placeholder="Enter first name" />
                        <Form.Control.Feedback type="invalid">What state are you based.</Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={ Col } controlId="formGridPassword">
                        <Form.Label>City</Form.Label>
                        <Form.Control required isValid type="text" placeholder="Enter city" defaultValue="John" />
                        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={ Col } controlId="formGridPassword">
                        <Form.Label>Zip Code</Form.Label>
                        <Form.Control required isValid type="number" placeholder="" defaultValue="12345" />
                        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Datepicker />
            </div>
        </>
    )
}
