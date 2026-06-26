import React from "react";

function Pricing() {
    return (
        <div className="container py-5">
            <div className="row align-items-center">

                {/* Left Section */}
                <div className="col-lg-4 col-md-12 mb-5 mb-lg-0">
                    <h1 className="fw-bold mb-3">Unbeatable pricing</h1>

                    <p className="text-muted">
                        We pioneered the concept of discount broking and price transparency
                        in India. Flat fees and no hidden charges.
                    </p>

                    <a href="#" className="text-decoration-none">
                        See pricing{" "}
                        <i className="fa-solid fa-arrow-right-long"></i>
                    </a>
                </div>

                {/* Spacer (Desktop Only) */}
                <div className="col-lg-2 d-none d-lg-block"></div>

                {/* Pricing Cards */}
                <div className="col-lg-6 col-md-12">
                    <div className="row text-center g-3">

                        <div className="col-sm-6">
                            <div className="border rounded p-4 h-100">
                                <h1 className="display-5">₹0</h1>
                                <p className="mb-0">
                                    Free equity delivery <br />
                                    and direct mutual funds
                                </p>
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <div className="border rounded p-4 h-100">
                                <h1 className="display-5">₹20</h1>
                                <p className="mb-0">
                                    Intraday and <br />
                                    F&amp;O
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Pricing;