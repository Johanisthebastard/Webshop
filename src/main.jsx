import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Homepage from './Pages/Homepage.jsx';
import './index.css'
import Cart from './Components/Cart.jsx';
import Admin from './Components/Admin.jsx';

const router = createHashRouter([
	{
		path: "/",
		element: <Homepage/>,
	
	},
	{

		path: "/cart",
		element: <Cart/>
	}, 

	{

		path: "/Admin",
		element: <Admin/>

	}


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
