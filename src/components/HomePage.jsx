import React from 'react';
import Navbar from './Navbar.jsx';
import "../App.css";

function HomePage() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <div className="header-content">
          <div className="image-container">
            <img src={`${process.env.PUBLIC_URL}/images/Esha.jpeg`} alt="Esha Altaf" />
          </div>
          <div className="name-title">
            <h1>Esha Altaf</h1>
          </div>
        </div>
      </header>
      <main>
        <section id="about" className="about">
          <h1>About</h1>
          <p>My name is Esha Altaf, a dedicated and enthusiastic Software Engineering student. I am passionate about utilizing my skills in real-world software development projects. I thrive in collaborative environments and am eager to contribute to innovative solutions.</p>
        </section>
        <section id="objective" className="objective">
          <h1>Objective</h1>
          <p>Seeking opportunities to apply classroom knowledge in real-world software development projects</p>
        </section>
        <section id="education" className="education">
          <h1>Education</h1>
          <p><strong>BS Software Engineering</strong></p>
          <p>National University of Modern Languages, 6th Semester (9/21 - Present ‘Rawalpindi Branch’)</p>
          <p><strong>FSc</strong></p>
          <p>FG Postgraduate Women College Kashmir Road Rawalpindi (2019 – 2021)</p>
          <p><strong>Matric</strong></p>
          <p>FG Public Girls High School Lalazar Rawalpindi (2017 – 2019)</p>
        </section>
        <section id="work-experience" className="work-experience">
          <h1>Work Experience</h1>
          <ul>
            <li>Workshop from IEEE in Cyber Security</li>
            <li>Internship from Fauji Fertilizers Company in Information System (6 weeks)</li>
          </ul>
        </section>
        <section id="skills" className="skills">
          <h1>Skills</h1>
          <ul>
            <li>Communication Skills</li>
            <li>Critical Thinking</li>
            <li>Leadership</li>
            <li>Front-End Development </li>
            <li>MS Skills</li>
          </ul>
        </section>
        <section id="contact" className="contact">
          <h1>Contact</h1>
          <p>Phone: 03346298667</p>
          <p>Email: eshaaltaf406@gmail.com</p>
          <p>Address: Dheri Hassan abad, Rawalpindi</p>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
