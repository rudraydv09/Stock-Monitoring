import React from "react";

function Education() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">

        {/* Left Image */}
        <div className="col-lg-6 col-md-12 text-center mb-5 mb-lg-0">
          <img
            src="media/images/education.svg"
            alt="Education"
            className="img-fluid"
            style={{ maxWidth: "70%" }}
          />
        </div>

        {/* Right Content */}
        <div className="col-lg-6 col-md-12">
          <h1 className="fw-bold mb-4">
            Free and open market education
          </h1>

          <p className="text-muted">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>

          <a href="#" className="text-decoration-none">
            Varsity{" "}
            <i className="fa-solid fa-arrow-right-long"></i>
          </a>

          <p className="text-muted mt-5">
            TradingQ&amp;A, the most active trading and investment community in
            India for all your market related queries.
          </p>

          <a href="#" className="text-decoration-none">
            TradingQ&amp;A{" "}
            <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>

      </div>
    </div>
  );
}

export default Education;