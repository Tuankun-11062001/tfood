import React from 'react'

import { Gift } from './gift/Gift'

import "./Birthday.css"
import birthdayDate from "../../asset/img/11.06.png"
export const Birthday = () => {
  return (
    <div className='birthday'>
        <h1 className='birthday--title'>Chúc mừng sinh nhật 1 tuổi của TFood</h1>
        <div className='birthday--date container'>
          <img src={birthdayDate} alt='myBirthday'/>
        </div>
        <Gift/>
    </div>
  )
}
