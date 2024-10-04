import React from "react";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/footer.svg';
import navIcon4 from '../assets/img/footer1.svg';
import resume from '../assets/Prutha_Upadhyay_Resume.pdf'

export const Footer = () => {
  return (
    <footer className="ftco-footer ftco-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">About</h2>
              <p>
                Hi, I’m Prutha Upadhyay,currently in my 3rd year of studies, I am focused on leveraging my skills in Python, JAVA, and the MERN stack to build impactful projects. I’ve actively contributed to open-source projects, participated in hackathons, and I’m always eager to explore new technologies.
              </p>
              <div className="social-icon-footer">
                <a href="https://www.linkedin.com/in/prutha-upadhyay">
                  <img src={navIcon1} alt="LinkedIn" />
                </a>
                <a href="https://github.com/Prutha-Upadhyay">
                  <img src={navIcon2} alt="GitHub" />
                </a>
                <a href="mailto:pruthaupadhyay@gmail.com">
                <img src={navIcon3} alt="GitHub" />
                  
                </a>
                <a href={resume}>
                <img src={navIcon4} alt="GitHub" />
                  
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p> Made by Prutha Upadhyay </p>
          </div>
        </div>
      </div>
      {/* Loader Section */}
    </footer>
  );
};
