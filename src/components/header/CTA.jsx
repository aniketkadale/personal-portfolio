import React from "react";
import Aniket_Kadale from "../../assets/Aniket_Kadale.pdf";

function CTA() {
  return (
    <div className="cta">
      <a href={Aniket_Kadale} download className="btn">
        Download Resume
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=918999913935"
        target="_blank"
        rel="noreferrer"
        className="btn btn-primary"
      >
        Let's Talk
      </a>
    </div>
  );
}

export default CTA;
