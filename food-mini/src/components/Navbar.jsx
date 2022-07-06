import React from 'react'
import {FaHamburger,FaBars} from 'react-icons/fa'
import './NavbarStyles.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container">
            <div>
        <FaHamburger size={40} style={{marginLeft: '4px'}} />
       <ul>
            <li>Home</li>
            <li>Order</li>
            <li>Menu</li>
            <li>Delivery</li>
            <li>Contact</li>
      </ul>
         <div className='hamburger'>
            <FaBars/>
         </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
