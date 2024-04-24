import React from 'react'
import { NavLink } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Admin() {
  return (
	<div>
		<Header/>	
		<h1>ADMINVY</h1>
		<NavLink to="/">Back</NavLink>
		<Footer/>
	</div>
  )
}
