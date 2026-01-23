import React from 'react'
import Header from '../../component/header/header';
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import "./Ventures.css";
import Footer from '../../component/footer/footer';

const ventures = [
  {
    name: "Startup Steroids",
    // logo: "./images/startups.png",
    desc: "Empowering early-stage founders with investor access and global exposure.",
    link: "https://startupsteroid.in",
  },
  {
    name: "Starlight Tech Labs",
    logo: "https://via.placeholder.com/120x120?text=Startunico",
    desc: "Innovative IT solutions driving transformation",
    link: "https://starlighttechlabs.com",
  },
  {
    name: "Crescent Electronics",
    logo: "https://via.placeholder.com/120x120?text=Crescent",
    desc: "Leading edge in semiconductors and advanced electronics manufacturing.",
    link: "https://crescentworld.com",
  },
  {
    name: "HorseTech Analytics",
    logo: "https://via.placeholder.com/120x120?text=BDU",
    desc: "Technology-driven company building future-ready products.",
    link: "https://bharatdigitalacademy.com/",
  },
  {
    name: "Accomation",
    logo: "https://via.placeholder.com/120x120?text=Rogue+Opportunities",
    desc: "AI accounting automation for businesses",
    link: "https://accomation.io",
  },
  // {
  //   name: "Future Initiatives",
  //   logo: "https://via.placeholder.com/120x120?text=Future+Initiatives",
  //   desc: "Driving next-gen innovation and ecosystem acceleration programs.",
  //   link: "https://futuresinitiative.org",
  // },
];

export const Ventures = () => {
  return (
    <div>
      {/* header */}
      <Header/>
      {/* first section */}

       <section className="hero-title-section d-flex align-items-center justify-content-center text-center text-white">
      <div className="overlay"></div>

      <motion.div
        className="container position-relative"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="display-4 fw-bold hero-heading mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Building the Ecosystem, <br />
          <span className="text-accent">One Venture at a Time.</span>
        </motion.h1>

        <motion.div
          className="underline mx-auto mt-3"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 1 }}
        />
      </motion.div>
    </section>
    {/* secound section */}
    <section className="portfolio-section py-5">
      <div className="container text-center">
        <motion.h2
          className="fw-bold mb-5 text-white"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Portfolio Ventures
        </motion.h2>

        <div className="row g-4">
          {ventures.map((v, index) => (
            <motion.div
              className="col-md-4"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <div className="card portfolio-card h-100 text-center border-0 shadow-lg">
                <div className="card-body">
                  {/* <img
                    src={v.logo}
                    alt={v.name}
                    className="img-fluid rounded-circle mb-3 venture-logo"
                  /> */}
                  <h5 className="fw-bold text-white mb-2">{v.name}</h5>
                  <p className="text-light small mb-3">{v.desc}</p>
                  <a
                    href={v.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-info btn-sm"
                  >
                    Visit Site
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    {/* third section */}
 <section className="cta-section d-flex align-items-center justify-content-center text-center">
      <div className="container">
        <motion.h2
          className="fw-bold text-white mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Have a startup or ecosystem idea? <br />
          Let’s collaborate.
        </motion.h2>

        <motion.div
          className="d-flex flex-wrap justify-content-center gap-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#"
            className="btn btn-outline-info btn-lg rounded-pill px-4 py-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Pitch Your Startup
          </motion.a>

          <motion.a
            href="#"
            className="btn btn-info btn-lg rounded-pill px-4 py-2 text-dark fw-semibold"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Invest With Us
          </motion.a>
        </motion.div>
      </div>
    </section>
    {/* footer */}
    <Footer/>

    </div>
  )
}
export default Ventures;
