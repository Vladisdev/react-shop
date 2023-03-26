import { Link } from 'react-router-dom';
import ProductCard from '../../components/ProductCard';
import styles from './Favorites.module.scss';

const Favorites = ({ products, addToFavorites, addToCart }) => {
	return (
		<>
			{products.length > 0 ? (
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
						{products.map(item => (
							<ProductCard
								key={item.id}
								isFavorite={true}
								addToFavorites={addToFavorites}
								addToCart={addToCart}
								{...item}
							/>
						))}
					</div>
				</>
			) : (
				<div className={styles.empty}>
					<div className={styles.emoji}>
						<img
							src='./img/emoji-sad.svg'
							alt='Sad'
						/>
					</div>
					<div className={styles.title}>Закладок нет :(</div>
					<div className={styles.text}>Вы ничего не добавляли в закладки</div>
					<Link to={'/'}>
						<div className={styles.actionBlock}>
							<button className={styles.btn}>
								{' '}
								<svg
									width='16'
									height='14'
									viewBox='0 0 16 14'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M1 7H14.7143'
										stroke='white'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
									<path
										d='M8.71436 1L14.7144 7L8.71436 13'
										stroke='white'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>{' '}
								Вернуться назад
							</button>
						</div>
					</Link>
				</div>
			)}
		</>
	);
};

export default Favorites;
