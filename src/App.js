import React, { Component } from "react";
import "./App.css";
import Subscribe from "./components/Subscribe";
import Sponsers from "./components/Sponsers";
import Saving from "./components/Saving";
import Promotion from "./components/Promotion";
import Cards from "./containers/Cards";
import Nav from "./components/Nav";
import CompanyLinks from "./components/NavComponent/NavComponentLinks/CompanyLinks";
import LearnLinks from "./components/NavComponent/NavComponentLinks/LearnLinks";
import LegelLinks from "./components/NavComponent/NavComponentLinks/LegelLinks";
import SideBar from "./components/Sidebar/Sidebar";
import PromotOffer from "./components/PromotOffer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      clickedOnCompany: false,
      clickedOnLearn: false,
      clickedOnLegel: false,
      sideBar: false,
    };
    this.myRef = React.createRef();
  }

  onCompanyClick = () => {
    if (this.state.clickedOnLearn || this.state.clickedOnLegel) {
      this.setState({
        clickedOnLearn: false,
        clickedOnLegel: false,
        clickedOnCompany: !this.state.clickedOnCompany,
      });
    } else
      this.setState({
        clickedOnCompany: !this.state.clickedOnCompany,
      });
  };

  onLearnClick = () => {
    if (this.state.clickedOnCompany || this.state.clickedOnLegel) {
      this.setState({
        clickedOnCompany: false,
        clickedOnLegel: false,
        clickedOnLearn: !this.state.clickedOnLearn,
      });
    } else
      this.setState({
        clickedOnLearn: !this.state.clickedOnLearn,
      });
  };

  onLegelClick = () => {
    if (this.state.clickedOnCompany || this.state.clickedOnLearn) {
      this.setState({
        clickedOnCompany: false,
        clickedOnLearn: false,
        clickedOnLegel: !this.state.clickedOnLegel,
      });
    } else
      this.setState({
        clickedOnLegel: !this.state.clickedOnLegel,
      });
  };

  openSideBar = () => {
    this.setState({
      sideBar: !this.state.sideBar
    });
  };

  handleHideComponent = (event) => {
    if (event.key === "Escape") {
      if (this.state.clickedOnCompany) {
        this.setState({
          clickedOnCompany: false,
        });
      } else if (this.state.clickedOnLearn) {
        this.setState({
          clickedOnLearn: false,
        });
      } else if (this.state.clickedOnLegel) {
        this.setState({
          clickedOnLegel: false,
        });
      } else if (this.state.sideBar) {
        this.setState({
          sideBar: false,
        });
      }
    }
  };

  handleClickOutside = (event) => {
    console.log(event.target);
    if (this.myRef.current && !this.myRef.current.contains(event.target)) {
      if (this.state.clickedOnCompany) {
        this.setState({
          clickedOnCompany: false,
        });
      } else if (this.state.clickedOnLearn) {
        this.setState({
          clickedOnLearn: false,
        });
      } else if (this.state.clickedOnLegel) {
        this.setState({
          clickedOnLegel: false,
        });
      }
    }
  };

  render() {
    return (
      <div className="container App">
        <Nav
          myRef={this.myRef}
          onCompanyClick={this.onCompanyClick}
          onLearnClick={this.onLearnClick}
          onLegelClick={this.onLegelClick}
          openSideBar={this.openSideBar}
          sideBar={this.state.sideBar}
        />
        {this.state.clickedOnCompany ? (
          <CompanyLinks
            myRef={this.myRef}
            company={this.state.clickedOnCompany}
            handleHideComponent={this.handleHideComponent}
            handleClickOutside={this.handleClickOutside}
          />
        ) : null}
        {this.state.clickedOnLearn ? (
          <LearnLinks
            myRef={this.myRef}
            learn={this.state.clickedOnLearn}
            handleHideComponent={this.handleHideComponent}
            handleClickOutside={this.handleClickOutside}
          />
        ) : null}
        {this.state.clickedOnLegel ? (
          <LegelLinks
            myRef={this.myRef}
            legel={this.state.clickedOnLegel}
            handleHideComponent={this.handleHideComponent}
            handleClickOutside={this.handleClickOutside}
          />
        ) : null}
        {this.state.sideBar && (
          <SideBar
            myRef={this.myRef}
            sideBar={this.state.sideBar}
            handleHideComponent={this.handleHideComponent}
            handleClickOutside={this.handleClickOutside}
          />
        )}
        <Subscribe />
        <Sponsers />
        <Saving />
        <Promotion />
        <PromotOffer />
        <Cards />
      </div>
    );
  }
}

export default App;
