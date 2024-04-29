import React, { useState, useEffect } from 'react';
import { getToys, removeToy } from '../Data/crud.js';
import './Product.css';

export default function DeleteProduct({ handleEditToy }) {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetchToys();
    }, []);

    const fetchToys = async () => {
        const toysData = await getToys();
        setToys(toysData);
    };

    const handleRemoveToy = async (toyId) => {
        await removeToy(toyId);
        fetchToys();
    };

	

    return (
        <>
            <div className="btn-container">
                <button className="fetch-btn" onClick={fetchToys}>
                    Redigera leksaker
                </button>
            </div>
            <div className="toy-container">
                {toys.map((toy) => (
                    <div className="product" key={toy.key}>
                        <button className="edit-btn" onClick={() => handleEditToy(toy)}>Redigera</button> {/* Knapp för att edita varan */}
                        <img src={toy.Url} alt={toy.Title} />
                        <h2>{toy.Title}</h2>
                        <h3>{toy.Price}:-</h3>
                        <button className="buy-btn" onClick={() => handleRemoveToy(toy.key)}>Ta bort</button>
                    </div>
                ))}
            </div>
        </>
    );
}
