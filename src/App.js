import Drawer from './components/Drawer';
import Header from './components/layout/Header';
import ProductCard from './components/ProductCard';

function App() {
	return (
		<div className='wrapper'>
			<Drawer />
			<Header />
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
						<ProductCard />
						<ProductCard />
						<ProductCard />
						<ProductCard />
						<ProductCard />
						<ProductCard />
						<ProductCard />
					</div>
				</div>
			</section>
		</div>
	);
}

export default App;
