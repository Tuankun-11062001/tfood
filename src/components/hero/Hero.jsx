import React from 'react'
import HeroPhoto from './photo/HeroPhoto'


import "./Hero.css"
import HeroDetail from './detail/HeroDetail'
const Hero = () => {
  return (
    <div className='hero space'>
      <div className='hero-flex container'>
        <HeroDetail/>
        <HeroPhoto/>
      </div>
    </div>
  )
}

export default React.memo(Hero)