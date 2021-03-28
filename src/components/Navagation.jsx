import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export default function Navagation() {

    const cart = useSelector(state => state.cartReducrStore)
    return (
        <div>

            <Navbar bg="dark" expand="lg">
                <Navbar.Brand ><Link className='d-inline p-2 bg-dark text-white' to='/' style={{ textDecoration: 'none' }}>React</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="mr-auto">
                        <NavLink style={{ textDecoration: 'none' }} to='/' className='d-inline p-2 bg-dark text-white'>
                            Home
                        </NavLink>
                        <NavLink style={{ textDecoration: 'none' }} to='/product' className='d-inline p-2 bg-dark text-white'>
                            Product
                        </NavLink>
                        <NavLink style={{ textDecoration: 'none' }} to='/cart' className='d-inline p-2 bg-dark text-white'>
                            <h6><ShoppingCartIcon />{cart.productList.length}</h6>
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
