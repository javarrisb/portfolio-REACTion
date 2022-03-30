import React from 'react';
import aboutpic from "../../assets/images/aboutpic.jpg";


function About() {
    return (
        <section className="container-aboutme">
            <h1>About Me</h1>
            <div className='picture'>
                <img src={aboutpic} className="mypic" style={{ width: "50%" }}
                    alt="mypicture" />
            </div>
            <div className="aboutme-text">
                <p>
                    My name is Javarris Barnett, born and raised in Charlotte, NC. I am a team oriented person with my background being professional basketball player and real estate agent. Switching careers and going through UNC Coding Bootcamp was an experience that taught me not only technolgy skills but also life skills that I will implement daily in my career. Becoming a full stack developer has been a very satisfying journey in my life and will continue learning and developing applications that will help make users lives better. When I am not coding and developing, you can find me traveling, reading and enjoying outdoor activities with my family and dog.
                </p>
            </div>

        </section >
    );
}

export default About;