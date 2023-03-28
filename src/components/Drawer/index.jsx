import { useContext, useState } from 'react';
import { AppContext } from '../../App';
import DrawerInfo from '../DrawerInfo';
import styles from './Drawer.module.scss';

const Drawer = ({ items = [], removeFromCart, opened }) => {
	const { totalPrice, cartItems, setCartOpened, setCartItems, setOrders } =
		useContext(AppContext);

	const [isOrderCreated, setIsOrderCreated] = useState(false);
	const countClass = styles.count;

	const createOrder = () => {
		setIsOrderCreated(true);
		setOrders(prev => [...prev, cartItems].flat());
		setCartItems([]);
	};

	return (
		<div className={`${styles.overlay} ${opened ? styles.opened : ''}`}>
			<div className={styles.drawer}>
				<div className={styles.header}>
					<h2>Корзина</h2>
					<div
						className={styles.close}
						onClick={() => setCartOpened(false)}
					/>
				</div>
				<div className={styles.cartItems}>
					{items.length > 0 ? (
						<div className={styles.cartNotEmpty}>
							{items.map(item => (
								<div
									key={item.id}
									className={styles.cartItem}
								>
									<div className={styles.image}>
										<img
											src={item.imageUrl}
											alt='Sneakers'
										/>
									</div>
									<div className={styles.info}>
										<span>{item.title}</span>
										<span>{item.price} руб.</span>
									</div>
									<div
										onClick={() => removeFromCart(item.id)}
										className={styles.action}
									></div>
								</div>
							))}
						</div>
					) : (
						<DrawerInfo
							title={isOrderCreated ? 'Заказ оформлен!' : 'Корзина пустая'}
							description={
								isOrderCreated
									? 'Ваш заказ скоро будет передан курьерской доставке'
									: 'Добавьте хотя-бы одну пару кроссовок, чтобы сделать заказ'
							}
							image={
								isOrderCreated ? 'img/cart-complete.svg' : 'img/cart-empty.svg'
							}
						/>
					)}
				</div>
				{items.length > 0 ? (
					<div className={styles.total}>
						<div className={countClass + ' ' + styles.sum}>
							<div>Итого:</div>
							<div></div>
							<div>{totalPrice} руб.</div>
						</div>
						<div className={countClass + ' ' + styles.tax}>
							<div>Налог 5%:</div>
							<div></div>
							<div>{totalPrice / 20} руб.</div>
						</div>
						<div className={styles.action}>
							<button
								type='button'
								onClick={() => createOrder()}
								className={styles.orderBtn}
							>
								Оформить заказ
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
								</svg>
							</button>
						</div>
					</div>
				) : null}
			</div>
		</div>
	);
};

export default Drawer;
