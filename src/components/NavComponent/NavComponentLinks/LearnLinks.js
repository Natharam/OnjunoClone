import React from "react";
import '../../../css/NavComponents/NavComponentLinks/LearnLinks.css';

const Learn = () => {
  return (
    <div  className="learn">
      <a 
        className="element1"
        href="https://github.com/Natharam" 
        target="-blank" 
        rel="noopener noreferrer"
      >
        Github
      </a>
      <a
        className="element2"
        href="https://www.linkedin.com/in/n-r-j-9b1abb131/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      <a
        className="element3"
        href="https://www.instagram.com/jaipal_natha_45_/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Instagram
      </a>
    </div>
  );
};

export default Learn;
