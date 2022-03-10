import React from 'react';
import resume from '../../assets/images/Resume.png';

function Resume() {
    return (
        <div className='resume-container'>
            <h1 className='header-resume'>
                Resume
            </h1>
            <div>
                <h2>Front End Skills</h2>
            </div>
            <a href="resume/Resume.pdf" className='link-resume' download="Javarris Barnett Resume">Click here to download my resume</a>
        </div>
    )
}

export default Resume;