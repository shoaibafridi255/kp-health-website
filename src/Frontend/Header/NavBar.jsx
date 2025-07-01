import React from "react";
import logo from "../../Assets/logo.png";
import { MdAdminPanelSettings } from "react-icons/md";
import "../../Styles/Navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-white border-bottom custom-sticky">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="logo" style={{ width: 140, height: 50 }} />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-navbar"
          aria-controls="main-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="main-navbar">
          <ul className="navbar-nav mx-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link
                to="/"
                className=" nav-link fw-bold link-color px-4 link-underline"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/About"
                className=" nav-link fw-bold link-color px-4 link-underline"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Data"
                className="nav-link fw-bold link-color px-4 link-underline"
              >
                Data
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Contact"
                className="nav-link fw-bold link-color px-4 link-underline"
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className="d-flex">
            <Link
              to={"/adminpanel"}
              type="button"
              className="btn text-white"
              style={{ backgroundColor: "#0a4275" }}
            >
              <MdAdminPanelSettings size={28} /> AdminPanel
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
