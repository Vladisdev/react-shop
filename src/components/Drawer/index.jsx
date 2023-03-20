import styles from './Drawer.module.scss';

const Drawer = ({ closeCart }) => {
	const countClass = styles.count;

	return (
		<div className={styles.overlay}>
			<div className={styles.drawer}>
				<div className={styles.header}>
					<h2>Корзина</h2>
					<div
						className={styles.close}
						onClick={closeCart}
					/>
				</div>
				<div className={styles.cartItems}>
					<div className={styles.cartItem}>
						<div className={styles.image}>
							<img
								src='/img/sneakers/2.jpg'
								alt='Sneakers'
							/>
						</div>
						<div className={styles.info}>
							<span>Мужские Кроссовки Nike Air Max 270</span>
							<span>12 999 руб.</span>
						</div>
						<div className={styles.action}></div>
					</div>

					<div className={styles.cartItem}>
						<div className={styles.image}>
							<img
								src='/img/sneakers/2.jpg'
								alt='Sneakers'
							/>
						</div>
						<div className={styles.info}>
							<span>Мужские Кроссовки Nike Air Max 270</span>
							<span>12 999 руб.</span>
						</div>
						<div className={styles.action}></div>
					</div>
				</div>
				<div className={styles.total}>
					<div className={countClass + ' ' + styles.sum}>
						<div>Итого:</div>
						<div></div>
						<div>21 498 руб.</div>
					</div>
					<div className={countClass + ' ' + styles.tax}>
						<div>Налог 5%:</div>
						<div></div>
						<div>1074 руб.</div>
					</div>
					<div className={styles.action}>
						<button
							type='button'
							className={styles.btn}
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
			</div>
		</div>
	);
};

export default Drawer;
