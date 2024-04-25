import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import useStore from '../Data/store';
import './Cart.css';

export default function Cart() {
  const { cart, removeFromCart, totalPrice } = useStore((state) => ({
    cart: state.cart,
    removeFromCart: state.removeFromCart,
    totalPrice: state.totalPrice,
  }));

  // Tillståndsvariabel för att hantera visning av beställningsmeddelande
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Funktion för att hantera borttagning av en vara från varukorgen
  const handleRemoveFromCart = (toyId) => {
    removeFromCart(toyId);
  };

  // Funktion för att hantera beställningsknappens klickhändelse
  const handlePlaceOrder = () => {
    // Rensa varukorgen
    cart.forEach((toy) => {
      removeFromCart(toy.id);
    });

    // Visa beställningsmeddelandet
    setOrderPlaced(true);
  };

  return (
    <div className="cart-container">
      <Header />
      
      <div className="shopping-cart">
        {!orderPlaced ? <h2>Varukorg</h2> : null}
        {orderPlaced ? (
          <p>Tack för din beställning!</p>
        ) : cart.length === 0 ? (
          <p> Varukorgen är tom... <img src="./src/assets/jt.gif" alt="" /></p>
		  
        ) : (
          cart.map((toy) => (
            <div key={toy.id} className="cart-item-container">
              <div className="cart-item">
                <img src={toy.Url} alt="Product Image" />
                <div className="cart-item-details">
                  <h3>{toy.Title}</h3>
                  <p>Price: {toy.Price}:-</p>
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

      <Footer />
    </div>
  );
}
