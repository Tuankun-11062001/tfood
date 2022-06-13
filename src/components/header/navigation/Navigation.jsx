import React from 'react'
import "./Navigation.css"
import {BsList} from "react-icons/bs"
import {BiX} from "react-icons/bi"

const Navigation = () => {
  const [openListMobile,setOpenListMobile] = React.useState(false)

  function handlerTogglenNav(){
    setOpenListMobile(!openListMobile)
  }
  return (
    <>
      <button className='btn btn--open--list' onClick={handlerTogglenNav}><BsList/></button>
      <ul className={openListMobile ? "nav--list active" : "nav--list"}>
          <button className='btn btn--close--list' onClick={handlerTogglenNav}><BiX/></button>
          <li><a href="#" className='nav--item'>Trang chủ</a></li>
          <li><a href="#" className='nav--item'>Dịch vụ</a></li>
          <li><a href="#" className='nav--item'>Booking</a></li>
          <li><a href="#" className='nav--item'>Shopping</a></li>
          <li><a href="#" className='nav--item'>Liên hệ</a></li>
      </ul>
    </>
  )
}

export default Navigation