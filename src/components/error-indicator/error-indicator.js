import React from 'react';
import './error-indicator.css'
import img from './error.gif'

const ErrorIndicator =  () => {
  return (
    <div className = "error-indicator">
      Error 500! <br/> Something goes wrong
      <img src = { img } alt=""/>
    </div>
    
  )
}

export default ErrorIndicator;