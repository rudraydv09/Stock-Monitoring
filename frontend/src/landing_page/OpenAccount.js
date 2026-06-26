import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <div className="container py-5 mb-5">
      <div className="row justify-content-center text-center">
        <div className="col-lg-8 col-md-10 col-12">
          <h1 className="display-5 fw-bold mb-3">
            Open a Zerodha account
          </h1>

          <p className="lead mb-4">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday
            and F&O trades.
          </p>

          <Link to='https://stock-monitoring-dashboard.onrender.com'
            className="btn btn-primary btn-lg"
            style={{
              width: "250px",
              maxWidth: "90%",
            }}
          >
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;