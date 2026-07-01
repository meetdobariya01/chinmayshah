import React from "react";
import Header from "../../component/header/header";
import Footer from "../../component/footer/footer";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./links.css";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 70,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};
const sectionData = [
  {
    id: 1,
    title: "18th June 2026",
    heading: "UDBHAV 3.0 – Blockchain Incubation Program by IIML EIC",
    description:
      "UDBHAV 3.0 is a 6-month, no-cost blockchain incubation program by the IIM Lucknow Enterprise Incubation Centre (IIML EIC). Designed for innovative startups, the program provides expert mentorship, product validation, technical guidance, networking opportunities, and access to advanced innovation labs",
    button: "Learn More",
    bg: "dark-bg",
    btn: "",
    image: "./images/links/1.png",
    reverse: false,
    link: "https://startupgrantshub.com/opportunities/udbhav-3-0-blockchain-incubation-program-by-iiml-eic/",
  },
  {
    id: 2,
    title: "19th June 2026",
    heading: "SMT. Raj Kumari Jain Seed Fund for Innovative",
    description:
      "The SMT. Raj Kumari Jain Seed Fund for Innovative Ideas provides early-stage financial support to startups and entrepreneurs, helping transform innovative concepts into market-ready solutions through funding, mentorship, and business development assistance.",
    button: "Learn More",
    bg: "light-bg",
    btn: "dark",
    image: "./images/links/2.png",
    reverse: true,
    link: "https://pieds-bitspilani.org/",
  },
  {
    id: 3,
    title: "20th June 2026",
    heading: "Nidhi Seed Support Program    ",
    description:
      "The NIDHI Seed Support Program provides early-stage startups with seed funding, mentorship, and business support to transform innovative ideas into market-ready products, helping entrepreneurs validate, scale, and achieve sustainable growth.",
    button: "Learn More",
    bg: "dark-bg",
    btn: "",
    image: "./images/links/3.png",
    reverse: false,
    link: "https://www.aicbanasthali.org/",
  },
  {
    id: 4,
    title: "25th June 2026",
    heading: "Tie Women Program 2026 Global Women Entrepreneurs Initiative",
    description:
      "The TiE Women Program 2026 is a global initiative empowering women entrepreneurs through mentorship, education, networking, funding opportunities, and international exposure, helping women-led startups accelerate innovation, scale their businesses, and achieve sustainable growth worldwide.",
    button: "Learn More",
    bg: "light-bg",
    btn: "dark",
    image: "./images/links/4.png",
    reverse: true,
    link: "https://tie.org/",
  },
  {
    id: 5,
    title: "25th June 2026",
    heading: "Sidbi Seed Fund Program ",
    description:
      "SIDBI Seed Fund Programme provides early-stage startups with financial assistance to transform innovative ideas into scalable businesses. The program supports product development, market validation, commercialization, and growth through seed funding, mentorship, and ecosystem support.",
    button: "Learn More",
    bg: "dark-bg",
    btn: "",
    image: "./images/links/5.png",
    reverse: false,
    link: "https://www.sineiitb.org/",
  },
  {
    id: 6,
    title: "25th June 2026",
    heading: "Elevate 2026-Startup Karnataka Grant For Founders",
    description:
      "Elevate 2026 is the Government of Karnataka's flagship startup grant program, providing funding, mentorship, industry connections, and ecosystem support to help innovative founders validate ideas, accelerate growth, and scale technology-driven startups successfully.",
    button: "Learn More",
    bg: "light-bg",
    btn: "dark",
    image: "./images/links/6.png",
    reverse: true,
    link: "https://www.startupindia.gov.in/content/sih/en/state-startup-policies/Karnataka-state-policy.html",
  },
];

const Links = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Header */}
      <Header />

      <section className="brand-section ">

        <h1 className="text-center mb-5 text-dark mt-5">Investers</h1>
        <Container fluid className="p-0">
          {sectionData.map((item) => (
            <Row
              key={item.id}
              className={`g-0 ${item.reverse ? "flex-md-row-reverse" : ""}`}
            >
              {/* Text */}
              <Col lg={7} md={6} xs={12}>
                <motion.div
                  className={`brand-text ${item.bg}`}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h2>{item.heading}</h2>

                  <p>{item.description}</p>

                  <span className="small-title">Duration: {item.title}</span>

                  <button
                    className={`premium-btn ${item.btn}`}
                    onClick={() => window.open(item.link, "_blank")}
                  >
                    {item.button}
                  </button>
                </motion.div>
              </Col>

              {/* Image */}
              <Col lg={5} md={6} xs={12}>
                <motion.div
                  className="image-box"
                  initial={{
                    opacity: 0,
                    scale: 1.15,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                  }}
                >
                  <img src={item.image} alt={item.title} />
                </motion.div>
              </Col>
            </Row>
          ))}
        </Container>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Links;
