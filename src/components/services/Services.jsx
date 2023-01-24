import React from "react";
import "./services.css";
import { BsCheck } from "react-icons/bs";

function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {/* UI UX */}
        <article className="service">
          <div className="service__head">
            <h3>UI UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon" />
              <p>User Research and User Persona</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>UI Design (User Interface)</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>UX Design (User Experience)</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Product Design</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Graphics Design</p>
            </li>
          </ul>
        </article>

        {/* WEB DEV */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon" />
              <p>Professional Design</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>100% Unlimited Revisions</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Mobile Friendly Websites</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Secure Websites</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>SEO Friendly</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Attractive Layout</p>
            </li>
          </ul>
        </article>

        {/* Photo Editing */}
        <article className="service">
          <div className="service__head">
            <h3>Photo Editing</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon" />
              <p>Adobe Photoshop, Lightroom</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Color Grading</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Manipulation</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Retouching</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Background Removal/Change</p>
            </li>
          </ul>
        </article>

        {/* Content Writing */}
        <article className="service">
          <div className="service__head">
            <h3>Content Writing</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon" />
              <p>Blog Writing/Web Content</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>SEO Writing</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Engaging Content</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Plagairism Free</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>No Grammatical Errors</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services;
