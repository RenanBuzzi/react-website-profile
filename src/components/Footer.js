import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        {/* <p className="footer-subscription-heading">
          All details about my page and some extra information.
        </p> */}
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            {/* <h2>Home</h2> */}
            <Link to="/">Home Page</Link>
          </div>
          <div class="footer-link-items">
            {/* <h2>About</h2> */}
            <Link to="/About">Abount</Link>
          </div>
          <div class="footer-link-items">
            {/* <h2>Career</h2> */}
            <Link to="/Career">Career</Link>
          </div>
          <div class="footer-link-items">
            {/* <h2>Contact</h2> */}
            <Link to="/Contact">Contact</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="social-logo">
            <i class="fas fa-angle-left" aria-hidden="true"></i>
            <i class="fas fa-angle-right" aria-hidden="true"></i>
            &nbsp;Renan Buzzi © 2021&nbsp;
            <i class="fas fa-angle-left" aria-hidden="true"></i>
            <div className="bar">/</div>
            <i class="fas fa-angle-right" aria-hidden="true"></i>
            {/* <Link to="/" className="social-logo">
              <i class="fa fa-code" aria-hidden="true"></i>&nbsp;Renan Buzzi ©
              2021&nbsp; <i class="fa fa-code" aria-hidden="true"></i>
            </Link> */}
          </div>
        </div>
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
      </section>
    </div>
  );
}

export default Footer;
