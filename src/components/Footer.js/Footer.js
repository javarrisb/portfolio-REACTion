import React from 'react';
import githublogo from '../../assets/images/github.png';
import linkedlogo from '../../assets/images/linkedin.png';
import stackoverlogo from '../../assets/images/stackoverflow.png';

function Footer() {
    return (
        <div className='footer-container'>
            <a href="https://github.com/javarrisb" className='footer-logo' target="_blank" rel="noreferrer">
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

            <a href="https://stackoverflow.com/users/16946548/javarrisb" target="_blank" rel='noreferrer'>
                <img
                    src={stackoverlogo}
                    alt="stackoverflow logo"
                />
            </a>

        </div>
    )
}

export default Footer;