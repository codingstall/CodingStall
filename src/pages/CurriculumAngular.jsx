import React from "react";
import "./CurriculumAngular.css";
import { openWhatsApp } from "../utils/whatsapp";

const CurriculumAngular = () => {
  const roadmap = [
    {
      month: "Month 1",
      focus: "TypeScript & Angular Core",
      topics:
        "ES6+, TypeScript Basics, Angular CLI, Components, Directives, Pipes & Data Binding",
    },
    {
      month: "Month 2",
      focus: "Architecture & Modern Features",
      topics:
        "Signals, Standalone Components, Reactive Forms, Services, HTTP & RxJS",
    },
    {
      month: "Month 3",
      focus: "Enterprise Scaling & AI",
      topics:
        "NgRx State Management, Unit Testing (Jasmine/Karma), AI-Assisted Coding & CI/CD",
    },
  ];

  return (
    <div className="ang-curriculum-container">
      <div className="ang-header">
        <h2 className="ang-title">Angular Developer Curriculum</h2>
        <p className="ang-subtitle">
          Master Enterprise-Grade Frontend Development
        </p>
      </div>

      {/* Faculty Section */}
      <div className="ang-section">
        <h3>Expert Faculty</h3>
        <div className="ang-faculty-grid">
          <div className="ang-faculty-card">
            <img
              src="https://dko97fmntp7zh.cloudfront.net/a6a3cabc-5790-4d0d-ac77-bad673436e38_woman-profile-icon-circle-shape-gray-background-180703631.webp"
              alt="Saisree"
            />
            <h4>Saisree</h4>
            <p>
              Soft Skills Trainer
              <br />
              <span>5+ years Experience</span>
            </p>
          </div>

          <div className="ang-faculty-card">
            <img
              src="https://dko97fmntp7zh.cloudfront.net/a6a3cabc-5790-4d0d-ac77-bad673436e38_woman-profile-icon-circle-shape-gray-background-180703631.webp"
              alt="Anushka Jain"
            />
            <h4>Anushka Jain</h4>
            <p>
              Senior Frontend Developer
              <br />
              <span>4+ years Experience</span>
            </p>
          </div>
        </div>
      </div>

      {/* Daily Learning Structure */}
      <div className="ang-section">
        <h3>Daily Learning Structure (3 Hours)</h3>
        <div className="ang-daily-structure">
          <div className="ang-daily-box">
            <strong>1 Hour</strong>
            <p>Concept Explanation + Live Angular Coding</p>
          </div>
          <div className="ang-daily-box">
            <strong>1 Hour</strong>
            <p>Hands-on Practice & Assignments</p>
          </div>
          <div className="ang-daily-box">
            <strong>1 Hour</strong>
            <p>Q&A, Debugging, Code Review & Interview Prep</p>
          </div>
        </div>
      </div>

      {/* Roadmap Table */}
      <div className="ang-section">
        <h3>The 90-Day Roadmap</h3>
        <div className="ang-table-wrapper">
          <table className="ang-roadmap-table">
            <thead>
              <tr>
                <th>Timeline</th>
                <th>Focus Area</th>
                <th>Key Learning Outcomes</th>
              </tr>
            </thead>
            <tbody>
              {roadmap.map((item, index) => (
                <tr key={index}>
                  <td className="ang-month-col">
                    <strong>{item.month}</strong>
                  </td>
                  <td>{item.focus}</td>
                  <td className="ang-topics-col">{item.topics}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Placement Readiness */}
      <div className="ang-section">
        <h3>Placement & Career Readiness</h3>
        <div className="ang-placement-box">
          <ul>
            <li>Resume & LinkedIn Optimization (Angular Roles)</li>
            <li>Weekly Mock Interviews (Angular + TypeScript)</li>
            <li>Enterprise-Level Coding Standards</li>
            <li>Agile, Scrum & Team Collaboration</li>
            <li>Angular Interview Question Patterns</li>
          </ul>
        </div>
      </div>

      {/* Support & Projects */}
      <div className="ang-support-grid">
        <div className="ang-support-box">
          <h4>🔴 24/7 Live Support</h4>
          <p>Instant doubt resolution via experts.</p>
        </div>
        <div className="ang-support-box">
          <h4>🛠️ Projects</h4>
          <p>CRM Dashboard & Real-time Chat Application.</p>
        </div>
      </div>

      {/* Career Outcome */}
      <div className="ang-outcome-box">
        <h4>🎯 Career Outcomes</h4>
        <p>
          Become job-ready for Angular Developer, Frontend Developer (Angular),
          UI Developer, or Angular Intern roles in enterprise teams.
        </p>
      </div>

      <button className="ang-enroll-btn" onClick={openWhatsApp}>
        Enroll Now
      </button>
    </div>
  );
};

export default CurriculumAngular;
