type NavBarProps = {
    theme: string;
    toggleTheme: () => void
}

function NavBar({ theme, toggleTheme }: NavBarProps) {
    return (
        <nav
            className={`fixed w-full z-20 top-0 start-0 border-b 
                ${theme === 'light'
                    ? "bg-white border-gray-200"
                    : "bg-gray-900 border-gray-600"
                }`}
        >
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGjmnPP5ngv8_ekO3nTlWNUNYE_SGfDVznGw&s"
                        className="h-8"
                        alt="App Logo"
                    />
                    <span
                        className={`self-center text-2xl font-semibold whitespace-nowrap 
                            ${theme === 'light' ? "text-gray-900" : "text-white"}`}
                    >
                        Student App
                    </span>
                </a>

                {/* Theme toggle button */}
                <div className="flex md:order-2 space-x-3 items-center">
                    <button
                        type="button"
                        onClick={toggleTheme}
                        className={`px-3 py-1.5 rounded-lg text-sm font-medium 
                            ${theme === 'light'
                                ? "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                : "bg-gray-700 text-gray-200 hover:bg-gray-600"
                            }`}
                    >
                        {theme === 'light' ? "🌙" : "🌞"}
                    </button>
                </div>

                {/* Nav Links */}
                <div
                    className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                    id="navbar-sticky"
                >
                    <ul
                        className={`flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg 
                            md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0
                            ${theme === 'light'
                                ? "border-gray-100 bg-gray-50 md:bg-white"
                                : "border-gray-700 bg-gray-800 md:bg-gray-900"
                            }`}
                    >
                        <li>
                            <a
                                href="#"
                                className={`block py-2 px-3 rounded-sm md:p-0
                                    ${theme === 'light'
                                        ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700"
                                        : "text-white bg-blue-700 md:bg-transparent md:text-blue-500"
                                    }`}
                                aria-current="page"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className={`block py-2 px-3 rounded-sm md:p-0 
                                    ${theme === 'light'
                                        ? "text-gray-900 hover:bg-gray-100 md:hover:text-blue-700"
                                        : "text-white hover:bg-gray-700 md:hover:text-blue-500"
                                    }`}
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className={`block py-2 px-3 rounded-sm md:p-0 
                                    ${theme === 'light'
                                        ? "text-gray-900 hover:bg-gray-100 md:hover:text-blue-700"
                                        : "text-white hover:bg-gray-700 md:hover:text-blue-500"
                                    }`}
                            >
                                Services
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className={`block py-2 px-3 rounded-sm md:p-0 
                                    ${theme === 'light'
                                        ? "text-gray-900 hover:bg-gray-100 md:hover:text-blue-700"
                                        : "text-white hover:bg-gray-700 md:hover:text-blue-500"
                                    }`}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
