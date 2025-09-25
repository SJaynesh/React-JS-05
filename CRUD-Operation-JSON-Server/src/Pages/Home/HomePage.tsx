import { useLoaderData } from "react-router";
import type { ProductType } from "../../Service/ProductAPIService";
import { useEffect, useState } from "react";

export default function HomePage() {
    const allProducts: ProductType[] = useLoaderData();
    const [allCategories, setAllCategories] = useState<string[]>(["All"]);
    const [filterCategory, setFilterCategory] = useState<string>("All");

    useEffect(() => {
        const mySetCategories = new Set(allProducts.map((p) => p.category));
        setAllCategories(["All", ...mySetCategories]);
    }, [allProducts]);

    const filterProducts =
        filterCategory === "All"
            ? allProducts
            : allProducts.filter((product) => product.category === filterCategory);

    return (
        <div className="min-h-screen w-full flex flex-col items-center bg-gradient-to-br from-gray-50 via-white to-blue-50 px-4 pb-10">
            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 text-center mt-20 mb-4">
                🛍️ Explore Our Products
            </h1>
            <p className="text-gray-600 text-center max-w-2xl mb-6">
                Discover amazing items across categories. Choose what you love, add to
                your cart, and enjoy shopping with us!
            </p>

            {/* Sticky Categories */}
            <div className="sticky top-16 z-20 bg-gradient-to-r from-gray-50 via-white to-blue-50 py-4 w-full shadow-sm">
                <div className="flex flex-wrap justify-center gap-3">
                    {allCategories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setFilterCategory(category)}
                            className={`px-5 py-2.5 ${category === filterCategory
                                ? "bg-blue-600 text-white"
                                : "bg-white text-gray-700"
                                } border border-gray-200 rounded-full font-medium shadow-sm hover:bg-blue-600 hover:text-white transition-colors`}
                        >
                            {category[0].toUpperCase() + category.slice(1, category.length)}
                        </button>
                    ))}
                </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl mt-10">
                {filterProducts.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                    >
                        {/* Product Image */}
                        <div className="w-full h-56 overflow-hidden">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                            />
                        </div>

                        {/* Product Details */}
                        <div className="p-5 flex flex-col gap-2">
                            <h2 className="text-lg font-semibold text-gray-900 line-clamp-1">
                                {product.name}
                            </h2>
                            <p className="text-gray-600 text-sm line-clamp-2">
                                {product.description}
                            </p>
                            <p className="text-gray-500 text-sm italic">{product.category}</p>

                            <div className="flex justify-between items-center mt-3">
                                <span className="text-blue-600 font-bold text-lg">
                                    ${product.price}
                                </span>
                                <span
                                    className={`text-sm font-medium ${product.stock > 0 ? "text-green-600" : "text-red-600"
                                        }`}
                                >
                                    {product.stock > 0
                                        ? `In Stock: ${product.stock}`
                                        : "Out of Stock"}
                                </span>
                            </div>

                            {/* Add to Cart Button */}
                            <button className="mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2.5 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-200">
                                🛒 Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
