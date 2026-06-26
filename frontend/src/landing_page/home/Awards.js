import React from "react";

function Awards() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">

        {/* Left Image */}
        <div className="col-lg-6 col-md-12 text-center mb-5 mb-lg-0">
          <img
            src="media/images/largestBroker.svg"
            alt="Largest Broker"
            className="img-fluid"
          />
        </div>

        {/* Right Content */}
        <div className="col-lg-6 col-md-12">
          <h1 className="fw-bold mb-4">
            Largest stock broker in India
          </h1>

          <p className="mb-4">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          <div className="row">
            <div className="col-6">
              <ul>
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>

            <div className="col-6">
              <ul>
                <li>Stocks & IPO</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Govt. Securities</li>
              </ul>
            </div>
          </div>

          <div className="text-center text-lg-start mt-4">
            <img
              src="media/images/pressLogos.png"
              alt="Press Logos"
              className="img-fluid"
              style={{ maxWidth: "90%" }}
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Awards;