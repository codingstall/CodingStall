import React from "react";
import "./CurriculumFullStackPython.css";
import { openWhatsApp } from "../utils/whatsapp";

const CurriculumFullStackPython = () => {
  const syllabus = [
    {
      phase: "Phase 1",
      title: "Python Backend Mastery",
      details: "Python 3.x, OOPs, Data Structures, File Handling & SQL",
    },
    {
      phase: "Phase 2",
      title: "Web Frameworks & API Dev",
      details: "Django, Flask/FastAPI, REST Framework, & PostMan",
    },
    {
      phase: "Phase 3",
      title: "Modern Frontend Integration",
      details: "React.js / Angular v19, TypeScript, & Tailwind CSS",
    },
    {
      phase: "Phase 4",
      title: "Cloud & AI-Powered Deployment",
      details: "Docker, AWS/Heroku, AI-Assisted Dev, & Mock Interviews",
    },
  ];

  return (
    <div className="python-fullstack-container">
      {/* Header */}
      <div className="python-header">
        <h2 className="python-title">Full-Stack Python Developer</h2>
        <p className="python-tagline">Build Intelligent, Scalable Web Ecosystems</p>
      </div>

      {/* Mentors */}
      <div className="python-section">
        <h3 className="section-label">Your Mentors</h3>
        <div className="python-faculty-row">
          {/* Reuse your existing mentor logic here */}
          <div className="python-faculty-item">
            <img src="https://dko97fmntp7zh.cloudfront.net/2a852e79-ef68-4064-af9d-11a0b3667460_IMG_20260109_150618.jpg" alt="Mentor" />
            <h5>Ajay Reddy</h5>
            <p>Senior Fullstack Developer <br /><span>4+ Years Experience</span></p>
          </div>

            <div className="python-faculty-item">
            <img src="https://dko97fmntp7zh.cloudfront.net/a6a3cabc-5790-4d0d-ac77-bad673436e38_woman-profile-icon-circle-shape-gray-background-180703631.webp" />
            <h5>Anushka Jain</h5>
            <p>
              Senior Frontend Developer <br />
              <span>4+ Years Experience</span>
            </p>
          </div>

          <div className="python-faculty-item">
            <img src="https://dko97fmntp7zh.cloudfront.net/a6a3cabc-5790-4d0d-ac77-bad673436e38_woman-profile-icon-circle-shape-gray-background-180703631.webp" />
            <h5>Saisree</h5>
            <p>
              Soft Skills Trainer <br />
              <span>5+ Years Experience</span>
            </p>
          </div>
          {/* ... Add other faculty items ... */}
        </div>
      </div>

      {/* Daily Structure (Keeping your successful 3-hour layout) */}
      <div className="python-section">
        <h3 className="section-label">Daily Real-Time Training (3 Hours)</h3>
        <div className="fs-daily-structure">
          <div className="fs-daily-box">
            <strong>1 Hour</strong>
            <p>Python Logic + Scalable Scripting</p>
          </div>
          <div className="fs-daily-box">
            <strong>1 Hour</strong>
            <p>Building Framework-Based Features</p>
          </div>
          <div className="fs-daily-box">
            <strong>1 Hour</strong>
            <p>Debugging & Tech-Round Preparation</p>
          </div>
        </div>
      </div>

      {/* Roadmap */}
      <div className="python-section">
        <h3 className="section-label">Learning Roadmap</h3>
        <div className="python-timeline">
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

      {/* Python Specific Work Style */}
      <div className="fs-workstyle-box">
        <h4>🐍 Master the Pythonic Way of Development</h4>
        <ul>
          <li>Django & FastAPI industry-standard project setup</li>
          <li>Database modeling using ORM (Object Relational Mapping)</li>
          <li>Developing AI-integrated features using Python libraries</li>
          <li>Writing clean, PEP 8 compliant professional code</li>
          <li>Building and Testing RESTful APIs like a Pro</li>
        </ul>
      </div>

      {/* Career Outcomes */}
      <div className="fs-outcome-box">
        <h4>🎯 Career Outcomes</h4>
        <p>
          Job-ready for: Python Full-Stack Developer, Django Engineer, 
          Backend Developer, Data Engineer, React/Angular Developer, 
          or Automation Engineer with high-performance project experience.
        </p>
      </div>

      {/* Footer Features */}
      <div className="python-feature-footer">
        <div className="feature-item">
          <span className="icon">💬</span>
          <p>24/7 Expert Support</p>
        </div>
        <div className="feature-item">
          <span className="icon">🚀</span>
          <p>Real-World Django Projects</p>
        </div>
        <div className="feature-item">
          <span className="icon">📈</span>
          <p>Career Coaching & Placement</p>
        </div>
      </div>
      <div className="plan-grid">
        <div className="basicplan-box">
          <h4>Basic Plan</h4>
          <b>20,000.00</b>
           <br/>
          <p className="eligible"><b>*</b> You are not eligible for placement drives</p>
        </div>
        <div className="afterplaced-box">
          <h4>Pay After Placement Plan</h4>
          <p className="eligible">Pay basic amount first. Then pay <b>40,000.00</b> after you got placed through us.</p>
        </div>
      </div>

      <button className="python-download-btn" onClick={openWhatsApp}>
        Enroll Now
      </button>
    </div>
  );
};

export default CurriculumFullStackPython;