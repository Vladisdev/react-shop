import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Drawer from './components/Drawer';
import Header from './components/layout/Header';
import { items } from './data/data';
import Favorites from './pages/Favorites';
import Home from './pages/Home';

function App() {
	const [cartOpened, setCartOpened] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [favoriteItems, setFavoriteItems] = useState([]);
	const [products, setProducts] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const [isLoading, setIsLoading] = useState(true);
	const cartItemsPrices = [];

	cartItems.forEach(cartItem => {
		cartItemsPrices.push(cartItem.price);
	});

	const totalPrice = cartItemsPrices.reduce((acc, item) => (acc += item), 0);

	useEffect(() => {
		setTimeout(() => {
			setProducts(items);
			setIsLoading(false);
		}, 1500);
	}, []);

	useEffect(() => {
		localStorage.setItem('favorites', JSON.stringify(favoriteItems));
	}, [favoriteItems]);

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cartItems));
	}, [cartItems]);

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

	const removeFromCart = imageUrl => {
		setCartItems(prev => prev.filter(item => item.imageUrl !== imageUrl));
	};

	const handleChangeSearch = event => {
		setSearchValue(event.target.value);
	};

	const clearSearchInput = () => {
		setSearchValue('');
	};

	return (
		<div className='wrapper'>
			{cartOpened && (
				<Drawer
					items={cartItems}
					closeCart={() => {
						setCartOpened(false);
					}}
					removeFromCart={removeFromCart}
					total={totalPrice}
				/>
			)}
			<Header
				openCart={() => {
					setCartOpened(true);
				}}
				total={totalPrice}
			/>
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
									isLoading={isLoading}
								/>
							}
						/>
						<Route
							path={'favorites'}
							element={
								<Favorites
									products={favoriteItems}
									addToFavorites={addToFavorites}
									addToCart={addToCart}
								/>
							}
						/>
					</Routes>
				</div>
			</section>
		</div>
	);
}

export default App;
