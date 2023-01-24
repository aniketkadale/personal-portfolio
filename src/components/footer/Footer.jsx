import React from "react";
import "./footer.css";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">
        ANIKET KADALE
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.facebook.com/aniket.kadale.180/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillFacebook className="footer__social-icons" />
        </a>
        <a
          href="https://www.instagram.com/_aniket.0x/"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineInstagram className="footer__social-icons" />
        </a>
        <a
          href="https://www.linkedin.com/in/aniket-kadale-1090a01ba/"
          rel="noreferrer"
          target="_blank"
        >
          <AiFillLinkedin className="footer__social-icons" />
        </a>
        <a
          href="https://twitter.com/AniketKadale3"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter className="footer__social-icons" />
        </a>
        <a
          href="https://github.com/aniketkadale"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub className="footer__social-icons" />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Aniket Kadale. All rights reserved </small>
      </div>
    </footer>
  );
}

export default Footer;
