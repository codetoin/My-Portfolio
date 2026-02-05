import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBolt,
  FaMobileAlt,
  FaCogs,
  FaSyncAlt,
} from "react-icons/fa";
import { BsBootstrap } from "react-icons/bs";
import { MdWeb } from "react-icons/md";

import TailwindLogo from "../assets/tailwind.svg";
import ExpressLogo from "../assets/express.svg";
import EJSLogo from "../assets/ejs.svg";

import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <h1>Hi, I’m Faraidoon</h1>
          <p className="hero-subtitle">
            Full-Stack Developer crafting modern web apps
          </p>
          <p className="hero-description">
            I build scalable, high-performance web applications using React,
            modern JavaScript, and reliable backend technologies.
          </p>
        </div>

        <div className="hero-features">
          <div className="feature"><FaReact /> Component-Based</div>
          <div className="feature"><FaBolt /> Fast Rendering</div>
          <div className="feature"><FaSyncAlt /> State Management</div>
          <div className="feature"><FaMobileAlt /> Responsive UI</div>
          <div className="feature"><FaCogs /> Reusable Logic</div>
          <div className="feature"><MdWeb /> SPA Architecture</div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about">
        <h2>About Me</h2>
        <p>
          Passionate Full-Stack Developer focused on clean architecture,
          maintainable code, and delivering smooth user experiences across all
          devices.
        </p>
      </section>

      {/* SKILLS */}
      <section className="skills">
        <h2>Core Skills</h2>

        <div className="skills-grid">
          <div className="skill-card"><FaHtml5 /> HTML</div>
          <div className="skill-card"><FaCss3Alt /> CSS</div>
          <div className="skill-card"><FaJs /> JavaScript</div>
          <div className="skill-card"><BsBootstrap /> Bootstrap</div>

          <div className="skill-card">
            <img src={TailwindLogo} alt="Tailwind CSS" className="skill-icon" />
            Tailwind CSS
          </div>

          <div className="skill-card"><FaReact /> React</div>

          <div className="skill-card">
            <img src={EJSLogo} alt="EJS" className="skill-icon" />
            EJS
          </div>

          <div className="skill-card"><FaNodeJs /> Node.js</div>

          <div className="skill-card">
            <img src={ExpressLogo} alt="Express.js" className="skill-icon" />
            Express.js
          </div>

          <div className="skill-card"><FaDatabase /> PostgreSQL</div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="stat-box">
          <h3>6+</h3>
          <p>Projects Completed</p>
        </div>
        <div className="stat-box">
          <h3>2+</h3>
          <p>Years Learning</p>
        </div>
        <div className="stat-box">
          <h3>100%</h3>
          <p>Clean Code</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
