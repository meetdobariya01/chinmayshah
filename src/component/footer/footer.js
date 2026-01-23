import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";
import "./footer.css";

export const Footer = () => {
  return (
    <div>
        <footer className="footer-section py-5">
      <Container>
        <Row className="gy-4">
          {/* Quick Links */}
          <Col md={4} className="text-center text-md-start">
            <motion.h5
              className="fw-bold text-gradient mb-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Quick Links
            </motion.h5>
            <ul className="list-unstyled footer-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/Speaking">Speaking</a>
              </li>
                <li>
                <a href="/Ventures">Ventures</a>
              </li>
                <li>
                <a href="/Insights">Insights</a>
              </li>
              <li>
                <a href="/contact">Contact </a>
              </li>
            </ul>
          </Col>

          {/* Quote */}
          <Col md={4} className="text-center">
            <motion.blockquote
              className="footer-quote fst-italic"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              “Empowering ideas, inspiring innovation, shaping the future.”
            </motion.blockquote>
          </Col>

          {/* Social Icons */}
          <Col md={4} className="text-center text-md-end">
            <motion.div
              className="social-icons d-flex justify-content-center justify-content-md-end gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <a href="https://www.linkedin.com/in/chinmayushah" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/chinmay_shah" target="_blank" rel="noreferrer">
                <FaTwitter />
                </a>
  
              <a href="https://www.instagram.com/chinmayushah/" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
            </motion.div>
          </Col>
        </Row>

        {/* Divider */}
        <motion.hr
          className="my-4 footer-divider"
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />

        {/* Copyright */}
        <Row>
          <Col className="text-center">
            <motion.p
              className="mb-0 text-light small"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              © 2025 <span className="fw-bold text-gradient">Chinmay U. Shah</span> — All Rights Reserved.
            </motion.p>
          </Col>
        </Row>
      </Container>
    </footer>
    </div>
  )
}
export default Footer;
