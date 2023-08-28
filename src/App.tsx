import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/home';
import BannerDemo from './pages/banner';
import MotionParallax from './pages/motion';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: '/banner',
		element: <BannerDemo />,
	},
	{
		path: '/motion',
		element: <MotionParallax />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
