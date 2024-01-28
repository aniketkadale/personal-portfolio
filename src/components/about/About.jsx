import React from "react";
import "./about.css";
import me from "../../assets/me.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscProject } from "react-icons/vsc";

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me__img">
            <img src={me} alt="about me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            {/* <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>50+ Clients Worldwide</small>
            </article> */}
            <article className="about__card">
              <VscProject className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>
          </div>

          <br />

          <ul className="list-style">
            <li>
              Currently pursuing my fourth year of Engineering in
              Information Technology at AISSMS Institute of Information Technology, Pune.
            </li>
            <br />
            <li>
               Full Stack Developer with over 1 year of hands-on
              experience in designing, developing, and implementing applications.
            </li>
            <br />
            <li>
               Proficient in Data Structures and Algorithms,
              applying these skills in practical scenarios.
            </li>
            <br />
            <li>
               Well-versed in core computer fundamentals, including
              Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks.
            </li>
            <br />
            <li>
               Blogger with a personal website where I share information
              related to technology and programming. You can visit my website to
              read some amazing blogs 🚀.
            </li>
            <br />
          </ul>

          <a
            href="https://api.whatsapp.com/send?phone=918999913935"
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
