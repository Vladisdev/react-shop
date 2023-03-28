import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../App';
import PagesInfo from '../../components/PagesInfo';
import ProductCard from '../../components/ProductCard';
import styles from './Orders.module.scss';

const Orders = ({ addToFavorites, addToCart }) => {
	const { orders } = useContext(AppContext);
	console.log(orders);

	return (
		<>
			{orders.length > 0 ? (
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
						<h1>Мои заказы</h1>
					</div>
					<div className='cards'>
						{orders.map(item => (
							<ProductCard
								key={item.id}
								addToFavorites={addToFavorites}
								addToCart={addToCart}
								{...item}
								hideActions
							/>
						))}
					</div>
				</>
			) : (
				<PagesInfo
					image='./img/emoji-sad.svg'
					title='У вас нет заказов'
					text={
						<>
							<span>Нам грустно, ведь вы не оформили ни одного заказа</span>
						</>
					}
				/>
			)}
		</>
	);
};

export default Orders;
