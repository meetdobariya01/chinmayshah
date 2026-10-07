import React, { useState } from "react";
import Header from "../../component/header/header";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Events = () => {
  const [modalShow, setModalShow] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  // ============================================
  // ALL EVENT DETAILS
  // ============================================
  const events = [
    {
      id: "event-1",
      title: "Indian Institute of Management, Ranchi.",
      description:
        "Truly inspired by their curiosity, questions, and hunger to create impact. Collaboration beats competition. The next decade belongs to leaders who build ecosystems, not empires.",
      images: [
        "/images/iim-2.jpg",
        "/images/iim-1.jpg",
        "/images/iim-3.jpeg",
        "/images/iim-4.jpeg",
      ],
    },

    {
      id: "event-2",
      title: "i-Hub Gujarat",
      description:
        "Grateful to FICCI FLO Ahmedabad Chapter and i-Hub Gujarat for organizing an inspiring seminar on Artificial Intelligence and Productivity Tools !!",
      images: [
        "/images/i-hub-2.jpg",
        "/images/i-hub-3.jpg",
        "/images/i-hub-4.jpeg",
        "/images/i-hub.jpeg",
      ],
    },

    {
      id: "event-3",
      title: "E-Cell SIT",
      description:
        "Get ready to witness innovation, inspiration, and impact, all at E-Summit 2025!",
      images: [
        "/images/e-sell-3.jpeg",
        "/images/e-sell.png",
        "/images/e-cell-2.jpeg",
        "/images/e-sell-4.jpeg",
      ],
    },

    {
      id: "event-4",
      title: "Gujarat Chamber of Commerce and Industry",
      description:
        "Join us for an eye-opening session on “AI for Entrepreneurs – Software & New-Age Tools” , on how artificial intelligence is transforming the way businesses think, build, and grow. This talk is perfect for entrepreneurs eager to harness AI-driven tools to stay ahead of the curve.",
      images: ["/images/gcci-logo.png", "/images/gcci-1.jpg"],
    },

    {
      id: "event-5",
      title: "Open Source Weekend",
      description:
        "We are excited to welcome Chinmay Shah, Director at Crescent Electronics Pvt. Ltd., to Open Source Day 2025! 🌟 Chinmay brings a wealth of experience in technology leadership and innovation, and we are thrilled to have him join us in celebrating open source, collaboration, and the future of tech.",
      images: [
        "/images/osw-3.jpg",
        "/images/osw-4.jpg",
        "/images/logo-main.jpg",
        "/images/osw-1.jpg",
      ],
    },

    {
      id: "event-6",
      title: "Startup Mahakumbh",
      description:
        "Startup Mahakumbhis the ultimate convergence of visionaries, investors, and innovators shaping the future of entrepreneurship! Kudos to the thriving Indian Startup Ecosystem for driving innovation and growth! 🇮🇳",
      images: ["/images/st-1.jpg", "/images/st-2.jpg"],
    },
    {
      id: "event-7",
      title: "ExpertBells",
      description:
        "ExpertBells is the premier platform for connecting industry experts with aspiring professionals. Join us for an engaging session on the latest trends in technology and business!",
      images: ["./images/expertbells_logo.jpg", "./images/expertbells_img.jpg"],
    },
    {
      id: "event-8",
      title: "Bridging technology with business, one classroom at a time!! ",
      description:
        "An inspiring session connecting technology, innovation, and business strategy, empowering young entrepreneurs to embrace emerging opportunities and drive meaningful growth.",
      images: [
        "./images/lj-logo.jpg",
        "./images/lj-1.jpg",
        "./images/lj-2.jpg",
      ],
    },
    {
      id: "event-9",
      title: "E-Cell, Nirma University",
      description:
        "Build Your Startup 8.0 empowered aspiring entrepreneurs through ideation, mentoring, business modelling and pitching, transforming innovative ideas into impactful startups.",
      images: [
        "./images/e-cell-nirma-1.jpg",
        "./images/e-cell-nirma-2.jpg",
        "./images/e-cell-nirma-3.jpg",
      ],
    },
    {
      id: "event-10",
      title: "National Startup Week - Ahmedabad",
      description:
        "Celebrating National Startup Week with inspiring events, pitches, powerful collaborations, and meaningful connections shaping Ahmedabad’s unstoppable startup ecosystem.",
      images: [
        "./images/AU-logo.jpg",
        "./images/AU-1.jpg",
        "./images/AU-2.jpg",
        "./images/AU-3.jpg",
      ],
    },
  ];

  // ============================================
  // CREATE TWO-IMAGE SLIDES FOR EACH EVENT
  // ============================================
  const createSlides = (images) => {
    const slides = [];

    for (let i = 0; i < images.length; i += 2) {
      slides.push(images.slice(i, i + 2));
    }

    return slides;
  };

  // ============================================
  // OPEN IMAGE MODAL
  // ============================================
  const handleImageClick = (image) => {
    setCurrentImage(image);
    setModalShow(true);
  };

  return (
    <div>
      {/* Header */}
      <Header />

      {/* ============================================
          EVENTS
      ============================================ */}
      {events.map((event, eventIndex) => {
        const slides = createSlides(event.images);

        return (
          <div className="container my-5 py-5" key={event.id}>
            <div className="p-4 rounded-4" style={{ background: "#eef2fb" }}>
              <div className="row align-items-center">
                {/* ============================================
                    LEFT CONTENT
                ============================================ */}
                <div className="col-lg-6 mb-4">
                  <h2 className="fw-bold text-success mb-3">{event.title}</h2>

                  <p className="text-secondary" style={{ fontSize: "18px" }}>
                    {event.description}
                  </p>
                </div>

                {/* ============================================
                    RIGHT CAROUSEL
                ============================================ */}
                <div className="col-lg-6">
                  <div
                    id={`eventCarousel-${event.id}`}
                    className="carousel slide"
                    data-bs-ride="carousel"
                    data-bs-interval="3000"
                  >
                    <div className="carousel-inner rounded-4 shadow-lg">
                      {slides.map((pair, slideIndex) => (
                        <div
                          className={`carousel-item ${
                            slideIndex === 0 ? "active" : ""
                          }`}
                          key={slideIndex}
                        >
                          <div className="d-flex gap-3">
                            {pair.map((image, imageIndex) => (
                              <img
                                key={imageIndex}
                                src={image}
                                alt={event.title}
                                className="rounded-4"
                                style={{
                                  width: "50%",
                                  height: "350px",
                                  objectFit: "cover",
                                  cursor: "pointer",
                                }}
                                onClick={() => handleImageClick(image)}
                              />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* ============================================
                        PREVIOUS BUTTON
                    ============================================ */}
                    {slides.length > 1 && (
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target={`#eventCarousel-${event.id}`}
                        data-bs-slide="prev"
                      >
                        <span className="carousel-control-prev-icon"></span>
                      </button>
                    )}

                    {/* ============================================
                        NEXT BUTTON
                    ============================================ */}
                    {slides.length > 1 && (
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target={`#eventCarousel-${event.id}`}
                        data-bs-slide="next"
                      >
                        <span className="carousel-control-next-icon"></span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* ============================================
          FULLSCREEN IMAGE MODAL
      ============================================ */}
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        centered
        size="xl"
      >
        <Modal.Body className="p-0">
          <img
            src={currentImage}
            alt="Full Event"
            className="w-100 rounded-3"
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Events;
