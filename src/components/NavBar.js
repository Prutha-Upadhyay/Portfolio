import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';

import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);  // Track if toggler is expanded

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      {/* Apply both "scrolled" and "expanded" classes conditionally */}
      <Navbar expand="md" className={`${scrolled || expanded ? "scrolled" : ""}`} expanded={expanded}>
        <Container>
          {/* Logo */}
          <Navbar.Brand href="/">
            <a className="navbar-brand" href="/">
              <span>P</span>rutha Upadhyay
            </a>
          </Navbar.Brand>

          {/* Toggler for mobile responsiveness */}
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(!expanded)} // Toggle expanded state
          >
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>

          {/* Nav Links */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              <Nav.Link href="#achievements" className={activeLink === 'achievements' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Achievements</Nav.Link>
            </Nav>

            {/* Social icons and Connect button */}
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/prutha-upadhyay"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/Prutha-Upadhyay"><img src={navIcon2} alt="" /></a>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
