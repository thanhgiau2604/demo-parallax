import { useParallax } from 'react-scroll-parallax';
import NavigationLink from '../components/nav';

const HomePage = () => {
	const { ref } = useParallax<HTMLDivElement>({ speed: -10 });
	const { ref: ref1 } = useParallax<HTMLDivElement>({
		speed: 20,
	});
	const { ref: ref2 } = useParallax<HTMLDivElement>({
		rotate: [0, 360],
		translateX: [0, 500],
		shouldAlwaysCompleteAnimation: true,
	});

	return (
		<div>
			<NavigationLink />
			<div className='parallax-empty' />
			<div ref={ref} className='parallax-1'>
				Low speed
			</div>
			<div className='parallax-empty' />
			<div ref={ref1} className='parallax-1'>
				Faster speed
			</div>
			<div className='parallax-empty' />
			<div ref={ref2} className='parallax-2'>
				Rotate
			</div>
			<div className='parallax-empty' />
			<div className='parallax-empty' />
			<div className='parallax-empty' />
		</div>
	);
};

export default HomePage;
