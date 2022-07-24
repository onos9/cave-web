import {
  faBookReader,
  faChartPie,
  faFileAlt,
  faSignOutAlt,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Accordion,
  Badge,
  Button,
  Dropdown,
  Image,
  Nav,
  Navbar,
} from "@themesberg/react-bootstrap";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import SimpleBar from "simplebar-react";

import ReactHero from "../assets/img/cave-hero-logo.svg";
import ProfilePicture from "../assets/img/team/profile-picture-3.jpg";
import useAuth from "../hooks/useAuth";
import { Router } from "../router";

export default (props = {}) => {
  const { auth, authState } = useAuth();
  const location = useLocation();
  const { pathname } = location;
  const [show, setShow] = useState(false);
  const showClass = show ? "show" : "";

  const hidden = (allowedRoles) =>
    allowedRoles?.includes(authState?.user?.role);

  const onCollapse = () => setShow(!show);

  const CollapsableNavItem = (props) => {
    const { hide = false, eventKey, title, icon, children = null } = props;
    const defaultKey = pathname.indexOf(eventKey) !== -1 ? eventKey : "";

    return (
      <>
        {hide ? (
          <Accordion as={Nav.Item} defaultActiveKey={defaultKey}>
            <Accordion.Item eventKey={eventKey}>
              <Accordion.Button
                as={Nav.Link}
                className="d-flex justify-content-between align-items-center"
              >
                <span>
                  <span className="sidebar-icon">
                    <FontAwesomeIcon icon={icon} />{" "}
                  </span>
                  <span className="sidebar-text">{title}</span>
                </span>
              </Accordion.Button>
              <Accordion.Body className="multi-level">
                <Nav className="flex-column">{children}</Nav>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        ) : null}
      </>
    );
  };

  const NavItem = (props) => {
    const {
      title,
      link,
      external,
      target,
      icon,
      image,
      badgeText,
      badgeBg = "secondary",
      badgeColor = "primary",
      hide = false,
    } = props;
    const classNames = badgeText
      ? "d-flex justify-content-start align-items-center justify-content-between"
      : "";
    const navItemClassName = link === pathname ? "active" : "";
    const linkProps = external ? { href: link } : { as: Link, to: link };
    return (
      <>
        {hide ? (
          <Nav.Item className={navItemClassName} onClick={() => setShow(false)}>
            <Nav.Link {...linkProps} target={target} className={classNames}>
              <span>
                {icon ? (
                  <span className="sidebar-icon">
                    <FontAwesomeIcon icon={icon} />{" "}
                  </span>
                ) : null}
                {image ? (
                  <Image
                    src={image}
                    width={"auto"}
                    height={50}
                    className="sidebar-icon svg-icon"
                  />
                ) : null}

                <span className="sidebar-text">{title}</span>
              </span>
              {badgeText ? (
                <Badge
                  pill
                  bg={badgeBg}
                  text={badgeColor}
                  className="badge-md notification-count ms-2"
                >
                  {badgeText}
                </Badge>
              ) : null}
            </Nav.Link>
          </Nav.Item>
        ) : null}
      </>
    );
  };

  return (
    <>
      <Navbar
        expand={false}
        collapseOnSelect
        variant="dark"
        className="navbar-theme-primary px-4 d-md-none"
      >
        <Navbar.Brand className="me-lg-5" as={Link} to={Router.Overview.path}>
          <Image src={ReactHero} className="navbar-brand-light" />
        </Navbar.Brand>
        <Navbar.Toggle
          as={Button}
          aria-controls="main-navbar"
          onClick={onCollapse}
        >
          <span className="navbar-toggler-icon" />
        </Navbar.Toggle>
      </Navbar>
      <CSSTransition timeout={300} in={show} classNames="sidebar-transition">
        <SimpleBar
          className={`collapse ${showClass} sidebar d-md-block bg-primary text-white`}
        >
          <div className="sidebar-inner px-4 pt-3">
            <div className="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
              <div className="d-flex align-items-center">
                <div className="user-avatar lg-avatar me-4">
                  <Image
                    src={ProfilePicture}
                    className="card-img-top rounded-circle border-white"
                  />
                </div>
                <div className="d-block">
                  <h6>Hi, Jane</h6>
                  <Button
                    as={Link}
                    variant="secondary"
                    size="xs"
                    to={Router.Signin.path}
                    className="text-dark"
                  >
                    <FontAwesomeIcon icon={faSignOutAlt} className="me-2" />{" "}
                    Sign Out
                  </Button>
                </div>
              </div>
              <Nav.Link
                className="collapse-close d-md-none"
                onClick={onCollapse}
              >
                <FontAwesomeIcon icon={faTimes} />
              </Nav.Link>
            </div>
            <Nav className="flex-column pt-3 pt-md-0">
              <NavItem
                hide={hidden(Router.Dashboard.allowedRoles)}
                title=""
                link={""}
                image={ReactHero}
              />
              <NavItem
                hide={hidden(Router.Dashboard.allowedRoles)}
                title="Dashboard"
                link={Router.Dashboard.path}
                icon={faChartPie}
              />
              <Dropdown.Divider className="my-3 border-indigo" />
              <CollapsableNavItem
                hide={hidden(Router.Dashboard.allowedRoles)}
                eventKey="courses/"
                title="Courses"
                icon={faFileAlt}
              >
                <NavItem
                  hide={hidden(Router.Dashboard.allowedRoles)}
                  title="Practicum"
                  link={Router.CourseList.path}
                />
              </CollapsableNavItem>

              <Button
                as={Link}
                to={""}
                variant="secondary"
                className="upgrade-to-pro"
                onClick={() => auth.signout()}
              >
                <FontAwesomeIcon icon={faSignOutAlt} className="me-1" /> Sign
                Out
              </Button>
            </Nav>
          </div>
        </SimpleBar>
      </CSSTransition>
    </>
  );
};
