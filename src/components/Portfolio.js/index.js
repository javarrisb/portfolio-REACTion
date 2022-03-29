import React, { useState } from 'react';

const projects = [
    {
        name: "Car-Dash",
        picture: "s0",
        link: "https://limitless-reaches-44145.herokuapp.com/",
        github: "https://github.com/javarrisb/Car-Dash",
    },
    {
        name: "Game-Corner",
        picture: "s1",
        link: "https://afternoon-reef-79835.herokuapp.com/",
        github: "https://github.com/kerbunker/game-collection"
    },
    {
        name: 'Travel Buddy',
        picture: "s2",
        link: 'https://khaoulaja.github.io/Travel-Buddy/',
        github: 'https://github.com/javarrisb/Travel-Buddy'
    },
    {
        name: "Tech About It",
        picture: "s3",
        link: 'https://tech-about-it.herokuapp.com/',
        github: 'https://github.com/javarrisb/tech-about-it'

    },
    {
        name: "Team Generator",
        picture: "s4",
        link: 'https://javarrisb.github.io/Team-Generator/',
        github: 'https://github.com/javarrisb/Team-Generator'
    },
    {
        name: "Smart Money",
        picture: "s5",
        link: 'https://blooming-beach-28479.herokuapp.com/',
        github: 'https://github.com/javarrisb/smart-money'
    },

]

const Portfolio = () => {

    return (
        <div className='port-container'>
            <h1 className='header-port'>My Projects</h1>
            {currentProjects.map((image, i) => (
                <div key={image.name} className='port-div'>
                    <h2 className='image-name'>{image.name}</h2>
                    <a href={image.deployed} target="_blank" rel='noreferrer' className='hrefa'>
                        <img
                            src={require(`../../assets/images/${i}.png`)}
                            alt={image.name}
                            key={image.name}
                            className="image-project"
                        />
                    </a>
                    <a href={image.github} target="_blank" rel='noreferrer' className='glink'>{image.github}</a>
                </div>
            ))}
        </div>
    );

};

export default Portfolio;