import React from "react";
import "./CurriculumFullStackJava.css";
import { openWhatsApp } from "../utils/whatsapp";

const CurriculumFullStackJava = () => {
  const syllabus = [
    {
      phase: "Phase 1",
      title: "Java Backend Mastery",
      details: "Core Java, OOPS, DSA, JDBC, & SQL",
    },
    {
      phase: "Phase 2",
      title: "Spring Framework & Microservices",
      details: "SpringBoot, Hibernate, Microservices, & PostMan",
    },
    {
      phase: "Phase 3",
      title: "Modern Frontend Integration",
      details: "React.js / Angular v19, TypeScript, & HTML5/CSS3",
    },
    {
      phase: "Phase 4",
      title: "Deployment & Professional Skills",
      details: "Git/GitHub, Agile, AI-Assisted Dev, & Mock Interviews",
    },
  ];

  return (
    <div className="java-fullstack-container">
      {/* Header */}
      <div className="java-header">
        <h2 className="java-title">Full-Stack Java Developer</h2>
        <p className="java-tagline">Master the Complete Enterprise Ecosystem</p>
      </div>

      {/* Mentors */}
      <div className="java-section">
        <h3 className="section-label">Your Mentors</h3>
        <div className="java-faculty-row">
          <div className="java-faculty-item">
            <img src="https://dko97fmntp7zh.cloudfront.net/2a852e79-ef68-4064-af9d-11a0b3667460_IMG_20260109_150618.jpg" />
            <h5>Ajay Reddy</h5>
            <p>
              Senior Fullstack Developer <br />
              <span>4+ Years Experience</span>
            </p>
          </div>

          <div className="java-faculty-item">
            <img src="https://dko97fmntp7zh.cloudfront.net/a6a3cabc-5790-4d0d-ac77-bad673436e38_woman-profile-icon-circle-shape-gray-background-180703631.webp" />
            <h5>Anushka Jain</h5>
            <p>
              Senior Frontend Developer <br />
              <span>4+ Years Experience</span>
            </p>
          </div>

          <div className="java-faculty-item">
            <img src="https://dko97fmntp7zh.cloudfront.net/a6a3cabc-5790-4d0d-ac77-bad673436e38_woman-profile-icon-circle-shape-gray-background-180703631.webp" />
            <h5>Saisree</h5>
            <p>
              Soft Skills Trainer <br />
              <span>5+ Years Experience</span>
            </p>
          </div>
        </div>
      </div>

      {/* Daily Structure */}
      <div className="java-section">
        <h3 className="section-label">Daily Real-Time Training (3 Hours)</h3>
        <div className="fs-daily-structure">
          <div className="fs-daily-box">
            <strong>1 Hour</strong>
            <p>Concepts + Live Industry-Style Coding</p>
          </div>
          <div className="fs-daily-box">
            <strong>1 Hour</strong>
            <p>Hands-on Tasks & Feature Development</p>
          </div>
          <div className="fs-daily-box">
            <strong>1 Hour</strong>
            <p>Code Review, Debugging & Interview Prep</p>
          </div>
        </div>
      </div>

      {/* Roadmap */}
      <div className="java-section">
        <h3 className="section-label">Learning Roadmap</h3>
        <div className="java-timeline">
          {syllabus.map((step, index) => (
            <div className="timeline-card" key={index}>
              <div className="phase-badge">{step.phase}</div>
              <div className="phase-content">
                <h4>{step.title}</h4>
                <p>{step.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Real-Time Work Style */}
      <div className="fs-workstyle-box">
        <h4>👨‍💻 How We Train Like Real Software Companies</h4>
        <ul>
          <li>Industry-standard folder structures & coding guidelines</li>
          <li>Git-based workflows (branches, pull requests, reviews)</li>
          <li>Agile sprint-based feature development</li>
          <li>Backend + Frontend integration like real projects</li>
          <li>API testing using Postman</li>
        </ul>
      </div>

      {/* Career Outcomes */}
      <div className="fs-outcome-box">
        <h4>🎯 Career Outcomes</h4>
        <p>
          You’ll be job-ready for Full-Stack Java Developer, Software Engineer,
          Backend Developer, Frontend Developer, Database Engineer, Java
          Full-Stack Intern, ReactJS Developer, or Angular Developer roles with
          real-world project experience.
        </p>
      </div>

      {/* Footer Features */}
      <div className="java-feature-footer">
        <div className="feature-item">
          <span className="icon">💬</span>
          <p>24/7 Doubt Resolution</p>
        </div>
        <div className="feature-item">
          <span className="icon">🏗️</span>
          <p>Real-Time Microservices Projects</p>
        </div>
        <div className="feature-item">
          <span className="icon">👔</span>
          <p>Mock Interviews & Mentorship</p>
        </div>
      </div>

      <button className="java-download-btn" onClick={openWhatsApp}>
        Enroll Now
      </button>
    </div>
  );
};

export default CurriculumFullStackJava;
