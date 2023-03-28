import { Link } from 'react-router-dom';
import styles from './PagesInfo.module.scss';

const PagesInfo = ({ image, title, text }) => {
	return (
		<div className={styles.infoBlock}>
			<div className={styles.emoji}>
				<img
					src={image}
					alt='Sad'
				/>
			</div>
			<div className={styles.title}>{title}</div>
			<div className={styles.text}>{text}</div>
			<Link to={''}>
				<div className={styles.actionBlock}>
					<button className={styles.btn}>
						{' '}
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

export default PagesInfo;
