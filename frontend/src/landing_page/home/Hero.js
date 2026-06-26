import React from "react";

function Hero() {
    return (
        <div className="container py-5">
            <div className="row justify-content-center text-center">
                <div className="col-12">
                    <img
                        src="media/images/homeHero.png"
                        alt="Hero_Image"
                        className="img-fluid mb-5"
                    />

                    <h1 className="display-4 fw-bold mt-3">
                        Invest in everything
                    </h1>

                    <p className="lead mx-auto" style={{ maxWidth: "700px" }}>
                        Online platform to invest in stocks, derivatives, mutual funds,
                        ETFs, bonds, and more.
                    </p>

                    <button
                        className="btn btn-primary btn-lg mt-3"
                        style={{
                            width: "250px",
                            maxWidth: "90%",
                        }}
                    >
                        Dashboard
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Hero;