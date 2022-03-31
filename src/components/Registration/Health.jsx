import React, { useState, useEffect } from 'react'
import { Form, Row, Col } from '@themesberg/react-bootstrap'

const jsonData = [
    "Yes",
    "No"
]

export default ({ handleChange }) => {
    const [health, setHealth] = useState({})
    const [data, setData] = useState({})
    let temp = { route: 'background' }
    //jsonData

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
                <h4 id="register">Health Information</h4>
                <Row className=" mb-3">
                    <Form.Group as={ Col } controlId="formGridClass" className="mb-3">
                        <Form.Label>Any Disability?</Form.Label>
                        <Form.Select required isValid>
                            <option hidden defaultValue>Choose a status</option>
                            { jsonData.map((rate, index) => (
                                <option key={ index }>{ rate.name }</option>
                            )) }
                        </Form.Select>
                        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={ Col } controlId="formGridClass" className="mb-3">
                        <Form.Label>Any Nervous</Form.Label>
                        <Form.Select required isValid>
                            <option hidden defaultValue>Choose a status</option>
                            { jsonData.map((rate, index) => (
                                <option key={ index }>{ rate.name }</option>
                            )) }
                        </Form.Select>
                        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row className=" mb-3">
                    <Form.Group as={ Col } controlId="formGridClass" className="mb-3">
                        <Form.Label>Are you Anorexic?</Form.Label>
                        <Form.Select required isValid>
                            <option hidden defaultValue>Choose a status</option>
                            { jsonData.map((rate, index) => (
                                <option key={ index }>{ rate.name }</option>
                            )) }
                        </Form.Select>
                        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={ Col } controlId="formGridClass" className="mb-3">
                        <Form.Label>Are you Diabetic?</Form.Label>
                        <Form.Select required isValid>
                            <option hidden defaultValue>Choose a rating</option>
                            { jsonData.map((rate, index) => (
                                <option key={ index }>{ rate.name }</option>
                            )) }
                        </Form.Select>
                        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row className=" mb-3">
                    <Form.Group as={ Col } controlId="formGridClass" className="mb-3">
                        <Form.Label>Are you Epileptic?</Form.Label>
                        <Form.Select required isValid>
                            <option hidden defaultValue>Choose a status</option>
                            { jsonData.map((rate, index) => (
                                <option key={ index }>{ rate.name }</option>
                            )) }
                        </Form.Select>
                        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={ Col } controlId="formGridClass" className="mb-3">
                        <Form.Label>Any Special Diet</Form.Label>
                        <Form.Select required isValid>
                            <option hidden defaultValue>Choose a rating</option>
                            { jsonData.map((rate, index) => (
                                <option key={ index }>{ rate.name }</option>
                            )) }
                        </Form.Select>
                        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row className=" mb-3">
                    <Form.Group as={ Col } controlId="formGridClass" className="mb-3">
                        <Form.Label>Any learning Disability?</Form.Label>
                        <Form.Select required isValid>
                            <option hidden defaultValue>Choose a status</option>
                            { jsonData.map((rate, index) => (
                                <option key={ index }>{ rate.name }</option>
                            )) }
                        </Form.Select>
                        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={ Col } controlId="formGridClass" className="mb-3">
                        <Form.Label>Used any Illigal Drug?</Form.Label>
                        <Form.Select required isValid>
                            <option hidden defaultValue>Choose a status</option>
                            { jsonData.map((rate, index) => (
                                <option key={ index }>{ rate.name }</option>
                            )) }
                        </Form.Select>
                        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row className=" mb-3">
                    <Form.Group as={ Col } controlId="formGridClass" className="mb-3">
                        <Form.Label>Any drug addction?</Form.Label>
                        <Form.Select required isValid>
                            <option hidden defaultValue>Choose a rating</option>
                            { jsonData.map((rate, index) => (
                                <option key={ index }>{ rate.name }</option>
                            )) }
                        </Form.Select>
                        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={ Col } controlId="formGridClass" className="mb-3">
                        <Form.Label>Had any surgery?</Form.Label>
                        <Form.Select required isValid>
                            <option hidden defaultValue>Choose a status</option>
                            { jsonData.map((rate, index) => (
                                <option key={ index }>{ rate.name }</option>
                            )) }
                        </Form.Select>
                        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Form.Group as={ Col } controlId="formGridClass" className="mb-3">
                    <Form.Label>Any stomach Ulcer?</Form.Label>
                    <Form.Select required isValid>
                        <option hidden defaultValue>Choose a status</option>
                        { jsonData.map((rate, index) => (
                            <option key={ index }>{ rate.name }</option>
                        )) }
                    </Form.Select>
                    <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form>
                    <Form.Group>
                        <Form.Label>Brief Salvation History</Form.Label>
                        <Form.Control as="textarea" rows="4" placeholder="Enter your message..." />
                    </Form.Group>
                </Form>
            </div>
        </>
    )
}
