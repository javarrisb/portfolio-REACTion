import React from 'react';
import Project from "../Project.js";

const projects = [
    {
        name: "Car-Dash",
        picture: "s0",
        description: "Car Dash is an app that allows users to keep track of repairs and services essential for their vehicles.",
        link: "https://limitless-reaches-44145.herokuapp.com/",
        github: "https://github.com/javarrisb/Car-Dash",
    },
    {
        name: "Game-Corner",
        picture: "s1",
        description: "An app that allows the user to keep track of their collection of games.",
        link: "https://afternoon-reef-79835.herokuapp.com/",
        github: "https://github.com/kerbunker/game-collection"
    },
    {
        name: 'Travel Buddy',
        picture: "s2",
        description: "An app for traveler's wanting information for their next journey to a new destination.",
        link: 'https://khaoulaja.github.io/Travel-Buddy/',
        github: 'https://github.com/javarrisb/Travel-Buddy'
    },
    {
        name: "Tech About It",
        picture: "s3",
        description: "An app that allows developers to publish blog posts and articles.",
        link: 'https://tech-about-it.herokuapp.com/',
        github: 'https://github.com/javarrisb/tech-about-it'
    },
    {
        name: "Team Generator",
        picture: "s4",
        description: "An app that allows users to input information about employees and generate a webpage that displays the information about each employee.",
        link: 'https://javarrisb.github.io/Team-Generator/',
        github: 'https://github.com/javarrisb/Team-Generator'
    },
    {
        name: "Smart Money",
        picture: "s5",
        description: "This app allows users to track their bank account deposits and withdrawals while traveling from anywhere around the world. ",
        link: 'https://blooming-beach-28479.herokuapp.com/',
        github: 'https://github.com/javarrisb/smart-money'
    },
]

const Portfolio = () => {
    return (
        <section className="port-section">
            <div>
                <h2 className="port-title">My Projects</h2>
                <div className="row justify-content-around align-items-stretch">
                    {projects.map((project) => (
                        <div className="col-sm-12 col-md-6 col-xl-4 p-3 align-self-stretch" key={project.name}>
                            <Project project={project} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}


export default Portfolio;