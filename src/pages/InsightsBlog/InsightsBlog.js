import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../component/header/header";
import Footer from "../../component/footer/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import "./InsightsBlog.css";
import {
  FaCogs,
  FaBullhorn,
  FaRobot,
  FaChartLine,
  FaChartPie,
  FaBolt,
  FaFunnelDollar,
  FaCubes,
  FaSmileBeam,
  FaCheckCircle,
} from "react-icons/fa";

const services = [
  {
    title: "Business Process Automation",
    icon: <FaCogs />,
    items: [
      "Workflow design and automation",
      "Lead capture and qualification systems",
      "CRM integrations",
      "Customer follow-up automation",
      "Task and operations management",
      "Cross-platform business integrations",
    ],
  },
  {
    title: "Marketing Automation",
    icon: <FaBullhorn />,
    items: [
      "Email marketing sequences",
      "Lead nurturing funnels",
      "Customer onboarding workflows",
      "Campaign automation",
      "Audience segmentation",
      "Performance tracking and reporting",
    ],
  },
  {
    title: "AI-Powered Solutions",
    icon: <FaRobot />,
    items: [
      "AI chatbot implementation",
      "AI-assisted content workflows",
      "Business process optimization",
      "Customer support automation",
      "Intelligent lead engagement systems",
    ],
  },
  {
    title: "Digital Growth Strategy",
    icon: <FaChartLine />,
    items: [
      "Go-to-market planning",
      "Customer journey mapping",
      "Content strategy development",
      "Brand positioning",
      "Marketing campaign planning",
      "Growth-focused digital roadmaps",
    ],
  },
  {
    title: "Analytics & Reporting",
    icon: <FaChartPie />,
    items: [
      "Performance dashboards",
      "Campaign tracking",
      "Conversion analysis",
      "Customer behavior insights",
      "Data-driven decision making",
      "ROI measurement systems",
    ],
  },
];

const keyResults = [
  {
    title: "Increased Operational Efficiency",
    desc: "Automated repetitive tasks to reduce manual work and improve productivity across business operations.",
    icon: <FaBolt />,
  },
  {
    title: "Better Lead Conversion",
    desc: "Created automated customer journeys that nurture prospects and improve conversion rates through strategic touchpoints.",
    icon: <FaFunnelDollar />,
  },
  {
    title: "Scalable Marketing Systems",
    desc: "Built repeatable frameworks for content, email marketing, and customer engagement that support business growth.",
    icon: <FaCubes />,
  },
  {
    title: "Improved Customer Experience",
    desc: "Implemented automation solutions that provide faster responses, streamlined communication, and consistent customer interactions.",
    icon: <FaSmileBeam />,
  },
];

const tools = [
  "AI Automation Platforms",
  "CRM Systems",
  "Email Marketing Tools",
  "Workflow Automation Software",
  "Analytics & Reporting Dashboards",
  "Marketing Automation Platforms",
  "Customer Journey Mapping Tools",
  "Lead Generation Systems",
];

const approachSteps = [
  {
    step: "1",
    title: "Discovery & Strategy",
    desc: "Understanding business goals, customer journeys, and operational challenges.",
  },
  {
    step: "2",
    title: "System Design",
    desc: "Creating automation workflows and growth strategies tailored to business objectives.",
  },
  {
    step: "3",
    title: "Implementation",
    desc: "Deploying automation systems, integrations, and marketing frameworks.",
  },
  {
    step: "4",
    title: "Optimization",
    desc: "Monitoring performance, refining workflows, and scaling successful processes.",
  },
];

export const InsightsBlog = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div>
      <Header />

      {/* HERO SECTION */}
      <section className="insights-hero d-flex align-items-center text-center text-white py-5">
        <div className="hero-bg-automation">
          <img
            src="/images/automation_overview.png"
            alt="Futuristic Automation Backdrop"
            className="hero-bg-automation-img"
          />
          <div className="overlay"></div>
        </div>

        <div className="container py-4">
          <motion.h1
            className="fw-bold mb-3"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            AI-Powered Workflows & Digital Growth Solutions
          </motion.h1>

          <motion.p
            className="lead"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Streamline your operations, automate complex workflows, and build systems that scale.
          </motion.p>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="overview-section py-5 text-white">
        <div className="container py-4">
          <motion.div
            className="overview-box p-5 text-center"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="fw-bold mb-4 text-gradient">Overview</h3>
            <p className="overview-text mx-auto mb-0">
              Helping businesses streamline operations, automate repetitive tasks, and build scalable
              marketing systems through AI-powered workflows, automation strategies, and digital growth
              solutions. Focused on improving efficiency, increasing lead generation, and creating customer
              journeys that convert.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICES grid SECTION */}
      <section className="services-grid-section py-5 text-white">
        <div className="container py-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-5"
          >
            <h2 className="section-title mb-3">Services Delivered</h2>
            <p className="section-subtitle mx-auto">
              Empowering organization architectures through advanced automation and systems design.
            </p>
          </motion.div>

          <motion.div
            className="row justify-content-center g-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {services.map((service, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <motion.div
                  className="service-grid-card p-4 d-flex flex-column align-items-start"
                  variants={itemVariants}
                >
                  <div className="card-icon-wrapper mb-3">{service.icon}</div>
                  <h4 className="service-grid-title mb-3">{service.title}</h4>
                  <ul className="service-list">
                    {service.items.map((item, itemIdx) => (
                      <li className="service-list-item" key={itemIdx}>
                        <span className="list-marker">
                          <FaCheckCircle />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* KEY RESULTS SECTION */}
      <section className="results-section py-5 text-white">
        <div className="container py-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-5"
          >
            <h2 className="section-title mb-3">Key Results</h2>
            <p className="section-subtitle mx-auto">
              Real business metrics driven by efficient process designs and scalable workflows.
            </p>
          </motion.div>

          <motion.div
            className="row justify-content-center g-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {keyResults.map((result, index) => (
              <div className="col-md-6" key={index}>
                <motion.div
                  className="result-card p-4 h-100 d-flex flex-column align-items-start"
                  variants={itemVariants}
                >
                  <div className="result-icon-wrapper">{result.icon}</div>
                  <h4 className="result-title">{result.title}</h4>
                  <p className="result-desc">{result.desc}</p>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TOOLS & TECHNOLOGIES SECTION */}
      <section className="tools-section py-5 text-white">
        <div className="container py-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-5"
          >
            <h2 className="section-title mb-3">Tools & Technologies</h2>
            <p className="section-subtitle mx-auto">
              Leveraging leading platforms to configure resilient, performant automated setups.
            </p>
          </motion.div>

          <motion.div
            className="tools-grid mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ maxWidth: "850px" }}
          >
            {tools.map((tool, index) => (
              <motion.div className="tool-badge" variants={itemVariants} key={index}>
                {tool}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROJECT APPROACH SECTION */}
      <section className="approach-section py-5 text-white">
        <div className="container py-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-5"
          >
            <h2 className="section-title mb-3">Project Approach</h2>
            <p className="section-subtitle mx-auto">
              A structured roadmap ensuring strategic alignment, seamless launches, and continuous optimization.
            </p>
          </motion.div>

          <div className="timeline-container d-flex flex-column">
            <div className="timeline-line"></div>
            {approachSteps.map((step, index) => (
              <motion.div
                className="timeline-step"
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="timeline-node">{step.step}</div>
                <div className="timeline-content-box">
                  <h4 className="timeline-step-title">{step.title}</h4>
                  <p className="timeline-step-desc">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InsightsBlog;