import React, {useEffect} from "react";
import '../../../css/NavComponents/NavComponentLinks/LearnLinks.css';

const Learn = (props) => {
  useEffect(() => {
    document.addEventListener("keydown", props.handleHideComponent, true);
    document.addEventListener("click", props.handleClickOutside, true);
    return () => {
      document.removeEventListener("keydown", props.handleHideComponent, true);
      document.removeEventListener("click", props.handleClickOutside, true);
    };
  }, [props.learn]);
  return (
    <div ref={props.myRef}  className="learn">
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
