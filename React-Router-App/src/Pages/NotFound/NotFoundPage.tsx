import { Link } from "react-router-dom";


export default function NotFoundPage() {
    return (
        <div className="h-screen flex flex-col justify-center items-center text-center px-6">
            {/* 404 Title */}
            <h1 className="text-8xl font-extrabold text-red-500">404</h1>

            {/* Message */}
            <p className="mt-4 text-2xl font-semibold text-gray-700">
                Oops! Page not found
            </p>
            <p className="mt-2 text-gray-500">
                The page you’re looking for doesn’t exist.
            </p>

            {/* Back Button */}
            <Link
                to="/"
                className="mt-6 inline-block px-6 py-3 bg-red-500 text-white font-medium text-lg rounded-lg shadow hover:bg-red-600 transition"
            >
                Go Back Home
            </Link>
        </div>
    );
}
