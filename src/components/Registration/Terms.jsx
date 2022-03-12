import React, { useState, useEffect } from 'react'
import { Form } from '@themesberg/react-bootstrap'

const Terms = ({ handleChange }) => {
  const [terms, setTerms] = useState({})
  const [data, setData] = useState({})
  let temp = { agree: false, route: 'terms' }

  useEffect(() => {
    setTerms(prev => ({ ...prev, ...{ terms: data } }))
  }, [data])

  useEffect(() => {
    console.log(terms)
    handleChange(terms)
  }, [terms])

  const onChange = (e) => {
    temp[e.target.name] = e.target.value === 'on' ? true : false
    setData((d) => ({ ...d, ...temp }))
  }

  return (
    <div className="container">
      <h4 id="register">Terms & Conditions</h4>

      <Form.Group className="mb-3">
        <Form.Control disabled
          as="textarea"
          rows="20"
          defaultValue="We’re constantly developing new technologies and features to improve our services. For example,
          we use artificial intelligence and machine learning to provide you with simultaneous translations,
          and to better detect and block spam and malware. As part of this continual improvement, we sometimes
          add or remove features and functionalities, increase or decrease limits to our services, and start
          offering new services or stop offering old ones. When a service requires or includes downloadable software,
          that software sometimes updates automatically on your device once a new version or feature is available.
          Some services let you adjust your automatic update settings.
          If we make material changes that negatively impact your use of our services or if we stop offering a
          
          service, we’ll provide you with reasonable advance notice, except in urgent situations such as preventing
          abuse, responding to legal requirements, or addressing security and operability issues. We’ll also provide
          you with an opportunity to export your content from your Google Account using Google Takeout, subject to
          applicable law and policies.
           service, we’ll provide you with reasonable advance notice, except in urgent situations such as preventing
          abuse, responding to legal requirements, or addressing security and operability issues. We’ll also provide
          you with an opportunity to export your content from your Google Account using Google Takeout, subject to
          applicable law and policies. service, we’ll provide you with reasonable advance notice, except in urgent situations such as preventing
          abuse, responding to legal requirements, or addressing security and operability issues. We’ll also provide
          you with an opportunity to export your content from your Google Account using Google Takeout, subject to
          applicable law and policies."

          style={ { width: '100%', padding: 30, fontSize: '0.85em', marginBottom: 20 } } />

      </Form.Group>
      <Form.Group>
        <Form.Check onChange={onChange}
          name="agree"
          label="Agree to terms and conditions"
          onChange={ handleChange }
          isInvalid={ false }
          feedback={ 'errors.terms' }
          id="terms"
          color="green"
        />
      </Form.Group>
    </div >
  )
}

export default Terms
