import React from "react";
import { motion } from "framer-motion";
import { Button } from "react-bootstrap";
import "./home.css";
import Header from "../../component/header/header";
import {
  FaRobot,
  FaRocket,
  FaLightbulb,
  FaMicrophoneAlt,
} from "react-icons/fa";
import { Carousel, Card, Container } from "react-bootstrap";
import Footer from "../../component/footer/footer";
import { Link } from "react-router-dom";
// import { Button } from "react-bootstrap";

const pillars = [
  {
    icon: <FaLightbulb />,
    title: "Tech Evangelism",
    desc: "Inspiring and educating people about emerging technologies to accelerate innovation and impact.",
    delay: 0.2,
  },
  {
    icon: <FaRocket />,
    title: "Startup Mentorship",
    desc: "Helping founders navigate the startup ecosystem with practical insights and hands-on guidance.",
    delay: 0.4,
  },
  {
    icon: <FaRobot />,
    title: "AI Strategy & Governance",
    desc: "Designing responsible AI frameworks that align technology with ethics and business success.",
    delay: 0.6,
  },
  {
    icon: <FaMicrophoneAlt />,
    title: "Speaking & Thought Leadership",
    desc: "Delivering engaging talks and sessions that inspire leaders to shape the future with purpose.",
    delay: 0.8,
  },
];
const logos = [
  { name: "TiE", img: "/images/tie.png" },
  { name: "IIM Ranchi", img: "/images/iim.png" },
  { name: "XLRI", img: "/images/xiri.png" },
  { name: "Startup Game Changer", img: "/images/startup.png" },
];
const testimonials = [
  {
    name: "Ananya Patel",
    title: "Founder, InnovX Labs",
    quote:
      "Chinmay’s insights into AI strategy reshaped our startup’s vision. His mentorship gave us clarity and confidence to scale.",
    img: "./images/t-1.jpg",
  },
  {
    name: "Rahul Mehta",
    title: "Investor, Angel Network",
    quote:
      "A true tech evangelist - his ability to bridge technology and human potential is unmatched.",
    img: "./images/t-2.jpg",
  },
  {
    name: "Sneha Rao",
    title: "CEO, Bliss Tree",
    quote:
      "Chinmay’s passion for innovation and startup mentoring is inspiring. His sessions always leave you thinking bigger.",
    img: "./images/t-3.jpg",
  },
  // {
  //   name: "Amit Desai",
  //   title: "Founder, TechSpark",
  //   quote:
  //     "Working with Chinmay was transformative. His strategic thinking and deep tech insights were game-changing.",
  //   img: "./images/t-4.jpg",
  // },
  // {
  //   name: "Priya Sharma",
  //   title: "Investor, Growth Syndicate",
  //   quote:
  //     "His talks redefine how we think about technology and human potential. A must-listen for every founder.",
  //   img: "./images/t-5.jpg",
  // },
  // {
  //   name: "Karan Bhatia",
  //   title: "CTO, ScaleVerse",
  //   quote:
  //     "Chinmay blends innovation and leadership beautifully — truly shaping the next generation of founders.",
  //   img: "./images/t-6.jpg",
  // },
];
export const Home = () => {
  return (
    <div>
      {/* Header */}
      <Header />
      {/* first section */}

      <section className="hero-section position-relative text-white overflow-hidden">
        {/* Animated background overlay */}
        <div className="animated-bg"></div>

        <div className="container position-relative z-3">
          <div className="row align-items-center py-5">
            {/* Left Side Content */}
            <div className="col-lg-7 text-center text-lg-start mb-5 mb-lg-0">
              <motion.h1
                className="display-5 fw-bold mb-3"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                Crafting the Future at the Intersection of <br />
                <span className="text-gradient">
                  Technology, Startups & Human Potential.
                </span>
              </motion.h1>

              <motion.p
                className="lead mb-4 role-text text-center text-lg-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                <span>Tech Evangelist</span> | <span>Startup Curator</span>{" "}
                <br className="d-lg-none" />
                <span>AI Speaker</span> | <span>Mentor</span>
              </motion.p>

              <motion.div
                className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
              >
                <Button
                  as={Link}
                  to="./appoiment  "
                  variant="light"
                  className="cta-btn"
                >
                  Book Appointment
                </Button>
                {/* <Button variant="outline-light" className="cta-btn">
                  Collaborate
                </Button> */}
                <Button
                  variant="light"
                  className="cta-btn"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/chinmayushah",
                      "_blank",
                    )
                  }
                >
                  Join My Network
                </Button>
              </motion.div>
            </div>

            {/* Right Side: Portrait / Speaker Clip */}
            <motion.div
              className="col-lg-5 text-center"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              {/* Replace video with your portrait or looped speaker clip */}
              <div className="portrait-wrapper mx-auto position-relative overflow-hidden">
                {/* Animated glow or floating effect */}
                <motion.img
                  src="./images/p-1.jpeg"
                  alt="Hero Portrait"
                  className="hero-image img-fluid rounded-4 shadow-lg"
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  whileHover={{ scale: 1.05, rotate: 1 }}
                />

                {/* Floating animation loop */}
                <motion.div
                  className="floating-glow position-absolute top-0 start-0 w-100 h-100"
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut",
                  }}
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* quick intro section */}

      <section className="quick-intro-section py-5">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            {/* Left Column - Photo */}
            <motion.div
              className="col-lg-5 col-md-6 text-center mb-4 mb-lg-0"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <div className="intro-img-wrapper mx-auto">
                <img
                  src="./images/chinmay.jpeg"
                  alt="Chinmay U. Shah"
                  className="img-fluid rounded-circle shadow-lg intro-img"
                />
              </div>
            </motion.div>

            {/* Right Column - Text */}
            <motion.div
              className="col-lg-6 col-md-6"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="fw-bold mb-3 text-gradient">Quick Intro</h2>
              <p className="lead text-light">
                I’m{" "}
                <a
                  href="https://www.linkedin.com/in/chinmayushah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-color "
                >
                  <span className="fw-semibold">
                    Chinmay U. Shah
                  </span>
                </a>{" "}
                - helping founders and organizations harness the power of
                technology and innovation. I bridge creativity, business, and
                tech to bring visionary ideas to life.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* third section */}

      <section className="what-i-do-section text-white py-5">
        <div className="container">
          <motion.h2
            className="fw-bold text-center mb-5 text-gradient"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            What I Do
          </motion.h2>

          <div className="row g-4">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                className="col-md-6 col-lg-3"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: pillar.delay, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="card pillar-card h-100 text-center p-4">
                  <div className="icon mb-3">{pillar.icon}</div>
                  <h5 className="fw-bold mb-2">{pillar.title}</h5>
                  <p className="small text-light">{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* forth section */}

      <section className="featured-logos py-5">
        <div className="container text-center">
          <motion.h2
            className="fw-bold text-gradient mb-5"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Featured In / Collaborated With
          </motion.h2>

          <div className="logo-slider">
            <motion.div
              className="logos-track"
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                repeat: Infinity,
                duration: 18,
                ease: "linear",
              }}
            >
              {[...logos, ...logos].map((logo, index) => (
                <div className="logo-card" key={index}>
                  <img src={logo.img} alt={logo.name} className="img-fluid" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      {/* fifth section */}

      <section className="testimonials-section py-5">
        <Container>
          <motion.h2
            className="text-center fw-bold mb-5 text-gradient"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            What People Say
          </motion.h2>

          <Carousel indicators={false} interval={4000} pause={false}>
            {testimonials.map((testimonial, index) => (
              <Carousel.Item key={index}>
                <motion.div
                  className="d-flex justify-content-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="testimonial-card shadow-lg border-0 text-center p-4">
                    <div className="d-flex justify-content-center mb-3">
                      <img
                        src={testimonial.img}
                        alt={testimonial.name}
                        className="testimonial-img"
                      />
                    </div>
                    <Card.Body>
                      <Card.Text className="testimonial-quote mb-4">
                        “{testimonial.quote}”
                      </Card.Text>
                      <Card.Title className="fw-bold text-white">
                        {testimonial.name}
                      </Card.Title>
                      <Card.Subtitle className="text-muted small">
                        {testimonial.title}
                      </Card.Subtitle>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </section>
      {/* sixth section */}

      <section className="cta-banner py-5">
        <Container className="text-center">
          {/* Headline */}
          <motion.h2
            className="fw-bold display-6 text-gradient mb-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Let’s Build the Future Together
          </motion.h2>

          {/* Buttons */}
          <motion.div
            className="d-flex justify-content-center flex-wrap gap-3"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Button
              as={Link}
              to="/contact"
              variant="primary"
              size="lg"
              className="cta-btn btn-glow"
            >
              Contact Me
            </Button>
            <Button
              variant="outline-light"
              size="lg"
              className="cta-btn btn-outline-glow"
              href="#partner"
            >
              Partner With Me
            </Button>
          </motion.div>
        </Container>
      </section>
      <Footer />
    </div>
  );
};
export default Home;
