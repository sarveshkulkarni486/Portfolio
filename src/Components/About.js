import React, { useState } from "react";
import jnec from '../image/jnec.jpg';
import poly from '../image/poly.jpg';
import hackerrank from '../image/hackerrank.jpg';
import './about.css'
import Footer from './Footer';
import Card from 'react-bootstrap/Card';
import  Button  from "react-bootstrap/Button";
import {AiOutlineStar} from 'react-icons/ai';
import {FaHackerrank} from 'react-icons/fa';
import AI from '../image/AI.jpg';
import './Cards.css';
const About = () => {
    const [isHovered, setIsHovered] = useState(Array(3).fill(false)); //Assuming 3 cards
    const handleMouseEnter = (cardIndex) => {
        const updateHoverState = [...isHovered];
        updateHoverState[cardIndex] = true;
        setIsHovered(updateHoverState);
    };
    const handleMouseLeave = (cardIndex) => {
        const updatedHoverState = [...isHovered];
        updatedHoverState[cardIndex] = false;
        setIsHovered(updatedHoverState);

    }
    const containerStyle = {
        backgroundColor: "white",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "2rem",
        marginTop: "3rem",
        overflow: "hidden"
    }
    const EducationStyle = {
        fontFamily: "'Belanosima', sans-serif",
    }
    const Headin1 = {
        textAlign: "center",
        fontSize: "32px",
        fontWeight: "bold",
        marginRight: "2rem",
        marginLeft: "6rem",
        fontFamily: "'Belanosima', sans-serif"
    }
    const underList = {
        listStyle: "none",
        marginLeft: "4rem"
    }
    const ParaStyle = {
        marginLeft: "4rem"
    }
    const ImageStyle = {
        width: "50%",
        marginLeft: "200px",
        marginRight: "auto",
        borderRadius: "0%"
    }
    return(
        <div>
            <h1 style={Headin1} className="typing">MY EDUCATION</h1>
            <div className="container bg-white" style={containerStyle}>
                <div className="row">
                    <div className="col-md-6" style={EducationStyle}>
                        <p style={ParaStyle}>MGM'S JAWAHARLAL NEHRU ENGINEERING COLLEGE</p>
                        <p style={ParaStyle}>2021-2024</p>
                        <p style={ParaStyle}>Bachelor of Technology(B.TECH)</p>
                        <p style={ParaStyle}>Information Technology</p>
                        <ul style={underList}>
                            <li>&#10024; CGPA: 7.77 <sub>(till 6th sem).</sub></li>
                            <li>&#10024; Data Structures and Algorithms.</li>
                            <li>&#10024; Object Oriented Programming Language.</li>
                            <li>&#10024; Database Management System.</li>
                            <li>&#10024; Machine Learning.</li>
                            <li>&#10024; Software Engineering and Testing.</li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <img src={jnec} alt="jnec" style={ImageStyle} className="animated-image" />
                    </div>
                </div>
            </div>
            <br />
            <div className="container" style={containerStyle}>
                <div className="row">
                    <div className="col-md-6" style={EducationStyle}>
                        <p style={ParaStyle}>GRAMIN POLYTECHNIC COLLEGE VISHNUPURI, NANDED</p>
                        <p style={ParaStyle}>2018-2021</p>
                        <p style={ParaStyle}>Diploma in Engineering</p>
                        <p style={ParaStyle}>Computer Science</p>
                        <ul style={underList}>
                            <li>&#10024; Percentage: 89.20 <sub>(Aggregate).</sub></li>
                            <li>&#10024; Data Structures and Algorithms.</li>
                            <li>&#10024; Object Oriented Programming Language.</li>
                            <li>&#10024; Database Management System.</li>
                            <li>&#10024; Android Development.</li>
                            <li>&#10024; Software Engineering and Testing.</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <img src={poly} alt="polytechnic" className="image-style img-fluid animated-image"/>
                    </div>
                </div>
                <h1 style={Headin1}>My Achievements</h1>
                <br />
                <div className="row">
                    <div className="col-md-4">
                        <Card style={{width: '18.5rem', height:'22.5rem', marginLeft:'4rem'}} onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={() => handleMouseLeave(0)}>
                            <Card.Img variant="top" src={hackerrank} style={{width: '150px', height:'auto', marginRight:'0rem', marginLeft:'4rem'}} className="img-fluid"/>
                            <Card.Body style={{textAlign:'center'}}>
                                <Card.Title>5<AiOutlineStar/> in Java On Hackerrank</Card.Title>
                                <Card.Text className={`description ${isHovered[0] ? 'active' : ''}`}>
                                    I have achieved 5 star in Java Basic on Hacker rank. 
                                    Which showcase my knowledge and problem solving in <strong>Java Programming.</strong> 
                                </Card.Text>
                                <button style={{marginLeft: '2rem', marginRight:'2rem', border:'none', outline:'none', background:'#f9b234', width:'100px', height:'auto', borderRadius:'10px'}}><a href="https://www.hackerrank.com/Sarveshkulkarni7" target="_blank" style={{textDecoration: 'none', color:'black'}}>See Profile</a></button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card style={{width: '18.5rem', height:'22.5rem', marginLeft:'4rem'}} onMouseEnter={()=> handleMouseEnter(1)} onMouseLeave={() => handleMouseLeave(1)}>
                            <Card.Img variant="top" src={hackerrank} style={{width: '150px', height:'auto', marginRight:'0rem', marginLeft:'4rem'}} className="img-fluid" />
                            <Card.Body style={{textAlign:'center'}}>
                                <Card.Title>5<AiOutlineStar /> in MySQL on Hackerrank</Card.Title>
                                <Card.Text className={`description ${isHovered[1] ? 'active': ''}`}>
                                    I have achieved 5 star in MYSQL on Hacker Rank.
                                    Which showcase my knowledge and database skills in <strong>MY-SQL.</strong>
                                </Card.Text>
                                <button style={{marginLeft: '2rem', marginRight:'2rem', border:'none', outline: 'none', background:'#f9b234', width:'100px', height:'auto', borderRadius:'10px'}}><a href="https://www.hackerrank.com/Sarveshkulkarni7" target="_blank" style={{textDecoration: 'none', color:'black'}}>See Profile</a></button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card style={{width: '18.5rem', height:'22.5rem', marginRight:'5rem', marginLeft:'4rem'}} onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={() => handleMouseLeave(2)}>
                            <Card.Img variant="top" src={AI} style={{width: '200px', height:'140px', marginRight:'0rem', marginLeft:'4rem'}} className="img-fluid" />
                            <Card.Body style={{textAlign:'center'}}>
                                <Card.Title>Ranked 3 <sup>rd</sup> in Ai Programming Contest </Card.Title>
                                <Card.Text className={`description ${isHovered[2] ? 'active': ''}`}>
                                    I have ranked 3 <sup>rd</sup> in Ai Programming Contest.
                                    Which was organized by MGMU in which I have used. <strong>Java</strong>
                                </Card.Text>
                                <button style={{marginLeft: '2rem', marginRight:'2rem', border:'none', outline: 'none', background:'#f9b234', width:'100px', height:'auto', borderRadius:'10px'}}><a href="https://www.linkedin.com/posts/sarvesh-kulkarni-7b0860214_i-am-feeling-happy-to-share-this-i-have-activity-7115681294197387266-USrr?utm_source=share&utm_medium=member_desktop" target="_blank" style={{textDecoration: 'none', color:'black'}}>See Post</a></button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <Footer />
        </div>
    );
}
export default About;