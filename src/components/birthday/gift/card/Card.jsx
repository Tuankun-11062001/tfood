import React from 'react'

import "./Card.css"

export const Card = (props) => {
  const data = props.item;
  return (
    <div className='birthday--card'>
        <ul>
           {data.dataCard.map((item,index) => <li key={index}>{item}</li>)}
        </ul>
        <button className='btn btn-join'>{data.button}</button>
    </div>
  )
}
