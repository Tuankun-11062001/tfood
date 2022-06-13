import React from 'react'
import photoHero from "../../../asset/img/Img__hero.png"
import "./HeroPhoto.css"
const HeroPhoto = () => {
  return (
    <div className='hero--photo'>
        <img src={photoHero} alt='hero_img'/>
    </div>
  )
}

export default HeroPhoto