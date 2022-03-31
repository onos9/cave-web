import React, { useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBook, faExternalLinkAlt, faTimesCircle, faCheckCircle, faCalendarAlt, faCodeBranch, faShoppingCart, faFolder, faMapMarkedAlt, faPager, faFileCode, faDownload, faSignInAlt } from "@fortawesome/free-solid-svg-icons"
import { faBootstrap, faGithub, faIntercom, faJs, faReact, faSass } from "@fortawesome/free-brands-svg-icons"
import { Col, Row, Card, Image, Button, Container, ListGroup, Tooltip, OverlayTrigger, Form, Navbar, Nav, Badge } from '@themesberg/react-bootstrap'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import Code from "../components/CodeEditor"

import { Router } from "../router"
import ThemesbergLogo from "../assets/img/themesberg-logo.svg"
import MockupPresentation from "../assets/img/mockup-presentation.png"
import ReactHero from "../assets/img/cave-hero-logo.svg"
import MapboxImg from "../assets/img/mockup-map-presentation.png"
import CalendarImg from "../assets/img/mockup-calendar-presentation.png"
import ReactMockupImg from "../assets/img/react-mockup.png"
import BS5IllustrationsImg from "../assets/img/illustrations/bs5-illustrations.svg"
import BS5Logo from "../assets/img/technologies/bootstrap-5-logo.svg"
import ReactLogo from "../assets/img/technologies/react-logo.svg"

import pages from "../data/pages"
import features from "../data/features"
import typography from "../data/typography"
import { apiV1 } from "../Constants"
import axios from 'axios'

export default (state = null, action) => {
  const code = new URLSearchParams(window.location.search).get('code')

  useEffect(() => {
    const doCode = code ? sendCode : getCodeUrl
    doCode()
  }, [code])

  const sendCode = async () => {
    try
    {
      const data = { code: code }
      const response = await axios.post(`${apiV1}/api/v1/mail`, data)
      console.log(response.data)
    } catch (error)
    {
      console.log(error)
    }
  }

  const getCodeUrl = async () => {
    const resp = await axios.get(`${apiV1}/api/v1/mail`)
    const params = new URLSearchParams(resp.data).toString()
    const url = `https://accounts.zoho.com/oauth/v2/auth?${params}`
    console.log(url)
  }

  const PagePreview = (props) => {
    const { name, image, link } = props


    return (
      <Col xs={ 4 } className="mb-5">
        <Card.Link as={ Link } to={ link } className="page-preview page-preview-lg scale-up-hover-2">
          <Image src={ image } className="shadow-lg rounded scale" alt="Dashboard page preview" />

          <div className="text-center show-on-hover">
            <h6 className="m-0 text-center text-white">
              { name } <FontAwesomeIcon icon={ faExternalLinkAlt } className="ms-2" />
            </h6>
          </div>
        </Card.Link>
      </Col>
    )
  }

  const Feature = (props) => {
    const { title, description, icon } = props

    return (
      <Col xs={ 12 } sm={ 6 } lg={ 3 }>
        <Card className="bg-white shadow-soft text-primary rounded mb-4">
          <div className="px-3 px-lg-4 py-5 text-center">
            <span className="icon icon-lg mb-4">
              <FontAwesomeIcon icon={ icon } />
            </span>
            <h5 className="fw-bold text-primary">{ title }</h5>
            <p>{ description }</p>
          </div>
        </Card>
      </Col>
    )
  }

  const FolderItem = (props) => {
    const { name, icon, tooltip, iconColor } = props
    const color = iconColor ? `text-${iconColor}` : ""

    return (
      <OverlayTrigger
        trigger={ ['hover', 'focus'] }
        placement="left"
        overlay={ <Tooltip>{ tooltip }</Tooltip> }
      >
        <li data-toggle="tooltip" data-placement="left" title="Main folder that you will be working with">
          <FontAwesomeIcon icon={ icon ? icon : faFolder } className={ `${color} me-2` } /> { name }
        </li>
      </OverlayTrigger>
    )
  }

  return (
    <>
      <Navbar variant="dark" expand="lg" bg="dark" className="navbar-transparent navbar-theme-primary sticky-top">
        <Container className="position-relative justify-content-between px-3">
          <Navbar.Brand as={ HashLink } to="#home" className="me-lg-3 d-flex align-items-center">
            <Image src={ ReactHero } height={ 60 } width={ "auto" } />
            <span className="ms-2 brand-text d-none d-md-inline"></span>
          </Navbar.Brand>

          <div className="d-flex align-items-center">
            <Navbar.Collapse id="navbar-default-primary">
              <Nav className="navbar-nav-hover align-items-lg-center">
                <Nav.Link as={ HashLink } to="#events">Events</Nav.Link>
                <Nav.Link as={ HashLink } to="#pages">Courses</Nav.Link>
                <Nav.Link as={ HashLink } to={Router.Admission.path} className="d-sm-none d-xl-inline">Admissions</Nav.Link>
                <Nav.Link as={ HashLink } to={ Router.Registration.path }>Enrollment</Nav.Link>
                <Nav.Link as={ HashLink } to="#programs">Programs</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Button as={ HashLink } to={ Router.Signin.path } variant="outline-white" className="ms-3"><FontAwesomeIcon icon={ faSignInAlt } className="me-1" />Login</Button>
          </div>
        </Container>
      </Navbar>

      <section className="section section-sm pt-0" id="pages">
        <Container>
          <Row className="justify-content-center mb-5 mb-lg-6">
            <Col xs={ 12 } className="text-center">
              <h2 className="px-lg-5">
                { typography.courses_featured }
              </h2>
              <p className="lead px-lg-10">

              </p>
            </Col>
          </Row>
          <Row className="mb-5">
            { pages.map(page => <PagePreview key={ `page-${page.id}` } { ...page } />) }
          </Row>
        </Container>
      </section>



      <footer className="footer py-6 bg-dark text-white">
        <Container>
          <Row>
            <Col md={ 4 }>
              <Navbar.Brand as={ HashLink } to="#home" className="me-lg-3 mb-3 d-flex align-items-center">
                <Image src={ ReactHero } />
                <span className="ms-2 brand-text">Volt React</span>
              </Navbar.Brand>
              <p> { typography.info_details }</p>
              <p> { typography.info_details_two }</p>
              <p> { typography.info_details_three }</p>
              <p> { typography.info_details_four }</p>
            </Col>
            <Col xs={ 6 } md={ 2 } className="mb-5 mb-lg-0">
              <span className="h5">{ typography.site_map }</span>
              <ul className="links-vertical mt-2">
                <li><Card.Link target="_blank" href="https://themesberg.com/blog">{ typography.site_map_events }</Card.Link></li>
                <li><Card.Link target="_blank" href="https://themesberg.com/products">{ typography.site_map_courses }</Card.Link></li>
                <li><Card.Link target="_blank" href="https://themesberg.com/about">About Us</Card.Link></li>
                <li><Card.Link target="_blank" href="https://themesberg.com/contact">{ typography.site_map_enrollment }</Card.Link></li>
                <li><Card.Link target="_blank" href="https://themesberg.com/contact">{ typography.site_map_programs }</Card.Link></li>
              </ul>
            </Col>
            <Col xs={ 6 } md={ 2 } className="mb-5 mb-lg-0">
              <span className="h5">{ typography.special_courses }</span>
              <ul className="links-vertical mt-2">
                <li>
                  <Card.Link as={ Link } to={ '/#' } target="_blank">{ typography.christian_apologetics }</Card.Link>
                </li>
                <li><Card.Link as={ Link } to={ '/#' } target="_blank">{ typography.kairos }</Card.Link></li>
                <li><Card.Link target="_blank" href="https://themesberg.com/licensing">{ typography.student_work_ymc }</Card.Link></li>
              </ul>
            </Col>
            <Col xs={ 12 } md={ 4 } className="mb-5 mb-lg-0">
              <span className="h5 mb-3 d-block">Subscribe</span>
              <form action="#">
                <div className="form-row mb-2">
                  <div className="col-12">
                    <input type="email" className="form-control mb-2" placeholder="example@company.com" name="email" aria-label="Subscribe form" required />
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-secondary text-dark shadow-soft btn-block" data-loading-text="Sending">
                      <span>Subscribe</span>
                    </button>
                  </div>
                </div>
              </form>
              <p className="text-muted font-small m-0">We’ll never share your details. See our <Card.Link className="text-white" href="#">Privacy Policy</Card.Link></p>
            </Col>
          </Row>
          <hr className="bg-gray my-5" />
          <Row>
            <Col className="mb-md-2">
              <Card.Link href="https://themesberg.com" target="_blank" className="d-flex justify-content-center">
                <Image src={ ThemesbergLogo } height={ 35 } className="d-block mx-auto mb-3" alt="Themesberg Logo" />
              </Card.Link>
              <div className="d-flex text-center justify-content-center align-items-center" role="contentinfo">
                <p className="font-weight-normal font-small mb-0">Copyright © Themesberg 2019-<span className="current-year">2021</span>. All rights reserved.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}
