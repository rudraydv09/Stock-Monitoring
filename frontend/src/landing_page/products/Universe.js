import React from "react";

function Universe() {
  return (
    <div className="container py-5">
      {/* Heading */}
      <div className="row text-center mb-5">
        <div className="col-12">
          <h1 className="fw-bold">The Zerodha Universe</h1>

          <p className="text-muted mt-3">
            Extend your trading and investment experience even further with our
            partner platforms.
          </p>
        </div>
      </div>

      {/* Partner Cards */}
      <div className="row text-center g-4">

        <div className="col-lg-4 col-md-6 col-12">
          <img
            src="media/images/smallcaseLogo.png"
            alt="Smallcase"
            className="img-fluid mb-4"
            style={{ maxWidth: "180px" }}
          />
          <p className="text-muted">
            Thematic investment platform
          </p>
        </div>

        <div className="col-lg-4 col-md-6 col-12">
          <img
            src="media/images/sensibullLogo.svg"
            alt="Sensibull"
            className="img-fluid mb-4"
            style={{ maxWidth: "180px" }}
          />
          <p className="text-muted">
            Algo &amp; strategy platform
          </p>
        </div>

        <div className="col-lg-4 col-md-6 col-12">
          <img
            src="media/images/streakLogo.png"
            alt="Streak"
            className="img-fluid mb-4"
            style={{ maxWidth: "180px" }}
          />
          <p className="text-muted">
            Options trading platform
          </p>
        </div>

        <div className="col-lg-4 col-md-6 col-12">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt="Zerodha Fund House"
            className="img-fluid mb-4"
            style={{ maxWidth: "180px" }}
          />
          <p className="text-muted">
            Asset management
          </p>
        </div>

        <div className="col-lg-4 col-md-6 col-12">
          <img
            src="media/images/goldenpiLogo.png"
            alt="GoldenPi"
            className="img-fluid mb-4"
            style={{ maxWidth: "180px" }}
          />
          <p className="text-muted">
            Bonds trading platform
          </p>
        </div>

        <div className="col-lg-4 col-md-6 col-12">
          <img
            src="media/images/dittoLogo.png"
            alt="Ditto"
            className="img-fluid mb-4"
            style={{ maxWidth: "180px" }}
          />
          <p className="text-muted">
            Insurance
          </p>
        </div>

      </div>

      {/* Button */}
      <div className="text-center mt-5">
        <button
          className="btn btn-primary btn-lg"
          style={{
            width: "250px",
            maxWidth: "90%",
          }}
        >
          Dashboard
        </button>
      </div>
    </div>
  );
}

export default Universe;