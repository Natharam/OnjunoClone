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
import PromotOffer from './components/PromotOffer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      clickedOnCompany: false,
      clickedOnLearn: false,
      clickedOnLegel: false,
      sideBar: false
    };
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
    })
  }

  render() {
    return (
      <div className="container App">
        <Nav
          onCompanyClick={this.onCompanyClick}
          onLearnClick={this.onLearnClick}
          onLegelClick={this.onLegelClick}
          openSideBar={this.openSideBar}
          sideBar={this.state.sideBar}
        />
        {this.state.clickedOnCompany ? <CompanyLinks company={this.state.clickedOnCompany}/> : null}
        {this.state.clickedOnLearn ? <LearnLinks learn={this.state.clickedOnLearn}/> : null}
        {this.state.clickedOnLegel ? <LegelLinks legel={this.state.clickedOnLegel}/> : null}
        {this.state.sideBar && <SideBar />}
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
