import React from 'react'
import './form.css'
const Gender = ({ handleChange }) => {
    const onChange = (e) => {
        let gender = {
            target: { name: e.target.name, value: e.target.id} 
        }
        handleChange(gender)
    }
    return (
        <>
            <p className="htmlfor">Select Gender</p>
            <div className='gender'>  
                <div className="radio-btn"> <input onChange={(e) => onChange(e)} type="radio" name="gender" id="male" />
                    <label htmlFor="male">Male</label>
                </div>
                <div className="radio-btn"> <input onChange={ (e) => onChange(e) } type="radio" name="gender" id="female" />
                    <label htmlFor="female">Female</label>
                </div>
            </div>
        </>

    )
}

export default Gender
