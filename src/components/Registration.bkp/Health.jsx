import React, { useState, useEffect } from 'react'
import { Form } from '@themesberg/react-bootstrap'

const Health = ({ handleChange}) => {
    const [health, setHealth] = useState({})
    const [data, setData] = useState({})
    let temp = { route: 'health'}

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
      <div className="container">
          <h4 id="register">Health Information</h4>
          <div className="row">
              <div className="col-md-6 col-sm-6">
                  <h6><span>*</span>Any Disability?</h6>
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
                  <h6>Any Nervous Hillness?</h6>
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
                  <h6><span>*</span>Are you Anorexic?</h6>
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
                  <h6>Are you Diabetic?</h6>
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
                  <h6><span>*</span>Are you Epileptic?</h6>
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
                  <h6>Any Special Diet</h6>
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
                  <h6><span>*</span>Any Learning Disability?</h6>
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
                  <h6>Used any Illigal Drug?</h6>
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
                  <h6><span>*</span>Any Drug Addiction?</h6>
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
                  <h6>Had any Surgery?</h6>
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
                  <h6><span>*</span>Any Stomach Ulcers?</h6>
                  <p>
                      <select name="born_again" onChange={ onChange }>
                          <option hidden value="">Select status...</option>
                          <option value='true' >Yes</option>
                          <option value='false'>No</option>
                      </select>
                      <small>this field is blank </small>
                  </p>
              </div>
          </div>

          <div className="row">
             
              <Form.Group className="mb-3">
                  <Form.Label>Describe any other health issues</Form.Label>
                  <Form.Control as="textarea" rows="4" />
              </Form.Group>
          </div>
      </div >
  )
}

export default Health
