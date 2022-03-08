import React from 'react';

function Nav({ currentCategory, handleCategoryChange}) {
    return(
        <ul className='nav'>
            <li>
                <a href="#aboutme" 
                onClick={() => handleCategoryChange('About')}

                className={currentCategory === 'About' ? 'nav-info-active' : 'nav-info'}
                >About</a>
            </li>
            <li>
                <a href="#portfolio"
                onClick={() => handleCategoryChange('Portfolio')}

                className={currentCategory === 'Portfolio' ? 'nav-info-active' : 'nav-info'}
                >Portfolio
                </a>
            </li>
            <li>
                <a href="#contact"
                onClick={() => handleCategoryChange('Contact')}

                className={currentCategory === 'Contact' ? 'nav-info-active' : 'nav-info'}>
                    Contact
                </a>
            </li>
            <li>
                <a href="#resume"
                onClick={() => handleCategoryChange('Resume')}

                className={currentCategory === 'Resume' ? 'nav-info-active' : 'nav-info'}>
                    Resume 
                </a>
            </li>
        </ul>
    )
}

export default Nav;