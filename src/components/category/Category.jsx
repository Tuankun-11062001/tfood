import React from 'react'

import {data} from "../../index"

import Card from "./card/Card"
import "./Category.css"


const Category = () => {
  const arraydata = React.useContext(data)
  return (
    <div className='category container'>
        <h2 className='category--title'>Dồ Ăn Và Nước Uống</h2>
        <div className='category--list'>
          {arraydata.category.map(item => <Card key={item.id} id={item.id} name={item.name} photo = {item.img}/>)}
        </div>
    </div>
  )
}

export default Category