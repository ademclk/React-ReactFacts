import React from 'react'

export default function Header() {
  return (
    <header>
      <nav className='nav'>
        <img className="nav-logo" src={require('../images/react-logo.png')} alt='' />
        <ul className='nav-bar'>
          <li>React - Project 1</li>
        </ul>
      </nav>
    </header>
  )
}
