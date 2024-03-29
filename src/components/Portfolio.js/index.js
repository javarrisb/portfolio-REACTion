import React, { useState } from 'react';

const Portfolio = ({ projects }) => {
    const [photos] = useState([
        {
            name: "Car-Dash",
            link: "https://limitless-reaches-44145.herokuapp.com/",
            tech: "Technolgies used: React, React Router, GraphQL, MongoDB, Apollo Server, JWT",
            github: "https://github.com/javarrisb/Car-Dash",
        },
        {
            name: "Game-Corner",
            link: "https://afternoon-reef-79835.herokuapp.com/",
            tech: "Technologies used: JavaScript, Bootstrap, Node.js, Express.js, MySQL, Sequelize ORM",
            github: "https://github.com/kerbunker/game-collection"
        },
        {
            name: 'Travel Buddy',
            link: 'https://khaoulaja.github.io/Travel-Buddy/',
            tech: "Technologies used: HTML, CSS, JavaScript, jQuery, APIs",
            github: 'https://github.com/javarrisb/Travel-Buddy'
        },
        {
            name: "Tech About It",
            link: 'https://tech-about-it.herokuapp.com/',
            tech: "Technologies used: CSS, JavaScript, Handlebars.js, MySQL, Sequelize ORM",
            github: 'https://github.com/javarrisb/tech-about-it'
        },
        {
            name: "Team Generator",
            link: 'https://javarrisb.github.io/Team-Generator/',
            tech: 
            github
        },
        {
            name: "Smart Money",
            link: 'https://blooming-beach-28479.herokuapp.com/',
            tech: "Technologies used: HTML, CSS, JavaScript, Express.js, MongoDB",
            github: 'https://github.com/javarrisb/smart-money'
        },
    ])

    const currentProjects = photos.filter(photo => photo.projects === projects);

    return (
        <div className="port-container">
            <h2 className="row justify-content-center">My Work</h2>
            {currentProjects.map((image, i) => (
                <div key={image.name} className="port-div">
                    <h3 className="image-name">{image.name}</h3>
                    <a href={image.link} target="_blank" rel='noreferrer' className="hrefa">
                        <img
                            src={require(`../../assets/images/${i}.png`)}
                            alt={image.name}
                            key={image.name}
                            className="image-project"
                        />
                    </a>
                    {image.tech}
                    <a href={image.github} className="btn btn-success">GH Repo</a>
                </div>
            ))}
        </div >
    );
};


export default Portfolio;