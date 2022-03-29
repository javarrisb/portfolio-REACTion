import React, { useState } from 'react';

const Portfolio = ({ project }) => {
    const [photos] = useState([
        {
            name: "Game Corner",
            deployed: 'https://afternoon-reef-79835.herokuapp.com/',
            github: 'https://github.com/kerbunker/game-collection'
        },
        {
            name: "Tech About It",
            deployed: 'https://tech-about-it.herokuapp.com/',
            github: 'https://github.com/javarrisb/tech-about-it'
        },
        {
            name: 'Travel Buddy',
            deployed: 'https://khaoulaja.github.io/Travel-Buddy/',
            github: 'https://github.com/javarrisb/Travel-Buddy'
        },
        {
            name: "Team Generator",
            deployed: 'https://javarrisb.github.io/Team-Generator/',
            github: 'https://github.com/javarrisb/Team-Generator'
        },
        {
            name: "Smart Money",
            deployed: 'https://blooming-beach-28479.herokuapp.com/',
            github: 'https://github.com/javarrisb/smart-money'
        },
        {
            name: "Note Taker",
            deployed: 'https://peaceful-eyrie-47224.herokuapp.com/',
            github: 'https://github.com/javarrisb/note-taker'
        }
    ])

    const currentProjects = photos.filter(photo => photo.project === project);

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