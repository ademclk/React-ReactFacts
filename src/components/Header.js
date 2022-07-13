import React from 'react'

export default function Header() {
    return (
      <header>
        <nav className='nav'>
          <img className = "nav-logo" src={require('../images/react-logo.png')} alt=''/>
          <ul className='nav-bar'>
            <li>Pricing</li>
            <li>About</li>
            <li>Content</li>
          </ul>
        </nav>
      </header>
    )
  }
  