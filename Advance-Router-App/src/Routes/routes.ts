import HomePage from '../Pages/Home/HomePage';
import App from '../App';
import AboutPage from '../Pages/About/AboutPage';
import BlogPage from '../Pages/Blog/BlogPage';
import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            {
                index: true,
                Component: HomePage
            },
            {
                path: 'about',
                Component: AboutPage
            },
            {
                path: 'blog',
                Component: BlogPage
            }
        ]
    }
]);