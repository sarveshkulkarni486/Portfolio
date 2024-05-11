import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import './Social.css';
const SocialMediaCards = () => {
    return (
       <div className='social-media-card'>
        <h3>Connect With Me</h3>
        <div className='icon-container'>
            <a href='https://www.linkedin.com/in/sarvesh-kulkarni-7b0860214/'><AiFillLinkedin className='social-icons'/></a>
            <a href='https://www.instagram.com/sarveshcoolkarni486/?igshid=ZDdkNTZiNTM%3D'><AiFillInstagram className='social-icons'/></a>
            <a href='https://github.com/sarveshkulkarni486'><AiFillGithub className='social-icons' /></a>
        </div>
       </div>
    );
};
export default SocialMediaCards;