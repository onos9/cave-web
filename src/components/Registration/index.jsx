import React from 'react'
import Qualification from './Qualification'
import Referee from './Referee'
import BioData from './BioData'
import Background from './Background'
import Health from './Health'
import Terms from './Terms'
import { Form } from '@themesberg/react-bootstrap'

export default ({ handleChange }) => {
    return (
        <>
            <Form>
                <div id="student" className="tab active-tab">
                    <BioData handleChange={ (e) => handleChange(e) } />
                </div>
                <div id="records" className="tab">
                    <Qualification handleChange={ (e) => handleChange(e) } />
                </div>
                <div id="rating" className="tab">
                    <Background handleChange={ (e) => handleChange(e) } />
                </div>
                <div id="rating" className="tab">
                    <Health handleChange={ (e) => handleChange(e) } />
                </div>
                <div id="remark" className="tab">
                    <Referee handleChange={ (e) => handleChange(e) } />
                </div>
                <div id="remark" className="tab">
                    <Terms handleChange={ (e) => handleChange(e) } />
                </div>
            </Form>
        </>
    )
}
