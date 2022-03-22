import React, { useEffect, useState } from 'react'
import Background from './Background'
import BioData from './BioData'
import Health from './Health'
import Qualification from './Qualification'
import Refree from './Refree'
import Terms from './Terms'

import axios from 'axios'
import * as Constants from "../../Constants"
import { NotificationManager } from 'react-notifications'
import StepIdicator from './StepIdicator'
import { Form } from '@themesberg/react-bootstrap'
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Wizard = () => {
    const [formData, setFormData] = useState({})
    //const [currentTab, setcurrentTab] = useState(0)
    let currentTab = 0


    useEffect(() => {
        showTab(currentTab)
    }, [currentTab])

    useEffect(() => {
        console.log(formData)
    }, [formData])

    const handleChange = (form) => {
        setFormData(formData => ({ ...formData, ...form }))
    }

    function showTab(tabIndex) {
        let tabs = document.getElementsByClassName("tab")
        tabs[tabIndex].style.display = "block"
        tabs[tabIndex].classList.add('active-tab')
        document.getElementById("prevBtn").style.display = (tabIndex == 0) ? "none" : "inline"

        fixStepIndicator(tabIndex)
    }

    function nextPrev(tabIndex) {
        //console.log(tabIndex)
        let tabs = document.getElementsByClassName("tab")
        if (tabIndex == 1 && !validateForm()) return false
        tabs[currentTab].style.display = "none"
        tabs[currentTab].classList.remove('active-tab')
        currentTab = currentTab + tabIndex
        //setcurrentTab(prev => prev + n)
        if (currentTab >= tabs.length)
        {
            document.getElementById("nextprevious").style.display = "none"
            document.getElementById("all-steps").style.display = "none"
            document.getElementById("text-message").style.display = "block"
        }
        if (currentTab < tabs.length) showTab(currentTab)
        if (tabIndex === 1) sendToServer(tabs[currentTab - 1].id)
    }

    function validateForm() {
        let x, y, i, valid = true
        x = document.getElementsByClassName("tab")
        y = x[currentTab].getElementsByTagName("input")
        for (i = 0; i < y.length; i++)
        {
            if (y[i].value == "")
            {
                y[i].className += " invalid"; valid = false
            }
        }
        if (true) { document.getElementsByClassName("step")[currentTab].className += " finish" } return true
    }

    function fixStepIndicator(n) {
        let i, x = document.getElementsByClassName("step")
        for (i = 0; i < x.length; i++)
        {
            x[i].className = x[i].className.replace(" active", "")
        }
        x[n].className += " active"
    }

    const sendToServer = async (id) => {
        try
        {
            let resp = await axios.post(`${Constants.apiV1}/api/v1/candidate/`, { data: JSON.stringify(formData) })
            NotificationManager.info(`Updated Successfully !`)
            console.log(resp.data.candidate)
        } catch (error)
        {
            if (error.response)
            {
                console.log(error.response.data)
                console.log(error.response.status)
                console.log(error.response.headers)
            } else if (error.request)
            {
                console.log(error.request)
            } else
            {
                console.log('Error', error.message)
            }
            return
        }
    }

    return (
        <>
            <div id="regForm">

                <div className="all-steps" id="all-steps">
                    <StepIdicator />
                </div>
                <Form>
                    <div id="bio" className="tab active-tab">
                        <BioData handleChange={ (e) => handleChange(e) } />
                    </div>
                    <div id="qualification" className="tab">
                        <Qualification handleChange={ (e) => handleChange(e) } />
                    </div>
                    <div id="background" className="tab">
                        <Background handleChange={ (e) => handleChange(e) } />
                    </div>
                    <div id="referee" className="tab">
                        <Refree handleChange={ (e) => handleChange(e) } />
                    </div>
                    <div id="health" className="tab">
                        <Health handleChange={ (e) => handleChange(e) } />
                    </div>
                    <div id="terms" className="tab">
                        <Terms handleChange={ (e) => handleChange(e) } />
                    </div>

                </Form>
                <div className="thanks-message text-center" id="text-message">
                    <img src="https://i.imgur.com/O18mJ1K.png" width={ 100 } className="mb-4" />
                    <h3>Thankyou for your feedback!</h3>
                    <span>Thanks for your valuable information. It helps us to improve our services!</span>
                </div>

                <div className="nextprevious" id="nextprevious">
                    <div className="btn-nextprevious">
                        <button type="button" id="prevBtn" onClick={ () => nextPrev(-1) }>
                            <FontAwesomeIcon color='white' icon={ faAngleDoubleLeft } />
                        </button>
                        <button type="button" id="nextBtn" onClick={ () => nextPrev(1) }>
                            <FontAwesomeIcon color='white' icon={ faAngleDoubleRight } />
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Wizard
