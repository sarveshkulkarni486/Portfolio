import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiFillLinkedin, AiFillInstagram, AiFillGithub, AiFillCodepenCircle } from "react-icons/ai";
import { Link, Route, BrowserRouter, Routes } from "react-router-dom";
import {Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap';
import './footer.css'
const Footer = () => {
    const footerStyle = {
        width: "100%",
        height: "auto",
        marginLeft: "0rem",
    }
    const textStyle = {
        color: "black",
        fontFamily: "'Belanosima', sans-serif",
    }
    const socialStyle = {
        fontSize: "32px",
        marginLeft: "15rem"
    }
    const socialIcons = {
        marginRight: "4rem"
    }
    const copyRight = {
        marginTop: "3rem"
    }
    return (
        <div style={footerStyle}>
            <footer className="bg-light p-4 textStyle">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p className="copyRight">&copy; {new Date().getFullYear()}Sarvesh Kulkarni. All Rights Reserved.</p>
                        </div>
                        <div className="col-md-6 text-lg-right">
                            <div className="soical-media-icons socialStyle">
                                {/* add your social media icons here */}
                                <p>Follow Me on: </p>
                                <a href='https://www.linkedin.com/in/sarvesh-kulkarni-7b0860214/' target="_blank"><AiFillLinkedin className='social-icons mr-3 socialIcons'/></a>
                                <a href='https://codepen.io/Sarvesh-kulkarni' target="_blank"><AiFillCodepenCircle className='social-icons mr-3 socialIcons'/></a>
                                <a href='https://github.com/sarveshkulkarni486' target="_blank"><AiFillGithub className='social-icons mr-3 socialIcons'/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
export default Footer;
