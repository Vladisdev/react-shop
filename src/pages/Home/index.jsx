import { useContext } from 'react';
import { AppContext } from '../../App';
import ProductCard from '../../components/ProductCard';

const Home = ({
	searchValue,
	handleChangeSearch,
	clearSearchInput,
	addToCart,
	addToFavorites,
}) => {
	const { products, isLoading } = useContext(AppContext);

	function render() {
		const filteredItems = products.filter(item => {
			return item?.title.toLowerCase().includes(searchValue.toLowerCase());
		});

		return (isLoading ? [...Array(8)] : filteredItems).map((item, index) => (
			<ProductCard
				key={index}
				addToCart={addToCart}
				addToFavorites={addToFavorites}
				{...item}
			/>
		));
	}

	return (
		<>
			<div className='content__header d-flex justify-between'>
				<h1>
					{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}
				</h1>
				<div className='search pos-r'>
					<input
						type='text'
						placeholder='Поиск...'
						onChange={handleChangeSearch}
						value={searchValue}
					></input>
					<img
						className='search pos-a'
						src='/img/search.svg'
						alt='Search'
					/>
					{searchValue && (
						<img
							className='cross pos-a'
							src='/img/cross.svg'
							alt='Clear'
							onClick={clearSearchInput}
						/>
					)}
				</div>
			</div>
			<div className='cards mt-30'>{render()}</div>
		</>
	);
};

export default Home;
