import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
	<div>
	  {/* <NavLink to="/">Home</NavLink> */}
	  <NavLink className="cart-head" to="/Cart">Cart</NavLink>
		<br />
	  <NavLink className="admin-head" to="/Admin">Admin</NavLink>

	</div>
  )
}
