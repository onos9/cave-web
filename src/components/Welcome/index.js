import React, { useState } from 'react'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Form, Row, Col, Button } from '@themesberg/react-bootstrap'
import { apiV1 } from "../../Constants"
import axios from 'axios'
import './welcome.css'

export default () => {

    const [data, setData] = useState({})
    let temp = { route: '/' }

    const handleClick = () => {

    }

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {
        // const isGoogle = emailCheck(data.email)
        // const route = isGoogle ? 'auth/google' : '/'

        const mail = {
            toAddress: data.email,
            subject: "Email Verification",
            content: `You write`,
            //redirect_url: 'http://localhost:3000'
        }
        sendMail(mail)
    }

    const emailCheck = (email) => {
        var regExp = new RegExp("[a-z0-9\.-_]*@gmail\.com$", "i")
        return !!data.email.match(regExp)
    }

    const sendMail = async (mail) => {
        try
        {
            const response = await axios.post(`${apiV1}/api/v1/mail`, mail)
            console.log(response.data)
        } catch (error)
        {
            console.log(error)
        }
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
                <div className="input_group mb-3 w-75 ">
                    <Form onSubmit={ handleSubmit }>
                        <Row>
                            <Form.Group as={ Col } controlId="formGridEmail">
                                <Form.Control name="email" required type="email" placeholder="example@gmail.com" onChange={ handleChange }/>
                                {/* <Form.Control.Feedback type="invalid">Looks good!</Form.Control.Feedback> */ }
                            </Form.Group>
                        </Row>
                        <Button type="submit" variant="outline-primary" className="m-1" >
                            <FontAwesomeIcon icon={ faArrowRight } className="me-2" /> Create My Account
                        </Button>
                    </Form>
                </div>

            </div>
        </>

    )
}
