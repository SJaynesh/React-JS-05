import { Link } from "react-router-dom";

export default function Services() {
    return (
        <div className="h-screen flex flex-col justify-center items-center text-center px-6">
            {/* Heading */}
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800">
                Our <span className="text-red-500">Services</span>
            </h1>

            {/* Subtext */}
            <p className="mt-4 text-lg text-gray-600 max-w-xl">
                We provide modern web development, UI/UX design, and digital solutions
                tailored for your needs. Helping you grow faster with technology.
            </p>

            {/* Button */}
            <Link
                to="/contact"
                className="mt-8 px-6 py-3 border border-red-500 text-red-500 text-lg font-medium rounded-lg hover:bg-red-50 transition"
            >
                Contact Us
            </Link>
        </div>
    );
}
