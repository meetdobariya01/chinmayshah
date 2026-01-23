import React, { useState } from "react";
import { motion } from "framer-motion";
import "./appoiment.css";
import Header from "../../component/header/header";
import Footer from "../../component/footer/footer";

export const Appoiment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    purpose: "", // ✅ added
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Appointment booked!\n\nDate: ${formData.date}\nPurpose: ${formData.purpose}`
    );
  };

  return (
    <div>
      <Header />

      <section className="appointment-section py-5 text-light" id="appointment">
        <div className="container">
          <motion.div
            className="text-center mb-5"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="display-6 fw-bold text-primary mb-3">
              Book an Appointment
            </h2>
            <p className="lead text-white-50">
              Choose your preferred date and time to schedule a meeting.
            </p>
          </motion.div>

          <motion.div
            className="row justify-content-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <div className="col-md-8 col-lg-6">
              <form
                className="p-4 rounded-4 shadow-lg bg-dark bg-opacity-75"
                onSubmit={handleSubmit}
              >
                {/* Name */}
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Purpose */}
                <div className="mb-3">
                  <label className="form-label">Purpose of Appointment</label>
                  <textarea
                    className="form-control"
                    placeholder="Briefly describe the purpose"
                    name="purpose"
                    rows="3"
                    value={formData.purpose}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Date */}
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Select Date</label>
                    <input
                      type="date"
                      className="form-control"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  type="submit"
                  className="btn btn-primary w-100 py-2 mt-2 fw-semibold"
                >
                  Confirm Appointment
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Appoiment;
