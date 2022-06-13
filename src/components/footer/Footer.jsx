import React from 'react'

import {FaFacebookF,FaInstagram,FaYoutube} from "react-icons/fa"

import "./Footer.css"

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer--wrap container'>
        <a href="#" className='logo-footer'>TFOOD</a>
        <div className='footer--list'>
            <ul className='footer-children'>
                <li className='footer-children--item'>03 nguyễn trường tộ - Lộc tiến - bảo lộc - lâm đòng</li>
                <li className='footer-children--item'>0826901362 - 01698914640</li>
                <li className='footer-children--item'>https://TF.food.com</li>
                <li className='footer-children--item'>Theo dõi chúng tôi qua:</li>
                <li className='footer-children--item'>
                    <a href="#"><FaFacebookF/></a>
                    <a href="#"><FaInstagram/></a>
                    <a href="#"><FaYoutube/></a>
                </li>
            </ul>
            <ul className='footer-children'>
                <li className='footer-children--item'>Chăm sóc khách hàng</li>
                <li className='footer-children--item'>Tư vấn</li>
                <li className='footer-children--item'>FQA</li>
                <li className='footer-children--item'>Thanh Toán:</li>
            </ul>
            <ul className='footer-children'>
                <li className='footer-children--item'>Giới thiệu</li>
                <li className='footer-children--item'>Shopping</li>
                <li className='footer-children--item'>Sự kiện - Ưu đãi</li>
                <li className='footer-children--item'>Đăng kí mở shop</li>
            </ul>
        </div>
        </div>
    </div>
  )
}
