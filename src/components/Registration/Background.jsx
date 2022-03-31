import React, { useState, useEffect } from 'react'
import { Form, Row, Col } from '@themesberg/react-bootstrap'

const jsonData = [
  "Yes",
  "No"
]

export default ({ handleChange }) => {
  const [background, setBackground] = useState({})
  const [data, setData] = useState({})
  let temp = { route: 'background' }
  //jsonData

  useEffect(() => {
    setBackground(prev => ({ ...prev, ...{ background: data } }))
  }, [data])

  useEffect(() => {
    //console.log(bio)
    handleChange(background)
  }, [background])

  const onChange = (e) => {
    temp[e.target.name] = e.target.value
    setData((d) => ({ ...d, ...temp }))
  }
  return (
    <>
      <div className="container">
        <h4 id="register">Spiritual Background</h4>
        <Row className=" mb-3">
          <Form.Group as={ Col } controlId="formGridClass" className="mb-3">
            <Form.Label>Rating</Form.Label>
            <Form.Select required isValid>
              <option hidden defaultValue>Choose a rating</option>
              { jsonData.map((rate, index) => (
                <option key={ index }>{ rate.name }</option>
              )) }
            </Form.Select>
            <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={ Col } controlId="formGridClass" className="mb-3">
            <Form.Label>Rating</Form.Label>
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
            <Form.Label>Rating</Form.Label>
            <Form.Select required isValid>
              <option hidden defaultValue>Choose a rating</option>
              { jsonData.map((rate, index) => (
                <option key={ index }>{ rate.name }</option>
              )) }
            </Form.Select>
            <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={ Col } controlId="formGridClass" className="mb-3">
            <Form.Label>Rating</Form.Label>
            <Form.Select required isValid>
              <option hidden defaultValue>Choose a rating</option>
              { jsonData.map((rate, index) => (
                <option key={ index }>{ rate.name }</option>
              )) }
            </Form.Select>
            <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Form>
          <Form.Group>
            <Form.Label>Brief Salvation History</Form.Label>
            <Form.Control as="textarea" rows="4" placeholder="Enter your message..." />
          </Form.Group>
        </Form>

        <Row className=" mb-3">
          <Form.Group as={ Col } controlId="formGridClass" className="mb-3">
            <Form.Label>Rating</Form.Label>
            <Form.Select required isValid>
              <option hidden defaultValue>Choose a rating</option>
              { jsonData.map((rate, index) => (
                <option key={ index }>{ rate.name }</option>
              )) }
            </Form.Select>
            <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={ Col } controlId="formGridClass" className="mb-3">
            <Form.Label>Rating</Form.Label>
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
            <Form.Label>Rating</Form.Label>
            <Form.Select required isValid>
              <option hidden defaultValue>Choose a rating</option>
              { jsonData.map((rate, index) => (
                <option key={ index }>{ rate.name }</option>
              )) }
            </Form.Select>
            <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={ Col } controlId="formGridClass" className="mb-3">
            <Form.Label>Rating</Form.Label>
            <Form.Select required isValid>
              <option hidden defaultValue>Choose a rating</option>
              { jsonData.map((rate, index) => (
                <option key={ index }>{ rate.name }</option>
              )) }
            </Form.Select>
            <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
      </div>
    </>
  )
}
