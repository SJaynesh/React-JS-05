import { Link, NavLink } from "react-router-dom";

export default function Header() {
    return (
        <nav className="bg-white/80 dark:bg-gray-900 backdrop-blur-md fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-700 shadow-sm">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-6 py-3">

                {/* Logo */}
                <Link to="/" className="flex items-center space-x-2">
                    <img
                        src="https://lms.rnwmultimedia.com/assets/images/w-logo.jpg"
                        className="h-8"
                        alt="Logo"
                    />
                    <span className="self-center text-2xl font-bold text-gray-800 dark:text-white">
                        Red & White
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex space-x-8 font-medium">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `transition-colors ${isActive
                                ? "text-red-800 dark:text-red-400 font-semibold"
                                : "text-gray-700 dark:text-gray-300 hover:text-red-800 dark:hover:text-red-400"
                            }`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `transition-colors ${isActive
                                ? "text-red-800 dark:text-red-400 font-semibold"
                                : "text-gray-700 dark:text-gray-300 hover:text-red-800 dark:hover:text-red-400"
                            }`
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/service"
                        className={({ isActive }) =>
                            `transition-colors ${isActive
                                ? "text-red-800 dark:text-red-400 font-semibold"
                                : "text-gray-700 dark:text-gray-300 hover:text-red-800 dark:hover:text-red-400"
                            }`
                        }
                    >
                        Services
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `transition-colors ${isActive
                                ? "text-red-800 dark:text-red-400 font-semibold"
                                : "text-gray-700 dark:text-gray-300 hover:text-red-800 dark:hover:text-red-400"
                            }`
                        }
                    >
                        Contact
                    </NavLink>
                </div>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Link
                        to="/contact"
                        className="px-4 py-2 bg-red-800 text-white rounded-lg shadow hover:bg-red-700 transition"
                    >
                        Get Started
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    data-collapse-toggle="navbar"
                    type="button"
                    className="inline-flex items-center p-2 text-gray-800 rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700"
                    aria-controls="navbar"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </nav>
    );
}
