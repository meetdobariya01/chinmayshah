import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../component/header/header";
import Footer from "../../component/footer/footer";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import "./links.css";
const fadeUp = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } };
const sectionData = [
  {
    id: 1,
    title: "₹1,000 Cr",
    heading: "Gujarat Startup Funding - At a Glance",
    description:
      "Under the Gujarat Science, Technology & Innovation Policy 2026–31, Gujarat has established a dedicated ₹1,000 crore Innovation Fund to strengthen research, startups and advanced technology development",
    button: "Explore Opportunity",
    image: "./images/links/1.png",
    reverse: false,
    link: "https://dst.gujarat.gov.in/Home/stip?utm_source=chatgpt.com",
  },
  {
    id: 2,
    title: "₹2.5–10 Lakh",
    heading: "Startup Srujan Seed Support - S4",
    description:
      "i-Hub Gujarat initiative empowers innovative startups to progress from Proof of Concept toward Product and Market stages. Designed for early-stage startups, product and technology ventures, student innovators, DeepTech businesses, and teams building PoC or MVP solutions for real-world impact.",
    button: "Explore Opportunity",
    image: "./images/links/2.png",
    reverse: true,
    link: "https://ihubgujarat.in/srujan?utm_source=chatgpt.com",
  },
  {
    id: 3,
    title: "₹50 Lakh–₹10 Cr",
    heading: "Startup RISE",
    description:
      "Startup RISE empowers early-stage startups to pitch directly to investors and unlock private capital. As part of Startup Conclave 2026, it supports ventures beyond the idea stage, actively raising funds, seeking angel, VC, or strategic investment, with a credible business case.",
    button: "Explore Opportunity",
    image: "./images/links/3.png",
    reverse: false,
    link: "https://rise.ihubgujarat.in/startup-rise-application?utm_source=chatgpt.com",
  },
  {
    id: 4,
    title: "₹500 Cr",
    heading: "SSIP 2.0 Ecosystem Support",
    description:
      "Gujarat’s Student Startup & Innovation Policy 2.0 strengthens the student innovation ecosystem with a ₹500 crore corpus. It supports early-stage innovators and startups through funding for innovation, prototyping, intellectual property, incubation, and commercialisation, helping promising ideas move toward market-ready ventures.",
    button: "Explore Opportunity",
    image: "./images/links/4.png",
    reverse: true,
    link: "#",
  },
  // {
  //   id: 5,
  //   title: "25th June 2026",
  //   heading: "SIDBI Seed Fund Program",
  //   description:
  //     "SIDBI Seed Fund Programme provides early-stage startups with financial assistance to transform innovative ideas into scalable businesses. The program supports product development, market validation, commercialization, and growth through seed funding, mentorship, and ecosystem support.",
  //   button: "Explore Opportunity",
  //   image: "./images/links/5.png",
  //   reverse: false,
  //   link: "https://www.sineiitb.org/",
  // },
  // {
  //   id: 6,
  //   title: "25th June 2026",
  //   heading: "Elevate 2026 – Startup Karnataka Grant For Founders",
  //   description:
  //     "Elevate 2026 is the Government of Karnataka's flagship startup grant program, providing funding, mentorship, industry connections, and ecosystem support to help innovative founders validate ideas, accelerate growth, and scale technology-driven startups successfully.",
  //   button: "Explore Opportunity",
  //   image: "./images/links/6.png",
  //   reverse: true,
  //   link: "https://www.startupindia.gov.in/content/sih/en/state-startup-policies/Karnataka-state-policy.html",
  // },
];

const Links = () => {
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
      <div className="links-page">
        <section className="links-hero">
          {" "}
          <Container>
            {" "}
            <motion.div
              className="hero-content"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.9 }}
            >
              {" "}
              <span className="hero-label">
                {" "}
                STARTUP • FUNDING • OPPORTUNITIES{" "}
              </span>{" "}
              <h1>
                {" "}
                Opportunities That <span> Move Ideas Forward.</span>{" "}
              </h1>{" "}
              <p>
                {" "}
                Discover carefully selected startup programs, grants, incubation
                opportunities, and initiatives designed to help ambitious
                founders build and scale.{" "}
              </p>{" "}
              <div className="hero-line">
                {" "}
                <span></span> <small>CURATED OPPORTUNITIES</small>{" "}
              </div>{" "}
            </motion.div>{" "}
          </Container>{" "}
        </section>{" "}
        {/* ========================================= OPPORTUNITIES ========================================= */}{" "}
        <section className="opportunities-section container my-5">
          {" "}
          <Container fluid className="p-0">
            {" "}
            {sectionData.map((item, index) => (
              <motion.div
                key={item.id}
                className={`opportunity ${item.reverse ? "opportunity-reverse" : ""}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={fadeUp}
                transition={{ duration: 0.8, delay: index * 0.05 }}
              >
                {" "}
                <Row className="g-0 align-items-stretch">
                  {" "}
                  {/* ===================================== IMAGE ===================================== */}{" "}
                  <Col
                    lg={6}
                    md={6}
                    xs={12}
                    className={`opportunity-image ${item.reverse ? "order-md-2" : "order-md-1"}`}
                  >
                    {" "}
                    <div className="image-wrapper">
                      {" "}
                      <img src={item.image} alt={item.heading} />{" "}
                      <div className="image-overlay"></div>{" "}
                      <div className="image-number">
                        {" "}
                        {String(index + 1).padStart(2, "0")}{" "}
                      </div>{" "}
                      <div className="image-date"> {item.title} </div>{" "}
                    </div>{" "}
                  </Col>{" "}
                  {/* ===================================== CONTENT ===================================== */}{" "}
                  <Col
                    lg={6}
                    md={6}
                    xs={12}
                    className={`opportunity-content ${item.reverse ? "order-md-1" : "order-md-2"}`}
                  >
                    {" "}
                    <div className="content-inner">
                      {" "}
                      <div className="content-top">
                        {" "}
                        <span className="opportunity-count">
                          {" "}
                          / {String(index + 1).padStart(2, "0")}{" "}
                        </span>{" "}
                        <span className="opportunity-category">
                          {" "}
                          STARTUP OPPORTUNITY{" "}
                        </span>{" "}
                      </div>{" "}
                      <div className="gold-line"></div> <h2>{item.heading}</h2>{" "}
                      <p>{item.description}</p>{" "}
                      <div className="content-bottom">
                        {" "}
                        <span className="program-date">
                          <small>BUDGET</small> {item.title}{" "}
                        </span>{" "}
                        <button
                          className="classic-btn"
                          onClick={() => window.open(item.link, "_blank")}
                        >
                          {" "}
                          <span>{item.button}</span>{" "}
                          <span className="btn-arrow"> ↗ </span>{" "}
                        </button>{" "}
                      </div>{" "}
                    </div>{" "}
                  </Col>{" "}
                </Row>{" "}
              </motion.div>
            ))}{" "}
          </Container>{" "}
        </section>{" "}
      </div>
      <Footer />
    </div>
  );
};
export default Links;
