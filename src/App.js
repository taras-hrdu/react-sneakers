import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from './components/Header';
import Drawer from './components/Drawer';

import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Favorites from './pages/Favorites';

function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [cartOpened, setCartOpened] = useState(false);

    useEffect(() => {
        axios.get('https://6260187b53a42eaa07000895.mockapi.io/items').then((res) => {
            setItems(res.data);
        });
        axios.get('https://6260187b53a42eaa07000895.mockapi.io/cart').then((res) => {
            setCartItems(res.data);
        });
        axios.get('https://6260187b53a42eaa07000895.mockapi.io/favorites').then((res) => {
            setFavorites(res.data);
        });
    }, []);

    const onAddToCart = (obj) => {
        if (cartItems.find((item) => item.imageUrl == obj.imageUrl)) {
            setCartItems((prev) => prev.filter((item) => item.imageUrl != obj.imageUrl));
            axios.post('https://6260187b53a42eaa07000895.mockapi.io/cart', obj);
        } else {
            setCartItems((prev) => [...prev, obj]);
            axios.post('https://6260187b53a42eaa07000895.mockapi.io/cart', obj);
        }
    };

    const onRemoveFromCart = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id != id));
        axios.delete(`https://6260187b53a42eaa07000895.mockapi.io/cart/${id}`);
    };

    const onAddToFavorite = async (obj) => {
        try {
            if (favorites.find((favObj) => favObj.id == obj.id)) {
                axios.delete(`https://6260187b53a42eaa07000895.mockapi.io/favorites/${obj.id}`);
                setFavorites((prev) => prev.filter((item) => item.id != obj.id));
            } else {
                const { data } = await axios.post(
                    'https://6260187b53a42eaa07000895.mockapi.io/favorites',
                    obj,
                );
                setFavorites((prev) => [...prev, data]);
            }
        } catch (error) {
            alert('Could not add to favorites');
        }
    };

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <div className="wrapper clear">
            {cartOpened && (
                <Drawer
                    items={cartItems}
                    onClose={() => setCartOpened(false)}
                    onRemove={onRemoveFromCart}
                />
            )}
            <Header onClickCart={() => setCartOpened(true)} />
            <Routes>
                <Route
                    exact
                    path="/"
                    element={
                        <Home
                            items={items}
                            searchValue={searchValue}
                            setSearchValue={setSearchValue}
                            onChangeSearchInput={onChangeSearchInput}
                            onAddToFavorite={onAddToFavorite}
                            onAddToCart={onAddToCart}
                        />
                    }
                />
                <Route
                    exact
                    path="/favorites"
                    element={<Favorites items={favorites} onAddToFavorite={onAddToFavorite} />}
                />
            </Routes>
        </div>
    );
}

export default App;
