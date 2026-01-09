import React from "react";
import "./CurriculumJava.css";
import { openWhatsApp } from "../utils/whatsapp";

const CurriculumJava = () => {
  const modules = [
    {
      title: "Foundations & Logic",
      duration: "Weeks 1-4",
      skills:
        "Core Java, OOPS, Data Structures, Algorithms & Problem Solving",
    },
    {
      title: "Database & Persistence",
      duration: "Weeks 5-6",
      skills:
        "SQL, JDBC, Hibernate ORM, Transactions & Data Modeling",
    },
    {
      title: "Enterprise Frameworks",
      duration: "Weeks 7-10",
      skills:
        "Spring, Spring Boot, REST APIs & Microservices Architecture",
    },
    {
      title: "DevOps & Deployment",
      duration: "Weeks 11-12",
      skills:
        "Git, Build Tools (Maven), Testing, CI/CD & Agile Practices",
    },
  ];

  return (
    <div className="java-dev-container">
      {/* Header Section */}
      <div className="java-dev-header">
        <div className="java-badge">Backend Specialist</div>
        <h2 className="java-dev-title">Java Developer Program</h2>
        <p className="java-dev-desc">
          Build the brains of the internet. Focus on scale, security, and speed.
        </p>
      </div>

      {/* Expert Faculty Section */}
      <div className="java-section">
        <h3 className="java-section-title">Expert Faculty</h3>

        <div className="java-faculty-grid">
          <div className="java-faculty-card">
            <img
              src="https://dko97fmntp7zh.cloudfront.net/2a852e79-ef68-4064-af9d-11a0b3667460_IMG_20260109_150618.jpg"
              alt="Ajay Reddy"
            />
            <h4>Ajay Reddy</h4>
            <p>
              Senior FullStack Developer <br />
              <span>4+ years Experience</span>
            </p>
          </div>

          <div className="java-faculty-card">
            <img
              src="https://dko97fmntp7zh.cloudfront.net/a6a3cabc-5790-4d0d-ac77-bad673436e38_woman-profile-icon-circle-shape-gray-background-180703631.webp"
              alt="Saisree"
            />
            <h4>Saisree</h4>
            <p>
              Soft Skills Trainer
              <br />
              <span>5+ Years Experience</span>
            </p>
          </div>
        </div>
      </div>

      {/* Daily Learning Structure */}
      <div className="java-section">
        <h3 className="java-section-title">Daily Learning Structure (3 Hours)</h3>
        <div className="java-daily-structure">
          <div className="java-daily-box">
            <strong>1 Hour</strong>
            <p>Concept Explanation + Live Backend Coding</p>
          </div>
          <div className="java-daily-box">
            <strong>1 Hour</strong>
            <p>Hands-on Practice & Assignments</p>
          </div>
          <div className="java-daily-box">
            <strong>1 Hour</strong>
            <p>Q&A, Debugging, Code Review & Interview Prep</p>
          </div>
        </div>
      </div>

      {/* Curriculum Steps */}
      <div className="java-modules-grid">
        {modules.map((mod, index) => (
          <div className="module-card" key={index}>
            <div className="module-number">{index + 1}</div>
            <div className="module-info">
              <span className="module-duration">{mod.duration}</span>
              <h4>{mod.title}</h4>
              <p>{mod.skills}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Placement Readiness */}
      <div className="java-section">
        <h3 className="java-section-title">Placement & Career Readiness</h3>
        <div className="java-placement-box">
          <ul>
            <li>Resume & GitHub Profile Review (Java Roles)</li>
            <li>Weekly Mock Interviews (Java + Spring Boot)</li>
            <li>Backend Coding Challenges & System Design Basics</li>
            <li>Agile, Scrum & Team Collaboration</li>
            <li>Java Interview Question Patterns</li>
          </ul>
        </div>
      </div>

      {/* Career Outcome */}
      <div className="java-outcome-box">
        <h4>🎯 Career Outcomes</h4>
        <p>
          Become job-ready for Java Developer, Backend Developer, Software
          Engineer, or Java Intern roles with real-world backend project
          experience.
        </p>
      </div>
      <div className="plan-grid">
        <div className="basicplan-box">
          <h4>Basic Plan</h4>
          <b>15,000.00</b>
           <br/>
          <p className="eligible"><b>*</b> You are not eligible for placement drives</p>
        </div>
        <div className="afterplaced-box">
          <h4>Pay After Placement Plan</h4>
          <p className="eligible">Pay basic amount first. Then pay <b>40,000.00</b> after you got placed through us.</p>
        </div>
      </div>

      <button className="java-view-btn" onClick={openWhatsApp}>
        Enroll Now
      </button>
    </div>
  );
};

export default CurriculumJava;
