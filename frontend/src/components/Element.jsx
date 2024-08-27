import React from 'react'
import './components.css'
const Element = ({containertext , containerimg}) => {
  return (
    <>
    <div className="containerr">
        <p className='containerr-p'>{containertext}</p>
        <div className='line'></div>
        <div className='small'></div>
        <div className='medium'></div>
        {<div className='large'>{containerimg}</div>}
        {/* <div className="arrow"></div> */}
    </div>
   
    </>
  )
}

export default Element