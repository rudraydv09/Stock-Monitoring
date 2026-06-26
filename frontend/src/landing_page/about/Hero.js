import React from "react";

function Hero() {
  return (
    <div className="container py-5">

      {/* Heading */}
      <div className="row justify-content-center text-center mb-5">
        <div className="col-lg-10 col-12">
          <h1 className="display-6 fw-bold">
            We pioneered the discount broking model in India.
            <br className="d-none d-md-block" />
            Now, we are breaking ground with our technology.
          </h1>
        </div>
      </div>

      {/* Content */}
      <div
        className="row border-top pt-5 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.1rem" }}
      >
        {/* Left Column */}
        <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
          <p>
            We kick-started operations on the 15th of August, 2010 with the
            goal of breaking all barriers that traders and investors face in
            India in terms of cost, support, and technology. We named the
            company Zerodha, a combination of Zero and "Rodha", the Sanskrit
            word for barrier.
          </p>

          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>

          <p>
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>
        </div>

        {/* Right Column */}
        <div className="col-lg-6 col-md-12">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>

          <p>
            <a href="#" className="text-decoration-none">
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>

          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us or learn more about our business and product philosophies.
          </p>
        </div>
      </div>

    </div>
  );
}

export default Hero;