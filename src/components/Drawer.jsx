const Drawer = () => {
	return (
		<div
			style={{ display: 'none' }}
			className='overlay'
		>
			<div className='drawer'>
				<div className='drawer__header'>
					<h2>Корзина</h2>
					<div className='close' />
				</div>
				<div className='cartItems'>
					<div className='cartItem d-flex align-center'>
						<div className='cartItem__image'>
							<img
								src='/img/sneakers/2.jpg'
								alt='Sneakers'
							/>
						</div>
						<div className='cartItem__info d-flex flex-column'>
							<span>Мужские Кроссовки Nike Air Max 270</span>
							<span>12 999 руб.</span>
						</div>
						<div className='cartItem__action'></div>
					</div>

					<div className='cartItem d-flex align-center'>
						<div className='cartItem__image'>
							<img
								src='/img/sneakers/2.jpg'
								alt='Sneakers'
							/>
						</div>
						<div className='cartItem__info d-flex flex-column'>
							<span>Мужские Кроссовки Nike Air Max 270</span>
							<span>12 999 руб.</span>
						</div>
						<div className='cartItem__action'></div>
					</div>
				</div>
				<div className='total'>
					<div className='count total__sum d-flex'>
						<div>Итого:</div>
						<div></div>
						<div>21 498 руб.</div>
					</div>
					<div className='count total__tax d-flex'>
						<div>Налог 5%:</div>
						<div></div>
						<div>1074 руб.</div>
					</div>
					<div className='total__action'>
						<button
							type='button'
							className='btn'
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
