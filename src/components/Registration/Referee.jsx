import React, { useState, useEffect } from 'react'
import { Form, Row, Col } from '@themesberg/react-bootstrap'

export default ({ handleChange }) => {
    const [health, setHealth] = useState({})
    const [data, setData] = useState({})
    let temp = { route: 'health' }

    useEffect(() => {
        setHealth(prev => ({ ...prev, ...{ health: data } }))
    }, [data])

    useEffect(() => {
        //console.log(bio)
        handleChange(health)
    }, [health])

    const onChange = (e) => {
        temp[e.target.name] = e.target.value
        setData((d) => ({ ...d, ...temp }))
    }
    return (
        <>
            <div className="container">
                <h4 id="register">Refree Information</h4>
                <Row>
                    <Form.Group as={ Col } controlId="formGridPassword">
                        <Form.Label>Fullname</Form.Label>
                        <Form.Control required isValid type="text" placeholder="Enter full name" defaultValue="John" />
                        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row>
                    <Form.Group as={ Col } controlId="formGridPassword">
                        <Form.Label>Email</Form.Label>
                        <Form.Control required isValid type="email" placeholder="Enter first referee email" defaultValue="John" />
                        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={ Col } controlId="formGridPassword">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control required isValid type="text" placeholder="Enter phone number" defaultValue="John" />
                        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row>
                    <Form.Group as={ Col } controlId="formGridPassword">
                        <Form.Label>Fullname</Form.Label>
                        <Form.Control required isValid type="text" placeholder="Enter last name" defaultValue="John" />
                        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row>
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

            </div>
        </>
    )
}
