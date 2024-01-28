import React from "react";
import "./portfolio.css";
import secrets from '../../assets/secrets.png'
import amazon from '../../assets/amazon-clone.png'
import socialmediaapp from "../../assets/socialmediaapp.png"
import portfolio4 from "../../assets/portfolio4.jpg";
import clock from "../../assets/clock.png";
import spotify from "../../assets/spotify.png";
import gym from "../../assets/gym.png";
import notes from "../../assets/notes.png"

const data = [
  {
    id: 1,
    image: secrets,
    title: "Secrets - share your secrets anonymously 🤫",
    github: "https://github.com/aniketkadale/Secrets",
    demo: "https://drive.google.com/file/d/1f7sHqULcwfZE0hdLE-ovUAO-QapejBdM/view",
  },

  {
    id: 2,
    image: amazon,
    title: "Amazon Clone",
    github: "https://github.com/aniketkadale/amazon-clone",
    demo: "https://clone-4fdcd.web.app/",
  },

  {
    id: 3,
    image: notes,
    title: "QuickNotes - A note taking app",
    github: "https://github.com/aniketkadale/QuickNotes---A-Note-Taking-React-App",
    demo: "https://quicknotes-aniketkadale.netlify.app/",
  },
  {
    id: 4,
    image: socialmediaapp,
    title: "FreindZone - A social media pp",
    github: "https://github.com/aniketkadale/FriendZone-Social-Media-App",
    demo: "https://drive.google.com/file/d/1lZe_odA_SyOviqTn-cLeMG7B0vHoo1ER/view",
  },
  {
    id: 5,
    image: portfolio4,
    title: "Finced - Mobile Banking & Invoicing",
    github: "https://github.com/aniketkadale/",
    demo: "#",
  },
  {
    id: 6,
    image: clock,
    title: "Analog Clock UI",
    github: "https://github.com/aniketkadale/Analog-Clock-UI--CSS",
    demo: "https://analog-clock-ui-js.netlify.app/",
  },
  {
    id: 7,
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
