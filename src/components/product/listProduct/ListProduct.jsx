import React from 'react'
import { ItemProduct } from './itemProduct/ItemProduct'

import "./ListProduct.css"
const ListProduct = (props) => {
  const dataList = props.dataList;
  return (
    <div className='list-product'>
        {dataList.map(item => <ItemProduct key={item.id} name={item.name} photo={item.img} cate={item.cate} id={item.id} cost={item.cost}/>)}
    </div>
  )
}

export default ListProduct