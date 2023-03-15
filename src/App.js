function App() {
	return (
		<div className='wrapper'>
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
			<section className='content'>
				<div className='container'>
					<h1 className=''>Все кроссовки</h1>
					<div className='cards mt-30'>
						<div className='card'>
							<div className='card__image mb-15'>
								<img
									width={133}
									height={112}
									src='/img/sneakers/1.jpg'
									alt='Sneakers'
								/>
							</div>
							<div className='card__title mb-15'>
								Мужские Кроссовки Nike Blazer Mid Suede
							</div>
							<div className='card__info d-flex align-center justify-between'>
								<div className='card__info--price d-flex flex-column align-start'>
									<span>Цена:</span>
									<span>12 999 руб.</span>
								</div>
								<div>
									<button className='card__button'>
										<img
											width={11}
											height={11}
											src='/img/plus.svg'
											alt='Plus'
											className=''
										/>
									</button>
								</div>
							</div>
						</div>
						<div className='card'>
							<div className='card__image mb-15'>
								<img
									width={133}
									height={112}
									src='/img/sneakers/2.jpg'
									alt='Sneakers'
								/>
							</div>
							<div className='card__title mb-15'>
								Мужские Кроссовки Nike Air Max 270
							</div>
							<div className='card__info d-flex align-center justify-between'>
								<div className='card__info--price d-flex flex-column align-start'>
									<span>Цена:</span>
									<span>12 999 руб.</span>
								</div>
								<div>
									<button className='card__button'>
										<img
											width={11}
											height={11}
											src='/img/plus.svg'
											alt='Plus'
											className=''
										/>
									</button>
								</div>
							</div>
						</div>
						<div className='card'>
							<div className='card__image mb-15'>
								<img
									width={133}
									height={112}
									src='/img/sneakers/3.jpg'
									alt='Sneakers'
								/>
							</div>
							<div className='card__title mb-15'>
								Мужские Кроссовки Nike Blazer Mid Suede
							</div>
							<div className='card__info d-flex align-center justify-between'>
								<div className='card__info--price d-flex flex-column align-start'>
									<span>Цена:</span>
									<span>8 499 руб.</span>
								</div>
								<div>
									<button className='card__button'>
										<img
											width={11}
											height={11}
											src='/img/plus.svg'
											alt='Plus'
											className=''
										/>
									</button>
								</div>
							</div>
						</div>
						<div className='card'>
							<div className='card__image mb-15'>
								<img
									width={133}
									height={112}
									src='/img/sneakers/4.jpg'
									alt='Sneakers'
								/>
							</div>
							<div className='card__title mb-15'>
								Кроссовки Puma X Aka Boku Future Rider
							</div>
							<div className='card__info d-flex align-center justify-between'>
								<div className='card__info--price d-flex flex-column align-start'>
									<span>Цена:</span>
									<span>8 999 руб.</span>
								</div>
								<div>
									<button className='card__button'>
										<img
											width={11}
											height={11}
											src='/img/plus.svg'
											alt='Plus'
											className=''
										/>
									</button>
								</div>
							</div>
						</div>
						<div className='card'>
							<div className='card__image mb-15'>
								<img
									width={133}
									height={112}
									src='/img/sneakers/5.jpg'
									alt='Sneakers'
								/>
							</div>
							<div className='card__title mb-15'>
								Мужские Кроссовки Under Armour Curry 8
							</div>
							<div className='card__info d-flex align-center justify-between'>
								<div className='card__info--price d-flex flex-column align-start'>
									<span>Цена:</span>
									<span>15 199 руб.</span>
								</div>
								<div>
									<button className='card__button'>
										<img
											width={11}
											height={11}
											src='/img/plus.svg'
											alt='Plus'
											className=''
										/>
									</button>
								</div>
							</div>
						</div>
						<div className='card'>
							<div className='card__image mb-15'>
								<img
									width={133}
									height={112}
									src='/img/sneakers/6.jpg'
									alt='Sneakers'
								/>
							</div>
							<div className='card__title mb-15'>
								Мужские Кроссовки Nike Kyrie 7
							</div>
							<div className='card__info d-flex align-center justify-between'>
								<div className='card__info--price d-flex flex-column align-start'>
									<span>Цена:</span>
									<span>11 299 руб.</span>
								</div>
								<div>
									<button className='card__button'>
										<img
											width={11}
											height={11}
											src='/img/plus.svg'
											alt='Plus'
											className=''
										/>
									</button>
								</div>
							</div>
						</div>
						<div className='card'>
							<div className='card__image mb-15'>
								<img
									width={133}
									height={112}
									src='/img/sneakers/7.jpg'
									alt='Sneakers'
								/>
							</div>
							<div className='card__title mb-15'>
								Мужские Кроссовки Jordan Air Jordan 11
							</div>
							<div className='card__info d-flex align-center justify-between'>
								<div className='card__info--price d-flex flex-column align-start'>
									<span>Цена:</span>
									<span>10 799 руб.</span>
								</div>
								<div>
									<button className='card__button'>
										<img
											width={11}
											height={11}
											src='/img/plus.svg'
											alt='Plus'
											className=''
										/>
									</button>
								</div>
							</div>
						</div>
						<div className='card'>
							<div className='card__image mb-15'>
								<img
									width={133}
									height={112}
									src='/img/sneakers/8.jpg'
									alt='Sneakers'
								/>
							</div>
							<div className='card__title mb-15'>
								Мужские Кроссовки Nike LeBron XVIII
							</div>
							<div className='card__info d-flex align-center justify-between'>
								<div className='card__info--price d-flex flex-column align-start'>
									<span>Цена:</span>
									<span>16 499 руб.</span>
								</div>
								<div>
									<button className='card__button'>
										<img
											width={11}
											height={11}
											src='/img/plus.svg'
											alt='Plus'
											className=''
										/>
									</button>
								</div>
							</div>
						</div>
						<div className='card'>
							<div className='card__image mb-15'>
								<img
									width={133}
									height={112}
									src='/img/sneakers/9.jpg'
									alt='Sneakers'
								/>
							</div>
							<div className='card__title mb-15'>
								Мужские Кроссовки Nike Lebron XVIII Low
							</div>
							<div className='card__info d-flex align-center justify-between'>
								<div className='card__info--price d-flex flex-column align-start'>
									<span>Цена:</span>
									<span>13 999 руб.</span>
								</div>
								<div>
									<button className='card__button'>
										<img
											width={11}
											height={11}
											src='/img/plus.svg'
											alt='Plus'
											className=''
										/>
									</button>
								</div>
							</div>
						</div>
						<div className='card'>
							<div className='card__image mb-15'>
								<img
									width={133}
									height={112}
									src='/img/sneakers/10.jpg'
									alt='Sneakers'
								/>
							</div>
							<div className='card__title mb-15'>
								Мужские Кроссовки Nike Blazer Mid Suede
							</div>
							<div className='card__info d-flex align-center justify-between'>
								<div className='card__info--price d-flex flex-column align-start'>
									<span>Цена:</span>
									<span>8 499 руб.</span>
								</div>
								<div>
									<button className='card__button'>
										<img
											width={11}
											height={11}
											src='/img/plus.svg'
											alt='Plus'
											className=''
										/>
									</button>
								</div>
							</div>
						</div>
						<div className='card'>
							<div className='card__image mb-15'>
								<img
									width={133}
									height={112}
									src='/img/sneakers/11.jpg'
									alt='Sneakers'
								/>
							</div>
							<div className='card__title mb-15'>
								Кроссовки Puma X Aka Boku Future Rider
							</div>
							<div className='card__info d-flex align-center justify-between'>
								<div className='card__info--price d-flex flex-column align-start'>
									<span>Цена:</span>
									<span>8 999 руб.</span>
								</div>
								<div>
									<button className='card__button'>
										<img
											width={11}
											height={11}
											src='/img/plus.svg'
											alt='Plus'
											className=''
										/>
									</button>
								</div>
							</div>
						</div>
						<div className='card'>
							<div className='card__image mb-15'>
								<img
									width={133}
									height={112}
									src='/img/sneakers/12.jpg'
									alt='Sneakers'
								/>
							</div>
							<div className='card__title mb-15'>
								Мужские Кроссовки Nike Kyrie Flytrap IV
							</div>
							<div className='card__info d-flex align-center justify-between'>
								<div className='card__info--price d-flex flex-column align-start'>
									<span>Цена:</span>
									<span>11 299 руб.</span>
								</div>
								<div>
									<button className='card__button'>
										<img
											width={11}
											height={11}
											src='/img/plus.svg'
											alt='Plus'
											className=''
										/>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default App;
