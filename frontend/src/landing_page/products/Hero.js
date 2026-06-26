import React from "react";

function Hero() {
  return (
    <div className="container border-bottom py-5 mb-5">
      <div className="row justify-content-center text-center">
        <div className="col-lg-8 col-md-10 col-12">

          <h1 className="display-5 fw-bold">
            Technology
          </h1>

          <p className="lead text-muted mt-3">
            Sleek, modern, and intuitive trading platforms
          </p>

          <p className="mt-4">
            Check out our{" "}
            <a href="#" className="text-decoration-none">
              investment offerings{" "}
              <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Hero;