import React from "react";

function Hero() {
  return (
    <section className="container-fluid py-5" id="supportHero">

      {/* Top Bar */}
      <div
        className="container d-flex flex-column flex-md-row justify-content-between align-items-center mb-5"
        id="supportWrapper"
      >
        <h4 className="mb-3 mb-md-0">Support Portal</h4>

        <a href="#" className="text-decoration-none">
          Track Tickets
        </a>
      </div>

      {/* Main Content */}
      <div className="container">
        <div className="row g-5">

          {/* Left Section */}
          <div className="col-lg-6 col-md-12">
            <h2 className="mb-4">
              Search for an answer or browse help topics to create a ticket
            </h2>

            <input
              type="text"
              className="form-control mb-4"
              placeholder="Eg: How do I activate F&O, why is my order getting rejected?"
            />

            <div className="d-flex flex-wrap gap-3">
              <a href="#" className="text-decoration-none">
                Track account opening
              </a>

              <a href="#" className="text-decoration-none">
                Track segment activation
              </a>

              <a href="#" className="text-decoration-none">
                Intraday margins
              </a>

              <a href="#" className="text-decoration-none">
                Kite user manual
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-lg-6 col-md-12">
            <h2 className="mb-4">Featured</h2>

            <ol className="ps-3">
              <li className="mb-3">
                <a href="#" className="text-decoration-none">
                  Current Takeovers and Delisting – January 2024
                </a>
              </li>

              <li>
                <a href="#" className="text-decoration-none">
                  Latest Intraday Leverages – MIS &amp; CO
                </a>
              </li>
            </ol>
          </div>

        </div>
      </div>

    </section>
  );
}

export default Hero;