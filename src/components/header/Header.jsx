import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME4 from "../../assets/ME4.png";
import HeaderSocials from "./HeaderSocials";
import Typewriter from "typewriter-effect";

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Aniket Kadale</h1>
        {/* <h5 className="text-light">
          Developer, Designer, Editor, Content Writer
        </h5> */}
        <div className="typewriter">
          <Typewriter
            onInit={(text) => {
              text
                .typeString("Developer")
                .pauseFor(1400)
                .deleteAll()
                .changeDeleteSpeed(200)
                .typeString("Designer")
                .pauseFor(1400)
                .deleteAll()
                .changeDeleteSpeed(100)
                .typeString("Editor")
                .pauseFor(1400)
                .deleteAll()
                .changeDeleteSpeed(200)
                .typeString("Content Writer")
                .pauseFor(1400)
                .deleteAll()
                .changeDeleteSpeed(200)
                .start();
            }}
          />
        </div>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME4} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
