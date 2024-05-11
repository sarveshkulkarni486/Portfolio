import React, { useState } from "react";
import LULC from '../image/lulc.jpg';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './project.css';
import NSS from '../image/NSS.jpg';
import Youth from '../image/youth.jpg';
import Footer from './Footer';
import Weather from '../image/weather.jpg';
const Project = () => {
    const [showMore, setShowMore] = useState(false);
    const toggleShowMore = (e) => {
        e.preventDefault(); //Prevent the default link behavior
        setShowMore(!showMore);
    };
    const [showMore1, setShowMore1] = useState(false);
    const toggleShowMore1 = (e) => {
        e.preventDefault();
        setShowMore1(!showMore1);
    };
    const [showMore2, setShowMore2] = useState(false);
    const toggleShowMore2 = (e) => {
        e.preventDefault();
        setShowMore2(!showMore2);
    };
    const [showMore3, setShowMore3] = useState(false);
    const toggleShowMore3 = (e) => {
        e.preventDefault();
        setShowMore3(!showMore3);
    };
    const morecontent = {
        textAlign:'left',
        marginLeft:'-1rem'
    }
    return(
        <div className="container-fluid">
            <h1 style={{fontFamily:'lato, sans-serif', fontSize:'32px', fontWeight:'bold', textAlign:'center'}}>Projects</h1>
            <div className="row">
                <div className="col-md-6 project-cards">
                    <section class="articles">
                        <article>
                            <div class="article-wrapper">
                                <figure>
                                    <img src={LULC} alt="" style={{marginLeft:window.innerWidth<768 ? '-1rem' : '3rem', borderRadius:'10px', maxHeight:'110%'}}/>
                                </figure>
                                <div class="article-body">
                                    <h2 style={{fontFamily:'lato, sans-serif', fontSize:'16px', textAlign:'center'}}>LAND USE LAND COVER CLASSIFICATION.</h2>
                                    <p>
                                    The land use land cover classification is a research-based project undertaken while pursuing a bachelor's degree. 
                                    The project involves classifying a series of ten-year images from both 2013 and 2022. 
                                    This classification process provides valuable statistics and precise data, enabling a detailed study of the area of interest.
                                    This research is instrumental in understanding the changes that have occurred over the past decade, 
                                    including the scale of urbanization, fluctuations in water levels, and variations in vegetation patterns.
                                    </p>
                                    {showMore ? (
                                        
                                            <ul style={morecontent}>Technologies used: 
                                                <li><strong>Javascript</strong></li>
                                                <li><strong>Google Earth Engine.</strong></li>
                                                <li>Satellite Data Used: <strong>Landsat 8</strong></li>
                                                <li>Machine Learning Algorithm used: <strong>Random Forest Algorithm</strong></li>
                                                <li>Area of Interest: Aurangabad.</li>
                                                <li>Check Accuracy with the help of: <strong>Confusion Matrix.</strong></li>
                                            </ul>
                                    ): null}
                                    <a onClick={toggleShowMore} href="#" class="read-more">{showMore ? 'Read Less' : 'Read more'} <span class="sr-only">about this is some title</span><svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
                                    </a>
                                </div>
                            </div>
                        </article>
                    </section>
                </div>
                <div className="col-md-6 project-cards">
                    <section class="articles">
                        <article>
                            <div class="article-wrapper">
                                <figure>
                                    <img src={NSS} alt="" style={{marginLeft:'0rem', borderRadius:'10px', marginTop:'1.5rem', marginBottom:'0rem'}}/>
                                </figure>
                                <div class="article-body">
                                    <h2 style={{fontFamily:'lato, sans-serif', fontSize:'16px', textAlign:'center'}}>National Service Scheme Website and Admin Panel.</h2>
                                    <p>
                                        The NSS website not only offers an intuitive and user-friendly interface for volunteers, prospective members, 
                                        and the general public but also features a robust admin panel for efficient management. 
                                        Additionally, it simplifies the registration process, making it easy for individuals to sign up and become part of the NSS community. 
                                        Moreover, it provides comprehensive information about NSS programs, events, and various volunteer opportunities, allowing users to easily navigate through different sections and access valuable resources.
                                    </p>
                                    {showMore1 ? (
                                        <ul style={morecontent}>
                                            FrontEnd Technologies
                                            <li>Languages: <strong>HTML 5</strong></li>
                                            <li>Styling: <strong>CSS 3</strong></li>
                                            <li>FrameWork: <strong>Bootstrap 5</strong></li>
                                            Backend Technologies
                                            <li>Language: <strong>PHP</strong></li>
                                            <li>Database: <strong>MySQL</strong></li>
                                            <li>Tools: <strong>VSCODE</strong><strong>XAMPP</strong></li>
                                        </ul>
                                    ): null}
                                    <a onClick={toggleShowMore1} href="#" class="read-more">{showMore1 ? 'Read Less' : 'Read More' }<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
                                    </a>
                                </div>
                            </div>
                        </article>
                    </section>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-md-6 project-cards">
                    <section class="articles">
                        <article>
                            <div class="article-wrapper">
                                <figure>
                                    
                                    <img src={Youth} alt="" style={{marginLeft:'0rem', borderRadius:'10px', marginTop:'1.5rem', marginBottom:'0rem'}} />
                                </figure>
                                <div class="article-body">
                                    <h2 style={{fontFamily:'lato, sans-serif', fontSize:'16px', textAlign:'center'}}>Youth Conclave Website.</h2>
                                    <p>
                                        Youth Conclave is a youth empowerment movement initiated by students of MGMU with the aim of channeling the energy and potential of young individuals. 
                                        In my capacity as a technical team member of this organization, I had the privilege of developing a website that serves as an informative hub and provides solutions for distracted youths.
                                        This website plays a pivotal role by offering a platform to showcase upcoming events and their schedules. Additionally, it enables users to register for these events conveniently. 
                                        Recently, we successfully conducted a registration drive for the solution panel through this website, where participants could access registration details and follow a straightforward procedure to secure their spot in the event.
                                    </p>
                                    {showMore2 ? (
                                        <ul style={morecontent}>
                                            FrontEnd Technologies:
                                            <li>Language: <strong>HTML 5</strong></li>
                                            <li>Styling: <strong>CSS 3</strong></li>
                                            <li>FrameWork: <strong>Bootstrap</strong></li>
                                        </ul>
                                    ): null}
                                    <a onClick={toggleShowMore2} href="#" class="read-more">{showMore2 ? 'Read Less' : 'Read More' }<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
                                    </a>
                                </div>
                            </div>
                        </article>
                    </section>
                </div>
                <div className="col-md-6 project-cards">
                <section class="articles">
                        <article>
                            <div class="article-wrapper">
                                <figure>
                                    <img src={Weather} alt="" style={{marginLeft:'0rem', borderRadius:'10px', marginTop:'1.5rem', marginBottom:'0rem'}}/>
                                </figure>
                                <div class="article-body">
                                    <h2 style={{fontFamily:'lato, sans-serif', fontSize:'16px', textAlign:'center'}}>Weather App using ReactJs and Openweather API.</h2>
                                    <p>
                                    I recently started learning React, and as a part of my learning journey, I decided to create a simple weather app. 
                                    This project aims to solidify my understanding of React and apply my knowledge in a practical, real-world context.
                                    I'm grateful for the educational resources available on platforms like YouTube, which have taught me about working with APIs and how to use them effectively. 
                                    In this weather app, I've integrated the OpenWeather API as the data provider for weather information.It's a common project that serves as a showcase of my React skills, and it involves fetching and displaying the current weather for a given city.

                                    </p>
                                    {showMore3 ? (
                                        <ul style={morecontent}>
                                            FrontEnd Technologies:
                                            <li>Language: <strong>HTML 5</strong></li>
                                            <li>Styling: <strong>CSS 3</strong></li>
                                            <li>FrameWork: <strong>Bootstrap</strong></li>
                                            <li>Framework: <strong>ReactJS</strong></li>
                                            <li>API used: <strong>openweather</strong></li>
                                        </ul>
                                    ): null}
                                    <a onClick={toggleShowMore3} href="#" class="read-more">{showMore3 ? 'Read Less' : 'Read More' }<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
                                    </a>
                                </div>
                            </div>
                        </article>
                    </section>
                </div>
            </div>
            <div className="footer-section">
                <Footer />
            </div>
       </div>
    );
}
export default Project;