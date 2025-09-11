import { Link } from "react-router-dom";

export default function Contact() {
    return (
        <div className="h-screen flex flex-col justify-center items-center  text-center px-6">
            {/* Heading */}
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800">
                Contact <span className="text-red-500">Us</span>
            </h1>

            {/* Subtext */}
            <p className="mt-4 text-lg text-gray-600 max-w-xl">
                Have questions or want to work with us? Reach out anytime — we’re here
                to help and excited to connect with you.
            </p>

            {/* Button */}
            <Link
                to="/"
                className="mt-8 px-6 py-3 bg-red-500 text-white text-lg font-medium rounded-lg shadow hover:bg-red-600 transition"
            >
                Back to Home
            </Link>
        </div>
    );
}
