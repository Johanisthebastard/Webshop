import { useState } from 'react'
import useStore from '../Data/store.js'
import { addToy, getToys } from '../Data/crud.js'
import './Product.css'
import { NavLink } from 'react-router-dom';
import Product from '../Components/Product';
import React from 'react'
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';


const AddToy = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [Url, setUrl] = useState('')
    const [Title, setTitle] = useState('')
    const [Price, setPrice] = useState('')
    const [urlError, setUrlError] = useState('')
    const [titleError, setTitleError] = useState('')
    const [priceError, setPriceError] = useState('')
    const setToys = useStore(state => state.setToys)

    const handleSubmit = async (event) => {
        event.preventDefault()

        
        let isValid = true
        if (Url.trim() === '') {
            setUrlError('Vänligen skriv in bildlänk')
            isValid = false
        } else {
            setUrlError('')
        }
        if (Title.trim() === '') {
            setTitleError('Vänligen skriv in namn på vara')
            isValid = false
        } else {
            setTitleError('')
        }
        if (Price.trim() === '') {
            setPriceError('Vänligen skriv in pris på vara')
            isValid = false
        } else {
            setPriceError('')
        }

        if (!isValid) {
            return; 
        }

        setIsLoading(true)
        const PriceAsNumber = parseFloat(Price);
        const newToy = { Url: Url, Title: Title, Price: PriceAsNumber }

        try {
            await addToy(newToy)
            setUrl('')
            setTitle('')
            setPrice('')
            setToys(await getToys())
        } finally {
            setIsLoading(false)
        }
    }

    return (
		
        <section>
			<Header/>
			<section className="body">
			
		
		</section>
            <form className="toy-container">
                <h3> Lägg till ny vara</h3>

                <section>
                    <label> Bild </label>
                    <input type="text"
                        value={Url}
                        onChange={e => setUrl(e.target.value)}
                    />
                    {urlError && <p className="error">{urlError}</p>}
                </section>

                <section>
                    <label> Titel </label>
                    <input type="text"
                        value={Title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    {titleError && <p className="error">{titleError}</p>}
                </section>

                <section>
                    <label> Pris </label>
                    <input type="text"
                        value={Price}
                        onChange={e => setPrice(e.target.value)}
                    />
                    {priceError && <p className="error">{priceError}</p>}
                </section>

                <button
                    disabled={isLoading}
                    onClick={handleSubmit} type="submit"> Lägg till vara </button>
					
            </form>
			<section className="body">
				

			</section>
			<NavLink to="/" className="back-link">Gå tillbaka</NavLink>
        </section>
    )
}

export default AddToy
