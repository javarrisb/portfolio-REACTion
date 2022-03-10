import React from 'react';
import aboutpic from "../../assets/images/aboutpic.jpg";


function About() {
    return (
        <section className="container-aboutme">
            <h1 className="header-ab">About Me</h1>
            <div className='picture'>
                <img src={aboutpic} className="mypic" style={{ width: "50%" }}
                    alt="mypicture" />
            </div>
            <div className="aboutme-text">
                <p>
                    My name is Javarris Barnett and I am embarking on the journey of becoming a full stack web developer. I am attending UNC Chapel Hill Coding bootcamp and love developing innovative web applications with new, cutting edge technology as the ones in this portfolio. When I am not coding and developing, I really enjoy traveling, reading and outdoor activities with the family and pet dog.
                </p>
            </div>

        </section>
    );
}

export default About;