import { makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './style.css'

export default function Navbar() {

  const [state, setstate] = useState(true);
  

  return (
    <div>
      <nav className={'nav' }>
        <Link to={'/'} style={{ textDecoration: 'none', backgroundColor: 'transparent' }} className='logo'>EH<i className='fab fa-typo3' style={{ background: 'transparent' }} /></Link>
        <ul className="ul">
          <li className="li"><Link to='/' style={{ textDecoration: 'none' }} className="a">Home</Link></li>
          <li className="li"><Link to='/Services' style={{ textDecoration: 'none' }} className="a">Services</Link></li>
          <li className="li"><Link to='/About' style={{ textDecoration: 'none' }} className="a">About</Link></li>
          <li className="li"><Link to='/Contact' style={{ textDecoration: 'none' }} className="a">Contact</Link></li>

        </ul>
      </nav>
    </div>
  )
}

const useStyle = makeStyles()
