import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../App';
import styles from './DrawerInfo.module.scss';

const DrawerInfo = ({ image, title, description }) => {
	const { setCartOpened } = useContext(AppContext);

	return (
		<div className={styles.infoBlock}>
			<div className={styles.infoImage}>
				<img
					src={image}
					width={120}
					height={120}
					alt='Empty'
				/>
			</div>
			<div className={styles.infoTitle}>{title}</div>
			<div className={styles.infoText}>{description}</div>
			<Link to={''}>
				<div className={styles.infoAction}>
					<button
						onClick={() => setCartOpened(false)}
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
			</Link>
		</div>
	);
};

export default DrawerInfo;
