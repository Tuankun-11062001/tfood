import React from 'react'
import itemPhoto from "../../../../asset/img/itemProduct.png"
import "./ItemProduct.css"
export const ItemProduct = (props) => {
  return (
    <div className='item--product' key={props.id}>
        <div className='item--product--content'>
            <div className='item--product--content--photo'>
                <img src={props.photo} alt={props.name}/>
            </div>
            <div className='item--product--content--detail'>
                <h3 className='item--product--content--name'>{props.name}</h3>
                <h1 className='item--product--content--cost'>{props.cost}VND / 1 cái</h1>
            </div>
        </div>
    </div>
  )
}
