import styles from './Drawer.module.scss';

const Drawer = ({ closeCart, items = [], removeFromCart, total }) => {
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
					{items.length > 0 ? (
						<div className={styles.cartNotEmpty}>
							{items.map((item, index) => (
								<div className={styles.cartItem}>
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
										onClick={() => removeFromCart(item.imageUrl)}
										className={styles.action}
									></div>
								</div>
							))}
						</div>
					) : (
						<div className={styles.cartEmpty}>
							<div className={styles.emptyImage}>
								<img
									src='/img/cart-empty.jpg'
									width={120}
									height={120}
									alt='Empty'
								/>
							</div>
							<div className={styles.emptyTitle}>Корзина пустая</div>
							<div className={styles.emptyText}>
								Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
							</div>
							<div className={styles.emptyAction}>
								<button
									onClick={closeCart}
									className={styles.backBtn}
								>
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
						</div>
					)}
				</div>
				{items.length > 0 ? (
					<div className={styles.total}>
						<div className={countClass + ' ' + styles.sum}>
							<div>Итого:</div>
							<div></div>
							<div>{total} руб.</div>
						</div>
						<div className={countClass + ' ' + styles.tax}>
							<div>Налог 5%:</div>
							<div></div>
							<div>{total / 20} руб.</div>
						</div>
						<div className={styles.action}>
							<button
								type='button'
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
