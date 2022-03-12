import React from 'react'
import { Link } from 'react-router-dom'
import './registration.css'
import { faHome, faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Welcome = () => {
  const HandleMenuClick = () => { }

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
            <input type="email" className="form-control" placeholder="sunlimetech@gmail.com" aria-label="Recipient's username" aria-describedby="button-addon2" required />
            <div className="input-group-append">
              <button className="btn btn-primary" type="button" id="button-addon2">
                <Link to='/'>
                  <i className="material-icons"
                    title="Go to Home"
                  >
                    <FontAwesomeIcon icon={ faPaperPlane } />
                  </i>
                </Link>
              </button>
            </div>
          </div>
        </form>
        {/* <button className="get_started_btn">GET STARTED </button> */ }
      </div>
      <div className="home-icon">
        <Link to='/'>
          <FontAwesomeIcon icon={ faHome } />
        </Link>
      </div>
    </>

  )
}

export default Welcome
