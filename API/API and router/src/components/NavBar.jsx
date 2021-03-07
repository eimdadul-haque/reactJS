import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div className='navbar navbar-expand-lg navbar-light bg-light'>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link className="nav-link " to={'/'}>Home</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to={'/create_product'}>Create Product</Link>
                </li>

            </ul>
        </div>
    )
}
