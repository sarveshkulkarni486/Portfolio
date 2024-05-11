import './App.css';
import { Link, Route, BrowserRouter, Routes } from 'react-router-dom';
import {Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home'
import About from './Components/About'
import Skill from './Components/Skills'
import Project from './Components/Projects'
import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-web';
import animationData from './image/loading.json';
import './navbar.css';
import Contact from './Components/Contact';
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000); //5seconds
  }, []);
  useEffect(() => {
    //Initalizing and playing lottie animation after component is mounted
    Lottie.loadAnimation({
      container: document.querySelector("#lottie-container"),//provide a container element
      renderer:'svg',
      loop:true,
      autoplay:true,
      animationData:animationData, //use your aniamtion data
    });
  }, []);

  return (
      <BrowserRouter>
      <>
      {loading ? (
        //Loading screen
        <div className='loading-screen'>
          <div id="lottie-container" style={{maxWidth:'100%', height:'500px', overflow:'hidden'}}></div>
        </div>
      ) : (
        <>
        <Navbar className='navbar-nav' expand="lg">
          <Container>
            <Navbar.Brand className='brand'>Sarvesh</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'>
              <Nav className='ml-auto nav-link-large'>
                <Nav.Link className='navlink-gap nav-link-large' as={Link} to="/">Home</Nav.Link>
                <Nav.Link className='navlink-gap nav-link-large' as={Link} to="/about">About</Nav.Link>
                <Nav.Link className='navlink-gap nav-link-large' as={Link} to="/skill">Skills</Nav.Link>
                <Nav.Link className='navlink-gap nav-link-large' as={Link} to="/project">Projects</Nav.Link>
                <Nav.Link className='navlink-gap nav-link-large' as={Link} to="/contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/skill' element={<Skill/>} />
          <Route path='/project' element={<Project />} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </>
      )}
    </>
    </BrowserRouter>
  );
}

export default App;
