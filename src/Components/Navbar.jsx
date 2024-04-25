import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavLink.css'

export default function Navbar() {
  return (
	<div>
	  {/* <NavLink to="/">Home</NavLink> */}
	  <NavLink className="cart-head" to="/Cart"><img src="./src/assets/cart.png" alt="Cart" width="30px" /></NavLink>
		<br />

	  <NavLink className="admin-head" to="/Admin">Admin</NavLink>

	</div>
  )
}
