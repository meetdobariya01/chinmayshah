import React,  { useState } from 'react'
import Header from '../../component/header/header';
import "bootstrap/dist/css/bootstrap.min.css";
// import { motion } from "framer-motion";
import "./InsightsBlog.css";
// import { motion, AnimatePresence } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";
import Footer from '../../component/footer/footer';

const categories = ["AI", "Startups", "Leadership", "Innovation"];

const allBlogs = [
  {
    title: "AI Beyond Buzzwords",
    category: "AI",
    desc: "How artificial intelligence is transforming industries in meaningful ways.",
    img: "./images/ai-1.jpg",
  },
  {
    title: "The Startup Playbook",
    category: "Startups",
    desc: "Key lessons for founders navigating early-stage challenges.",
    img:"./images/ai-2.jpg",
  },
  {
    title: "Leadership in the Age of Automation",
    category: "Leadership",
    desc: "Why emotional intelligence is still your biggest competitive advantage.",
    img: "./images/ai-3.jpg",
  },
  {
    title: "Innovation Through Collaboration",
    category: "Innovation",
    desc: "Breaking silos to create high-impact innovation ecosystems.",
    img: "./images/ai-4.jpg",
  },
  {
    title: "AI Governance Frameworks",
    category: "AI",
    desc: "Establishing trust and accountability in AI-driven organizations.",
    img: "./images/ai-5.jpg",
  },
  {
    title: "Scaling a Startup: Lessons from the Trenches",
    category: "Startups",
    desc: "Insights into scaling operations and securing investments.",
    img: "./images/ai-6.jpg",
  },
];

const blogs = [
  {
    img: "./images/aii-1.jpg",
    title: "AI Beyond Buzzwords: Real-world Transformation",
    excerpt:
      "Exploring how artificial intelligence is moving from hype to tangible impact across industries.",
    link: "#",
  },
  {
    img: "./images/aii-2.jpg",
    title: "Building the Next-Gen Startup Ecosystem",
    excerpt:
      "Unveiling strategies to empower founders and fuel innovation in the startup landscape.",
    link: "#",
  },
  {
    img: "./images/aii-3.jpg",
    title: "Digital India 2030: The Road Ahead",
    excerpt:
      "A deep dive into how India’s digital revolution is reshaping education, business, and governance.",
    link: "#",
  },
  {
    img: "./images/aii-4.jpg",
    title: "How to Build a Culture of Innovation",
    excerpt:
      "Simple frameworks and leadership insights to nurture creativity within organizations.",
    link: "#",
  },
  {
    img: "./images/aii-6.jpg",
    title: "Ethics in AI: Balancing Power and Responsibility",
    excerpt:
      "Understanding the importance of ethical frameworks in building future-ready AI systems.",
    link: "#",
  },
  {
    img: "./images/aii-5.jpg",
    title: "Top 5 Tech Trends to Watch in 2025",
    excerpt:
      "A look at emerging technologies that will define the next era of digital transformation.",
    link: "#",
  },
];

export const InsightsBlog = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredBlogs =
    activeCategory === "All"
      ? allBlogs
      : allBlogs.filter((blog) => blog.category === activeCategory);
  return (
    <div>
      {/* header */}
      <Header/>
{/* first section */}
<section className="insights-hero d-flex align-items-center text-center">
      <div className="container">
        <motion.h1
          className="fw-bold text-white mb-3"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Insights & Ideas that Spark Innovation
        </motion.h1>

        <motion.p
          className="text-light fs-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Articles, opinions, and perspectives on AI, startups, and tech.
        </motion.p>

        <motion.div
          className="hero-glow mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        ></motion.div>
      </div>
    </section>
    {/* secound section */}
     <section className="blog-section py-5">
      <div className="container">
        <motion.h2
          className="fw-bold text-white text-center mb-5"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Latest Insights & Ideas
        </motion.h2>

        <div className="row g-4">
          {blogs.map((blog, index) => (
            <motion.div
              className="col-lg-4 col-md-6"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="blog-card h-100 shadow-lg border-0">
                <div className="blog-img-wrapper">
                  <img
                    src={blog.img}
                    alt={blog.title}
                    className="img-fluid blog-img"
                  />
                </div>
                <div className="blog-content p-4">
                  <h5 className="fw-bold text-white">{blog.title}</h5>
                  <p className="text-light small mt-2 mb-3">{blog.excerpt}</p>
                  {/* <a href={blog.link} className="btn btn-outline-info btn-sm">
                    Read More
                  </a> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    {/* third section */}
     <section className="category-section py-5 text-center">
      <div className="container">
        <motion.h2
          className="fw-bold text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Explore by Category
        </motion.h2>

        {/* Category Buttons */}
        <motion.div
          className="d-flex flex-wrap justify-content-center gap-3 mb-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <button
            className={`filter-btn ${
              activeCategory === "All" ? "active" : ""
            }`}
            onClick={() => setActiveCategory("All")}
          >
            All
          </button>
          {categories.map((cat, index) => (
            <motion.button
              key={index}
              className={`filter-btn ${
                activeCategory === cat ? "active" : ""
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Blog Grid */}
        <div className="row g-4">
          <AnimatePresence>
            {filteredBlogs.map((blog, index) => (
              <motion.div
                key={blog.title}
                className="col-lg-4 col-md-6"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6 }}
              >
                <div className="category-card h-100 text-start">
                  <img
                    src={blog.img}
                    alt={blog.title}
                    className="img-fluid rounded-top"
                  />
                  <div className="p-3">
                    <h5 className="fw-bold text-white mb-2">{blog.title}</h5>
                    <p className="text-light small mb-0">{blog.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
    {/* fifth section */}

    <section className="newsletter-section py-5 text-center text-white">
      <div className="container">
        <motion.h2
          className="fw-bold mb-3"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Join 5,000+ innovators who receive my monthly insights.
        </motion.h2>

        <motion.div
          className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 mt-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <input
            type="email"
            className="form-control email-input"
            placeholder="Enter your email"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary fw-semibold px-4 py-2 subscribe-btn"
          >
            Subscribe
          </motion.button>
        </motion.div>
      </div>
    </section>
    {/* footer */}
    <Footer/>

    </div>
  )
}
export default InsightsBlog;