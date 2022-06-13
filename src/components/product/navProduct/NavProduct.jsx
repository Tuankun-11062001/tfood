import React from 'react'

import {GoSearch} from "react-icons/go"
import {HiMenuAlt1} from "react-icons/hi"
import "./NavProduct.css"



export const NavProduct = (props) => {

    const [openMenu,setOpenMenu] = React.useState(false)
    function handlerOpen(){
        setOpenMenu(prev => !prev)
    }

  return (
    <div className='product--navigation'>
        <button className='btn btn-open-order' onClick={handlerOpen}><HiMenuAlt1/></button>
        <ul className={openMenu ? "product--navigation--list open":"product--navigation--list"}>
            {props.dataNav.map(item => ( <li className='product--navigation--item' key={item.id} id={item.id} onClick={() => props.getId(item.id)}>{item.name}</li>))}
        </ul>
        <div className='product--navigation--search'>
            <label><GoSearch/></label>
            <input placeholder='tìm kiếm nhanh ...' />
        </div>
    </div>
  )
}
