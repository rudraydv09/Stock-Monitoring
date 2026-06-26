import React from "react";

function Hero() {
  return (
    <div className="container py-5">

      {/* Heading */}
      <div className="row border-bottom text-center pb-5">
        <div className="col-12">
          <h1 className="display-5 fw-bold">Pricing</h1>

          <p className="lead text-muted mt-3">
            Free equity investments and flat ₹20 intraday and F&amp;O trades
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="row text-center mt-5 g-4">

        {/* Card 1 */}
        <div className="col-lg-4 col-md-6 col-12">
          <div className="p-4 h-100">
            <img
              src="media/images/pricingEquity.svg"
              alt="Free Equity"
              className="img-fluid mb-4"
              style={{ maxWidth: "180px" }}
            />

            <h3 className="fw-bold">Free equity delivery</h3>

            <p className="text-muted">
              All equity delivery investments (NSE, BSE) are absolutely free —
              ₹0 brokerage.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-lg-4 col-md-6 col-12">
          <div className="p-4 h-100">
            <img
              src="media/images/intradayTrades.svg"
              alt="Intraday Trades"
              className="img-fluid mb-4"
              style={{ maxWidth: "180px" }}
            />

            <h3 className="fw-bold">Intraday and F&amp;O trades</h3>

            <p className="text-muted">
              Flat ₹20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-lg-4 col-md-6 col-12 mx-md-auto">
          <div className="p-4 h-100">
            <img
              src="media/images/pricingEquity.svg"
              alt="Mutual Funds"
              className="img-fluid mb-4"
              style={{ maxWidth: "180px" }}
            />

            <h3 className="fw-bold">Free direct MF</h3>

            <p className="text-muted">
              All direct mutual fund investments are absolutely free —
              ₹0 commissions &amp; DP charges.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Hero;