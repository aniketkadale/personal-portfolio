import React from "react";
import CV from "../../assets/CV.pdf";

function CTA() {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download Resume
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=918999913935"
        target="_blank"
        rel="noreferre"
        className="btn btn-primary"
      >
        Let's Talk
      </a>
    </div>
  );
}

export default CTA;
