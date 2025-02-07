import React, { useCallback, useMemo } from "react";

import "./style.scss";

import FLOWER from "../../assets/images/flower2.png";
import { FOOTER_DATA } from "../../constants/data";

const SiteMap = () => (
  <div>
    <h3 className="font-weight-bold mb-3">SITE MAP</h3>
    <ul className="list-unstyled">
      {FOOTER_DATA.SITE_MAP.map((item) => (
        <li key={item} className="mb-2">
          <a href={item.url} className="lst_item text-decoration-none">
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Services = () => (
  <div>
    <h3 className="font-weight-bold mb-3">SERVICES</h3>
    <ul className="list-unstyled">
      {FOOTER_DATA.SERVICE.map((item) => (
        <li key={item} className="mb-2">
          <a href="#" className="lst_item text-decoration-none">
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const SocialLinks = () => (
  <div>
    <h3 className="font-weight-bold mb-3">SOCIAL</h3>
    <ul className="list-unstyled">
      {FOOTER_DATA.SOCIAL.map((item) => (
        <li key={item} className="mb-2">
          <a href={item.url} className="lst_item text-decoration-none">
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const footerLabel = [
  {
    label: "Site Map",
    key: "SITE_MAP",
  },
  {
    label: "Service",
    key: "SERVICE",
  },
  {
    label: "Social",
    key: "SOCIAL",
  },
];

const Logo = () => (
  <div className="d-flex align-items-center">
    <img
      src="https://storage.googleapis.com/a1aa/image/oa_lLWeePvm3hGKkFeiuHjKM22dJTGbAX_f0cD7vVRw.jpg"
      alt="Logo of Precious Treasures"
      width={50}
      height={50}
      className="me-2"
    />
    <span className="h5 fw-bold">PRECIOUS TREASURES</span>
  </div>
);

const Footer = () => {
  return (
    <footer className="footer_wrapper text-white py-5">
      <div className="container d-flex justify-content-between align-items-start">
        <Logo />
        <div className="d-flex gap-5">
          {Object.keys(FOOTER_DATA).map((item) => (
            <div>
              <h3 className="font-weight-bold mb-3">{item}</h3>
              <ul className="list-unstyled">
                {FOOTER_DATA[item].map((item) => (
                  <li key={item} className="mb-2">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="lst_item text-decoration-none"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <img
          src={FLOWER}
          alt="Decorative flower illustration"
          width={200}
          height={200}
          className="ms-4"
        />
      </div>
      <div className="text-center mt-4">
        <p className="small">Copyright by Aura Jewelry</p>
      </div>
    </footer>
  );
};

export default Footer;
