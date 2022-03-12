import React, { useState, useEffect } from 'react'

const Qualification = ({handleChange}) => {
  const [qualification, setQualification] = useState({})
  const [data, setData] = useState({})
  let temp = { route: 'qualification'}

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
    <div className="container">
      <h4 id="register">Educational Qualification</h4>
      <div className='row'>
        <div className="col-md-6 optionbox">
          <h6>Instutution you attend?</h6>
          <p>
            <select name="institution" onChange={ onChange }>
              <option >Instutution</option>
              <option >Unversity</option>
              <option>Polytechnic</option>
              <option>Colledge od Education</option>
            </select>
          </p>
        </div>
        <div className="col-md-6 optionbox">
          <h6>Degree</h6>
          <p>
            <select name="degree" onChange={ onChange }>
              <option >Degree</option>
              <option >Unversity</option>
              <option>Polytechnic</option>
              <option>Colledge od Education</option>
            </select>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-6">
          <h6>Name of Instutution</h6>
          <p> <input onChange={ onChange } placeholder="First Name..." name="institution_name" /></p>
        </div>
        <div className="col-md-6 col-sm-6">
          <h6>Year of Graduation</h6>
          <p> <input onChange={ onChange } placeholder="Last Name..." name="gradution_year" /></p>
        </div>
      </div>
    </div>
  )
}

export default Qualification
