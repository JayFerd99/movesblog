import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import {
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <div className="contact-icon">
            <FaEnvelope />
          </div>
          <div className="contact-text">
            <p>Email: example@example.com</p>
          </div>
        </div>
        <div className="contact-info">
          <div className="contact-icon">
            <FiPhone />
          </div>
          <div className="contact-text">
            <p>Phone: 123-456-7890</p>
          </div>
        </div>
        <div className="contact-submit">
          <input type="text" placeholder="Enter your message" />
          <button type="submit">Send</button>
        </div>
      </div>
      <div className="social-icons">
        <a href="https://twitter.com">
          <AiFillTwitterCircle />
        </a>
        <a href="https://facebook.com">
          <AiFillFacebook />
        </a>
        <a href="https://instagram.com">
          <AiFillInstagram />
        </a>
      </div>
      <div className="links">
        <a href="/about">About</a>
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-of-service">Terms of Service</a>
      </div>
    </footer>
  );
};

export default Footer;
