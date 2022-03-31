import React, { useState, useEffect } from 'react'
import Gender from '../Form/Gender'

const BioData = ({ handleChange }) => {
    const [bio, setBio] = useState({})
    const [data, setData] = useState({})
    let temp = { route: 'bio' }

    useEffect(() => {
        setBio(prev => ({ ...prev, ...{ bio: data } }))
    }, [data])

    useEffect(() => {
        //console.log(bio)
        handleChange(bio)
    }, [bio])

    const onChange = (e) => {
        temp[e.target.name] = e.target.value
        setData((d) => ({ ...d, ...temp }))
    }

    return (
        <div className="container">
            <h4 id="register">Bio Data</h4>
            <div className="row">
                <div className="col-md-6 col-sm-6">
                    <h6>What's your first name?</h6>
                    <p> <input onChange={ onChange } placeholder="First Name..." name="first_name" /></p>
                </div>
                <div className="col-md-6 col-sm-6">
                    <h6>Your last name?</h6>
                    <p> <input onChange={ onChange } placeholder="Last Name..." name="last_name" /></p>
                </div>
            </div>
            <div className="row">
                <Gender handleChange={ onChange } />
            </div>
            <div className="row">
                <div className="col-md-6 col-sm-4">
                    <h6>Your date of birth?</h6>
                    <p> <input onChange={ onChange } type='date' placeholder="DOB..." name="dob" /></p>
                </div>
                <div className="col-md-6 col-sm-6">
                    <h6>Your phone number?</h6>
                    <p> <input onChange={ onChange } type='number' placeholder="Phone Number..." name="phone" /></p>
                </div>
            </div>
            <div className="row">
                <h6>Fill in your contact address</h6>
                <p> <input onChange={ onChange } type='text' placeholder="Contact Address..." name="address" /></p>
            </div>
            <div className="row">
                <div className="col-md-6 col-sm-4">
                    <h6>Resident country</h6>
                    <p> <input onChange={ onChange } placeholder="Resident country..." name="country" /></p>
                </div>
                <div className="col-md-6 col-sm-6">
                    <h6>State</h6>
                    <p> <input onChange={ onChange } placeholder="State.." name="state" /></p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-sm-6">
                    <h6>City?</h6>
                    <p> <input onChange={ onChange } placeholder="City..." name="city" /></p>
                </div>
                <div className="col-md-6 col-sm-6">
                    <h6>Zip code</h6>
                    <p> <input onChange={ onChange } type='number' placeholder="Zip code.." name="zipcode" /></p>
                </div>
            </div>

        </div >
    )
}

export default BioData
