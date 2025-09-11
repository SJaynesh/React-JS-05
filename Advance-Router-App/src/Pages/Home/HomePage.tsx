

export default function HomePage() {
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
        </div>
    );
}