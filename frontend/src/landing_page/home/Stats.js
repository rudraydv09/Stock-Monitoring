import React from "react";

function Stats() {
    return (
        <div className="container py-5">
            <div className="row align-items-center">

                {/* Left Content */}
                <div className="col-lg-6 col-md-12 mb-5 mb-lg-0">
                    <h1 className="fw-bold mb-4">Trust with confidence</h1>

                    <h4>Customer-first always</h4>
                    <p className="text-muted">
                        That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
                        of equity investments, making us India’s largest broker;
                        contributing to 15% of daily retail exchange volumes in India.
                    </p>

                    <h4>No spam or gimmicks</h4>
                    <p className="text-muted">
                        No gimmicks, spam, "gamification", or annoying push notifications.
                        High quality apps that you use at your pace, the way you like. Our
                        philosophies.
                    </p>

                    <h4>The Zerodha universe</h4>
                    <p className="text-muted">
                        Not just an app, but a whole ecosystem. Our investments in 30+
                        fintech startups offer you tailored services specific to your needs.
                    </p>

                    <h4>Do better with money</h4>
                    <p className="text-muted">
                        With initiatives like Nudge and Kill Switch, we don't just
                        facilitate transactions, but actively help you do better with your
                        money.
                    </p>
                </div>

                {/* Right Image */}
                <div className="col-lg-6 col-md-12 text-center">
                    <img
                        src="media/images/ecosystem.png"
                        alt="ecosystem"
                        className="img-fluid mb-4"
                        style={{ maxWidth: "90%" }}
                    />

                    <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                        <a href="#" className="text-decoration-none">
                            Explore our products{" "}
                            <i className="fa-solid fa-arrow-right-long"></i>
                        </a>

                        <a href="#" className="text-decoration-none">
                            Try Kite demo{" "}
                            <i className="fa-solid fa-arrow-right-long"></i>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Stats;