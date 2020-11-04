import React, { useState } from "react";
import "../css/NavComponents/Nav.css";
import Company from "../components/NavComponent/Company";
import Learn from "../components/NavComponent/Learn";
import Legel from "../components/NavComponent/Legel";

const Nav = (props) => {
  const [navbar, setNavabr] = useState(false);
  const addShadow = () => {
    if (window.scrollY >= 64) {
      setNavabr(true);
    } else {
      setNavabr(false);
    }
  };
  window.addEventListener("scroll", addShadow);
  return (
    <div className={navbar ? 'nav-container active' : 'nav-container'}>
      <input type="checkbox" id="nav-check" />
      <div className="nav-logo">
        <img
          src="https://juno-public.s3-us-west-1.amazonaws.com/on-juno.png"
          className="app-logo"
          alt="logo"
        />
      </div>
      {props.sideBar ? (
        <div onClick={props.openSideBar} className="close">
          x
        </div>
      ) : (
        <div onClick={props.openSideBar} className="nav-btn">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
      )}

      <div className="home-link">
        <a href="/">Home</a>
      </div>

      <div className="nav">
        <Company onCompanyClick={props.onCompanyClick} />
        <Learn onLearnClick={props.onLearnClick} />
        <Legel onLegelClick={props.onLegelClick} />
      </div>
      <div className="register">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Signup</button>
      </div>
    </div>
  );
};

export default Nav;

// handleClickOutside = (event) => {
//   const domNode = ReactDOM.findDOMNode(this);

//   if (!domNode || !domNode.contains(event.target)) {
//     if (clickedOnCompany) {
//       this.setState({
//         clickedOnCompany: false,
//       })
//     }
//     else if (clickedOnLearn) {
//       this.setState({
//         clickedOnLearn: false,
//       })
//     }
//     else{
//       this.setState({
//         clickedOnLegel: false,
//       })
//     }
//   }
// };
