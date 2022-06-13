import React from 'react'

import {BsArrowRight} from "react-icons/bs"

import "./HeroDetail.css";

const HeroDetail = () => {
  return (
    <div className='hero--detail'>
      <h1 className='hero--detail--title'>Cuộc sống sẽ tốt nếu chúng ta ăn uống hợp lý</h1>
      <p className='hero--detail--subtitle'>Hằng ngày là sẽ giúp cho bạn giảm thiểu được những một vài bệnh tật thường gặp như tim mạch, béo phì, đau bao tử, đái tháo đường, cao huyết áp… Một chế độ ăn uống không lành mạnh dễ làm tăng nguy cơ phát triển các tế bào ung thư.</p>
      <button className="btn btn-hero btn-align">Tham gia với chúng tôi <BsArrowRight/> </button>
    </div>
  )
}

export default HeroDetail