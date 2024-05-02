import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import useStore from '../Data/store';
import './Cart.css';

export default function Cart() {
  const { cart, removeFromCart } = useStore((state) => ({
    cart: state.cart,
    removeFromCart: state.removeFromCart,
    
  }));

  
  const [orderPlaced, setOrderPlaced] = useState(false);

  
  const handleRemoveFromCart = (toyId) => {
    removeFromCart(toyId);
	

  };

  
  const handlePlaceOrder = () => {
    
    cart.forEach((toy) => {
      removeFromCart(toy.id);
    });

    
    setOrderPlaced(true);
  };

  // loopa igenom cart för att räkna ut total price
  let totalPrice = 0;
  cart.forEach((toy) => {
    totalPrice += toy.Price;
  });

  return (
    <div className="cart-container">
      <section className="body">
      <Header />
      <div className="shopping-cart">
        {!orderPlaced ? <h2>Varukorg</h2> : null}
        {orderPlaced ? (
          <p>Tack för din beställning!</p>
        ) : cart.length === 0 ? (
          <p> Varukorgen är tom... </p>
		  
        ) : (
          cart.map((toy) => (
            <div key={toy.id} className="cart-item-container">
              <div className="cart-item">
                <img src={toy.Url} alt="Product Image" />
                <div className="cart-item-details">
                  <h3>{toy.Title}</h3>
                  <p>Pris: {toy.Price}:-</p>
                  <div className="quantity-controls">
                    <button className="remove-item" onClick={() => handleRemoveFromCart(toy.id)}>Ta bort</button>
                   
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
        {cart.length !== 0 && !orderPlaced && (
          <div className="total">
            <h3>Total: {totalPrice}:-</h3>
            <button className="place-order-btn" onClick={handlePlaceOrder}>LÄGG BESTÄLLNING</button>
          </div>
        )}
        <NavLink to="/" className="back-link">Gå tillbaka</NavLink>
      </div>

	  </section>
      <Footer />
    </div>
  );
}
