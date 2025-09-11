import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="h-screen flex flex-col justify-center items-center text-center px-6">
            {/* Heading */}
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 drop-shadow-sm">
                Welcome to <span className="text-red-500">React JS</span>
            </h1>

            {/* Subtext */}
            <p className="mt-4 text-lg text-gray-600 max-w-xl">
                A modern and beautiful homepage built with React + Tailwind CSS.
                Start exploring features and enjoy smooth navigation.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex gap-4">
                <Link
                    to="/about"
                    className="px-6 py-3 bg-red-500 text-white text-lg font-medium rounded-lg shadow hover:bg-red-600 transition"
                >
                    Learn More
                </Link>
                <Link
                    to="/contact"
                    className="px-6 py-3 border border-red-500 text-red-500 text-lg font-medium rounded-lg hover:bg-red-50 transition"
                >
                    Contact Us
                </Link>
            </div>
        </div>
    );
}
