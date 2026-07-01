import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../component/header/header";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import "./speaking.css";
import { Carousel } from "react-bootstrap";
import Footer from "../../component/footer/footer";
import {
  FaCompass,
  FaShareAlt,
  FaPenNib,
  FaChartLine,
  FaEnvelope,
  FaChartPie
} from "react-icons/fa";

const services = [
  {
    title: "Digital Strategy",
    summary:
      "We create comprehensive marketing roadmaps that define your positioning, target audience, messaging, and growth opportunities.",
    icon: <FaCompass />,
  },
  {
    title: "Social Media Marketing",
    summary:
      "Build a strong online presence through engaging content, audience engagement, and strategic social campaigns.",
    icon: <FaShareAlt />,
  },
  {
    title: "Content Creation",
    summary:
      "From blog posts and website copy to social media content and campaigns, we create content that drives engagement and conversions.",
    icon: <FaPenNib />,
  },
  {
    title: "Performance Marketing",
    summary:
      "Maximize ROI through data-driven advertising campaigns across Google, Meta, LinkedIn, and other digital platforms.",
    icon: <FaChartLine />,
  },
  {
    title: "Email Marketing",
    summary:
      "Convert visitors into loyal customers with personalized email campaigns and automated customer journeys.",
    icon: <FaEnvelope />,
  },
  {
    title: "Analytics & Reporting",
    summary:
      "Track performance with transparent reporting, actionable insights, and real-time marketing data.",
    icon: <FaChartPie />,
  },
];

const engagements = [
  { name: "TiE Global Summit", img: "/images/tie.png" },
  { name: "Startup Game Changer", img: "/images/startup.png" },
  { name: "XLRI", img: "/images/xiri.png" },
  { name: "IIM Ranchi", img: "/images/iim.png" },
];

const testimonials = [
  {
    quote:
      "An inspiring strategist with unmatched clarity on digital strategy and innovation. Our business scaled tremendously!",
    name: "TiE Global Summit Organizer",
  },
  {
    quote:
      "Delivered immense value to founders and investors alike — strategic, authentic, and growth-oriented.",
    name: "Startup Game Changer Team",
  },
  {
    quote:
      "A powerful strategist who bridges digital marketing theory and human creativity seamlessly. Highly recommended!",
    name: "IIM Ranchi Leadership Conclave",
  },
];

export const Speaking = () => {
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
        alert("Your consultation request has been submitted successfully!");
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
      behavior: "instant",
    });
  }, [pathname]);

  const handleGetStartedClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("get-started");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Framer Motion animation definitions
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div>
      <Header />

      {/* HERO SECTION */}
      <section className="hero-banner position-relative text-center text-white d-flex align-items-center justify-content-center py-5">
        <div className="hero-bg">
          <img
            src="/images/digital_marketing_hero.png"
            alt="Futuristic Digital Marketing Hero Background"
            className="hero-bg-img"
          />
          <div className="overlay"></div>
        </div>

        <motion.div
          className="hero-content container px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="hero-title mb-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Transform Your Business with Smart Digital Marketing
          </motion.h1>

          <motion.p
            className="hero-subtitle mx-auto mb-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            We help startups, entrepreneurs, and growing brands build powerful
            digital experiences through strategy, creativity, automation, and
            performance-driven marketing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <a
              href="#get-started"
              onClick={handleGetStartedClick}
              className="btn btn-lg btn-gradient px-5 py-3 rounded-pill shadow"
            >
              Get Started Today
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* SERVICES / PILLARS SECTION */}
      <section className="services-section py-5 text-center text-white">
        <div className="container py-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-5"
          >
            <h2 className="section-title mb-3">Our Digital Marketing Services</h2>
            <p className="section-subtitle mx-auto">
              Empower your brand with data-backed strategies, engaging content,
              and conversion-focused marketing campaigns.
            </p>
          </motion.div>

          <motion.div
            className="row justify-content-center g-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {services.map((service, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <motion.div
                  className="service-card p-4 h-100 shadow-sm d-flex flex-column align-items-start text-start"
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                >
                  <div className="card-icon-wrapper">{service.icon}</div>
                  <h4 className="service-title">{service.title}</h4>
                  <p className="service-description">{service.summary}</p>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ENGAGEMENTS SECTION */}
      <section className="engagements-section py-5 text-center text-white">
        <div className="container py-4">
          <motion.h2
            className="section-title mb-5"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Trusted By Global Innovation Leaders
          </motion.h2>

          <div className="row justify-content-center align-items-center g-4">
            {engagements.map((item, index) => (
              <div className="col-md-3 col-6" key={index}>
                <motion.div
                  className="engagement-card p-4 rounded-4 shadow-sm d-flex flex-column align-items-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="engagement-logo mb-3"
                  />
                  <h6 className="text-white fw-semibold mb-0">{item.name}</h6>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="testimonials-section py-5 text-center text-white">
        <div className="container py-4">
          <motion.h2
            className="section-title mb-5"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            What Clients & Partners Say
          </motion.h2>

          <Carousel indicators={false} controls={false} interval={4000} fade>
            {testimonials.map((t, index) => (
              <Carousel.Item key={index}>
                <div className="testimonial-card mx-auto px-4 py-5 mb-4">
                  <p className="testimonial-quote mb-4">“{t.quote}”</p>
                  <h6 className="testimonial-name mb-0">{t.name}</h6>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </section>

      {/* CONTACT / INQUIRY FORM */}
      <section id="get-started" className="contact-section py-5 text-white">
        <div className="container py-4">
          <motion.div
            className="text-center mb-5"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title mb-3">Launch Your Marketing Campaign</h2>
            <p className="section-subtitle mx-auto">
              Ready to scale your digital presence? Send us an inquiry, and our
              team will deliver a personalized marketing consultation.
            </p>
          </motion.div>

          <motion.form
            className="contact-form mx-auto p-5 rounded-4"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="row">
              <div className="col-md-6 mb-4">
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

              <div className="col-md-6 mb-4">
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
              <div className="col-md-6 mb-4">
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Company Name"
                />
              </div>

              <div className="col-md-6 mb-4">
                <input
                  type="text"
                  name="eventName"
                  value={formData.eventName}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Website URL / Brand Name"
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
                placeholder="Tell us about your digital marketing goals, target audience, and current challenges..."
                required
              />
            </div>

            <div className="text-center">
              <motion.button
                type="submit"
                disabled={loading}
                className="btn btn-lg btn-gradient px-5 py-3 rounded-pill fw-semibold"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                {loading ? "Submitting..." : "Get Started Today"}
              </motion.button>
            </div>
          </motion.form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Speaking;
