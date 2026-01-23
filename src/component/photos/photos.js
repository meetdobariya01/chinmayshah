import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import "./photos.css";
const photos = [
  {
    id: 1,
    src: "/images/p-1.jpeg",
    
  },
  {
    id: 2,
    src: "/images/p-2.jpeg",
   
  },
  {
    id: 3,
    src: "/images/p-3.jpeg",
   
  },
  {
    id: 4,
    src: "/images/p-4.jpeg",
    
  },
];
 

export const Photos = () => {
       const handleDownload = (src, title) => {
    if (!src) return;
    const link = document.createElement("a");
    const fileName = (title ? title.replace(/\s+/g, "_") : "download") + ".jpg";
    link.href = src;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // ✅ 2. Define handleDownloadAll BEFORE using it in JSX
  const handleDownloadAll = () => {
    photos.forEach((photo, index) => {
      setTimeout(() => {
        handleDownload(photo.src, photo.title);
      }, index * 800); // delay each to avoid browser blocking
    });
  };

  return (
    <div>
        <section className="portfolio-downloads-section py-5 text-center text-white">
      <div className="container">
        <motion.h2
          className="fw-bold mb-3"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Portfolio Gallery
        </motion.h2>

        <motion.p
          className="text-muted mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          viewport={{ once: true }}
        >
         
        </motion.p>

        {/* ✅ This now works because handleDownloadAll is defined */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleDownloadAll}
          className="btn btn-outline-light rounded-pill mb-5 px-4 py-2 d-inline-flex align-items-center gap-2"
        >
          <FaDownload /> Download All Photos
        </motion.button>

        <div className="row g-4">
          {photos.map((photo, index) => (
            <motion.div
              className="col-md-6 col-lg-3"
              key={photo.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="photo-card position-relative overflow-hidden rounded-4">
                <motion.img
                  src={photo.src}
                  alt={photo.title}
                  className="img-fluid w-100 rounded-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="photo-overlay d-flex flex-column justify-content-center align-items-center">
                  <h5 className="fw-semibold mb-3">{photo.title}</h5>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-primary rounded-pill px-3 py-2 d-flex align-items-center gap-2"
                    onClick={() => handleDownload(photo.src, photo.title)}
                  >
                    <FaDownload /> Download
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>


    </div>
  ) 
}
export default Photos;
