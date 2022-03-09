import React from 'react';

function Resume() {
    return (
        <div className='resume-container'>
            <h1 className='resume-heading'>
                Resume
            </h1>
            <div className='resume-menu'>
                <div className='skills'>
                    <h3 className='develop'>
                        Front-End Skills
                    </h3>
                    <ul className='skills-list'>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                    </ul>
                </div>
                <div className='skills'>
                    <h3 className='develop'>
                        Back-End Skills
                    </h3>
                    <ul className='skills-list'>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
                <a href="resume/Resume.pdf" download="Javarris Barnett Resume">Click here to download my resume</a>
            </div>
        </div>
    )
}

export default Resume;