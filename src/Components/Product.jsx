import React from 'react'
import { getToys } from '../Data/crud.js'
import useStore from '../Data/store.js'
import './Product.css'

export default function Product() {
	const { toys, setToys, addToCart } = useStore((state) => ({
		toys: state.toys,
		setToys: state.setToys,
		addToCart: state.addToCart,
	  }));

	const handleGetToys = async () => {
		setToys(await getToys());
	};

	const handleAddToCart = (toy) => {
		
		console.log('Lade till i varukorgen:', toy);
		const id = Date.now()
		addToCart({...toy, id});
	}

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
							<button className="buy-btn" onClick={() => handleAddToCart(toy)}>KÖP</button>
						</div>
					))}
				</div>
			</>
		
	);
}


























// import React from 'react'
// import { getToys } from '../Data/crud.js'
// import useStore from '../Data/store.js'
// import './Product.css'

// export default function Product() {
// 	const { toys, setToys } = useStore((state) => ({
// 		toys: state.toys,
// 		setToys: state.setToys,
// 		addToCart: state.addToCart,
// 	}));

// 	const handleGetToys = async () => {
// 		setToys(await getToys());
// 	};
// 	const handleAddToCart = () => {
// 		console.log('La till i varukorgen');
// 		addToCart()
// 	}

// 	return (
// 		<body className="bod">
			
// 		<><div className="btn-container">
// 			<button className="fetch-btn" onClick={handleGetToys}>
// 				Leksaker
// 			</button>

// 		</div><div className="toy-container">

// 				{toys.map((e) => (
// 					<div className="product" key={e.key}>
// 						<img src={e.Url} alt="badboll" />
// 						<h2>{e.Title}</h2>
// 						<h3>{e.Price}:-</h3>
// 						<button className="buy-btn">KÖP</button>
// 					</div>
// 				))}
// 			</div></>
// 				</body>
// 	  );
//   }

  




//   <section className="main-section">
// 		  <h1>Produkter</h1>
// 		  <div className="product-container">
// 			<h3>Badboll</h3>
// 			<img src="https://static.vecteezy.com/system/resources/thumbnails/009/974/271/small_2x/3d-rendering-beach-ball-isolated-png.png" alt="Badboll" />
// 			<p>Skön boll</p>
// 			<p>Pris: 69kr</p>
// 			<button className="buy-btn">Köp nu</button>
// 		  </div>
		  
// 		  <div className="product-container">
// 			<h3>Badboll</h3>
// 			<img src="https://static.vecteezy.com/system/resources/thumbnails/009/974/271/small_2x/3d-rendering-beach-ball-isolated-png.png" alt="Badboll" />
// 			<p>Skön boll</p>
// 			<p>Pris: 69kr</p>
// 			<button className="buy-btn">Köp nu</button>
// 		  </div>

// 		  <div className="product-container">
// 			<h3>Badboll</h3>
// 			<img src="https://static.vecteezy.com/system/resources/thumbnails/009/974/271/small_2x/3d-rendering-beach-ball-isolated-png.png" alt="Badboll" />
// 			<p>Skön boll</p>
// 			<p>Pris: 69kr</p>
// 			<button className="buy-btn">Köp nu</button>
// 		  </div>

// 		  <div className="product-container">
// 			<h3>Badboll</h3>
// 			<img src="https://static.vecteezy.com/system/resources/thumbnails/009/974/271/small_2x/3d-rendering-beach-ball-isolated-png.png" alt="Badboll" />
// 			<p>Skön boll</p>
// 			<p>Pris: 69kr</p>
// 			<button className="buy-btn">Köp nu</button>
// 		  </div>

// 		</section>