import React from "react";

function Footer() {
  return (
    <footer
      className="border-top py-5"
      style={{ backgroundColor: "rgb(250, 250, 250)" }}
    >
      <div className="container">
        <div className="row gy-4">

          {/* Logo */}
          <div className="col-lg-3 col-md-6 col-12 text-center text-md-start">
            <img
              src="media/images/logo.svg"
              alt="logo"
              className="img-fluid mb-3"
              style={{ maxWidth: "180px" }}
            />
            <p className="text-muted">
              &copy; 2010 - 2026, Zerodha Broking Ltd.
              <br />
              All rights reserved.
            </p>
          </div>

          {/* Company */}
          <div className="col-lg-3 col-md-6 col-6">
            <h5>Company</h5>

            <a href="#" className="text-decoration-none d-block mb-2">About</a>
            <a href="#" className="text-decoration-none d-block mb-2">Products</a>
            <a href="#" className="text-decoration-none d-block mb-2">Pricing</a>
            <a href="#" className="text-decoration-none d-block mb-2">Referral programme</a>
            <a href="#" className="text-decoration-none d-block mb-2">Careers</a>
            <a href="#" className="text-decoration-none d-block mb-2">Zerodha.tech</a>
            <a href="#" className="text-decoration-none d-block mb-2">Press & Media</a>
            <a href="#" className="text-decoration-none d-block">Zerodha Cares (CSR)</a>
          </div>

          {/* Support */}
          <div className="col-lg-3 col-md-6 col-6">
            <h5>Support</h5>

            <a href="#" className="text-decoration-none d-block mb-2">Contact</a>
            <a href="#" className="text-decoration-none d-block mb-2">Support Portal</a>
            <a href="#" className="text-decoration-none d-block mb-2">Z-Connect Blog</a>
            <a href="#" className="text-decoration-none d-block mb-2">List of Charges</a>
            <a href="#" className="text-decoration-none d-block">Downloads & Resources</a>
          </div>

          {/* Account */}
          <div className="col-lg-3 col-md-6 col-12">
            <h5>Account</h5>

            <a href="#" className="text-decoration-none d-block mb-2">Open an Account</a>
            <a href="#" className="text-decoration-none d-block mb-2">Fund Transfer</a>
            <a href="#" className="text-decoration-none d-block">60 Day Challenge</a>
          </div>
        </div>

        {/* Footer Text */}
        <div
          className="mt-5 text-muted"
          style={{ fontSize: "13px", lineHeight: "1.8" }}
        >
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI
            Registration no.: INZ000031633. CDSL/NSDL: Depository services
            through Zerodha Broking Ltd. Registered Address: Bengaluru,
            Karnataka, India.
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on the SCORES
            portal with your Name, PAN, Address, Mobile Number and Email ID.
          </p>

          <p>
            Smart Online Dispute Resolution | Grievances Redressal Mechanism.
          </p>

          <p>
            Investments in securities market are subject to market risks. Read
            all the related documents carefully before investing.
          </p>

          <p>
            Attention investors: Update your mobile number and email ID with
            your broker/depository participant to receive alerts directly from
            the exchange and depositories.
          </p>

          <p>
            India's largest broker based on net worth as per NSE.
          </p>

          <p>
            Prevent unauthorised transactions in your account. Receive
            transaction alerts directly from the exchange and depositories on
            your registered mobile number and email.
          </p>

          <p>
            Fixed deposit products are third-party products regulated by the
            Reserve Bank of India (RBI).
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;