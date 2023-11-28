import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

function Navbar
  () {
  return (
    <div className='navbar'>
      <nav>
        <Link to={"/"}>
          <button>Events Page</button>
        </Link>
        <Link to={"/people"}>
          <button>People Page</button>
        </Link>
      </nav>
    </div>
  )
}

export default Navbar
