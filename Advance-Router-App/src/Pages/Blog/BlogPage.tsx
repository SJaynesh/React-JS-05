

export default function BlogPage() {
    return (
        <div className="h-screen flex flex-col justify-center items-center text-center px-6">
            {/* Heading */}
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800">
                Blog <span className="text-red-500">Page</span>
            </h1>

            {/* Subtext */}
            <p className="mt-4 text-lg text-gray-600 max-w-xl">
                Definition of API (Application Programming Interface):

                API is a kind of url which returns a data in the form of JSON.
                An API is a set of rules that lets one software talk to another and share data or functionality.
            </p>
        </div>
    );
}