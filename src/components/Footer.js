import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Footer.css";

function Footer() {
  const [formData, setFormData] = React.useState({ email: "" });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((PrevFormData) => {
      return {
        ...PrevFormData,
        [name]: value,
      };
    });
  }

  return (
    <div className="footer">
      <div className="container">
        <h2 className="footer-heading">
          Join the Adventure newsletter to receive our best vacation deals
        </h2>
        <p className="footer-text">You can unsubscribe at any time.</p>
        <form className="footer-form">
          <input
            className="footer-input"
            type="email"
            onChange={handleChange}
            name="email"
            value={formData.email}
            placeholder="Your Email"
          />
          <Button buttonStyle="btn-outline">Subscribe</Button>
        </form>
        <div className="footer-service-container">
          <ul className="footer-section">
            <h3 className="footer-section-heading">About Us</h3>
            <li className="footer-item">
              <Link to="/sign-up" className="footer-item-link">
                How it works
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/" className="footer-item-link">
                Testimonials
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/" className="footer-item-link">
                Careers
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/" className="footer-item-link">
                Investors
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/" className="footer-item-link">
                Terms of Service
              </Link>
            </li>
          </ul>
          <ul className="footer-section">
            <h3 className="footer-section-heading">Contact Us</h3>
            <li className="footer-item">
              <Link to="/" className="footer-item-link">
                Contact
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/" className="footer-item-link">
                Support
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/" className="footer-item-link">
                Destinations
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/" className="footer-item-link">
                Sponsorships
              </Link>
            </li>
          </ul>
          <ul className="footer-section">
            <h3 className="footer-section-heading">Videos</h3>
            <li className="footer-item">
              <Link to="/" className="footer-item-link">
                Submit Video
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/" className="footer-item-link">
                Ambassadors
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/" className="footer-item-link">
                Agency
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/" className="footer-item-link">
                Influencer
              </Link>
            </li>
          </ul>
          <ul className="footer-section">
            <h3 className="footer-section-heading">Social Media</h3>
            <li className="footer-item">
              <Link to="/" className="footer-item-link">
                Instagram
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/" className="footer-item-link">
                Facebook
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/" className="footer-item-link">
                Youtube
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/" className="footer-item-link">
                Twitter
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-info">
          <div className="footer-logo-box">
            <Link to="/" className="footer-logo">
              TRVL <i className="fab fa-typo3" />
            </Link>
          </div>
          <div className="footer-rights">TRVL © 2022</div>
          <ul className="social-media-icon-box">
            <li className="social-media-item">
              <Link
                className="social-media-link"
                to="/"
                target="_blank"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f" />
              </Link>
            </li>
            <li className="social-media-item">
              <Link
                className="social-media-link"
                to="/"
                target="_blank"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram" />
              </Link>
            </li>
            <li className="social-media-item">
              <Link
                className="social-media-link"
                to="/"
                target="_blank"
                aria-label="Youtube"
              >
                <i className="fab fa-youtube" />
              </Link>
            </li>
            <li className="social-media-item">
              <Link
                className="social-media-link"
                to="/"
                target="_blank"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter" />
              </Link>
            </li>
            <li className="social-media-item">
              <Link
                className="social-media-link"
                to="/"
                target="_blank"
                aria-label="Linkedin"
              >
                <i className="fab fa-linkedin" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
