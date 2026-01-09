import React from "react";
import "./CurriculumReact.css";
import { openWhatsApp } from "../utils/whatsapp";

const CurriculumReact = () => {
  const roadmap = [
    {
      month: "Month 1",
      focus: "Foundations & Core JS",
      topics:
        "HTML5/CSS3, ES6+, Git & GitHub, React Basics, Component Design",
    },
    {
      month: "Month 2",
      focus: "The React Ecosystem",
      topics:
        "Hooks, API Integration, React Router, Tailwind CSS, Forms & Validation",
    },
    {
      month: "Month 3",
      focus: "Advanced & Professional",
      topics:
        "Redux Toolkit, Testing, AI-Assisted Coding, Performance & Deployment",
    },
  ];

  return (
    <div className="curriculum-container">
      <h2 className="title">ReactJs Developer Curriculum</h2>

      {/* Faculty Section */}
      <div className="section">
        <h3>Meet Your Lead Instructors</h3>
        <div className="faculty-grid">
          <div className="faculty-card">
            <img
              src="https://dko97fmntp7zh.cloudfront.net/a6a3cabc-5790-4d0d-ac77-bad673436e38_woman-profile-icon-circle-shape-gray-background-180703631.webp"
              alt="Anushak Jain"
            />
            <h4>Anushak Jain</h4>
            <p>
              Senior Frontend Developer <br />
              <span>4+ Years Experience</span>
            </p>
          </div>

          <div className="faculty-card">
            <img
              src="https://dko97fmntp7zh.cloudfront.net/a6a3cabc-5790-4d0d-ac77-bad673436e38_woman-profile-icon-circle-shape-gray-background-180703631.webp"
              alt="Sai Sree"
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

      {/* Learning Structure */}
      <div className="section">
        <h3>Daily Learning Structure (3 Hours)</h3>
        <div className="daily-structure">
          <div className="daily-box">
            <strong>1 Hour</strong>
            <p>Concept Explanation + Live Coding</p>
          </div>
          <div className="daily-box">
            <strong>1 Hour</strong>
            <p>Hands-on Practice & Assignments</p>
          </div>
          <div className="daily-box">
            <strong>1 Hour</strong>
            <p>Q&A, Debugging, Code Review & Interview Discussion</p>
          </div>
        </div>
      </div>

      {/* Roadmap Table */}
      <div className="section">
        <h3>3-Month Learning Path</h3>
        <div className="table-wrapper">
          <table className="roadmap-table">
            <thead>
              <tr>
                <th>Month</th>
                <th>Focus Area</th>
                <th>Key Topics</th>
              </tr>
            </thead>
            <tbody>
              {roadmap.map((item, index) => (
                <tr key={index}>
                  <td className="month-col">
                    <strong>{item.month}</strong>
                  </td>
                  <td>{item.focus}</td>
                  <td className="topics-col">{item.topics}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Placement Focus */}
      <div className="section">
        <h3>Placement & Career Readiness</h3>
        <div className="placement-grid">
          <ul>
            <li>Resume & GitHub Profile Review</li>
            <li>Weekly Mock Interviews (Technical + HR)</li>
            <li>Real-Time Coding Challenges</li>
            <li>Agile & Team Collaboration Practices</li>
            <li>Interview Question Patterns (React)</li>
          </ul>
        </div>
      </div>

      {/* Support */}
      <div className="support-grid">
        <div className="support-box">
          <h4>🕒 24/7 Doubt Support</h4>
          <p>Instant help via microsoft teams community.</p>
        </div>
        <div className="support-box">
          <h4>🚀 Real-Time Projects</h4>
          <p>E-commerce, SaaS, and Capstone projects.</p>
        </div>
      </div>

      {/* Outcomes */}
      <div className="outcome-box">
        <h4>🎯 Career Outcomes</h4>
        <p>
          Become job-ready for React Developer, Frontend Developer, UI Developer,
          or React Intern roles with hands-on project experience.
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

      {/* Enroll Button */}
      <button className="enroll-btn" onClick={openWhatsApp}>
        Enroll Now
      </button>
    </div>
  );
};

export default CurriculumReact;
