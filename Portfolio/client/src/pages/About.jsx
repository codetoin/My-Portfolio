import React from "react";
import "./About.css";
import {
  FaUser,
  FaLaptopCode,
  FaTools,
  FaPuzzlePiece,
  FaBookOpen,
  FaLightbulb,
} from "react-icons/fa";

const aboutData = [
  {
    title: "Who I Am",
    icon: <FaUser />,
    content:
      "I’m a developer who enjoys turning ideas into functional, reliable software. I care about structure, readability, and maintainable code.",
  },
  {
    title: "What I Work With",
    icon: <FaLaptopCode />,
    content:
      "My main stack includes React for the frontend and Node.js with Express on the backend. I also work with PostgreSQL and design clean, predictable APIs.",
  },
  {
    title: "How I Build Software",
    icon: <FaTools />,
    content:
      "I focus on modular, reusable components and follow best practices. I prioritize performance, accessibility, and responsive design across all devices.",
  },
  {
    title: "Problem Solving",
    icon: <FaPuzzlePiece />,
    content:
      "I enjoy debugging complex issues and breaking problems into manageable parts. Solving problems is about understanding the system as a whole.",
  },
  {
    title: "Continuous Learning",
    icon: <FaBookOpen />,
    content:
      "Technology evolves quickly, so I continuously improve my skills, explore better patterns, and refine my understanding of modern web development.",
  },
  {
    title: "What I’m Looking For",
    icon: <FaLightbulb />,
    content:
      "I’m looking to work on meaningful projects where I can grow as a developer, collaborate with others, and contribute to high-quality software.",
  },
];

function About() {
  return (
    <div className="about-page">
      {/* HEADER */}
      <section className="about-header">
        <h1>About Me</h1>
        <p>
          I’m a Full-Stack Developer focused on building modern, scalable web
          applications with clean architecture and a strong user experience.
        </p>
      </section>

      {/* ABOUT CARDS */}
      <section className="about-cards">
        {aboutData.map((item, index) => (
          <div className="about-card" key={index}>
            <div className="about-card-icon">{item.icon}</div>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
          </div>
        ))}
      </section>

      {/* FOOTER */}
      <section className="about-footer">
        <p>
          I believe good software is built with patience, clarity, and
          attention to detail.
        </p>
      </section>
    </div>
  );
}

export default About;
