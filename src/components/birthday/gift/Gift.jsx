import React from 'react'
import {Card} from "./card/Card"

import "./Gift.css"

import {data} from "../../../index"

export const Gift = () => {
  const dataBirthday = React.useContext(data)
  return (
    <div className='birthday--gift container'>
        <h3 className='birthday--gift--title'>Ưu đãi nho nhỏ</h3>
        <div className='birthday--gift--list'>
            {dataBirthday.birthday.map(item => <Card item={item} key={item.id}/>)}
        </div>
    </div>
  )
}
