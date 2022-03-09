import React from 'react';
import githublogo from '../../assets/images/github.png';
import linkedlogo from '../../assets/images/linkedin.png';

function Footer() {
    return (
        <div className='footer-container'>
            <h1 className='footer'>[An application brought to you by Javarris Barnett]</h1>
            <a href="https://github.com/javarrisb" target="_blank" rel="noreferrer">
                <img
                    src={githublogo}
                    alt="github logo" />
            </a>

            <a href="https://www.linkedin.com/in/jbbarnett/" target="_blank" rel='noreferrer'>
                <img
                    src={linkedlogo}
                    alt="linkedin logo"
                />
            </a>

        </div>
    )
}

export default Footer;