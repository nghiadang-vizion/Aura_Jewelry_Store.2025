import React from "react";
import "./style.scss";
import cover from "../../assets/images/about_cover.png";
const About = () => {
  return (
    <section
      style={{
        padding: "100px 100px 50px 100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
      }}
    >
      <h1 style={{ textTransform: "uppercase" }}>About Us</h1>
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>
        Welcome to our jewelry collection, where beauty and elegance shine.
      </p>
      <p class="max-w-3xl mb-8">
        In our jewelry store, we strive to offer more than just exquisite
        pieces; we aim to curate experiences that celebrate individuality and
        mark significant moments in life. With a passion for craftsmanship and
        an eye for elegance, we invite you to explore our collections, where
        each piece tells a story of sophistication and timeless beauty.
      </p>
      <div className="w-100 h-100">
        <img
          alt="A collection of elegant jewelry pieces displayed on a marble surface with soft, white feathers"
          class="mx-auto"
          src={cover}
          style={{ objectFit: "contain", width: "100%" }}
        />
      </div>
    </section>
  );
};

export default About;
