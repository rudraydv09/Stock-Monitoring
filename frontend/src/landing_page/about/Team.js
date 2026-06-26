import React from "react";

function Team() {
  return (
    <div className="container py-5">
      {/* Heading */}
      <div className="row border-top pt-5 mb-5">
        <div className="col-12 text-center">
          <h1 className="fw-bold">People</h1>
        </div>
      </div>

      {/* Team Section */}
      <div
        className="row align-items-center text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.1rem" }}
      >
        {/* Image Section */}
        <div className="col-lg-6 col-md-12 text-center mb-5 mb-lg-0">
          <img
            src="media/images/nithinKamath.jpg"
            alt="Nithin Kamath"
            className="img-fluid rounded-circle"
            style={{ maxWidth: "280px", width: "70%" }}
          />

          <h4 className="mt-4 mb-1">Nithin Kamath</h4>
          <h6 className="text-muted">Founder, CEO</h6>
        </div>

        {/* Content Section */}
        <div className="col-lg-6 col-md-12">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade-long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p>Playing basketball is his zen.</p>

          <p>
            Connect on{" "}
            <a href="#" className="text-decoration-none">
              Homepage
            </a>{" "}
            /{" "}
            <a href="#" className="text-decoration-none">
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="#" className="text-decoration-none">
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;