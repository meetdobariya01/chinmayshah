import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./certificate.css";

const Certificate = () => {
  const [name, setName] = useState("");

  const handleDownload = () => {
    if (!name.trim()) {
      alert("Please enter a name.");
      return;
    }

    const fileName = name.toLowerCase().replace(/\s+/g, "") + ".pdf";

    // PDF should be inside public/certificates/
    const filePath = `/certificates/${fileName}`;

    fetch(filePath)
      .then((res) => {
        if (!res.ok) throw new Error("PDF not found");
        return res.blob();
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${name}.pdf`;
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch(() => {
        alert("No certificate found for this name!");
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 cert-bg">
      <div
        className="p-5 rounded-4 shadow-lg text-center bg-white animate__animated animate__fadeInUp"
        style={{ maxWidth: "500px", width: "100%" }}
      >
        <h2 className="fw-bold text-primary mb-3">🎓 Download Certificate</h2>

        <p className="text-secondary">Example: John_Doe</p>

        {/* Input Field */}
        <input
          type="text"
          className="form-control mt-3"
          placeholder="Enter your name..."
          style={{
            color: "black",
            borderRadius: "10px",
            padding: "10px 15px",
          }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* Download Button */}
        <button
          className="btn btn-success mt-4 px-4 py-2 fw-semibold w-100 animated-btn"
          onClick={handleDownload}
        >
          Download Certificate
        </button>
      </div>
    </div>
  );
};

export default Certificate;
