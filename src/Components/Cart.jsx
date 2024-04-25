import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import useStore from '../Data/store';
import './Cart.css';

export default function Cart() {
  const { cart, removeFromCart } = useStore((state) => ({
    cart: state.cart,
    removeFromCart: state.removeFromCart,
    increaseQuantity: state.increaseQuantity
  }));

  // Funktion för att hantera borttagning av en vara från varukorgen
  const handleRemoveFromCart = (toyId) => {
    removeFromCart(toyId);
  };

  // Funktion för att öka antalet av en vara
  const handleIncreaseQuantity = (toyId) => {
    increaseQuantity(toyId);
  };

  // Funktion för att hantera beställningsknappens klickhändelse
  const handlePlaceOrder = () => {
    // Placera beställningslogik här
    console.log("Beställning placerad!");
  };

  return (
    <div className="cart-container">
      <Header />
      
      <div className="shopping-cart">
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Varukorgen är tom</p>
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
                    <span className="item-quantity">{toy.quantity}</span>
                    
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
        {cart.length !== 0 && (
          <div className="total">
            <h3>Total: :-</h3>
            <button className="place-order-btn" onClick={handlePlaceOrder}>LÄGG BESTÄLLNING</button>
          </div>
        )}
        <NavLink to="/" className="back-link">Gå tillbaka</NavLink>
      </div>

      <Footer />
    </div>
  );
}