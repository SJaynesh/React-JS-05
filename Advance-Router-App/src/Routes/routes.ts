
import App from '../App';
import HomePage from '../Pages/Home/HomePage';
import AboutPage from '../Pages/About/AboutPage';
import BlogPage from '../Pages/Blog/BlogPage';
import GitHubPage from '../Pages/GitHub/GitHubPage';
import { createBrowserRouter } from 'react-router';
import { fetchGitHubUserProfile } from '../Services/GitHubAPIService';

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
            },
            {
                path: 'github/:userName',
                Component: GitHubPage,
                loader: ({ params }) => {
                    fetchGitHubUserProfile(params.userName || "SJaynesh");
                }
            }
        ]
    }
]);