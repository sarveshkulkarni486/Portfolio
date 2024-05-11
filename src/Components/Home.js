import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import { Link } from 'react-router-dom';
import myimage from '../image/myimage.jpg';
import SocialMediaCards from './SocialMediaCards';
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import {AiFillCodepenCircle} from "react-icons/ai";
import App from "../App";
import { AiFillInstagram } from "react-icons/ai";
import Footer from "./Footer";
const Home = () => {
    const contentStyle = {
        backgroundColor: "white"
    }
    const BodyStyle = {
        backgroundColor: "white",
        width: "100%",
        overflow: "hidden",
        marginLeft: '0rem',
        marginTop: '2rem',
        alignItems: 'center',
        justifyContent: 'center'
    }
    return(
        <div style={BodyStyle}>
            <div className="row">
                <div className="col-md-6 home-section">
                    <h1 className="heading"><strong>HI I am &#128075;</strong></h1>
                    <p className="intro typewriter">Sarvesh Kulkarni</p>
                    <p className="intro">IT Engineer</p>
                    <ul>
                        <li>Web Developer</li>
                        <li>Java Developer</li>
                    </ul>
                    <Link to="/" className="btn">Hire Me</Link>
                    <Link to="/about" className="btn">About Me</Link>
                    <div className="col-md-6 home-section p-4 image-container">
                    <img src={myimage} className="img-fluid"></img>
                </div>
                </div>
            </div>
            <div className="col-md-6 home-section p-4">
                    <div className="intro-container">
                        <h1>Let Me Introduce My Self</h1>
                        <p className="intro-text">
                        As a fresher in software development, I am eager to contribute my skills and knowledge to a dynamic team in the industry. 
                        With a solid educational background in computer science and programming languages such as Java, Python, and C++, 
                        I have developed a keen eye for detail and an ability to solve complex problems. 
                        I am a quick learner and always strive to keep myself updated with the latest technologies and trends in the field.
                        </p>
                    </div>
                </div>
            <div className="social-format-container intro-container">
                        <div className="social_box intro-text">
                            <div className="social_item">
                                <a href="#" class="social-item_link">
                                    <div className="social-item_bg"></div>
                                    <div className="social-item_title">
                                        <h3>Connect Me With:</h3><h6></h6>
                                        <a href='https://www.linkedin.com/in/sarvesh-kulkarni-7b0860214/' target="_blank"><AiFillLinkedin className='social-icons'/></a>
                                        <a href='https://codepen.io/Sarvesh-kulkarni' target="_blank"><AiFillCodepenCircle className='social-icons'/></a>
                                        <a href='https://github.com/sarveshkulkarni486' target="_blank"><AiFillGithub className='social-icons' /></a>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <Footer/>
        </div>
    );
}
export default Home;