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
                <h4 id="register">Terms & Conditions</h4>
                <Form>
                    <Form.Group>
                        <Form.Control
                            as="textarea"
                            rows="4"
                            defaultValue="Enter your message..." />
                    </Form.Group>
                </Form>
                <Row>
                    <Form.Group as={ Col } controlId="formGridPassword">
                        <Form.Label>Fullname</Form.Label>
                        <Form.Control required isValid type="text" placeholder="Enter last name" defaultValue="John" />
                        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
            </div>
        </>
    )
}
