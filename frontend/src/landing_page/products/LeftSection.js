import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container py-5">
      <div className="row align-items-center">

        {/* Left Image */}
        <div className="col-lg-6 col-md-12 text-center mb-5 mb-lg-0">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
            style={{ maxWidth: "90%" }}
          />
        </div>

        {/* Right Content */}
        <div className="col-lg-6 col-md-12">
          <h1 className="fw-bold mb-4">{productName}</h1>

          <p className="text-muted mb-4">
            {productDescription}
          </p>

          {/* Links */}
          <div className="d-flex flex-column flex-sm-row gap-3 mb-4">
            <a
              href={tryDemo}
              className="text-decoration-none"
            >
              Try Demo{" "}
              <i className="fa-solid fa-arrow-right-long"></i>
            </a>

            <a
              href={learnMore}
              className="text-decoration-none"
            >
              Learn More{" "}
              <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>

          {/* Store Buttons */}
          <div className="d-flex flex-column flex-sm-row gap-3">
            <a href={googlePlay}>
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Google Play"
                className="img-fluid"
                style={{ maxWidth: "180px" }}
              />
            </a>

            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                alt="App Store"
                className="img-fluid"
                style={{ maxWidth: "180px" }}
              />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default LeftSection;