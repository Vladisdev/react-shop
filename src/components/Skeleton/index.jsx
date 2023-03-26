import ContentLoader from 'react-content-loader';

const Skeleton = () => {
	return (
		<ContentLoader
			speed={2}
			width={210}
			height={260}
			viewBox='0 0 210 260'
			backgroundColor='#f3f3f3'
			foregroundColor='#ecebeb'
		>
			<rect
				x='7'
				y='131'
				rx='5'
				ry='5'
				width='134'
				height='15'
			/>
			<rect
				x='7'
				y='153'
				rx='5'
				ry='5'
				width='105'
				height='15'
			/>
			<rect
				x='8'
				y='227'
				rx='8'
				ry='8'
				width='71'
				height='24'
			/>
			<rect
				x='106'
				y='220'
				rx='8'
				ry='8'
				width='32'
				height='32'
			/>
			<rect
				x='7'
				y='0'
				rx='10'
				ry='10'
				width='133'
				height='112'
			/>
			<rect
				x='7'
				y='178'
				rx='5'
				ry='5'
				width='58'
				height='15'
			/>
		</ContentLoader>
	);
};

export default Skeleton;
