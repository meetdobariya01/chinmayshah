import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../component/header/header";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import "./speaking.css";
import { Carousel } from "react-bootstrap";
import Footer from "../../component/footer/footer";

const topics = [
  {
    title: "AI Beyond Buzzwords",
    summary:
      "Exploring real-world applications of artificial intelligence that drive meaningful impact across industries.",
  },
  {
    title: "Startup Curation",
    summary:
      "Helping investors, accelerators, and ecosystems discover high-potential founders and transformative ideas.",
  },
  {
    title: "Digital India 2030",
    summary:
      "Envisioning the next decade of India’s digital transformation and innovation-driven economy.",
  },
  {
    title: "Family Offices & Founders",
    summary:
      "Bridging legacy wealth with next-generation entrepreneurial energy to unlock new investment opportunities.",
  },
  {
    title: "Startup Costing",
    summary:
      "How founders can structure costs intelligently, avoid early financial pitfalls, and build scalable, financially sustainable startups.",

  }
];

const engagements = [
  { name: "TiE Global Summit", img: "./images/tie.png" },
  { name: "Startup Game Changer", img: "./images/startup.png" },
  { name: "XLRI", img: "./images/xiri.png" },
  { name: "IIM Ranchi", img: "./images/iim.png" },
];

const testimonials = [
  {
    quote:
      "An inspiring speaker with unmatched clarity on AI and innovation. Our attendees were captivated!",
    name: "TiE Global Summit Organizer",
  },
  {
    quote:
      "Delivered immense value to founders and investors alike — engaging, authentic, and visionary.",
    name: "Startup Game Changer Team",
  },
  {
    quote:
      "A powerful storyteller who bridges technology and humanity seamlessly. Highly recommended!",
    name: "IIM Ranchi Leadership Conclave",
  },
];

export const Speaking = () => {
  // ✅ hooks MUST be inside component
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    eventName: "",
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
      const response = await fetch("http://localhost:5000/api/speaking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert("Speaking request submitted successfully!");
        setFormData({
          name: "",
          email: "",
          organization: "",
          eventName: "",
          message: "",
        });
      } else {
        alert("Failed to submit request.");
      }
    } catch (error) {
      console.error(error);
      alert("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // or "smooth"
    });
  }, [pathname]);

  return (
    <div>
      <Header />

      {/* HERO */}
      <section className="hero-banner position-relative text-center text-white d-flex align-items-center justify-content-center">
        <div className="hero-bg">
          <video className="w-100 h-100" autoPlay loop muted playsInline>
            <source
              src="https://cdn.pixabay.com/video/2015/08/08/1992-122695424_large.mp4"
              type="video/mp4"
            />
          </video>
          <div className="overlay"></div>
        </div>

        <motion.div className="hero-content container px-4">
          <motion.h1 className="display-4 fw-bold mb-4">
            Inspiring Conversations That Shape the Future
          </motion.h1>
        </motion.div>
      </section>

      {/* TOPICS */}
      <section className="topics-section py-5 text-center">
        <div className="container">
          <motion.h2 className="fw-bold text-white mb-5">
            Speaking Topics
          </motion.h2>

          <div className="row justify-content-center">
            {topics.map((topic, index) => (
              <div className="col-md-6 mb-4" key={index}>
                <div className="topic-card p-4 h-100 rounded-4 shadow-sm">
                  <h4 className="fw-semibold text-white mb-3">{topic.title}</h4>
                  <p className="text-light small mb-0">{topic.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGEMENTS */}
      <section className="engagements-section py-5 text-center">
        <div className="container">
          <motion.h2 className="fw-bold text-white mb-5">
            Past Engagements
          </motion.h2>

          <div className="row justify-content-center align-items-center">
            {engagements.map((item, index) => (
              <div className="col-md-3 col-6 mb-4" key={index}>
                <div className="engagement-card p-3 rounded-4 shadow-sm d-flex flex-column align-items-center">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="engagement-logo mb-3"
                  />
                  <h6 className="text-white fw-semibold">{item.name}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section py-5 text-center text-white">
        <div className="container">
          <motion.h2 className="fw-bold mb-5">Testimonials</motion.h2>

          <Carousel indicators={false} controls={false} interval={4000} fade>
            {testimonials.map((t, index) => (
              <Carousel.Item key={index}>
                <div className="testimonial-card mx-auto px-4 py-5">
                  <p className="testimonial-quote mb-4">“{t.quote}”</p>
                  <h6 className="fw-semibold text-info">{t.name}</h6>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="contact-section py-5 text-white">
        <div className="container">
          <motion.form
            className="contact-form mx-auto p-4 rounded-4 shadow-lg"
            onSubmit={handleSubmit} // ✅ connected
          >
            <div className="row">
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control"
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
                  className="form-control"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Organization"
                />
              </div>

              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  name="eventName"
                  value={formData.eventName}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Event Name"
                />
              </div>
            </div>

            <div className="mb-4">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-control"
                rows="5"
                placeholder="Your Message"
                required
              />
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              className="btn btn-lg btn-outline-light px-5 py-3 rounded-pill fw-semibold"
            >
              {loading ? "Submitting..." : "Submit Speaking Request"}
            </motion.button>
          </motion.form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Speaking;
