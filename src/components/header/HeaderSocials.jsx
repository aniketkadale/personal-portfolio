import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi'
import {BsTwitter} from 'react-icons/bs'
import { SiLeetcode } from "react-icons/si";

function HeaderSocials() {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/aniket-kadale-1090a01ba/" target = "_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://leetcode.com/kadaleaniket08/" target = "_blank" rel="noopener noreferrer">
        <SiLeetcode />
      </a>
      <a href="https://github.com/aniketkadale" target = "_blank" rel="noopener noreferrer">
        <BsGithub />
      </a>
      <a href="https://twitter.com/AniketKadale3" target = "_blank" rel="noopener noreferrer">
        <BsTwitter />
      </a>
      <a href="https://www.instagram.com/_aniket.0x/" target = "_blank" rel="noopener noreferrer">
        <FiInstagram />
      </a>
    </div>
  );
}

export default HeaderSocials