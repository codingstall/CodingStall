import React from "react";
import "./CoursesInfo.css";
import { useNavigate } from "react-router-dom";

const CoursesInfo = () => {
  const navigate = useNavigate();

  const skillIcons = {
    "Core Java": "https://cdn-icons-png.flaticon.com/512/226/226777.png",
    "Advance Java": "https://cdn-icons-png.flaticon.com/512/226/226777.png",
    OOPS: "https://cdn-icons-png.flaticon.com/512/1087/1087815.png",
    "Data Structures & Algorithms":
      "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
    JDBC: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
    MicroServices: "https://cdn-icons-png.flaticon.com/512/873/873120.png",
    Hibernate: "https://cdn-icons-png.flaticon.com/512/919/919853.png",
    SQL: "https://cdn-icons-png.flaticon.com/512/2772/2772128.png",
    Reactjs: "https://cdn-icons-png.flaticon.com/512/919/919851.png",
    Angular:
      "https://dko97fmntp7zh.cloudfront.net/1f64bbba-9d01-462b-bc58-43e36714317c_images (3).png",
    TypeScript: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
    JavaScript: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    Python:
      "https://dko97fmntp7zh.cloudfront.net/f1151ee8-475a-4420-b999-7fc59f1ef64e_python-logo-11609373642q9ewsev5ea.png",
    HTML5:
      "https://dko97fmntp7zh.cloudfront.net/dffe7f91-ea7d-40c8-a1e8-1070833a6f0a_HTML5_logo_and_wordmark.svg.png",
    CSS3: "https://dko97fmntp7zh.cloudfront.net/e881c19c-38f9-4851-a9ba-fbac2381975c_images (4).png",
    PostMan:
      "https://dko97fmntp7zh.cloudfront.net/603dc4d8-ea8a-4ddc-a5e2-15269a78928e_postman-tile.webp",
    "Testing & Debugging":
      "https://cdn-icons-png.flaticon.com/512/1087/1087927.png",
    "Git / GitHub": "https://cdn-icons-png.flaticon.com/512/733/733553.png",
    "Build Tools & Deployment":
      "https://cdn-icons-png.flaticon.com/512/906/906324.png",
    Spring:
      "https://dko97fmntp7zh.cloudfront.net/942224d9-86e3-4471-8dc5-928914987a32_spring-boot-logo-png-4-transparent.png",
    SpringBoot:
      "https://dko97fmntp7zh.cloudfront.net/c36efedf-7a06-4137-9f17-2c6c4ff20900_images (1).png",
    PgAdmin:
      "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
    MySql: "https://cdn-icons-png.flaticon.com/512/528/528260.png",
    AI: "https://dko97fmntp7zh.cloudfront.net/f861e98f-f215-44d6-a3ba-cb5fcecbe9fc_AI.jpg",
    ML: "https://dko97fmntp7zh.cloudfront.net/cbe0a8ea-94a8-4935-9207-d2b9e4c9877b_ML.jpg",
    TensorFlow:
      "https://dko97fmntp7zh.cloudfront.net/e2101714-442f-42c9-8a1a-23f61c6d4c89_TensorFlow.jpg",
    PyTorch:
      "https://dko97fmntp7zh.cloudfront.net/b373355f-7b68-4d5d-993d-14e54f530a7c_PyTorch.webp",
  };

  const careerPaths = [
    {
      role: "ReactJs Developer",
      route: "/curriculum/react",
      icons: ["Reactjs", "JavaScript", "HTML5", "CSS3"],
      description:
        "Building the next generation of the web with clean, modular, and interactive React components.",
      skills: [
        "React.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Testing & Debugging",
        "Git / GitHub",
        "Build Tools & Deployment",
        "Problem-Solving",
        "Communication",
        "Collaboration",
        "AI-Assisted Development",
        "Real-Time Project Based Learning",
        "Soft Skills",
        "Comprehensive Study Materials",
        "Agile Methodologies",
        "Weekly Mock tests & Interviews",
        "One-on-One Mentorship",
      ],
      outcome: "Average Salary: 3 - 8 LPA",
    },
    {
      role: "AI/ML Developer",
      route: "/curriculum/aiml",
      icons: ["Python", "AI", "ML", "TensorFlow", "PyTorch"],
      description:
        "AI is the future, and Machine Learning is the brain that powers smart applications.",
      skills: [
        "Python Programming",
        "NumPy & Pandas",
        "Statistics & Probability",
        "Exploratory Data Analysis (EDA)",
        "Data Preprocessing & Feature Engineering",
        "Machine Learning (Supervised + Unsupervised)",
        "Model Training, Evaluation & Tuning",
        "Scikit-learn",
        "Deep Learning Fundamentals",
        "Neural Networks (ANN)",
        "CNN (Image Processing)",
        "NLP (Text Processing)",
        "Transformers (HuggingFace Basics)",
        "TensorFlow / Keras",
        "PyTorch (Basics)",
        "SQL Basics for Data Handling",
        "Model Deployment (Flask/FastAPI)",
        "MLOps Basics (Git, Docker, Cloud Intro)",
        "Real-Time Projects + Mock Interviews",
        "One-on-One Mentorship",
      ],
      outcome: "Average Salary: 4 - 10 LPA",
    },
    {
      role: "AngularJs Developer",
      route: "/curriculum/angular",
      icons: ["Angular", "TypeScript", "JavaScript", "HTML5", "CSS3"],
      description:
        "Learning Angular isn't just about learning a framework; it's about learning a professional standard of engineering that is trusted by Google, banks, and the world's biggest tech companies.",
      skills: [
        "Angular.js (v17 - v19+)",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Testing & Debugging",
        "Git / GitHub",
        "Build Tools & Deployment",
        "Problem-Solving",
        "Communication",
        "Collaboration",
        "AI-Assisted Development",
        "Real-Time Project Based Learning",
        "Soft Skills",
        "Comprehensive Study Materials",
        "Agile Methodologies",
        "Weekly Mock tests & Interviews",
        "One-on-One Mentorship",
      ],
      outcome: "Average Salary: 3 - 8 LPA",
    },
    {
      role: "Java Developer",
      route: "/curriculum/java",
      icons: ["Core Java", "SQL", "Spring", "SpringBoot"],

      description:
        "Build the brains of the internet. Focus on scale, security, and speed.",
      skills: [
        "Core Java",
        "OOPS",
        "Data Structures & Algorithms",
        "Advance Java",
        "Spring",
        "SpringBoot",
        "JDBC",
        "MicroServices",
        "Hibernate",
        "SQL",
        "Testing & Debugging",
        "Git / GitHub",
        "Build Tools & Deployment",
        "Problem-Solving",
        "Communication",
        "Collaboration",
        "AI-Assisted Development",
        "Real-Time Project Based Learning",
        "Soft Skills",
        "Comprehensive Study Materials",
        "Agile Methodologies",
        "Weekly Mock tests & Interviews",
        "One-on-One Mentorship",
      ],
      outcome: "Average Salary: 3.2 - 7 LPA",
    },
    {
      role: "Full-Stack Java Developer",
      route: "/curriculum/fullstack-java",
      icons: [
        "Core Java",
        "Spring",
        "SpringBoot",
        "Reactjs",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
      ],
      description:
        "The complete package. Handle everything from database to deployment.",
      skills: [
        "Core Java",
        "OOPS",
        "Data Structures & Algorithms",
        "Advance Java",
        "Spring",
        "SpringBoot",
        "JDBC",
        "MicroServices",
        "Hibernate",
        "SQL",
        "React.js",
        "Angular.js (v17 - v19+)",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "PostMan",
        "Testing & Debugging",
        "Git / GitHub",
        "Build Tools & Deployment",
        "Problem-Solving",
        "Communication",
        "Collaboration",
        "AI-Assisted Development",
        "Real-Time Project Based Learning",
        "Soft Skills",
        "Comprehensive Study Materials",
        "Agile Methodologies",
        "Weekly Mock tests & Interviews",
        "One-on-One Mentorship",
      ],
      outcome: "Average Salary: 3 - 8 LPA",
    },
    {
      role: "SQL Developer",
      route: "/curriculum/sql",
      icons: ["SQL", "PostMan", "PgAdmin", "MySql"],
      description:
        "Data is the new oil, and SQL is the engine that refines it.",
      skills: [
        "MySQL",
        "DDL & DML & DTL & DQL",
        "PostgreSQL",
        "PostMan",
        "Pg-Admin & WorkBench",
        "Testing & Debugging",
        "Build Tools & Deployment",
        "Problem-Solving",
        "Communication",
        "Collaboration",
        "Query Optimizing",
        "Query Creation",
        "AI-Assisted Query Building",
        "Real-Time Project Based Learning",
        "Soft Skills",
        "Comprehensive Study Materials",
        "Agile Methodologies",
        "Weekly Mock tests & Interviews",
        "One-on-One Mentorship",
      ],
      outcome: "Average Salary: 3 - 7 LPA",
    },
    {
      role: "Full-Stack Python Developer",
      route: "/curriculum/fullstack-python",
      icons: ["Python", "Reactjs", "TypeScript", "JavaScript", "HTML5", "CSS3"],
      description:
        "Design and build scalable, secure, and high-performance applications using Python. Work across backend development, APIs, databases, and cloud deployment with real-world, industry-driven projects.",
      skills: [
        "Python (Core & Advanced)",
        // "OOPS & Design Patterns",
        // "Data Structures & Algorithms",
        "Django",
        "Flask",
        "FastAPI",
        // "RESTful API Development",
        // "ORM (Django ORM / SQLAlchemy)",
        // "SQL (MySQL / PostgreSQL)",
        "NoSQL (MongoDB)",
        // "Authentication & Authorization (JWT / OAuth)",
        // "Microservices Architecture",
        // "Asynchronous Programming",
        "Caching (Redis)",
        // "Message Queues (RabbitMQ / Kafka Basics)",
        "Unit Testing (PyTest)",
        // "Debugging & Performance Optimization",
        "Git / GitHub",
        "CI/CD Pipelines",
        // "Docker & Containerization",
        "Cloud Basics (AWS / Azure)",
        "Linux & Server Management",
        "API Testing (Postman)",
        "Build Tools & Deployment",
        "Problem-Solving",
        "Communication Skills",
        "Team Collaboration",
        "AI-Assisted Development",
        "Real-Time Project Based Learning",
        "Agile & Scrum Methodologies",
        "Weekly Mock Tests & Interviews",
        "One-on-One Mentorship",
      ],
      outcome: "Average Salary: 3 - 8 LPA",
    },
  ];

  return (
    <div className="info-container">
      <header className="info-header">
        <button className="back-btn" onClick={() => window.history.back()}>
          ← Back to Home
        </button>
        <h1>
          Choose Your <span className="highlight">Career Path</span>
        </h1>
        <p>
          We don't just teach coding; we train you for specific industry roles.
        </p>
      </header>

      <div className="roles-grid">
        {careerPaths.map((path, index) => (
          <div key={index} className="role-card">
            <div className="role-icon-group">
              {path.icons.map(
                (iconName, i) =>
                  skillIcons[iconName] && (
                    <img key={i} src={skillIcons[iconName]} alt={iconName} />
                  ),
              )}
            </div>

            <h3>{path.role}</h3>
            <p className="role-desc">{path.description}</p>

            <div className="skills-tag-container">
              {path.skills.map((skill, i) => (
                <span key={i} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>

            <div className="role-footer">
              <span className="outcome-text">{path.outcome}</span>
              <button
                className="view-details-btn"
                onClick={() => navigate(path.route)}
              >
                View Curriculum
              </button>
            </div>
          </div>
        ))}
      </div>

      <section className="why-choose-us">
        <h2>What's included in every path?</h2>
        <div className="features-row">
          <div className="feature-item">
            <span>✅</span> 1-on-1 Mentorship
          </div>
          <div className="feature-item">
            <span>✅</span> Real-world Project Based Learning
          </div>
          <div className="feature-item">
            <span>✅</span> Everyday Q & A Sessions
          </div>
          <div className="feature-item">
            <span>✅</span> Weekly Group Discussions
          </div>
          <div className="feature-item">
            <span>✅</span> Resume & Portfolio Review
          </div>
          <div className="feature-item">
            <span>✅</span> Weekly Mock Interviews
          </div>
          <div className="feature-item">
            <span>✅</span> Free Internship Opportunity.
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesInfo;
