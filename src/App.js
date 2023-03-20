import { useState } from 'react';
import Drawer from './components/Drawer';
import Header from './components/layout/Header';
import ProductCard from './components/ProductCard';
import { products } from './data/products';

function App() {
	const [cartOpened, setCartOpened] = useState(false);

	return (
		<div className='wrapper'>
			{cartOpened ? (
				<Drawer
					onCloseCart={() => {
						setCartOpened(false);
					}}
				/>
			) : null}
			<Header
				onOpenCart={() => {
					setCartOpened(true);
				}}
			/>
			<section className='content'>
				<div className='container'>
					<div className='content__header d-flex justify-between'>
						<h1>Все кроссовки</h1>
						<div className='search pos-r'>
							<input
								type='text'
								placeholder='Поиск...'
							></input>
							<img
								className='pos-a'
								src='/img/search.svg'
								alt='Search'
							/>
						</div>
					</div>
					<div className='cards mt-30'>
						{products.map((product, index) => (
							<ProductCard
								title={product.title}
								price={product.price}
								imageUrl={product.imageUrl}
								key={index}
							/>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}

export default App;
