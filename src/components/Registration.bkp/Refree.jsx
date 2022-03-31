import React, { useState, useEffect } from 'react'

const Refree = ({ handleChange }) => {
  const [referee, setReferee] = useState({})
  const [data, setData] = useState({})
  let temp = { checked: true, route: 'referee' }

  useEffect(() => {
    const refTemp = data.checked ? { ref1: data } : { ref2: data }
    setReferee(prev => ({ ...prev, ...refTemp }))
  }, [data])

  useEffect(() => {
    handleChange({ referee: referee })
  }, [referee])

  const onChange = (e) => {
    temp[e.target.name] = e.target.value
    temp.checked = e.target.checked
    setData((d) => ({ ...d, ...temp }))
  }
  return (
    <div className="container">
      <h4 id="register">Refree Information</h4>
      <div className="row">
        <h5>First Refree</h5>
        <hr />
        <div className="col-md-6 col-sm-6">
          <h6>Fullname</h6>
          <p> <input onChange={ onChange } placeholder="Fullname..." name="full_name" checked /></p>
        </div>
        <div className="col-md-6 col-sm-6">
          <h6>Email</h6>
          <p> <input onChange={ onChange } placeholder="Email..." name="email" checked /></p>
        </div>
      </div>
      <div className="col-md-6 col-sm-6">
        <h6>Phone Number</h6>
        <p> <input onChange={ onChange } type='number' placeholder="Phone Number..." name="phone" checked /></p>
      </div>

      <div className="row">
        <h5>Second Refree</h5>
        <hr />
        <div className="col-md-6 col-sm-6">
          <h6>Fullname</h6>
          <p> <input onChange={ onChange } placeholder="City..." name="full_name" /></p>
        </div>
        <div className="col-md-6 col-sm-6">
          <h6>Email</h6>
          <p> <input onChange={ onChange } placeholder="Email.." name="email" /></p>
        </div>
      </div>
      <div className="col-md-6 col-sm-6">
        <h6>Phone Number</h6>
        <p> <input onChange={ onChange } type='number' placeholder="Phone Number..." name="phone" /></p>
      </div>
    </div >
  )
}

export default Refree
