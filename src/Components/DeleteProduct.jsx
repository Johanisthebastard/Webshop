import React from 'react'
import { getToys } from '../Data/crud.js'
import useStore from '../Data/store.js'
import './Product.css'

export default function DeleteProduct() {
	

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
							<img src={toy.Url} alt={toy.Title} />
							<h2>{toy.Title}</h2>
							<h3>{toy.Price}:-</h3>
							<button className="buy-btn" onClick={() => handleAddToCart(toy)}>Ta bort</button>
						</div>
					))}
				</div>
			</>
		
	);
}

