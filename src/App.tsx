import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/home';
import BannerDemo from './pages/banner';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/banner",
    element: <BannerDemo />,
  },
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
