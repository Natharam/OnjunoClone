import React from "react";
import "../../css/Cards/Basic.css";

const Basic = () => {
  return (
    <div className="Basic-card">
      <div className="Basic-details">
        <img
          className="juno-basic-card"
          src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/juno-basic%403x.png"
          alt="juno-black-card"
        />
        <h2 className="heading">BASIC</h2>
        <p className="interest">
          1.15%<span className="text-super">3</span>
        </p>
        <p className="cashback">
          <span>3%</span>cash back
        </p>
      </div>
      <div className="Basic-signup">
        <div className="spots">
          <p className="spot-avail">10000 Spots</p>
          <p className="spot-left">10000 spots left</p>
        </div>
        <p className="line"></p>
        <button className="signup">Comming Soon</button>
      </div>
      <div className="Basic-banifits">
        <h3 className="heading">INCLUDES</h3>
        <ul className="includes">
          <li>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 13"
                className="w-045 h-0381 object-contain"
                data-v-5602b450
              >
                <path
                  stroke="#00A86B"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 1L6 12 1 7"
                  data-v-5602b450
                ></path>
              </svg>
            </span>
            Free Debit Card
          </li>
          <li>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 13"
                className="w-045 h-0381 object-contain"
                data-v-5602b450
              >
                <path
                  stroke="#00A86B"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 1L6 12 1 7"
                  data-v-5602b450
                ></path>
              </svg>
            </span>
            1.15%<span className="text-super">3</span> Bonus Rate Checking
            Account
          </li>
          <li>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 13"
                className="w-045 h-0381 object-contain"
                data-v-5602b450
              >
                <path
                  stroke="#00A86B"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 1L6 12 1 7"
                  data-v-5602b450
                ></path>
              </svg>
            </span>
            3% Cash back on brands you love
          </li>
          <li>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 13"
                className="w-045 h-0381 object-contain"
                data-v-5602b450
              >
                <path
                  stroke="#00A86B"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 1L6 12 1 7"
                  data-v-5602b450
                ></path>
              </svg>
            </span>
            Free Cash Withdrawals
          </li>
          <li>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 13"
                className="w-045 h-0381 object-contain"
                data-v-5602b450
              >
                <path
                  stroke="#00A86B"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 1L6 12 1 7"
                  data-v-5602b450
                ></path>
              </svg>
            </span>
            Phone & Chat Support
          </li>
        </ul>
        <p className="details">
          Fund your account with a minimum opening deposit of{" "}
          <strong>$0</strong>.
        </p>
      </div>
      <div className="Basic-availability">
        <div className="icon">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="w-6 h-6 object-contain"
              data-v-5602b450
            >
              <path
                fill="#B3B3B3"
                d="M11 9h4c.265 0 .52-.105.707-.293C15.895 8.52 16 8.265 16 8c0-.265-.105-.52-.293-.707C15.52 7.105 15.265 7 15 7h-2V6c0-.265-.105-.52-.293-.707C12.52 5.105 12.265 5 12 5c-.265 0-.52.105-.707.293C11.105 5.48 11 5.735 11 6v1c-.796 0-1.559.316-2.121.879C8.316 8.44 8 9.204 8 10s.316 1.559.879 2.121C9.44 12.684 10.204 13 11 13h2c.265 0 .52.105.707.293.188.187.293.442.293.707 0 .265-.105.52-.293.707-.187.188-.442.293-.707.293H9c-.265 0-.52.105-.707.293C8.105 15.48 8 15.735 8 16c0 .265.105.52.293.707.187.188.442.293.707.293h2v1c0 .265.105.52.293.707.187.188.442.293.707.293.265 0 .52-.105.707-.293.188-.187.293-.442.293-.707v-1c.796 0 1.559-.316 2.121-.879.563-.562.879-1.325.879-2.121s-.316-1.559-.879-2.121C14.56 11.316 13.796 11 13 11h-2c-.265 0-.52-.105-.707-.293C10.105 10.52 10 10.265 10 10c0-.265.105-.52.293-.707C10.48 9.105 10.735 9 11 9zm1-8c-2.176 0-4.302.645-6.111 1.854-1.81 1.209-3.22 2.926-4.052 4.936-.832 2.01-1.05 4.222-.626 6.356.425 2.134 1.472 4.094 3.01 5.632 1.54 1.539 3.5 2.586 5.633 3.01 2.134.425 4.346.207 6.355-.625 2.01-.833 3.729-2.243 4.937-4.052C22.355 16.302 23 14.176 23 12c0-2.917-1.159-5.715-3.222-7.778C17.715 2.159 14.918 1 12 1zm0 20c-1.78 0-3.52-.528-5-1.517-1.48-.989-2.634-2.394-3.315-4.039-.681-1.644-.86-3.454-.512-5.2.347-1.746 1.204-3.35 2.463-4.608 1.259-1.259 2.862-2.116 4.608-2.463 1.746-.347 3.556-.17 5.2.512 1.645.681 3.05 1.835 4.04 3.315C20.471 8.48 21 10.22 21 12c0 2.387-.948 4.676-2.636 6.364C16.676 20.052 14.387 21 12 21z"
                data-v-5602b450
              ></path>
            </svg>
          </span>
        </div>
        <div className="Basic-membership">
          <p className="membership-fee">No Membership Fee</p>
          <p className="saving">Free Forever!</p>
        </div>
      </div>
    </div>
  );
};

export default Basic;
