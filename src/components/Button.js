import React from 'react'
import './Button.css';

const Button = (props) => {
    const  width  = props.width;
    const handleClick = props.handleClick;
  return (
      <button style={{ "backgroundColor":`${props.color}`}} className='calculator-button' type="button" onClick={()=>handleClick(props.value)}>{props.value}</button>
  )
}

export default Button