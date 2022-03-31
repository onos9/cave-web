import React, { useState, useEffect } from 'react'
import { Form } from '@themesberg/react-bootstrap';

const Background = ({ handleChange }) => {
  const [background, setBackground] = useState({})
  const [data, setData] = useState({})
  let temp = { route: 'background'}

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
    <div className="container">
      <h4 id="register">Spiritual Background</h4>

      <div className="row">
        <div className="col-md-6 col-sm-6">
          <h6><span>*</span>Are you bornagain?</h6>
          <p>
            <select name="born_again" onChange={ onChange }>
              <option hidden value="">Select status...</option>
              <option value='true' >Yes</option>
              <option value='false'>No</option>
            </select>
            <small>this field is blank </small>
          </p>
        </div>
        <div className="col-md-6 optionbox">
          <h6>Water baptism</h6>
          <p>
            <select name='water_baptism' onChange={ onChange }>
              <option hidden>Select status...</option>
              <option value='true' >Yes</option>
              <option value='false'>No</option>
            </select>
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 col-sm-6">
          <h6><span>*</span>Holyghost baptism?</h6>
          <p>
            <select name='holyghost_baptism' onChange={ onChange }>
              <option hidden >Select status...</option>
              <option value='true' >Yes</option>
              <option value='false'>No</option>
            </select>
            <small>this field is blank </small>
          </p>
        </div>
        <div className="col-md-6 optionbox">
          <h6>Are you into ministry?</h6>
          <p>
            <select name='into_ministry' onChange={ onChange }>
              <option hidden value="">Select status...</option>
              <option value='true' >Yes</option>
              <option value='false'>No</option>
            </select>
          </p>
        </div>
      </div>

      <div className="row">
        <Form.Group className="mb-3">
          <Form.Label>Brief salvation history</Form.Label>
          <Form.Control as="textarea" rows="4" />
        </Form.Group>

      </div>

      <div className="row">
        <div className="col-md-6 col-sm-6">
          <h6>What's your call?</h6>
          <p> <input onChange={ onChange }placeholder="Area of ministry.." name="gods_call" /></p>
        </div>
        <div className="col-md-6 col-sm-6">
          <h6>Why are you applying?</h6>
          <p> <input onChange={ onChange }placeholder="Reason for application..." name="reason" /></p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 col-sm-6">
          <h6>Involved with any church?</h6>
          <p> <input onChange={ onChange }type='text' placeholder="Church name..." name="church_involved" /></p>
        </div>

        <div className="col-md-6 col-sm-4">
          <h6>Pastor's name?</h6>
          <p> <input onChange={ onChange }placeholder="Name of your pastor..." name="pastor_name" /></p>
        </div>
      </div>

      <div className="row">

        <div className="col-md-6 col-sm-4">
          <h6>Pastor's email</h6>
          <p> <input onChange={ onChange }type='email' placeholder="Resident country..." name="pastor_email" /></p>
        </div>

        <div className="col-md-6 col-sm-6">
          <h6>Pastor's Phone number</h6>
          <p> <input onChange={ onChange }type='tel' placeholder="Phone..." name="pastor_phone" /></p>
        </div>
      </div>
    </div >
  )
}

export default Background
