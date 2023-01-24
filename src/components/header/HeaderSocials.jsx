import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi'
import {BsTwitter} from 'react-icons/bs'

function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/aniket-kadale-1090a01ba/" rel="noopener noreferrer"><BsLinkedin/></a>
        <a href="https://www.instagram.com/_aniket.0x/" rel="noopener noreferrer"><FiInstagram/></a>
        <a href="https://twitter.com/AniketKadale3" rel="noopener noreferrer"><BsTwitter/></a>
        <a href="https://github.com/aniketkadale" rel="noopener noreferrer"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials