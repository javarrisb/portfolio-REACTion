import React from 'react';

function Resume() {
    return (
        <div className='resume-container'>
            <h1 className='header-resume'>
                Resume
            </h1>
            <div>
                <h2>Front-End Skills</h2>
                <ul className='skills-list'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                </ul>
            </div>
            <div>
                <h2>Back-End Skills</h2>
                <ul className='skills-list'>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                </ul>
            </div>
            <a href="resume/Resume.pdf" className='link-resume' download="Javarris Barnett Resume">Click here to download my resume</a>
        </div>
    )
}

export default Resume;