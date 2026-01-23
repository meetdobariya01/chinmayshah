import React, { useState } from "react";
import Header from '../../component/header/header';
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import { FaUsers, FaBrain, FaMicrophone, FaHandshake } from "react-icons/fa";
import { FaLinkedin, FaInstagram, FaXTwitter, FaYoutube, FaEnvelope } from "react-icons/fa6";
import "./Contact.css";
import Footer from "../../component/footer/footer";

const contactItems = [
  {
    icon: <FaUsers />,
    title: "Startup Mentorship",
    text: "Guiding founders to build scalable, impactful ventures.",
  },
  {
    icon: <FaBrain />,
    title: "AI Strategy & Advisory",
    text: "Helping organizations integrate and innovate with AI responsibly.",
  },
  {
    icon: <FaMicrophone />,
    title: "Speaking Engagements",
    text: "Inspiring audiences on AI, innovation, and the startup ecosystem.",
  },
  {
    icon: <FaHandshake />,
    title: "Partnerships",
    text: "Collaborating with visionaries to drive sustainable innovation.",
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Your message has been sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };
  return (
    <div>
      {/* header */}
      <Header/>
      {/* first section */}
      <section className="hero-section d-flex align-items-center text-center text-white">
      <div className="container">
        <motion.h1
          className="fw-bold display-5 mb-3"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Let’s Build the Future, Together.
        </motion.h1>

        <motion.p
          className="lead mb-4 text-light"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Connect for mentorship, partnerships, or speaking engagements.
        </motion.p>

        <motion.div
          className="d-flex justify-content-center gap-3 flex-wrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary px-4 py-2 rounded-pill fw-semibold"
          >
            Let’s Connect
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-outline-light px-4 py-2 rounded-pill fw-semibold"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </section>
    {/* secound section */}
     <section className="contact-cards-section py-5 text-center text-white">
      <div className="container">
        <motion.h2
          className="fw-bold mb-5"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.h2>

        <div className="row justify-content-center">
          {contactItems.map((item, index) => (
            <motion.div
              className="col-md-6 col-lg-3 mb-4"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="contact-card p-4 h-100">
                <div className="contact-icon mb-3">{item.icon}</div>
                <h5 className="fw-semibold mb-2">{item.title}</h5>
                <p className="text-light small">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    {/* third section */}
     <section className="contact-form-section py-5 text-white">
      <div className="container">
        <motion.h2
          className="fw-bold text-center mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.h2>

        <motion.p
          className="text-center text-muted mb-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          viewport={{ once: true }}
        >
          Have a question or opportunity in mind? Drop a message below.
        </motion.p>

        <div className="row justify-content-center">
          <motion.div
            className="col-lg-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <form className="p-4 rounded-4 contact-form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control form-input"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control form-input"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-control form-input"
                  placeholder="Subject"
                  required
                />
              </div>

              <div className="mb-4">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-control form-input"
                  rows="5"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="btn btn-primary px-5 py-2 rounded-pill fw-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
    {/* forth section */}

    <section className="direct-contact-section py-5 text-center text-white">
      <div className="container">
        <motion.h2
          className="fw-bold mb-3"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Direct Contact
        </motion.h2>

        <motion.p
          className="text-muted mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          viewport={{ once: true }}
        >
          Reach out directly or connect through your favorite platform.
        </motion.p>

        <motion.div
          className="email-link mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a href="mailto:chinmay@chinmayushah.com" className="email-text">
            <FaEnvelope className="me-2" />
            chinmay@chinmayushah.com
          </a>
        </motion.div>

        <motion.div
          className="social-icons d-flex justify-content-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
            whileHover={{ scale: 1.2, color: "#0A66C2" }}
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
            whileHover={{ scale: 1.2, color: "#E1306C" }}
          >
            <FaInstagram />
          </motion.a>

          <motion.a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
            whileHover={{ scale: 1.2, color: "#1DA1F2" }}
          >
            <FaXTwitter />
          </motion.a>

          <motion.a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
            whileHover={{ scale: 1.2, color: "#FF0000" }}
          >
            <FaYoutube />
          </motion.a>
        </motion.div>
      </div>
    </section>
    {/* footer */}
    <Footer/>
    </div>
  )
}
export default Contact;
