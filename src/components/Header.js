import React from "react";
import "../css/Header.css";

const header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <div className="logo">
          <img
            src="https://juno-public.s3-us-west-1.amazonaws.com/on-juno.png"
            className="app-logo"
            alt="logo"
          />
        </div>

        <h3 className="home-link">Home</h3>

        <div className="links">
          <div>
            <a href="/" className="company">
              Company
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              className="company-svg"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
            </svg>
          </div>

          <div>
            <a href="/" className="learn">
              Learn
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              className="learn-svg"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
            </svg>
          </div>

          <div>
            <a href="/" className="legel">
              Legel
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              className="legel-svg"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
            </svg>
          </div>
        </div>

        <div className="register">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Signup</button>
        </div>
      </div>
    </div>
  );
}

export default header;
