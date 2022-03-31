import React, { useState, useEffect } from 'react'
import { Form, Row, Col } from '@themesberg/react-bootstrap'

const jsonData = [
  "University",
  "Polytechnic",
  "Colledge of Education"
]

export default ({ handleChange }) => {
  const [qualification, setQualification] = useState({})
  const [data, setData] = useState({})
  let temp = { route: 'qualification' }

  useEffect(() => {
    setQualification(prev => ({ ...prev, ...{ qualification: data } }))
  }, [data])

  useEffect(() => {
    //console.log(bio)
    handleChange(qualification)
  }, [qualification])

  const onChange = (e) => {
    temp[e.target.name] = e.target.value
    setData((d) => ({ ...d, ...temp }))
  }
  return (
    <>
      <div className="container">
        <h4 id="register">Educational Qualification</h4>
        <Form.Group as={ Col } controlId="formGridClass" className="mb-3">
          <Form.Label>Instutution</Form.Label>
          <Form.Select required isValid>
            <option hidden defaultValue>Choose an instutution</option>

            { jsonData.map((subject, index) => (
              <option key={ index }>{ subject }</option>
            )) }

          </Form.Select>
          <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Row className=" mb-3">
          <Form.Group as={ Col } controlId="formGridClass" className="mb-3">
            <Form.Label>Assessment</Form.Label>
            <Form.Select required isValid>
              <option hidden defaultValue>Choose an assessment</option>

              { jsonData.map((assessment, index) => (
                <option key={ index }>{ assessment.name }</option>
              )) }

            </Form.Select>
            <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className=" mb-3">
          <Form.Group as={ Col } controlId="formGridEmail">
            <Form.Label>Name of Instutution</Form.Label>
            <Form.Control required isInvalid type="text" placeholder="Name of instutution" />
            <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={ Col } controlId="formGridEmail">
            <Form.Label>Year of Graduation</Form.Label>
            <Form.Control required isInvalid type="text" placeholder="Year of graduation" />
            <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
          </Form.Group>
        </Row>
    </div>
    </>
  )
}
