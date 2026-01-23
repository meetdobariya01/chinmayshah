import React from "react";
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
      "Exploring real-world applications of artificial intelligence that drive impact.",
  },
  {
    title: "Startup Curation",
    summary:
      "Helping investors and accelerators discover high-potential founders and ideas.",
  },
  {
    title: "Digital India 2030",
    summary:
      "Envisioning the next decade of India’s digital and innovation revolution.",
  },
  {
    title: "Family Offices & Founders",
    summary:
      "Bridging legacy wealth with next-generation entrepreneurial energy.",
  },
];
const engagements = [
  {
    name: "TiE Global Summit",
    img: "./images/tie.png",
  },
  {
    name: "Startup Game Changer",
    img: "./images/startup.png",
  },
  {
    name: " XLRI",
    img: "./images/xiri.png",
  },
  {
    name: "IIM Ranchi",
    img: "./images/iim.png",
  },
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
  return (
    <div>
      {/* header */}
      <Header />
      {/* first section */}
      <section className="hero-banner position-relative text-center text-white d-flex align-items-center justify-content-center">
        {/* Background Video or Image */}
        <div className="hero-bg">
          <video
            className="w-100 h-100"
            autoPlay
            loop
            muted
            playsInline
            poster="https://pixabay.com/videos/world-globe-international-global-1992/"
          >
            <source
              src="https://pixabay.com/videos/world-globe-international-global-1992"
              type="video/mp4"
            />
          </video>
          <div className="overlay"></div>
        </div>

        {/* Hero Content */}
        <motion.div
          className="hero-content container px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="display-4 fw-bold mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            Inspiring Conversations That Shape the Future
          </motion.h1>

          {/* <motion.button
            className="btn btn-lg btn-outline-light px-5 py-3 fw-semibold rounded-pill shadow-sm"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            Book Me to Speak
          </motion.button> */}
        </motion.div>
      </section>

      {/* secound section */}

      <section className="topics-section py-5 text-center">
        <div className="container">
          <motion.h2
            className="fw-bold text-white mb-5"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Speaking Topics
          </motion.h2>

          <div className="row justify-content-center">
            {topics.map((topic, index) => (
              <motion.div
                className="col-md-6 mb-4"
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="topic-card p-4 h-100 rounded-4 shadow-sm">
                  <h4 className="fw-semibold text-white mb-3">{topic.title}</h4>
                  <p className="text-light small mb-0">{topic.summary}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* third section */}
      <section className="engagements-section py-5 text-center">
        <div className="container">
          <motion.h2
            className="fw-bold text-white mb-5"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Past Engagements
          </motion.h2>

          <div className="row justify-content-center align-items-center">
            {engagements.map((item, index) => (
              <motion.div
                className="col-md-3 col-6 mb-4"
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="engagement-card p-3 rounded-4 shadow-sm d-flex flex-column align-items-center">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="engagement-logo mb-3"
                  />
                  <h6 className="text-white fw-semibold">{item.name}</h6>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* forth section */}

      <section className="testimonials-section py-5 text-center text-white">
        <div className="container">
          <motion.h2
            className="fw-bold mb-5"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Testimonials
          </motion.h2>

          <Carousel
            indicators={false}
            controls={false}
            interval={4000}
            fade
            pause={false}
          >
            {testimonials.map((t, index) => (
              <Carousel.Item key={index}>
                <motion.div
                  className="testimonial-card mx-auto px-4 py-5"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <p className="testimonial-quote mb-4">“{t.quote}”</p>
                  <h6 className="fw-semibold text-info">{t.name}</h6>
                </motion.div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </section>
      {/* sixth section */}

      <section className="contact-section py-5 text-white">
        <div className="container">
          {/* Section Title */}
          <motion.h2
            className="fw-bold text-center mb-4"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Get in Touch
          </motion.h2>

          <motion.p
            className="text-center text-muted mb-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Submit a speaking request or collaboration inquiry below.
          </motion.p>

          {/* Contact Form */}
          <motion.form
            className="contact-form mx-auto p-4 rounded-4 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="row">
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <input
                  type="email"
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
                  className="form-control"
                  placeholder="Organization"
                />
              </div>
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Event Name"
                />
              </div>
            </div>

            <div className="mb-4">
              <textarea
                className="form-control"
                rows="5"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="btn btn-lg btn-outline-light px-5 py-3 rounded-pill fw-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              Submit Speaking Request
            </motion.button>
          </motion.form>
        </div>
      </section>
      <Footer/>
    </div>
  );
};
export default Speaking;
