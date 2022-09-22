import React from 'react'
import "./Header.css"

export const Header = () => {
  function delhi(){
    alert('Test OM')
  }
  return (
    <div>
      <button className='abulfazal' onClick={delhi}>Home</button>
    
    </div>
  )
}
