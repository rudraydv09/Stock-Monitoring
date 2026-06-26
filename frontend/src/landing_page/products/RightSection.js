import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container py-5">
      <div className="row align-items-center">

        {/* Content */}
        <div className="col-lg-6 col-md-12 order-2 order-lg-1">
          <h1 className="fw-bold mb-4">{productName}</h1>

          <p className="text-muted mb-4">
            {productDescription}
          </p>

          <a
            href={learnMore}
            className="text-decoration-none"
          >
            Learn More{" "}
            <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>

        {/* Image */}
        <div className="col-lg-6 col-md-12 text-center mb-5 mb-lg-0 order-1 order-lg-2">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
            style={{ maxWidth: "90%" }}
          />
        </div>

      </div>
    </div>
  );
}

export default RightSection;