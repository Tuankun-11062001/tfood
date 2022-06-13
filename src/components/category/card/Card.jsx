import React from 'react'
import "./Card.css"
const Card = (props) => {
  return (
    <div className='category--card' key={props.id}>
        <img src={props.photo} alt='green__food'/>
        <div className='category--card--detail'>
            <h3>{props.name}</h3>
        </div>
    </div>
  )
}

export default Card