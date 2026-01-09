import React from "react";
import "./CurriculumSQL.css";
import { openWhatsApp } from "../utils/whatsapp";

const CurriculumSQL = () => {
  const learningModules = [
    {
      title: "Data Foundations",
      month: "Month 1",
      details:
        "RDBMS Concepts, MySQL, PostgreSQL Installation, CRUD Operations, & Basic Joins.",
    },
    {
      title: "Advanced Querying",
      month: "Month 2",
      details:
        "Complex Joins, Subqueries, Stored Procedures, Triggers, & Pg-Admin Mastery.",
    },
    {
      title: "Intelligence & AI",
      month: "Month 3",
      details:
        "AI-Assisted Query Building, Query Optimization, PostMan API Integration, & BI Reporting.",
    },
  ];

  return (
    <div className="sql-curriculum-container">
      <div className="sql-header">
        <div className="sql-logo-circle">
          <img
            src="https://dko97fmntp7zh.cloudfront.net/c5463b4b-3df0-41cc-8814-ea9aabe34991_download (7).jpg"
            alt="SQL"
          />
        </div>
        <h2 className="sql-title">SQL Developer Mastery</h2>
        <p className="sql-tagline">
          Turn raw data into business intelligence using AI and Machine Learning.
        </p>
      </div>

      {/* Duration Info */}
      <div className="sql-duration-box">
        <p>
          ⏳ <strong>Duration:</strong> 1 Month (4 - 5 Weeks) | 5 Days / Week |
          ~40 Working Days
        </p>
      </div>

      {/* Daily Structure */}
      <div className="sql-daily-structure">
        <div className="sql-daily-box">
          <strong>1 Hour</strong>
          <p>Concepts + Live SQL Query Writing</p>
        </div>
        <div className="sql-daily-box">
          <strong>1 Hour</strong>
          <p>Hands-on Practice & Case Studies</p>
        </div>
        <div className="sql-daily-box">
          <strong>1 Hour</strong>
          <p>Query Optimization, Debugging & Interview Prep</p>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="sql-tech-stack">
        <span>MySQL</span> • <span>PostgreSQL</span> • <span>PostMan</span> •{" "}
        <span>WorkBench</span>
      </div>

      {/* Expert Faculty */}
      <div className="sql-section">
        <h3 className="sql-section-title">Expert Faculty</h3>
        <div className="sql-faculty-grid">
          <div className="sql-faculty-card">
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

          <div className="sql-faculty-card">
            <img
              src="https://dko97fmntp7zh.cloudfront.net/a6a3cabc-5790-4d0d-ac77-bad673436e38_woman-profile-icon-circle-shape-gray-background-180703631.webp"
              alt="Saisree"
            />
            <h4>Saisree</h4>
            <p>
              Soft Skills Trainer <br />
              <span>5+ Years Experience</span>
            </p>
          </div>
        </div>
      </div>

      {/* Roadmap */}
      <div className="sql-roadmap-section">
        {learningModules.map((module, index) => (
          <div className="sql-module-row" key={index}>
            <div className="sql-month-tag">{module.month}</div>
            <div className="sql-content">
              <h4>{module.title}</h4>
              <p>{module.details}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Benefits */}
      <div className="sql-benefits-grid">
        <div className="sql-benefit-card">
          <span className="sql-icon">🤖</span>
          <h5>AI-Query Building</h5>
          <p>Optimize queries using modern AI tools.</p>
        </div>
        <div className="sql-benefit-card">
          <span className="sql-icon">📊</span>
          <h5>BI Integration</h5>
          <p>Analyze data for business growth.</p>
        </div>
        <div className="sql-benefit-card">
          <span className="sql-icon">📅</span>
          <h5>Weekly Mocks</h5>
          <p>Face real-world SQL interview scenarios.</p>
        </div>
      </div>

      {/* Footer */}
      <div className="sql-mentor-footer">
        <p>
          Guided by <strong>Industry Data Architects</strong> | 24/7 Doubt Support
        </p>
        <button className="sql-cta-button" onClick={openWhatsApp}>
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CurriculumSQL;
