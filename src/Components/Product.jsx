import React, { useState } from 'react';
import { getToys } from '../Data/crud.js';
import useStore from '../Data/store.js';
import './Product.css';

export default function Product() {
    const [messages, setMessages] = useState({});
    const { toys, setToys, addToCart } = useStore((state) => ({
        toys: state.toys,
        setToys: state.setToys,
        addToCart: state.addToCart,
    }));

    const handleGetToys = async () => {
        setToys(await getToys());
    };

    const handleAddToCart = (toy) => {
        const id = Date.now();
        addToCart({...toy, id});
        setMessages(prevMessages => ({ ...prevMessages, [toy.key]: 'Tillagd i varukorgen' }));
        setTimeout(() => {
            setMessages(prevMessages => ({ ...prevMessages, [toy.key]: '' }));
        }, 1500); 
    };

    return (
        <>
            <div className="btn-container">
                <button className="fetch-btn" onClick={handleGetToys}>
                    Leksaker
                </button>
            </div>
            <div className="toy-container">
                {toys.map((toy) => (
                    <div className="product" key={toy.key}>
                        {messages[toy.key] && <div className="message">{messages[toy.key]}</div>}
                        <img src={toy.Url} alt={toy.Title} />
                        <h2>{toy.Title}</h2>
                        <h3>{toy.Price}:-</h3>
                        <button className="buy-btn" onClick={() => handleAddToCart(toy)}>KÖP</button>
                    </div>
                ))}
            </div>
        </>
    );
}