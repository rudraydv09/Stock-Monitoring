import React from "react";

function CreateTicket() {
  return (
    <div className="container py-5">
      <div className="row">
        {/* Heading */}
        <div className="col-12 mb-5">
          <h1 className="fw-bold fs-2">
            To create a ticket, select a relevant topic
          </h1>
        </div>

        {/* Account Opening */}
        <div className="col-lg-4 col-md-6 col-12 mb-5">
          <h4 className="mb-4">
            <i className="fa-solid fa-circle-plus me-2"></i>
            Account Opening
          </h4>

          <a href="#" className="text-decoration-none d-block mb-2">
            Online Account Opening
          </a>
          <a href="#" className="text-decoration-none d-block mb-2">
            Offline Account Opening
          </a>
          <a href="#" className="text-decoration-none d-block mb-2">
            Company, Partnership and HUF Account Opening
          </a>
          <a href="#" className="text-decoration-none d-block mb-2">
            NRI Account Opening
          </a>
          <a href="#" className="text-decoration-none d-block mb-2">
            Charges at Zerodha
          </a>
          <a href="#" className="text-decoration-none d-block mb-2">
            Zerodha IDFC FIRST Bank 3-in-1 Account
          </a>
          <a href="#" className="text-decoration-none d-block">
            Getting Started
          </a>
        </div>

        {/* Your Zerodha Account */}
        <div className="col-lg-4 col-md-6 col-12 mb-5">
          <h4 className="mb-4">
            <i className="fa-solid fa-user me-2"></i>
            Your Zerodha Account
          </h4>

          <a href="#" className="text-decoration-none d-block mb-2">
            Login Credentials
          </a>
          <a href="#" className="text-decoration-none d-block mb-2">
            Account Modification and Segment Addition
          </a>
          <a href="#" className="text-decoration-none d-block mb-2">
            DP ID and Bank Details
          </a>
          <a href="#" className="text-decoration-none d-block mb-2">
            Your Profile
          </a>
          <a href="#" className="text-decoration-none d-block">
            Transfer and Conversion of Shares
          </a>
        </div>

        {/* Trading and Markets */}
        <div className="col-lg-4 col-md-6 col-12 mb-5">
          <h4 className="mb-4">
            <i className="fa-solid fa-chart-column me-2"></i>
            Trading and Markets
          </h4>

          <a href="#" className="text-decoration-none d-block mb-2">
            Margin / Leverage, Product & Order Types
          </a>
          <a href="#" className="text-decoration-none d-block mb-2">
            Kite Web and Mobile
          </a>
          <a href="#" className="text-decoration-none d-block mb-2">
            Trading FAQs
          </a>
          <a href="#" className="text-decoration-none d-block mb-2">
            Corporate Actions
          </a>
          <a href="#" className="text-decoration-none d-block mb-2">
            Sentinel
          </a>
          <a href="#" className="text-decoration-none d-block mb-2">
            Kite API
          </a>
          <a href="#" className="text-decoration-none d-block mb-2">
            Pi and Other Platforms
          </a>
          <a href="#" className="text-decoration-none d-block mb-2">
            StockReports+
          </a>
          <a href="#" className="text-decoration-none d-block">
            GTT
          </a>
        </div>

        {/* Funds */}
        <div className="col-lg-4 col-md-6 col-12 mb-5">
          <h4 className="mb-4">
            <i className="fa-solid fa-folder-closed me-2"></i>
            Funds
          </h4>

          <a href="#" className="text-decoration-none d-block mb-2">
            Adding Funds
          </a>
          <a href="#" className="text-decoration-none d-block mb-2">
            Fund Withdrawal
          </a>
          <a href="#" className="text-decoration-none d-block mb-2">
            eMandates
          </a>
          <a href="#" className="text-decoration-none d-block">
            Adding Bank Accounts
          </a>
        </div>

        {/* Console */}
        <div className="col-lg-4 col-md-6 col-12 mb-5">
          <h4 className="mb-4">
            <i className="fa-solid fa-circle-notch me-2"></i>
            Console
          </h4>

          <a href="#" className="text-decoration-none d-block mb-2">
            Reports
          </a>
          <a href="#" className="text-decoration-none d-block mb-2">
            Ledger
          </a>
          <a href="#" className="text-decoration-none d-block mb-2">
            Portfolio
          </a>
          <a href="#" className="text-decoration-none d-block mb-2">
            60 Day Challenge
          </a>
          <a href="#" className="text-decoration-none d-block mb-2">
            IPO
          </a>
          <a href="#" className="text-decoration-none d-block">
            Referral Program
          </a>
        </div>

        {/* Coin */}
        <div className="col-lg-4 col-md-6 col-12 mb-5">
          <h4 className="mb-4">
            <i className="fa-regular fa-circle me-2"></i>
            Coin
          </h4>

          <a href="#" className="text-decoration-none d-block mb-2">
            Understanding Mutual Funds
          </a>
          <a href="#" className="text-decoration-none d-block mb-2">
            About Coin
          </a>
          <a href="#" className="text-decoration-none d-block mb-2">
            Buying and Selling through Coin
          </a>
          <a href="#" className="text-decoration-none d-block mb-2">
            Starting an SIP
          </a>
          <a href="#" className="text-decoration-none d-block mb-2">
            Managing Your Portfolio
          </a>
          <a href="#" className="text-decoration-none d-block mb-2">
            Coin App
          </a>
          <a href="#" className="text-decoration-none d-block mb-2">
            Moving to Coin
          </a>
          <a href="#" className="text-decoration-none d-block">
            Government Securities
          </a>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;