import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

import Header from "../../component/header/header";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

const Events = () => {
  // const navigate = useNavigate();

  const [modalShow, setModalShow] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  // CAROUSEL - 1
  const images1 = [
    "/images/iim-3.jpeg",
    "/images/iim-4.jpeg",
    "/images/iim-2.jpg",
    "/images/iim-1.jpg",
  ];
  const slides1 = [];
  for (let i = 0; i < images1.length; i += 2) {
    slides1.push(images1.slice(i, i + 2));
  }

  // CAROUSEL - 2
  const images2 = [
    "/images/i-hub.jpeg",
    "/images/i-hub-2.jpg",
    "/images/i-hub-3.jpg",
    "/images/i-hub-4.jpeg",
  ];
  const slides2 = [];
  for (let i = 0; i < images2.length; i += 2) {
    slides2.push(images2.slice(i, i + 2));
  }

  // CAROUSEL - 3
  const images3 = [
    "/images/e-sell.png",
    "/images/e-cell-2.jpeg",
    "/images/e-sell-3.jpeg",
    "/images/e-sell-4.jpeg",
  ];
  const slides3 = [];
  for (let i = 0; i < images3.length; i += 2) {
    slides3.push(images3.slice(i, i + 2));
  }

  // CAROUSEL - 4
  const images4 = [
    "/images/gcci-logo.png",
    "/images/gcci-1.jpg",
    // "/images/g3.jpg",
    // "/images/g4.jpg",
  ];
  const slides4 = [];
  for (let i = 0; i < images4.length; i += 2) {
    slides4.push(images4.slice(i, i + 2));
  }

  // CAROUSEL - 5
  const images5 = [
    "/images/logo-main.jpg",
    "/images/osw-1.jpg",
    "/images/osw-3.jpg",
    "/images/osw-4.jpg",
  ];
  const slides5 = [];
  for (let i = 0; i < images5.length; i += 2) {
    slides5.push(images5.slice(i, i + 2));
  }
  // CAROUSEL - 6
  const images6 = [
    "/images/st-1.jpg",
    "/images/st-2.jpg",
    // "/images/h3.jpg",
    // "/images/h4.jpg",
  ];
  const slides6 = [];
  for (let i = 0; i < images6.length; i += 2) {
    slides6.push(images6.slice(i, i + 2));
  }

 
  return (
    <div>
      {/* Header */}
      <Header />

      {/* CENTER BUTTON */}
      <div className="d-flex justify-content-center">
        <NavLink
          to="/certificate"
          className="btn btn-primary px-4 py-2 mt-3 fw-semibold"
        >
          Get Certificate
        </NavLink>
      </div>

      {/* CAROUSEL SECTION-1 */}
      <div className="container my-5 py-5">
        <div className="p-4 rounded-4" style={{ background: "#eef2fb" }}>
          <div className="row align-items-center">
            {/* LEFT CONTENT */}
            <div className="col-lg-6 mb-4">
              <h2 className="fw-bold text-success mb-3">
                Indian Institute of Management, Ranchi.
              </h2>

              <p className="text-secondary" style={{ fontSize: "18px" }}>
                Truly inspired by their curiosity, questions, and hunger to
                create impact. Collaboration beats competition. The next decade
                belongs to leaders who build ecosystems, not empires.
              </p>
            </div>

            {/* RIGHT MULTI-ITEM CAROUSEL */}
            <div className="col-lg-6">
              <div
                id="twoImageCarousel"
                className="carousel slide"
                data-bs-ride="carousel"
                data-bs-interval="3000"
              >
                <div className="carousel-inner rounded-4 shadow-lg">
                  {slides1.map((pair, index) => (
                    <div
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                      key={index}
                    >
                      <div className="d-flex gap-3">
                        {pair.map((img, i) => (
                          <img
                            key={i}
                            src={img}
                            alt="event"
                            className="rounded-4"
                            style={{
                              width: "50%",
                              height: "350px",
                              objectFit: "cover",
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              setCurrentImage(img);
                              setModalShow(true);
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Controls */}
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#twoImageCarousel"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon"></span>
                </button>

                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#twoImageCarousel"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FULLSCREEN MODAL */}
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        centered
        size="xl"
      >
        <Modal.Body className="p-0">
          <img src={currentImage} alt="full" className="w-100 rounded-3" />
        </Modal.Body>
      </Modal>
      {/* caresoul-2 */}

      <div className="container my-5 py-5">
        <div className="p-4 rounded-4" style={{ background: "#eef2fb" }}>
          <div className="row align-items-center">
            {/* LEFT CONTENT */}
            <div className="col-lg-6 mb-4">
              <h2 className="fw-bold text-success mb-3">i-Hub Gujarat</h2>

              <p className="text-secondary" style={{ fontSize: "18px" }}>
                Grateful to FICCI FLO Ahmedabad Chapter and i-Hub Gujarat for
                organizing an inspiring seminar on Artificial Intelligence and
                Productivity Tools !!
              </p>
            </div>

            {/* RIGHT MULTI-ITEM CAROUSEL */}
            <div className="col-lg-6">
              <div
                id="carouselTwo"
                className="carousel slide"
                data-bs-ride="carousel"
                data-bs-interval="3000"
              >
                <div className="carousel-inner rounded-4 shadow-lg">
                  {slides2.map((pair, index) => (
                    <div
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                      key={index}
                    >
                      <div className="d-flex gap-3">
                        {pair.map((img, i) => (
                          <img
                            key={i}
                            src={img}
                            alt="event"
                            className="rounded-4"
                            style={{
                              width: "50%",
                              height: "350px",
                              objectFit: "cover",
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              setCurrentImage(img);
                              setModalShow(true);
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Controls */}
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselTwo"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon"></span>
                </button>

                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselTwo"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FULLSCREEN MODAL */}
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        centered
        size="xl"
      >
        <Modal.Body className="p-0">
          <img src={currentImage} alt="full" className="w-100 rounded-3" />
        </Modal.Body>
      </Modal>
      {/* caresoul-3 */}

      <div className="container my-5 py-5">
        <div className="p-4 rounded-4" style={{ background: "#eef2fb" }}>
          <div className="row align-items-center">
            {/* LEFT CONTENT */}
            <div className="col-lg-6 mb-4">
              <h2 className="fw-bold text-success mb-3">E-Cell SIT</h2>

              <p className="text-secondary" style={{ fontSize: "18px" }}>
                Get ready to witness innovation, inspiration, and impact, all at
                E-Summit 2025!
              </p>
            </div>

            {/* RIGHT MULTI-ITEM CAROUSEL */}
            <div className="col-lg-6">
              <div
                id="carousel3"
                className="carousel slide"
                data-bs-ride="carousel"
                data-bs-interval="3000"
              >
                <div className="carousel-inner rounded-4 shadow-lg">
                  {slides3.map((pair, index) => (
                    <div
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                      key={index}
                    >
                      <div className="d-flex gap-3">
                        {pair.map((img, i) => (
                          <img
                            key={i}
                            src={img}
                            alt="event"
                            className="rounded-4"
                            style={{
                              width: "50%",
                              height: "350px",
                              objectFit: "cover",
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              setCurrentImage(img);
                              setModalShow(true);
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Controls */}
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carousel3"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon"></span>
                </button>

                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carousel3"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FULLSCREEN MODAL */}
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        centered
        size="xl"
      >
        <Modal.Body className="p-0">
          <img src={currentImage} alt="full" className="w-100 rounded-3" />
        </Modal.Body>
      </Modal>
      {/* caresoul-4 */}

      <div className="container my-5 py-5">
        <div className="p-4 rounded-4" style={{ background: "#eef2fb" }}>
          <div className="row align-items-center">
            {/* LEFT CONTENT */}
            <div className="col-lg-6 mb-4">
              <h2 className="fw-bold text-success mb-3">
                Gujarat Chamber of Commerce and Industry
              </h2>

              <p className="text-secondary" style={{ fontSize: "18px" }}>
                Join us for an eye-opening session on “AI for Entrepreneurs –
                Software & New-Age Tools” , on how artificial intelligence is
                transforming the way businesses think, build, and grow. This
                talk is perfect for entrepreneurs eager to harness AI-driven
                tools to stay ahead of the curve.
              </p>
            </div>

            {/* RIGHT MULTI-ITEM CAROUSEL */}
            <div className="col-lg-6">
              <div
                id="twoImageCarousel"
                className="carousel slide"
                data-bs-ride="carousel"
                data-bs-interval="3000"
              >
                <div className="carousel-inner rounded-4 shadow-lg">
                  {slides4.map((pair, index) => (
                    <div
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                      key={index}
                    >
                      <div className="d-flex gap-3">
                        {pair.map((img, i) => (
                          <img
                            key={i}
                            src={img}
                            alt="event"
                            className="rounded-4"
                            style={{
                              width: "50%",
                              height: "350px",
                              objectFit: "cover",
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              setCurrentImage(img);
                              setModalShow(true);
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Controls */}
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#twoImageCarousel"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon"></span>
                </button>

                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#twoImageCarousel"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FULLSCREEN MODAL */}
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        centered
        size="xl"
      >
        <Modal.Body className="p-0">
          <img src={currentImage} alt="full" className="w-100 rounded-3" />
        </Modal.Body>
      </Modal>
      {/* caresoul-5 */}

      <div className="container my-5 py-5">
        <div className="p-4 rounded-4" style={{ background: "#eef2fb" }}>
          <div className="row align-items-center">
            {/* LEFT CONTENT */}
            <div className="col-lg-6 mb-4">
              <h2 className="fw-bold text-success mb-3">Open Source Weekend</h2>

              <p className="text-secondary" style={{ fontSize: "18px" }}>
                We are excited to welcome Chinmay Shah, Director at Crescent
                Electronics Pvt. Ltd., to Open Source Day 2025! 🌟 Chinmay
                brings a wealth of experience in technology leadership and
                innovation, and we are thrilled to have him join us in
                celebrating open source, collaboration, and the future of tech.
              </p>
            </div>

            {/* RIGHT MULTI-ITEM CAROUSEL */}
            <div className="col-lg-6">
              <div
                id="twoImageCarousel5"
                className="carousel slide"
                data-bs-ride="carousel"
                data-bs-interval="3000"
              >
                <div className="carousel-inner rounded-4 shadow-lg">
                  {slides5.map((pair, index) => (
                    <div
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                      key={index}
                    >
                      <div className="d-flex gap-3">
                        {pair.map((img, i) => (
                          <img
                            key={i}
                            src={img}
                            alt="event"
                            className="rounded-4"
                            style={{
                              width: "50%",
                              height: "350px",
                              objectFit: "cover",
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              setCurrentImage(img);
                              setModalShow(true);
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#twoImageCarousel5"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon"></span>
                </button>

                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#twoImageCarousel5"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FULLSCREEN MODAL */}
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        centered
        size="xl"
      >
        <Modal.Body className="p-0">
          <img src={currentImage} alt="full" className="w-100 rounded-3" />
        </Modal.Body>
      </Modal>

      {/* caresoul-6 */}

      <div className="container my-5 py-5">
        <div className="p-4 rounded-4" style={{ background: "#eef2fb" }}>
          <div className="row align-items-center">
            {/* LEFT CONTENT */}
            <div className="col-lg-6 mb-4">
              <h2 className="fw-bold text-success mb-3">Startup Mahakumbh</h2>

              <p className="text-secondary" style={{ fontSize: "18px" }}>
                Startup Mahakumbhis the ultimate convergence of visionaries,
                investors, and innovators shaping the future of
                entrepreneurship! Kudos to the thriving Indian Startup Ecosystem
                for driving innovation and growth! 🇮🇳
              </p>
            </div>

            {/* RIGHT MULTI-ITEM CAROUSEL */}
            <div className="col-lg-6">
              <div
                id="twoImageCarousel"
                className="carousel slide"
                data-bs-ride="carousel"
                data-bs-interval="3000"
              >
                <div className="carousel-inner rounded-4 shadow-lg">
                  {slides6.map((pair, index) => (
                    <div
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                      key={index}
                    >
                      <div className="d-flex gap-3">
                        {pair.map((img, i) => (
                          <img
                            key={i}
                            src={img}
                            alt="event"
                            className="rounded-4"
                            style={{
                              width: "50%",
                              height: "350px",
                              objectFit: "cover",
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              setCurrentImage(img);
                              setModalShow(true);
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Controls */}
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#twoImageCarousel"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon"></span>
                </button>

                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#twoImageCarousel"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FULLSCREEN MODAL */}
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        centered
        size="xl"
      >
        <Modal.Body className="p-0">
          <img src={currentImage} alt="full" className="w-100 rounded-3" />
        </Modal.Body>
      </Modal>
      {/* caresoul-4 */}

      

      
    </div>
  );
};

export default Events;
