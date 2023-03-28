import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../App';
import PagesInfo from '../../components/PagesInfo';
import ProductCard from '../../components/ProductCard';
import styles from './Favorites.module.scss';

const Favorites = ({ addToFavorites, addToCart }) => {
	const { favoriteItems } = useContext(AppContext);

	return (
		<>
			{favoriteItems.length > 0 ? (
				<>
					<div className={styles.contentHeader}>
						<Link to={'/'}>
							<div className={styles.contentSvg}>
								<svg
									width='35'
									height='35'
									viewBox='0 0 35 35'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<rect
										x='0.5'
										y='0.5'
										width='34'
										height='34'
										rx='7.5'
										fill='white'
										stroke='#F2F2F2'
									/>
									<path
										d='M19 22L14 17L19 12'
										stroke='#C8C8C8'
										strokeWidth='1.5'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
							</div>
						</Link>
						<h1>Мои закладки</h1>
					</div>
					<div className='cards'>
						{favoriteItems.map(item => (
							<ProductCard
								key={item.id}
								addToFavorites={addToFavorites}
								addToCart={addToCart}
								{...item}
							/>
						))}
					</div>
				</>
			) : (
				<PagesInfo
					image='img/emoji-tears.svg'
					title='Закладок нет :('
					text={<span>Вы ничего не добавляли в закладки</span>}
				/>
			)}
		</>
	);
};

export default Favorites;
