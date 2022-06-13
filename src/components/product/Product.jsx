import React from 'react'
import ListProduct from './listProduct/ListProduct'

import { NavProduct } from './navProduct/NavProduct'

import "./Product.css"

import {data} from "../../index"


const Product = () => {

  const ProductsData = React.useContext(data)
  const NavData = React.useContext(data)

  const [dataList, setDataList] = React.useState(ProductsData.quickFood)

  const arrayProducts = ProductsData.quickFood;
  

  function getIdNav(id){
    switch(id){
      case 1:
        setDataList(arrayProducts)
        break;
      case 2:
        console.log('fast food')
        const fastFood = arrayProducts.filter(item => item.cate === "fast_food")
        setDataList(fastFood)
        break;
      case 3:
        const snacks = arrayProducts.filter(item => item.cate === "snacks")
        setDataList(snacks)
        break;
      case 4:
        const healthy = arrayProducts.filter(item => item.cate === "healthy")
        setDataList(healthy)
        break;
      case 5:
        const drinkFood = arrayProducts.filter(item => item.cate === "drinkFood")
        setDataList(drinkFood)
        break;
      case 6:
        const milkTea = arrayProducts.filter(item => item.cate === "MilkTea")
        setDataList(milkTea)
        break;
      default:
          alert("invalid")
        break;
    }
  }

  return (
    <div className='quick--order'>
        <div className="container">
            <NavProduct dataNav = {NavData.navQuickFood} getId = {getIdNav}/>
            <ListProduct dataList= {dataList}/>
        </div>
    </div>
  )
}

export default Product