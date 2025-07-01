import React from "react";

const Footer = () => {
  const date = new Date();
  const getFullYear = date.getFullYear();

  return (
    <div className="container-fluid text-white footer-bg">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-white">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-white">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-white">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-white">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-white">
              About
            </a>
          </li>
        </ul>
        <p className="text-center">© {getFullYear} KP Health.gov</p>
      </footer>
    </div>
  );
};

export default Footer;
