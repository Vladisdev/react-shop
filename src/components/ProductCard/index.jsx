import { useState } from 'react';
import Skeleton from '../Skeleton';
import styles from './ProductCard.module.scss';

const ProductCard = ({
	id,
	title,
	price,
	imageUrl,
	addToCart,
	addToFavorites,
	favorite = false,
	onCart = false,
	loading = false,
}) => {
	const [isAddedToCart, setIsAddedToCart] = useState(onCart);
	const [isAddedToFavorites, setIsAddedToFavorites] = useState(favorite);

	const onCLickPlus = () => {
		addToCart({ id, title, price, imageUrl });
		setIsAddedToCart(!isAddedToCart);
	};

	const onCLickFavorite = () => {
		addToFavorites({ id, title, price, imageUrl });
		setIsAddedToFavorites(!isAddedToFavorites);
	};

	return (
		<div className={styles.card}>
			{loading ? (
				<Skeleton />
			) : (
				<>
					<div
						onClick={onCLickFavorite}
						className={styles.favorite}
					>
						{isAddedToFavorites ? (
							<svg
								width='32'
								height='32'
								viewBox='0 0 32 32'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<rect
									width='32'
									height='32'
									rx='7'
									fill='#FEF0F0'
								/>
								<path
									d='M22.5849 12.2231C22.3615 11.7098 22.0394 11.2446 21.6365 10.8537C21.2333 10.4615 20.758 10.1499 20.2363 9.93576C19.6954 9.7128 19.1152 9.59868 18.5295 9.60002C17.7077 9.60002 16.906 9.82329 16.2092 10.245C16.0425 10.3459 15.8842 10.4567 15.7342 10.5775C15.5841 10.4567 15.4258 10.3459 15.2591 10.245C14.5624 9.82329 13.7606 9.60002 12.9388 9.60002C12.3471 9.60002 11.7737 9.71248 11.232 9.93576C10.7086 10.1508 10.2369 10.46 9.83181 10.8537C9.42843 11.2442 9.10619 11.7095 8.88337 12.2231C8.65168 12.7573 8.53333 13.3246 8.53333 13.9084C8.53333 14.4592 8.64668 15.0331 8.8717 15.6169C9.06006 16.1048 9.33009 16.6109 9.67513 17.122C10.2219 17.9307 10.9736 18.7742 11.9071 19.6293C13.4539 21.0467 14.9857 22.0258 15.0507 22.0655L15.4458 22.3169C15.6208 22.4277 15.8458 22.4277 16.0209 22.3169L16.4159 22.0655C16.4809 22.0242 18.0111 21.0467 19.5596 19.6293C20.493 18.7742 21.2448 17.9307 21.7915 17.122C22.1366 16.6109 22.4083 16.1048 22.5949 15.6169C22.82 15.0331 22.9333 14.4592 22.9333 13.9084C22.935 13.3246 22.8166 12.7573 22.5849 12.2231Z'
									fill='#FF8585'
								/>
							</svg>
						) : (
							<svg
								width='32'
								height='32'
								viewBox='0 0 32 32'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<rect
									x='0.5'
									y='0.5'
									width='31'
									height='31'
									rx='6.5'
									fill='white'
									stroke='#F8F8F8'
								/>
								<path
									d='M21.149 11.356L21.1484 11.3554C20.8095 11.0258 20.4097 10.7636 19.9705 10.5833L19.9696 10.5829C19.5139 10.3951 19.0249 10.2989 18.5311 10.3L18.5295 10.3C17.8346 10.3 17.1584 10.4887 16.5717 10.8438L16.5717 10.8439C16.4313 10.9288 16.2985 11.0218 16.173 11.1228L15.7341 11.476L15.2953 11.1228C15.1698 11.0218 15.037 10.9288 14.8966 10.8439L14.8966 10.8438C14.3099 10.4887 13.6337 10.3 12.9388 10.3C12.4373 10.3 11.9546 10.395 11.4987 10.5829L11.498 10.5832C11.057 10.7644 10.6606 11.0243 10.3197 11.3556L10.3187 11.3566L10.3187 11.3566C9.98111 11.6834 9.71174 12.0725 9.52557 12.5016L21.149 11.356ZM21.149 11.356C21.4865 11.6835 21.7561 12.0729 21.943 12.5022C22.1365 12.9487 22.2347 13.4204 22.2333 13.9064V13.9084C22.2333 14.3625 22.1399 14.8512 21.9418 15.3651L21.9412 15.3667M21.149 11.356L21.9412 15.3667M12.3799 19.1131L12.38 19.1132C13.1291 19.7996 13.8773 20.3822 14.4475 20.7988C14.732 21.0066 14.9709 21.1721 15.1415 21.2873C15.2268 21.345 15.2948 21.3899 15.3428 21.4212C15.3857 21.4492 15.4091 21.464 15.4144 21.4673C15.4154 21.4679 15.4158 21.4682 15.4155 21.468L15.4266 21.4748L15.4266 21.4749L15.7333 21.6701L16.0401 21.4749L16.0402 21.4748C16.0914 21.4423 17.5822 20.4902 19.0868 19.1131H12.3799ZM12.3799 19.1131C11.4753 18.2845 10.7634 17.4818 10.255 16.7299M12.3799 19.1131L10.255 16.7299M21.9412 15.3667C21.7771 15.7954 21.5328 16.2542 21.2114 16.7303M21.9412 15.3667L21.2114 16.7303M10.255 16.7299C9.93467 16.2553 9.69124 15.796 9.52486 15.3651L10.255 16.7299ZM21.2114 16.7303C20.7031 17.482 19.9913 18.2845 19.087 19.1129L21.2114 16.7303ZM9.23333 13.9084C9.23333 13.4208 9.33184 12.9483 9.52554 12.5017L9.52472 15.3648C9.32672 14.851 9.23333 14.3624 9.23333 13.9084Z'
									stroke='#ECECEC'
									strokeWidth='1.4'
								/>
							</svg>
						)}
					</div>
					<div className={styles.image}>
						<img
							width={133}
							height={112}
							src={imageUrl}
							alt='Sneakers'
						/>
					</div>
					<div className={styles.title}>{title}</div>
					<div className={styles.info}>
						<div className={styles.price}>
							<span>Цена:</span>
							<span>{price} руб.</span>
						</div>
						<div
							className={styles.btn}
							onClick={onCLickPlus}
						>
							<img
								src={isAddedToCart ? '/img/check.svg' : '/img/plus.svg'}
								alt='Plus'
							/>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default ProductCard;
