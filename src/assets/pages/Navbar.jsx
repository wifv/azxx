import React, { useState } from 'react'
import '../css/navbar.css'


const Navbar = () => {
  const [active, setActive] = useState(false)

  return (
    <nav className='nav'>
      <ul className='navbar'>
        <a href='/' className="logo">LOGO</a>
        <ul className='navbar-center'>
          <ul className='categories' onClick={() => {setActive(!active)}}>
            Categories
            <div className={active ? 'active': 'hidden' }>
              <a href='/' className='category'>negr</a>
              <a href='/' className='category'>negr</a>
              <a href='/' className='category'>negr</a>
              <a href='/' className='category'>negr</a>
              <a href='/' className='category'>negr</a>
              <a href='/' className='category'>negr</a>
              <a href='/' className='category'>negr</a>
              <a href='/' className='category'>negr</a>
              <a href='/' className='category'>negr</a>
              <a href='/' className='category'>negr</a>
              <a href='/' className='category'>negr</a>
              <a href='/' className='category'>negr</a>
            </div>
          </ul>
          <input type="text" className='search'/>
          <div className="socials">
            <a href="/" className='social'>akwe</a>
            <a href="/" className='social'>akwe</a>
            <a href="/" className='social'>akwe</a>
          </div>
        </ul>
        <li><button type='button' className='sing-up'>Kirish</button></li>
      </ul>
    </nav>
  )
}

export default Navbar

// 361160613