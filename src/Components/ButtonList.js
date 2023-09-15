import React from 'react'
import Buttons from './Buttons'

const list = ["All", "News", "Tourism", "Gaming", "JavaScript", "Computer","History", "Mixes", "Prodcasts", "Cricket", "Photography", "Watched", "Comedy", "Cars", "Dabets"]
const ButtonList = () => {
  return (
    <div className='flex '>
      {list.map((list) => <Buttons key={list} name={list} />)}
    </div>
  )
}

export default ButtonList;