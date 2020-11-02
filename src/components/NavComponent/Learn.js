import React from 'react';
import "../../css/NavComponents/Learn.css";

const Learn = (props) => {
    return (
        <div ref={props.learnWrapperRef} className="learn-links">
          <p onClick={() => props.onLearnClick()}>
            Learn
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -6 20 20"
                className="company-svg"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
              </svg>
            </span>
          </p>
        </div>
    )
}

export default Learn;