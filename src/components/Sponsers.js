import React from "react";
import "../css/Sponsers.css"
const Sponsers = () => {
  return (
    <div className="sponsers-container">
      <h4 className="sponsers-heading">BACKED BY THE BEST</h4>
      <div className="sponsers">
        <div>
          <img
            className="sequioa"
            src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/sequioa-image%403x.png"
            alt="sequioa"
          />
        </div>
        <div>
          <img
            className="polychain"
            src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/polychain-capital%403x.png"
            alt="polychain"
          />
        </div>
        <div>
          <img
            className="consensys"
            src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/consensys-logo%403x.png"
            alt="consensys"
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsers;
