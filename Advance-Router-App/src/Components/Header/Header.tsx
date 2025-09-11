import { NavLink, Link, useNavigate } from "react-router"

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
                        to="/blog"
                        className={({ isActive }) =>
                            `transition-colors ${isActive
                                ? "text-red-800 dark:text-red-400 font-semibold"
                                : "text-gray-700 dark:text-gray-300 hover:text-red-800 dark:hover:text-red-400"
                            }`
                        }
                    >
                        Blog
                    </NavLink>
                </div>

            </div>
        </nav>
    )
}
