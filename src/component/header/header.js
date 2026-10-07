import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./header.css";
import { motion } from "framer-motion";
export const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const closeMenu = () => setExpanded(false);
  const navItems = [
    { name: "About", path: "/about" },
    { name: "Ventures", path: "/Ventures" },
    { name: "Workshop", path: "/Speaking" },
    { name: "Business Automation", path: "/Insights" },
    { name: "Investors", path: "/Links" },
    { name: "Events", path: "/Events" },
    { name: "Contact", path: "/Contact" },
  ];
  return (
    <motion.nav
      className="premium-navbar sticky-top"
      initial={{ opacity: 0, y: -35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {" "}
      <div className="container-fluid premium-nav-container">
        {" "}
        {/* ===================================== LOGO ===================================== */}{" "}
        <NavLink to="/" className="premium-logo" onClick={closeMenu}>
          {" "}
          <img
            src="/images/logo.png"
            alt="Logo"
            className="premium-logo-img"
          />{" "}
        </NavLink>{" "}
        {/* ===================================== MOBILE MENU BUTTON ===================================== */}{" "}
        <button
          className={`premium-toggler ${expanded ? "menu-open" : ""}`}
          type="button"
          onClick={() => setExpanded(!expanded)}
          aria-controls="premiumNavbar"
          aria-expanded={expanded}
          aria-label="Toggle navigation"
        >
          {" "}
          <span></span> <span></span>{" "}
        </button>{" "}
        {/* ===================================== NAVIGATION ===================================== */}{" "}
        <div
          className={`premium-navigation ${expanded ? "navigation-open" : ""}`}
          id="premiumNavbar"
        >
          {" "}
          <ul className="premium-nav-list">
            {" "}
            {navItems.map((item, index) => (
              <li className="premium-nav-item" key={item.name}>
                {" "}
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `premium-nav-link ${isActive ? "premium-active" : ""}`
                  }
                  onClick={closeMenu}
                >
                  {" "}
                  <span className="nav-number">
                    {" "}
                    {String(index + 1).padStart(2, "0")}{" "}
                  </span>{" "}
                  <span className="nav-text"> {item.name} </span>{" "}
                  <span className="nav-arrow">↗</span>{" "}
                </NavLink>{" "}
              </li>
            ))}{" "}
          </ul>{" "}
          {/* ===================================== DESKTOP CTA ===================================== */}{" "}
          <div className="premium-nav-cta">
            {" "}
            <a href="mailto:chinmay@chinmayushah.com" className="premium-contact-btn">
              {" "}
              <span>Let's Connect</span>{" "}
              <span className="contact-arrow">↗</span>{" "}
            </a>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </motion.nav>
  );
};
export default Header;
