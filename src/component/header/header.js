import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./header.css";
import { motion } from "framer-motion";
import { Button } from "react-bootstrap";

export const Header = () => {
     const [expanded, setExpanded] = useState(false);

  const closeMenu = () => setExpanded(false);


  return (
    <motion.nav
      className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3 px-4 sticky-top"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container-fluid">
        {/* Logo + Brand */}
        <NavLink
          to="/"
          className="navbar-brand d-flex align-items-center"
          onClick={closeMenu}
        >
          <img
              src="/images/logo.png"
              alt="Logo"
              className="logo-img"
            />
        </NavLink>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setExpanded(!expanded)}
          aria-controls="navbarNav"
          aria-expanded={expanded}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div
          className={`collapse navbar-collapse justify-content-end ${
            expanded ? "show" : ""
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav align-items-center">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Speaker", path: "/Speaking" },
              { name: "Ventures", path: "/Ventures" },
              { name: "Insights ", path: "/Insights " },
              { name: "Events ", path: "/Events " },
              { name: "Contact ", path: "/Contact " },
            ].map((item) => (
              <li className="nav-item" key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link mx-2 fw-medium active-link"
                      : "nav-link mx-2 fw-medium"
                  }
                  onClick={closeMenu}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
            <li className="nav-item ms-3">
             {/* <Button
            variant="primary"
            size="lg"
            className="cta-btn btn-glow"
            href="mailto:example@gmail.com"
          >
            Book Me to Speak
          </Button> */}
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Header;
