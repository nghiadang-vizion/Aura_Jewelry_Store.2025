import React from "react";

const HeroSection = () => {
  return (
    <section className="position-relative text-white">
      <img
        src="https://aura-ecom.s3.us-east-1.amazonaws.com/uploads/1739368437687-Ma%CC%80u%20kem%20Ma%CC%80u%20be%20Ma%CC%80u%20na%CC%82u%20A%CC%89nh%20A%CC%89nh%20ghe%CC%81p%20Ca%CC%81%20nha%CC%82n%20A%CC%89nh%20bi%CC%80a%20Facebook.png"
        alt="Woman wearing gold big hoops"
        className="w-100"
        style={{
          objectFit: "cover",
        }}
      />
      <div className="position-absolute top-50 start-0 translate-middle-y p-4 bg-dark bg-opacity-50">
        <h2 className="fw-semibold">Gold big hoops</h2>
        <p className="fs-4">$ 68,00</p>
        <button className="btn btn-outline-light">View Product</button>
      </div>
    </section>
  );
};

export default HeroSection;
