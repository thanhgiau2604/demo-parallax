import { ParallaxBanner } from 'react-scroll-parallax';
import NavigationLink from '../components/nav';

const BannerDemo = () => {
	return (
		<div>
			<NavigationLink />
			<div style={{ height: '10vh' }} />
			<ParallaxBanner
				layers={[
					{ image: '/banner.jpeg', speed: -15 },
					{
						children: <h1 className='head-text'>Introduction</h1>,
						speed: 10,
					},
				]}
				style={{ aspectRatio: '2/1' }}
			/>
			<div style={{ height: '100vh' }} />
		</div>
	);
};

export default BannerDemo;
