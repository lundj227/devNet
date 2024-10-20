// Landing.jsx

import React, { useEffect, useState } from "react";
import "../styles/Landing.css";
import {
  FaUser,
  FaUserPlus,
  FaRocket,
  FaShieldAlt,
  FaUsers,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaQuoteLeft,
  FaQuoteRight,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Landing() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`landingContainer ${darkMode ? "dark" : "light"}`}>
      {/* Header */}
      <header className="header">
        <div className="header-left">
          <a href="/" className="logo">
            DevNet
          </a>
        </div>
        <div className="header-center">
          <nav>
            <ul className="navList">
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header-right">
          <button
            className="modeToggle"
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <Link to="/login">
            <button className="loginButton" aria-label="Log In">
              <FaUser /> Log In
            </button>
          </Link>
          <Link to="/signup">
            <button className="signUpButton" aria-label="Sign Up">
              <FaUserPlus /> Sign Up
            </button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="heroContent" data-aos="fade-up">
          <h1 className="heroMainText">Welcome to DevNet</h1>
          <p className="heroSubText">The Networkers Network</p>
        </div>
        <div className="demoPicture" data-aos="fade-up" data-aos-delay="700">
          {/* Placeholder for Demo Picture */}
          <div className="placeholder">Demo Picture Placeholder</div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <h2 className="featuresTitle">Why Choose DevNet?</h2>
        <div className="featuresGrid">
          <div className="featureCard" data-aos="fade-up">
            <FaRocket className="featureIcon" />
            <h3>Fast Performance</h3>
            <p>Experience lightning-fast networking capabilities.</p>
          </div>
          <div className="featureCard" data-aos="fade-up" data-aos-delay="200">
            <FaShieldAlt className="featureIcon" />
            <h3>Secure</h3>
            <p>Top-notch security features to protect your data.</p>
          </div>
          <div className="featureCard" data-aos="fade-up" data-aos-delay="400">
            <FaUsers className="featureIcon" />
            <h3>User Friendly</h3>
            <p>Intuitive design for a seamless user experience.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials" id="testimonials">
        <h2 className="testimonialsTitle">What Our Users Say</h2>
        <div className="testimonialsGrid">
          <div className="testimonialCard" data-aos="fade-up">
            <FaQuoteLeft className="quoteIcon" />
            <p>
              "It has never been so easy for me to connect and share my projects
              with other people who are as passionate about tech as I am."
            </p>
            <FaQuoteRight className="quoteIcon" />
            <h4>Jane Doe</h4>
            <span>Software Engineer</span>
          </div>
          <div className="testimonialCard" data-aos="fade-up">
            <FaQuoteLeft className="quoteIcon" />
            <p>
              "DevNet has revolutionized the way I network online. The platform
              is intuitive and highly effective."
            </p>
            <br />
            <FaQuoteRight className="quoteIcon" />
            <h4>Leroy Jenkins</h4>
            <span>Software Engineer</span>
          </div>
          <div
            className="testimonialCard"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <FaQuoteLeft className="quoteIcon" />
            <p>
              "The security features on DevNet give me peace of mind knowing my
              data is protected."
            </p>
            <br />
            <FaQuoteRight className="quoteIcon" />
            <h4>John Smith</h4>
            <span>Network Administrator</span>
          </div>
          {/* Add more testimonials as needed */}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footerContent">
          <h4 className="footerLogo">DevNet</h4>
          <p>&copy; {new Date().getFullYear()} DevNet. All rights reserved.</p>
          <div className="socialIcons">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
