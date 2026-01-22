import React from "react";
import "./CurriculamAIML.css";
import { openWhatsApp } from "../utils/whatsapp";

const CurriculamAIML = () => {
  const syllabus = [
    {
      phase: "Phase 1",
      title: "Python + Data Foundations",
      details: "Python 3.x, OOPs, NumPy, Pandas, Matplotlib, SQL Basics",
    },
    {
      phase: "Phase 2",
      title: "Machine Learning Core",
      details:
        "EDA, Feature Engineering, Supervised & Unsupervised Learning, Model Evaluation",
    },
    {
      phase: "Phase 3",
      title: "Deep Learning + NLP",
      details:
        "Neural Networks, CNN, Transfer Learning, NLP, Transformers, HuggingFace",
    },
    {
      phase: "Phase 4",
      title: "Deployment + MLOps",
      details:
        "Flask/FastAPI, Model Deployment, Docker, GitHub, Cloud Basics, Mock Interviews",
    },
  ];

  return (
    <div className="aiml-container">
      {/* Header */}
      <div className="aiml-header">
        <h2 className="aiml-title">AI / ML Developer</h2>
        <p className="aiml-tagline">Build Smart Systems with Real-Time AI Projects</p>
      </div>

      {/* Mentors */}
      <div className="aiml-section">
        <h3 className="section-label">Your Mentors</h3>
        <div className="aiml-faculty-row">
          <div className="aiml-faculty-item">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Mentor"
            />
            <h5>ManiSai</h5>
            <p>
              Senior AI/ML Trainer <br />
              <span>5+ Years Experience</span>
            </p>
          </div>

          {/* <div className="aiml-faculty-item">
            <img
              src="https://dko97fmntp7zh.cloudfront.net/a6a3cabc-5790-4d0d-ac77-bad673436e38_woman-profile-icon-circle-shape-gray-background-180703631.webp"
              alt="Mentor"
            />
            <h5>Anushka Jain</h5>
            <p>
              ML Engineer <br />
              <span>4+ Years Experience</span>
            </p>
          </div> */}

          <div className="aiml-faculty-item">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1995/1995574.png"
              alt="Mentor"
            />
            <h5>Saisree</h5>
            <p>
              Soft Skills Trainer <br />
              <span>5+ Years Experience</span>
            </p>
          </div>
        </div>
      </div>

      {/* Daily Structure */}
      <div className="aiml-section">
        <h3 className="section-label">Daily Real-Time Training (3 Hours)</h3>
        <div className="aiml-daily-structure">
          <div className="aiml-daily-box">
            <strong>1 Hour</strong>
            <p>Python + Data Handling (NumPy/Pandas)</p>
          </div>
          <div className="aiml-daily-box">
            <strong>1 Hour</strong>
            <p>Machine Learning + Model Building</p>
          </div>
          <div className="aiml-daily-box">
            <strong>1 Hour</strong>
            <p>Project Practice + Interview Preparation</p>
          </div>
        </div>
      </div>

      {/* Roadmap */}
      <div className="aiml-section">
        <h3 className="section-label">Learning Roadmap</h3>
        <div className="aiml-timeline">
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

      {/* AI/ML Work Style */}
      <div className="aiml-workstyle-box">
        <h4>🤖 Learn the AI/ML Industry Workflow</h4>
        <ul>
          <li>Real-time datasets and hands-on data preprocessing</li>
          <li>Model building with Scikit-learn and Deep Learning frameworks</li>
          <li>Training, validation, evaluation & optimization techniques</li>
          <li>Building AI solutions using NLP + Computer Vision</li>
          <li>Deploy ML models as APIs using Flask/FastAPI</li>
        </ul>
      </div>

      {/* Career Outcomes */}
      <div className="aiml-outcome-box">
        <h4>🎯 Career Outcomes</h4>
        <p>
          Job-ready for: AI Developer, ML Engineer, Data Scientist (Entry),
          NLP Engineer (Junior), Computer Vision Engineer (Junior), or AI API Developer
          with real-world projects and placement support.
        </p>
      </div>

      {/* Footer Features */}
      <div className="aiml-feature-footer">
        <div className="feature-item">
          <span className="icon">💬</span>
          <p>24/7 Expert Support</p>
        </div>
        <div className="feature-item">
          <span className="icon">🧠</span>
          <p>Real AI Projects</p>
        </div>
        <div className="feature-item">
          <span className="icon">📈</span>
          <p>Placement & Mock Interviews</p>
        </div>
      </div>

      {/* Plans */}
      <div className="plan-grid">
        <div className="basicplan-box">
          <h4>Basic Plan</h4>
          <b>25,000.00</b>
          <br />
          <p className="eligible">
            <b>*</b> You are not eligible for placement drives
          </p>
        </div>

        <div className="afterplaced-box">
          <h4>Pay After Placement Plan</h4>
          <p className="eligible">
            Pay basic amount first. Then pay <b>50,000.00</b> after you got placed
            through us.
          </p>
        </div>
      </div>

      <button className="aiml-enroll-btn" onClick={openWhatsApp}>
        Enroll Now
      </button>
    </div>
  );
};

export default CurriculamAIML;
