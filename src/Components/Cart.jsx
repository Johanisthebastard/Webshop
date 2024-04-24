import React from 'react'
import { NavLink } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Cart() {
  return (
	<div>
		<Header/>		
	  <h1>SHOPPING CART FÖR ALLA GREJER</h1>
	  <NavLink to="/">Back</NavLink>
	  	<Footer/>
	</div>
  )
}
