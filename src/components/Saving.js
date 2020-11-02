import React from "react";
import '../css/Saving.css'
const Saving = () => {
  return (
    <div className="saving-container">
      <div className="saving-content">
        <p className="saving-heading">
          Start saving for a rainy day fund
        </p>
        <p className="saving-idea">
          Use Our Checking Account to <br />
          Achieve Your Financial Goals
        </p>
        <p className="saving-detail">
          With the latest Federal rate cut, the largest banks are offering close
          to 0% APY on their checking and savings accounts. OnJuno checking will
          earn you more than 20x the national average*. Deposits up to $250,000
          are FDIC insured through our banking partner Evolve Bank and Trust.
          Grow your idle money faster with our checking account and start saving
          towards a rainy day fund, big expense, or vacation.
        </p>
      </div>
      <div className="saving-cashback">
        <img
        className="saving-cashback-img"
          src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/svg/juno-apy-215.svg"
          alt="Cashback"
        />
      </div>
    </div>
  );
};

export default Saving;
