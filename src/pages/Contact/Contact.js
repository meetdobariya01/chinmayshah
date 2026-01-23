import React, { useState } from "react";
import Header from "../../component/header/header";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import { FaUsers, FaBrain, FaMicrophone, FaHandshake } from "react-icons/fa";
import {
  FaLinkedin,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa6";
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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/contact", // 🔁 replace after deploy
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.success) {
        alert("Your message has been sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />

      {/* hero section */}
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
        </div>
      </section>

      {/* contact cards */}
      <section className="contact-cards-section py-5 text-center text-white">
        <div className="container">
          <motion.h2 className="fw-bold mb-5">Get in Touch</motion.h2>
          <div className="row justify-content-center">
            {contactItems.map((item, index) => (
              <motion.div className="col-md-6 col-lg-3 mb-4" key={index}>
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

      {/* contact form */}
      <section className="contact-form-section py-5 text-white">
        <div className="container">
          <motion.h2 className="fw-bold text-center mb-4">
            Get in Touch
          </motion.h2>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <form
                className="p-4 rounded-4 contact-form"
                onSubmit={handleSubmit}
              >
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
                  />
                </div>

                <motion.button
                  type="submit"
                  className="btn btn-primary px-5 py-2 rounded-pill fw-semibold"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* direct contact */}
      <section className="direct-contact-section py-5 text-center text-white">
        <div className="container">
          <a
            href="mailto:chinmay@chinmayushah.com"
            className="email-text"
          >
            <FaEnvelope className="me-2" />
            chinmay@chinmayushah.com
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
