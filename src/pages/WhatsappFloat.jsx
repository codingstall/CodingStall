import React from "react";
import "./WhatsappFloat.css";

const WhatsappFloat = () => {
  return (
    <a
      href="https://wa.me/918328687566"   // <-- replace with your number
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
      />
    </a>
  );
};

export default WhatsappFloat;
