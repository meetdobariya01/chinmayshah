import React from 'react'
import Header from '../../component/header/header';
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";

import {
  FaRobot,
  FaRocket,
  FaBuilding,
  FaMicrochip,
    FaLightbulb,
  FaHandshake,
  FaChartLine,
  FaGraduationCap,
} from "react-icons/fa";
import "./about.css";
import Footer from '../../component/footer/footer';
import Photos from '../../component/photos/photos';

const expertiseItems = [
  {
    icon: <FaRobot />,
    title: "AI & Emerging Tech",
    text: "Exploring and implementing the next wave of intelligent technologies.",
  },
  {
    icon: <FaRocket />,
    title: "Startup Ecosystem",
    text: "Empowering founders to scale ideas through strategy and mentorship.",
  },
  {
    icon: <FaBuilding />,
    title: "Corporate Innovation",
    text: "Driving enterprise transformation through agile innovation programs.",
  },
  {
    icon: <FaMicrochip />,
    title: "Electronics & Semiconductors",
    text: "Building technical foundations in advanced hardware engineering.",
  },
  {
    icon: <FaChartLine />,
    title: "Investor Relations",
    text: "Connecting capital with visionary technology-driven startups.",
  },
  {
    icon: <FaGraduationCap />,
    title: "Education & Ecosystem Building",
    text: "Nurturing talent and fostering sustainable tech-driven growth.",
  },
];

const timelineData = [
  {
    icon: <FaBuilding />,
    title: "Crescent Electronics",
    text: "Laid the foundation in the world of electronics and innovation.",
  },
  {
    icon: <FaRocket />,
    title: "Startup Steroids",
    text: "Accelerated entrepreneurial growth and tech mentorship programs.",
  },
  {
    icon: <FaLightbulb />,
    title: "HorseTech Analytics",
    text: "Technology-driven company building secure, efficient, and future-ready digital products.",
  },
  {
    icon: <FaHandshake />,
    title: "Starlight Tech Labs",
    text: "Innovative IT solutions delivering scalable software, automation, and digital transformation.",
  },
  {
    icon: <FaRobot />,
    title: "Accomation",
    text: "AI-powered accounting automation platform simplifying bookkeeping, compliance, and financial workflows.",
  },
];
export const About = () => {
  return (
    <div>
      {/* header */}
      <Header/>
      {/* first section */}
       <section className="hero-section d-flex align-items-center justify-content-center text-center">
      <div className="overlay"></div>

      <div className="container position-relative">
        <motion.h1
          className="hero-title text-white fw-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          The Story Behind the Vision
        </motion.h1>

        <motion.p
          className="hero-subtitle text-light mt-3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Tech Evangelist | Mentor | AI Speaker | Startup Curator
        </motion.p>

        <motion.div
          className="mt-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {/* <a href="#about" className="btn btn-outline-light btn-lg rounded-pill hero-btn">
            Discover More
          </a> */}
        </motion.div>
      </div>
    </section>
   
    {/* third section */}

    <section className="journey-section py-5 text-center">
      <div className="container">
        <motion.h2
          className="fw-bold text-white mb-5"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Journey Timeline
        </motion.h2>

        <div className="timeline-container d-flex flex-wrap justify-content-center">
          {timelineData.map((item, index) => (
            <motion.div
              className="timeline-item text-white text-center p-3"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="timeline-icon mx-auto mb-3">{item.icon}</div>
              <h5 className="fw-semibold">{item.title}</h5>
              <p className="text-light small">{item.text}</p>
              {index !== timelineData.length - 1 && (
                <div className="timeline-connector d-none d-md-block"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
     {/* secound section */}
     <section className="vision-section d-flex align-items-center justify-content-center text-center">
      <div className="container">
        <motion.div
          className="quote-box mx-auto p-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="quote-text text-white fw-light fst-italic"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            “Technology isn’t just transforming industries - it’s redefining how
            humanity evolves.”
          </motion.h2>

          <motion.div
            className="quote-line mx-auto mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ delay: 0.6, duration: 0.8 }}
          ></motion.div>
        </motion.div>
      </div>
    </section>
    {/* forth section */}


    <section className="expertise-section py-5 text-center">
      <div className="container">
        <motion.h2
          className="fw-bold text-white mb-5"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Areas of Expertise
        </motion.h2>

        <div className="row justify-content-center">
          {expertiseItems.map((item, index) => (
            <motion.div
              className="col-md-4 col-sm-6 mb-4"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="expertise-card p-4 h-100">
                <div className="expertise-icon mb-3 mx-auto">{item.icon}</div>
                <h5 className="fw-semibold text-white mb-2">{item.title}</h5>
                <p className="text-muted small">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    {/* fifth section */}

<section className="philosophy-section d-flex align-items-center justify-content-center text-center">
      <div className="container">
        <motion.div
          className="philosophy-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="philosophy-quote fw-light fst-italic"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            “Building tech solutions isn’t just coding; it’s crafting future
            realities.”
          </motion.h2>

          <motion.div
            className="philosophy-line mx-auto mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ delay: 0.8, duration: 0.8 }}
          ></motion.div>
        </motion.div>
      </div>
    </section>
    {/* photo section */}
    <Photos/>
    {/* sixth section */}

    <section className="collab-section d-flex align-items-center justify-content-center text-center">
      <div className="container">
        <motion.h2
          className="collab-title text-white fw-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Let’s Collaborate
        </motion.h2>

        <motion.p
          className="text-light mb-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Whether you’re building the next big thing, shaping ideas, or creating impact —  
          let’s make it happen together.
        </motion.p>

        <motion.div
          className="d-flex flex-wrap justify-content-center gap-3"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <button className="btn collab-btn">Work With Me</button>
          <button className="btn collab-btn">Invite Me to Speak</button>
          <button className="btn collab-btn">Partner on a Project</button>
        </motion.div>
      </div>
    </section>
    <Footer/>
        </div>
  )
}
export default About;
