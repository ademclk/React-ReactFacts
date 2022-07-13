import React from 'react'

export default function Header() {
  return (
    <header>
      <nav>
        <img src={require('../images/react-logo.png')} alt='' className='nav--logo' />
        <h3 className='nav--logo_text'>ReactFacts</h3>
        <h4 className='nav--title'>React Project - 1</h4>
      </nav>
    </header>
  )
}
