import React, { useState } from "react";
import "../../css/NavComponents/SideBar/SideBar.css";
import CompanyLinks from "./SidebarComponent/ComapnyLinks";
import LearnLinks from "./SidebarComponent/LearnLinks";
import LegelLinks from "./SidebarComponent/LegelLinks";

const Sidebar = () => {
  const [company, setCompany] = useState(false);
  const [learn, setLearn] = useState(false);
  const [legel, setLegel] = useState(false);

  const clickOnCompany = () => {
    setCompany(!company);
  };

  const clickOnLearn = () => {
    setLearn(!learn);
  };

  const clickOnLegel = () => {
    setLegel(!legel);
  };

  return (
    <div  className="sidebar-container">
      <div className="sidebar-links">
        <h3 className="sidebar-home-link">Home</h3>
        <ul className="other-links">
          <li className="sidebar-company"  onClick={clickOnCompany}>Company</li>
          {company && <CompanyLinks />}

          <li className="sidebar-learn" onClick={clickOnLearn}>Learn</li>
          {learn && <LearnLinks />}

          <li className="sidebar-legel" onClick={clickOnLegel}>Legel</li>
          {legel && <LegelLinks />}
        </ul>
      </div>
      <div className="sidebar-register">
        <button className="sidebar-login-btn">Login</button>
        <button className="sidebar-signup-btn">Sign-Up</button>
      </div>
    </div>
  );
};

export default Sidebar;
