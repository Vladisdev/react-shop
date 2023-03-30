import { createContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Drawer from './components/Drawer';
import Header from './components/layout/Header';
import { items } from './data/data';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import Orders from './pages/Orders';

export const AppContext = createContext({});

function App() {
	const [cartOpened, setCartOpened] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [favoriteItems, setFavoriteItems] = useState([]);
	const [products, setProducts] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const [isLoading, setIsLoading] = useState(true);
	const [orders, setOrders] = useState([]);
	const total = cartItems.reduce((acc, item) => (acc += item.price), 0);
	const [totalPrice, setTotalPrice] = useState(total);

	useEffect(() => {
		setTotalPrice(total);
	}, [total]);

	useEffect(() => {
		setTimeout(() => {
			setProducts(items);
			setIsLoading(false);
		}, 500);
	}, []);

	const addToCart = item => {
		const cartItemsIds = cartItems.map(item => {
			return item.id;
		});

		if (cartItemsIds.includes(item.id)) {
			return setCartItems(prev => prev.filter(_item => _item.id !== item.id));
		}

		setCartItems(prev => [...prev, item]);
	};

	const addToFavorites = item => {
		const favoriteItemsIds = favoriteItems.map(item => {
			return item.id;
		});

		if (favoriteItemsIds.includes(item.id)) {
			return setFavoriteItems(prev =>
				prev.filter(_item => _item.id !== item.id)
			);
		}

		setFavoriteItems(prev => [...prev, item]);
	};

	const removeFromCart = id => {
		setCartItems(prev => prev.filter(item => item.id !== id));
	};

	const handleChangeSearch = event => {
		setSearchValue(event.target.value);
	};

	const clearSearchInput = () => {
		setSearchValue('');
	};

	const isItemInCart = id => {
		if (typeof id !== 'undefined' && cartItems.length > 0) {
			return cartItems.some(item => item.id === id);
		}
	};

	const isItemInFavorites = id => {
		if (typeof id !== 'undefined' && favoriteItems.length > 0) {
			return favoriteItems.some(item => item.id === id);
		}
	};

	return (
		<AppContext.Provider
			value={{
				products,
				cartItems,
				favoriteItems,
				totalPrice,
				orders,
				isLoading,
				isItemInCart,
				isItemInFavorites,
				setCartOpened,
				setCartItems,
				setOrders,
			}}
		>
			<div className='wrapper'>
				<Drawer
					items={cartItems}
					removeFromCart={removeFromCart}
					opened={cartOpened}
				/>
				<Header />
				<section className='content'>
					<div className='container'>
						<Routes>
							<Route
								path={'/'}
								element={
									<Home
										products={products}
										cartItems={cartItems}
										searchValue={searchValue}
										handleChangeSearch={handleChangeSearch}
										clearSearchInput={clearSearchInput}
										addToCart={addToCart}
										addToFavorites={addToFavorites}
									/>
								}
							/>
							<Route
								path={'favorites'}
								element={
									<Favorites
										addToFavorites={addToFavorites}
										addToCart={addToCart}
									/>
								}
							/>
							<Route
								path={'profile'}
								element={
									<Orders
										addToFavorites={addToFavorites}
										addToCart={addToCart}
									/>
								}
							/>
						</Routes>
					</div>
				</section>
			</div>
		</AppContext.Provider>
	);
}

export default App;
