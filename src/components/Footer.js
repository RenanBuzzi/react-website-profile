import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          All details about my page and some extra information.
        </p>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Home</h2>
            <Link to="/">Home Page</Link>
          </div>
          <div class="footer-link-items">
            <h2>About</h2>
            <Link to="/About">Abount</Link>
          </div>
          <div class="footer-link-items">
            <h2>Career</h2>
            <Link to="/Career">Career</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact</h2>
            <Link to="/Contact">Contact</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <a href="https://www.linkedin.com/in/renangasparbuzzi">Linkedin</a>
            <a href="https://github.com/RenanBuzzi">GitHub</a>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              <i class="fa fa-code" aria-hidden="true"></i>&nbsp;Renan
              Buzzi&nbsp; <i class="fa fa-code" aria-hidden="true"></i>
            </Link>
          </div>
          <small class="website-rights">Renan Buzzi © 2021</small>
          <div class="social-icons">
            <a
              class="social-icon-link"
              href="https://github.com/RenanBuzzi"
              target="#"
              aria-label="GitHub"
            >
              <i class="fa fa-github" />
            </a>
            <a
              class="social-icon-link"
              href="https://www.linkedin.com/in/renangasparbuzzi"
              target="#"
              aria-label="Linkedin"
            >
              <i class="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
