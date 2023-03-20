import styles from './Header.module.scss';

const Header = ({ openCart }) => {
	return (
		<header className={styles.header}>
			<div className={styles.headerLeft}>
				<img
					className={styles.img}
					width={40}
					height={40}
					src='/img/logo.png'
					alt='Logo'
				/>
				<div className={styles.headerInfo}>
					<h3>React Sneakers</h3>
					<p>Магазин лучших кроссовок</p>
				</div>
			</div>
			<div className={styles.headerRight}>
				<div
					onClick={openCart}
					className='cu-p d-flex align-center'
				>
					<img
						width={18}
						height={18}
						className='mr-10'
						src='/img/cart.svg'
						alt='Cart'
					/>
					<span className='mr-30'>0 руб.</span>
				</div>
				<div>
					<img
						width={20}
						height={20}
						src='/img/favorite.svg'
						alt='Favorite'
						className='favorite mr-30'
					/>
				</div>
				<div>
					<img
						width={20}
						height={20}
						className='user'
						src='/img/user.svg'
						alt='User'
					/>
				</div>
			</div>
		</header>
	);
};

export default Header;
