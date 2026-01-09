import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const courses = [
    {
      id: 1,
      title: "Full-Stack Java Developer",
      price: "₹20,000",
      tag: "Best Seller",
      icons: ["java", "spring", "sql", "react", "angular", "html", "css"],
      route: "/curriculum/fullstack-java",
    },
    {
      id: 2,
      title: "ReactJs Developer",
      price: "₹15,000",
      tag: "Trending",
      icons: ["react", "javascript", "html", "css"],
      route: "/curriculum/react",
    },
    {
      id: 3,
      title: "SQL Developer",
      price: "₹15,000",
      tag: "New",
      icons: ["mysql", "sql", "postgresql"],
      route: "/curriculum/sql",
    },
  ];

  const successStories = [
    {
      name: "Ravi Teja",
      qualification: "B.Tech (CSE)",
      company: "NicheSolv",
      lpa: "3.5 LPA",
      img: "https://dko97fmntp7zh.cloudfront.net/a203c99a-394f-4506-b1d2-c648e63af6ff_IMG_20260107_110919.png",
    },
    {
      name: "Priyanka",
      qualification: "MCA",
      company: "Clarion technologies",
      lpa: "3.2 LPA",
      img: "https://dko97fmntp7zh.cloudfront.net/a7a7e379-f8a5-4644-944d-467b6df9fcad_IMG_20260107_110950.png",
    },
    {
      name: "Karthik Reddy",
      qualification: "B.Sc Computers",
      company: "Clarion technologies",
      lpa: "4 LPA",
      img: "https://dko97fmntp7zh.cloudfront.net/6f15f6d8-5878-4aa4-a2c4-71e896a77200_IMG_20260107_110717.png",
    },
    {
      name: "Raju Goud",
      qualification: "MCA",
      company: "Clarion technologies",
      lpa: "3.2 LPA",
      img: "https://dko97fmntp7zh.cloudfront.net/5fd4d714-ed73-4df3-8705-2be77ca894ec_IMG_20260107_110608.png",
    },
    {
      name: "Shanmukhi",
      qualification: "MCA",
      company: "Sure-IT Solutions",
      lpa: "3 LPA",
      img: "https://dko97fmntp7zh.cloudfront.net/a42c7370-a30c-4a96-bd08-df688d840538_IMG_20260107_110751.png",
    },
    {
      name: "Soujanya",
      qualification: "B.Tech (ECE)",
      company: "NicheSolv",
      lpa: "5 LPA",
      img: "https://dko97fmntp7zh.cloudfront.net/f9cf0e04-1596-4670-b140-9e1fd9c9035b_IMG_20260109_172447.png",
    },
    {
      name: "Santhosh Kumar",
      qualification: "B.Sc Computers",
      company: "Sure-IT Solutions",
      lpa: "3.5 LPA",
      img: "https://dko97fmntp7zh.cloudfront.net/6051529d-a10b-429c-85bb-9f49d3c27fae_IMG_20260109_172414.png",
    },
  ];

  return (
    <div className="home-container">
      <main className="main-content">
        {/* Navbar */}
        <nav className="navbar">
          <img
            src="https://dko97fmntp7zh.cloudfront.net/30f06144-2aac-43ea-a966-d8ee0b9fc7a0_Gemini_Generated_Image_i4yx1qi4yx1qi4yx.png"
            alt="logo"
          />
          <div className="logo">
            CodingStall<span>.</span>
          </div>
        </nav>

        {/* Hero */}
        <section className="hero">
          <h2>
            Stop Learning. <br />
            <span className="highlight">Start Getting Hired.</span>
          </h2>
          <p>
            A purely online, industry-driven training platform designed to turn
            learners into job-ready software developers.
          </p>
          <div className="hero-btns">
            <button
              className="primary-btn"
              onClick={() => navigate("/courses")}
            >
              Explore Courses
            </button>
          </div>
        </section>

        {/* Platform Highlights */}
        <section className="platform-highlights">
          <div className="highlight-box">💻 100% Online Live Training</div>
          <div className="highlight-box">🤝 150+ Hiring Partners</div>
          <div className="highlight-box">
            ⏱ 1100+ Hours of Training Delivered
          </div>
          <div className="highlight-box">🎯 Placement-Focused Curriculum</div>
        </section>

        {/* Pricing Plans */}
        <section className="pricing-section">
          <h2>Flexible Learning Plans</h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Basic Plan</h3>
              <ul className="feature-list">
                <li>
                  <span className="green-dot"></span> 100% Online Live Training
                </li>
                <li>
                  <span className="green-dot"></span> Daily Hands-on Practice
                </li>
                <li>
                  <span className="green-dot"></span> Real-Time Industry
                  Projects
                </li>
                <li>
                  <span className="green-dot"></span> Weekly Mock Interviews
                </li>
                <li>
                  <span className="green-dot"></span> Basic to Advanced Study
                  Materials
                </li>
                <li>
                  <span className="green-dot"></span> Mentor-Led Doubt
                  Resolution
                </li>
                <li>
                  <span className="green-dot"></span> Resume & Interview
                  Preparation
                </li>
              </ul>
            </div>

            <div className="pricing-card featured">
              <h3>Pay After Placement</h3>
              <ul className="feature-list">
                <li>
                  <span className="green-dot"></span> All Basic Plan Features
                  Included
                </li>
                <li>
                  <span className="green-dot"></span> 100% Placement Assistance
                </li>
                <li>
                  <span className="green-dot"></span> Dedicated Placement Team
                  Support
                </li>
                <li>
                  <span className="green-dot"></span> Pay ₹40,000 Only After You
                  Get Placed
                </li>
                <li>
                  <span className="green-dot"></span> Placement Support Until
                  You Get a Job
                </li>
                <li>
                  <span className="green-dot"></span> Career Guidance & Mock HR
                  Rounds
                </li>
              </ul>

              <p className="price-note">
                Special plan designed for serious learners — pay after you get
                placed.
              </p>
            </div>
          </div>
        </section>

        {/* Trial & Refund */}
        <section className="trial-section">
          <h2>Risk-Free Trial</h2>
          <p>
            Pay <strong>₹5,000</strong> and attend the first{" "}
            <strong>5 days</strong> of live classes.
            <br />
            If you choose not to continue within 5 days, your amount will be
            <strong> fully refunded</strong>.
            <br />
            Continue the course by paying the remaining Basic Plan fee.
          </p>
        </section>

        {/* Courses */}
        <section id="courses" className="course-section">
          <div className="section-header">
            <h2>Our Featured Courses</h2>
            <p>Pick a path and start your journey today.</p>
          </div>

          <div className="course-grid">
            {courses.map((course) => (
              <div key={course.id} className="course-card">
                <div className="course-thumb">
                  <div className="tech-icons">
                    {course.icons.map((icon, index) => (
                      <img key={index} src={`/icons/${icon}.png`} alt={icon} />
                    ))}
                  </div>
                </div>
                <div className="course-body">
                  <span className="course-tag">{course.tag}</span>
                  <h3>{course.title}</h3>

                  {/* ✅ Price at top */}
                  <div className="course-price-top">
                    <span className="price">{course.price}</span>
                    <button
                      className="enroll-btn"
                      onClick={() => navigate(course.route)}
                    >
                      View Curriculum
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Success Stories */}
        <section className="hero">
          <h2>Our Success Stories</h2>
          <div className="hero-success marquee">
            <div className="marquee-track">
              {[...successStories, ...successStories].map((student, index) => (
                <div key={index} className="hero-success-card vertical">
                  <img src={student.img} alt={student.name} />
                  <h4>{student.name}</h4>
                  <p>{student.qualification}</p>
                  <span>
                    {student.company} • {student.lpa}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
