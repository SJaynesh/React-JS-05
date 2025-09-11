import { Link } from "react-router-dom";

export default function About() {
    return (
        <div className="h-screen flex flex-col justify-center items-center text-center px-6">
            {/* Heading */}
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800">
                About <span className="text-red-500">Us</span>
            </h1>

            {/* Subtext */}
            <p className="mt-4 text-lg text-gray-600 max-w-xl">
                We are passionate about building modern web solutions that are simple,
                fast, and user-friendly. Our mission is to deliver the best experience.
            </p>

            {/* Button */}
            <Link
                to="/services"
                className="mt-8 px-6 py-3 bg-red-500 text-white text-lg font-medium rounded-lg shadow hover:bg-red-600 transition"
            >
                View Services
            </Link>
        </div>
    );
}
