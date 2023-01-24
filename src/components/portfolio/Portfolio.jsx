import React from "react";
import "./portfolio.css";
import portfolio1 from "../../assets/portfolio1.jpg";
// import portfolio2 from "../../assets/portfolio2.jpg";
// import portfolio3 from "../../assets/portfolio3.jpg";
import portfolio4 from "../../assets/portfolio4.jpg";
// import portfolio5 from "../../assets/portfolio5.jpg";
// import portfolio6 from "../../assets/portfolio6.jpg";
import clock from "../../assets/clock.png";
import spotify from "../../assets/spotify.png";
import gym from "../../assets/gym.png";
import personalportfolio from "../../assets/personalportfolio.png";

const data = [
  {
    id: 1,
    image: portfolio1,
    title: "Taskify - A Project Management Web App",
    github: "https://github.com/aniketkadale",
    demo: "https://techwithandy.online/top-7-courses-on-udemy-under-rs-500/",
  },
  {
    id: 2,
    image: gym,
    title: "Gym Website UI",
    github: "https://github.com/aniketkadale/Gym-Webisite",
    demo: "https://gym-web-ui.netlify.app/",
  },
  {
    id: 3,
    image: personalportfolio,
    title: "Personal Portfolio",
    github: "https://github.com/aniketkadale",
    demo: "#",
  },
  {
    id: 4,
    image: portfolio4,
    title: "Finced - Mobile Banking & Invoicing",
    github: "https://github.com/aniketkadale/",
    demo: "#",
  },
  {
    id: 5,
    image: clock,
    title: "Analog Clock UI",
    github: "https://github.com/aniketkadale/Analog-Clock-UI--CSS",
    demo: "https://analog-clock-ui-js.netlify.app/",
  },
  {
    id: 6,
    image: spotify,
    title: "Spotify Music Player",
    github: "https://github.com/aniketkadale",
    demo: "https://spotify-music-player-js.netlify.app/",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="__blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="__blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
