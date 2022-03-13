import React, { useState, useEffect } from 'react'
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './registration.css'

const Welcome = () => {

  const [data, setData] = useState({})
  let temp = { route: '/' }

  const handleClick = () => {
    const isGoogle = emailCheck(data.email)
    const route = isGoogle ? 'auth/google' : '/'
    console.log(route)
  }

  const onChange = (e) => {
    temp[e.target.name] = e.target.value
    setData((d) => ({ ...d, ...temp }))
  }

  const emailCheck = (email) => {
    var regExp = new RegExp("[a-z0-9\.-_]*@gmail\.com$", "i")
    return !!data.email.match(regExp)
  }

  return (
    <>
      <div className="welcome_note_container">
        <div className="welcome_text"> Welcome To Adullam Registration Portal! </div>
        <div className="welcome_note"> We will now guide you through the registration process.
          Please fill in all required feilds in order to complete your registration.
        </div>
        <div className="welcome_note"> Get Registered to Access all Our Courses Now!.
        </div>
        <form id="subscribe">
          <div className="input-group mb-3 w-75 mx-auto">
            <input type="email" className="form-control" placeholder="sunlimetech@gadullam.ng" required name='email' onChange={ onChange } />
            <div className="input-group-append">
              <button className="btn btn-primary" type="button" onClick={ handleClick }>
                <FontAwesomeIcon
                  color='white'
                  icon={ faPaperPlane } />
              </button>
            </div>
          </div>
        </form>
      </div>
    </>

  )
}

export default Welcome
