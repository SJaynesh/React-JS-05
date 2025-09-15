import { NavLink } from "react-router";

export default function NavBar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200 dark:bg-gray-900 shadow-sm">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                {/* Logo */}
                <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img
                        src="https://images.icon-icons.com/729/PNG/512/flipkart_icon-icons.com_62718.png"
                        className="h-8"
                        alt="Flipkart Logo"
                    />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        Flipkart
                    </span>
                </NavLink>

                {/* Right side (profile + mobile toggle) */}
                <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button
                        type="button"
                        className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    >
                        <span className="sr-only">Open user menu</span>
                        <img
                            className="w-8 h-8 rounded-full"
                            src="https://avatars.githubusercontent.com/u/115562979?v=4"
                            alt="user photo"
                        />
                    </button>

                    {/* Mobile Toggle Button */}
                    <button
                        data-collapse-toggle="navbar-user"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-user"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>

                {/* Menu Links */}
                <div
                    className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                    id="navbar-user"
                >
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 
                        md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white 
                        dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `block py-2 px-3 rounded-sm 
                                    ${isActive ? "text-blue-700 md:dark:text-blue-500 font-semibold" : "text-gray-900 hover:text-blue-700 dark:text-white"}`
                                }
                                end
                            >
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/add-product"
                                className={({ isActive }) =>
                                    `block py-2 px-3 rounded-sm 
                                    ${isActive ? "text-blue-700 md:dark:text-blue-500 font-semibold" : "text-gray-900 hover:text-blue-700 dark:text-white"}`
                                }
                            >
                                Add Product
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/view-products"
                                className={({ isActive }) =>
                                    `block py-2 px-3 rounded-sm 
                                    ${isActive ? "text-blue-700 md:dark:text-blue-500 font-semibold" : "text-gray-900 hover:text-blue-700 dark:text-white"}`
                                }
                            >
                                View Products
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    `block py-2 px-3 rounded-sm 
                                    ${isActive ? "text-blue-700 md:dark:text-blue-500 font-semibold" : "text-gray-900 hover:text-blue-700 dark:text-white"}`
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
