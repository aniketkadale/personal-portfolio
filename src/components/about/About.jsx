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
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>50+ Clients Worldwide</small>
            </article>
            <article className="about__card">
              <VscProject className="about__icon" />
              <h5>Projects</h5>
              <small>30+ Completed Projects</small>
            </article>
          </div>

          <p>
            Currently pursuing Engineering in Information Technology from AISSMS
            IOIT, Pune. I'm in my 3rd year right now.
            <br />
            <br />
            Apart from that I'm a Full Stack Developer with 1+ years of hands-on
            experience designing, developing, and implementing applications and
            solutions using a range of technologies and programming languages.
            <br />
            <br />
            I'm also a Blogger. I have my own blog website where I share
            information related to techlology and programming. You can visit my
            website to read some amazing blogs 🚀
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
