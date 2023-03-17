const Header = () => {
	return (
		<header className='d-flex justify-between align-center'>
			<div className='headerLeft d-flex align-center'>
				<img
					className='mr-15'
					width={40}
					height={40}
					src='/img/logo.png'
					alt='Logo'
				/>
				<div className='headerInfo'>
					<h3 className='text-uppercase'>React Sneakers</h3>
					<p>Магазин лучших кроссовок</p>
				</div>
			</div>
			<div className='headerRight d-flex align-center'>
				<div className='d-flex align-center'>
					<img
						width={18}
						height={18}
						className='mr-10'
						src='/img/cart.svg'
						alt='Cart'
					/>
					<span className='mr-30'>1205 руб.</span>
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
