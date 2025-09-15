import { useLoaderData } from "react-router";
import type { ProductType } from "../../Service/ProductAPIService";



export default function HomePage() {
    const allProducts: ProductType[] = useLoaderData();

    return (
        <div className="min-h-screen w-full flex flex-col items-center bg-gradient-to-br from-gray-50 via-white to-blue-50 px-4 py-10">
            {/* Main Title */}
            <h1 className="text-5xl mt-10 md:text-6xl font-extrabold text-gray-800 text-center mb-8"> Home Page </h1>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl">
                {allProducts.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
                    >
                        {/* Product Image */}
                        <div className="w-full h-64 overflow-hidden">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                            />
                        </div>

                        {/* Product Details */}
                        <div className="p-5 flex flex-col gap-2">
                            <h2 className="text-xl font-semibold text-gray-900">{product.name}</h2>
                            <p className="text-gray-600 text-sm">{product.description}</p>
                            <div className="flex justify-between items-center mt-3">
                                <span className="text-blue-600 font-bold text-lg">₹{product.price}</span>
                                <span className={`text-sm font-medium ${product.stock > 0 ? "text-green-600" : "text-red-600"}`}>
                                    {product.stock > 0 ? `In Stock: ${product.stock}` : "Out of Stock"}
                                </span>
                            </div>
                            <button className="mt-4 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
