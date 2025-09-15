import { useLoaderData } from "react-router";
import type { ProductType } from "../../Service/ProductAPIService";

export default function ViewProductPage() {
    const allProducts: ProductType[] = useLoaderData();

    return (
        <div className="min-h-screen w-full px-4 py-10 bg-gradient-to-br from-gray-50 via-white to-blue-50">
            {/* Page Title */}
            <h1 className="text-5xl mt-20 md:text-6xl font-extrabold text-gray-800 text-center mb-12">
                🛒 View Products
            </h1>

            <div className="overflow-x-auto w-full max-w-7xl mx-auto">
                <table className="min-w-full bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200">
                    <thead className="bg-black text-white">
                        <tr>
                            <th className="py-3 px-6 text-left">ID</th>
                            <th className="py-3 px-6 text-left">Image</th>
                            <th className="py-3 px-6 text-left">Name</th>
                            <th className="py-3 px-6 text-left">Category</th>
                            <th className="py-3 px-6 text-left">Price</th>
                            <th className="py-3 px-6 text-left">Stock</th>
                            <th className="py-3 px-6 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allProducts.map((product) => (
                            <tr
                                key={product.id}
                                className="border-b last:border-none hover:bg-gray-50 transition-colors"
                            >
                                <td className="py-4 px-6 text-gray-700 font-medium">{product.id}</td>
                                <td className="py-4 px-6">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-16 h-16 object-cover rounded-lg shadow-sm"
                                    />
                                </td>
                                <td className="py-4 px-6 text-gray-800 font-semibold">{product.name}</td>
                                <td className="py-4 px-6 text-gray-600">{product.category}</td>
                                <td className="py-4 px-6 text-gray-800 font-bold">₹{product.price}</td>
                                <td className="py-4 px-6">
                                    <span
                                        className={`px-2 py-1 rounded-full text-sm font-medium ${product.stock > 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                                            }`}
                                    >
                                        {product.stock > 0 ? product.stock : "Out of stock"}
                                    </span>
                                </td>
                                <td className="py-4 px-6 flex gap-2">
                                    <button className="bg-yellow-500 text-white px-4 py-1 rounded-lg hover:bg-yellow-600 transition-colors shadow-sm">
                                        Edit
                                    </button>
                                    <button className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600 transition-colors shadow-sm">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {allProducts.length === 0 && (
                    <p className="text-center text-gray-500 py-10">No products available</p>
                )}
            </div>
        </div>
    );
}
