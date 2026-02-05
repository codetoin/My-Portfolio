import {
  FaReact,
  FaLock,
  FaUsers,
  FaDatabase,
  FaSearch,
  FaTools,
  FaLink,
} from "react-icons/fa";
import "./Projects.css";

function Projects() {
  return (
    <section className="projects">
      <header className="projects-header">
        <h1>Projects</h1>
        <p>
          Production-ready applications built with React and modern web
          technologies.
        </p>
      </header>

      <div className="projects-grid">
        {/* PROJECT 1 */}
        <div className="project-card">
          <FaReact className="project-icon" />
          <h2>Blog Application</h2>
          <p className="project-desc">
            A full-featured blogging platform with authentication, content
            management, and admin control.
          </p>

          <ul className="project-features">
            <li><FaLock /> Authentication & Authorization</li>
            <li><FaUsers /> Admin & User Roles</li>
            <li><FaDatabase /> Database-Driven Content</li>
            <li><FaTools /> CRUD Operations</li>
          </ul>

          <a
            href="https://blog-application-yqo6.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLink /> Live Project
          </a>
        </div>

        {/* PROJECT 2 */}
        <div className="project-card">
          <FaUsers className="project-icon" />
          <h2>User & Admin System</h2>
          <p className="project-desc">
            Role-based management system with a clean dashboard and secure API
            access.
          </p>

          <ul className="project-features">
            <li><FaLock /> Role-Based Access Control</li>
            <li><FaDatabase /> Secure Data Handling</li>
            <li><FaTools /> Admin Dashboard</li>
            <li><FaReact /> Component-Based UI</li>
          </ul>

          <a
            href="https://user-management-6.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLink /> Live Project
          </a>
        </div>

        {/* PROJECT 3 */}
        <div className="project-card">
          <FaSearch className="project-icon" />
          <h2>Job Board Application</h2>
          <p className="project-desc">
            A modern hiring platform connecting employers and job seekers with
            fast search and filtering.
          </p>

          <ul className="project-features">
            <li><FaSearch /> Advanced Job Search</li>
            <li><FaUsers /> Employer & Applicant Roles</li>
            <li><FaDatabase /> Structured Job Listings</li>
            <li><FaReact /> Responsive React UI</li>
          </ul>

          <a
            href="https://job-board-application-jlft.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLink /> Live Project
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
