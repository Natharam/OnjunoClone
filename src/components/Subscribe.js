import React, { Component } from "react";
import "../css/Subscribe.css";
class Subscribe extends Component {
  render() {
    return (
      <div className="container subscribe">
        <div className="subscribe-content">
          <div>
            <h1 className="subscribe-heading">
              The Most Powerful Checking Account
            </h1>
            <p className="subscribe-para">
              Our checking account gives you higher returns
              <br />
              than a savings account with no hidden fees.
            </p>
          </div>
          <div className="input-fields">
            <img
              className="email-icon"
              src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/svg/email.svg"
              alt="email"
            />
            <input
              className="email-input"
              type="email"
              placeholder="Enter Email Address"
            />
            <button className="join-now" type="submit">
              Join Now
            </button>
          </div>
          <div className="spots">
            <img
              src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/createaccount-homeaddress-flag%403x.png"
              alt="flag"
              className="flag"
            />
            <p className="spot">277 spots left for Priority Access</p>
          </div>
          <div className="services">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 69 28"
              className="fdic"
            >
              <path
                fill="#036"
                d="M7.36 27.174H0V.113h15.14v7.073H7.36v4.38h7.33v7.075H7.36v8.533zM39.31 13.63C39.31 1.236 28.18.114 23.572.114h-7.419v27.036h7.42L23.56 20.1V7.075c4.564 0 8.443 1.684 8.443 6.512 0 4.828-3.879 6.512-8.443 6.512l.011 7.05c5.735 0 15.74-1.097 15.74-13.519zM40.585.056H47.945V27.175H40.585zM62.98 20.016c-3.535 0-6.46-2.878-6.46-6.407s2.925-6.407 6.46-6.407c3.224 0 4.91 1.712 6.02 3.968V1.46S65.741 0 62.704 0C55.96 0 48.651 6.197 48.651 13.61c0 9.074 6.97 13.608 14.053 13.608 3.036 0 6.296-1.459 6.296-1.459v-9.625c-1.329 2.288-2.813 3.882-6.02 3.882z"
              ></path>
            </svg>
            <p className="banking">
              Banking Services Provided By
              <br />
              Evolve Bank & Trust; Member FDIC
            </p>
          </div>
        </div>
        <div className="subsribe-img">
          <img
            className="juno-card"
            src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/juno-mobile-app%403x.png"
            alt="Juno-Card"
          />
        </div>
      </div>
    );
  }
}

export default Subscribe;
