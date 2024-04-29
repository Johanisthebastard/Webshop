import React, { useState, useEffect } from 'react';
import { addToy, getToys, updateToy } from '../Data/crud.js';
import './Product.css';
import { NavLink } from 'react-router-dom';
import DeleteProduct from './DeleteProduct.jsx';

const AddToy = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [editingToy, setEditingToy] = useState(null);
    const [Url, setUrl] = useState('');
    const [Title, setTitle] = useState('');
    const [Price, setPrice] = useState('');
    const [urlError, setUrlError] = useState('');
    const [titleError, setTitleError] = useState('');
    const [priceError, setPriceError] = useState('');
    const [toys, setToys] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        fetchToys();
    }, []);

    const fetchToys = async () => {
        const toysData = await getToys();
        setToys(toysData);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        let isValid = true;
        if (Url.trim() === '') {
            setUrlError('Vänligen skriv in bildlänk');
            isValid = false;
        } else {
            setUrlError('');
        }
        if (Title.trim() === '') {
            setTitleError('Vänligen skriv in namn på vara');
            isValid = false;
        } else {
            setTitleError('');
        }
        if (Price.trim() === '') {
            setPriceError('Vänligen skriv in pris på vara');
            isValid = false;
        } else {
            setPriceError('');
        }

        if (!isValid) {
            return;
        }

        setIsLoading(true);
        const PriceAsNumber = parseFloat(Price);
        const newToy = { Url: Url, Title: Title, Price: PriceAsNumber };

        try {
            if (editingToy) {
                await updateToy(editingToy.key, newToy);
                setEditingToy(null);
            } else {
                const addedToy = await addToy(newToy); 
                setToys([...toys, addedToy]); 
				
            }
            
            
            setUrl('');
            setTitle('');
            setPrice('');
        } finally {
            setIsLoading(false);
			
        }
    };

    const handleEditToy = (toy) => {
        setEditingToy(toy);
        setUrl(toy.Url);
        setTitle(toy.Title);
        setPrice(toy.Price.toString());
		fetchToys();
    };

    return (
        <section>
            <form className="toy-container">
                <h3>{editingToy ? 'Redigera vara' : 'Lägg till ny vara'}</h3>

                <section>
                    <label> Bild </label>
                    <input
                        type="text"
                        value={Url}
                        onChange={(e) => setUrl(e.target.value)}
                    />
                    {urlError && <p className="error">{urlError}</p>}
                </section>

                <section>
                    <label> Titel </label>
                    <input
                        type="text"
                        value={Title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    {titleError && <p className="error">{titleError}</p>}
                </section>

                <section>
                    <label> Pris </label>
                    <input
                        type="text"
                        value={Price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    {priceError && <p className="error">{priceError}</p>}
                </section>

                <button
                    disabled={isLoading}
                    onClick={handleSubmit}
                    type="submit"
                >
                    {editingToy ? 'Uppdatera vara' : 'Lägg till vara'}
                </button>
            </form>
            
            <section className="body">
                <NavLink to="/" className="back-link">
                    Gå tillbaka
                </NavLink>
                <DeleteProduct handleEditToy={handleEditToy} />
            </section>
        </section>
    );
};

export default AddToy;
