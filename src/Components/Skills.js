import React from "react";
import { Card, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import java from '../image/java.png';
import SQL from '../image/SQL.png';
import html from '../image/HTML5.png';
import css from '../image/CSS3.png';
import js from '../image/JS.png';
import boot from '../image/bootstrap.png';
import php from '../image/php.png';
import react from '../image/ReactJS.png';
import ml from '../image/ML.png';
import './skills.css';
import './skills.css'
import Footer from "./Footer";

const Skill = () => {
    const skillsbody = {
        overflow: 'hidden'
    }
    const h1 = {
        textAlign: 'center',
        fontSize: '32px',
        fontWeight: 'bold',
        marginRight: '2rem',
        marginLeft: '6rem',
        fontFamily: "'Lato', sans-serif",
        marginTop: '2rem'
    }
    return(
        <div style={skillsbody}>
            <h1 style={h1}>Technologies Which I Know</h1>
            <br />
            <br />
            <div className="row">
                <div className="col-md-6 skill-section">
                    <Card style={{width: '18rem', marginLeft: window.innerWidth <= 1024  ? '3rem' : '10rem', marginTop:'2rem'}}>
                        <Card.Img variant="top" src={java} style={{marginLeft: window.innerWidth < 768 ? '6.0rem': '3.5rem', marginBottom:'2rem', borderRadius:'0px', background:'none', marginTop:window.innerWidth<768 ? '2rem' : '0rem'}}></Card.Img>
                        <Card.Body>
                            <Card.Title style={{textAlign: 'center'}}>JAVA</Card.Title>
                            <br />
                            <Card.Text style={{textAlign:'center', color:'gold', fontSize:'24px'}}><p style={{color: 'black', }}>Rating:</p>&#9733;&#9733;&#9733;&#9733;</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-6 skill-section">
                    <Card style={{width: '18rem', marginLeft: window.innerWidth <= 1024 ? '3rem' : '10rem', marginTop:'2rem'}} className="sql">
                        <Card.Img variant="top"  src={SQL} style={{marginLeft: window.innerWidth < 768 ? '6.0rem': '3.5rem', marginBottom:'2rem', borderRadius:'0px', background:'none', marginTop:window.innerWidth<768 ? '2rem' : '0rem' }}></Card.Img>
                        <Card.Body>
                            <Card.Title style={{textAlign: 'center'}}>Database Language SQL</Card.Title>
                            <br />
                            <br />
                            <Card.Text style={{textAlign:'center', color:'gold', fontSize:'24px'}}><p style={{color: 'black', }}>Rating:</p>&#9733;&#9733;&#9733;&#9733;</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <br />
            <br />
            <h1 style={h1}>Web-Technologies</h1>
            <br />
            <div className="row">
                <div className="col-md-4 skill-section1">
                    <Card style={{width:'16rem', marginLeft:'6rem'}}>
                        <Card.Img variant="top"  src={html} style={{marginLeft: window.innerWidth < 768 ? '5.0rem': '3.5rem', marginBottom:'2rem', background:'none', borderRadius:'0px', marginTop:window.innerWidth<768 ? '2rem' : '0rem'}}></Card.Img>
                        <Card.Body>
                            <Card.Title style={{textAlign: 'center'}}>HTML 5</Card.Title>
                            <Card.Text style={{textAlign:'center', color:'gold', fontSize:'24px'}}><p style={{color: 'black', }}>Rating:</p>&#9733;&#9733;&#9733;</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4 skill-section1">
                    <Card style={{width:'16rem', marginLeft:'6rem',}}>
                        <Card.Img variant="top"  src={css} style={{marginLeft:window.innerWidth < 768 ? '5.0rem': '3.5rem', marginBottom:'2rem', background:'none', borderRadius:'0px', marginTop:window.innerWidth<768 ? '2rem' : '0rem'}}></Card.Img>
                        <Card.Body>
                            <Card.Title style={{textAlign: 'center'}}>CSS 3</Card.Title>
                            <Card.Text style={{textAlign:'center', color:'gold', fontSize:'24px'}}><p style={{color: 'black', }}>Rating:</p>&#9733;&#9733;&#9733;</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4 skill-section1">
                    <Card style={{width:'16rem', marginLeft:'6rem'}}>
                        <Card.Img variant="top"  src={js} style={{marginLeft:window.innerWidth < 768 ? '5.0rem': '3.5rem', marginBottom:'2rem', background:'none', borderRadius:'0px', marginTop:window.innerWidth<768 ? '2rem' : '0rem'}}></Card.Img>
                        <Card.Body>
                            <Card.Title style={{textAlign: 'center'}}>Java Script</Card.Title>
                            <Card.Text style={{textAlign:'center', color:'gold', fontSize:'24px'}}><p style={{color: 'black', }}>Rating:</p>&#9733;&#9733;</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <br />
            <br />
            <div className="row">
                <div className="col-md-4 skill-section1">
                    <Card style={{width:'16rem', marginLeft:'6rem'}}>
                        <Card.Img variant="top"  src={boot} style={{marginLeft:window.innerWidth < 768 ? '5.0rem': '3.5rem', marginBottom:'2rem', background:'none', borderRadius:'0px', marginTop:window.innerWidth<768 ? '2rem' : '0rem'}}></Card.Img>
                        <Card.Body>
                            <Card.Title style={{textAlign: 'center'}}>Bootstrap</Card.Title>
                            <Card.Text style={{textAlign:'center', color:'gold', fontSize:'24px'}}><p style={{color: 'black', }}>Rating:</p>&#9733;&#9733;&#9733;</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4 skill-section1">
                    <Card style={{width:'16rem', marginLeft:'6rem'}}>
                        <Card.Img variant="top"  src={php} style={{marginLeft:window.innerWidth < 768 ? '5.0rem': '3.5rem', marginBottom:'2rem', background:'none', borderRadius:'0px', marginTop:window.innerWidth<768 ? '2rem' : '0rem'}}></Card.Img>
                        <Card.Body>
                            <Card.Title style={{textAlign: 'center'}}>PHP</Card.Title>
                            <Card.Text style={{textAlign:'center', color:'gold', fontSize:'24px'}}><p style={{color: 'black', }}>Rating:</p>&#9733;&#9733;</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4 skill-section1">
                    <Card style={{width:'16rem', marginLeft:'6rem'}}>
                        <Card.Img variant="top"  src={react} style={{marginLeft:window.innerWidth < 768 ? '5.0rem': '3.5rem', marginBottom:'2rem', background:'none', borderRadius:'0px', marginTop:window.innerWidth<768 ? '2rem' : '0rem'}}></Card.Img>
                        <Card.Body>
                            <Card.Title style={{textAlign: 'center'}}>React JS</Card.Title>
                            <Card.Text style={{textAlign:'center', color:'gold', fontSize:'24px'}}><p style={{color: 'black', }}>Rating:</p>&#9733;&#9733;</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <br />
            <br />
            <div className="row">
                <div className="col-md-12 skill-section2">
                    <Card style={{width: window.innerWidth < 768 ? '16rem' : '18rem', marginLeft:window.innerWidth < 768 ? '5.0rem' : '32rem'}}>
                        <Card.Img variant="top"  src={ml} style={{marginLeft:window.innerWidth < 768 ? '5.0rem': '3.5rem', marginBottom:'2rem', background:'none', borderRadius:'0px', marginTop:window.innerWidth<768 ? '2rem' : '0rem'}}></Card.Img>
                        <Card.Body>
                            <Card.Title style={{textAlign: 'center'}}>Machine Learning</Card.Title>
                            <Card.Text style={{textAlign:'center', color:'gold', fontSize:'24px'}}><p style={{color: 'black', }}>Rating:</p>&#9733;</Card.Text>
                        </Card.Body>
                    </Card>

                </div>
            </div>
            <br />
            <Footer className="footer-section" />
        </div>
    );
}
export default Skill;