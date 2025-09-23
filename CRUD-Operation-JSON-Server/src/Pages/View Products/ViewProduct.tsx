import { useLoaderData, useNavigate } from "react-router";
import { productAPIService, type ProductType } from "../../Service/ProductAPIService";
import { useEffect, useState } from "react";

export default function ViewProductPage() {
    const data: ProductType[] = useLoaderData();

    const [allProducts, setAllProduct] = useState(data || [])
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("az");
    const [price, setPrice] = useState(0);
    const [maxAndMinPrice, setMaxaAndMinPrice] = useState<number[]>([])

    const navigator = useNavigate();

    useEffect(() => {
        if (allProducts.length > 0) {
            const allPrices = allProducts.map(p => p.price);

            const max = Math.max(...allPrices);
            const min = Math.min(...allPrices);

            setMaxaAndMinPrice([min, max])
        }
    }, [allProducts])

    const deleteProduct = async (id: string) => {
        if (await productAPIService.deleteProduct(id)) {
            setAllProduct(await productAPIService.fetchAllProudct());
            alert("Product deleted successfully...");
        } else {
            alert("Product deletion failed...");
        }
    }

    const filterProducts = allProducts.filter((product) => {
        const searchData = product.name.toLowerCase().includes(search.toLowerCase()) ||
            product.category.toLowerCase().includes(search.toLowerCase()) ||
            product.id.includes(search);

        const priceData = product.price >= price;
        return searchData && priceData;
    }).sort((a, b) => {
        if (sort === 'az') {
            return a.name.localeCompare(b.name);
        } else {
            return b.name.localeCompare(a.name);
        }
    });

    return (
        <div className="min-h-screen w-full px-4 py-10 bg-gradient-to-br from-gray-50 via-white to-blue-50">
            {/* Page Title */}
            <h1 className="text-5xl mt-20 md:text-6xl font-extrabold text-gray-800 text-center mb-12">
                🛒 View Products {price}
            </h1>

            {/* Search Input Field */}
            <div className="w-full max-w-7xl mx-auto flex justify-center mb-8 px-4">
                <input
                    type="text"
                    placeholder="🔍 Search for products by name or category..."
                    onChange={(event) => setSearch(event.target.value)}
                    className="w-full max-w-lg px-4 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                />

                <select value={sort} onChange={event => setSort(event.target.value)}>
                    <option value="az">A-Z</option>
                    <option value="za">Z-A</option>
                </select>

                <input type="range" onChange={event => setPrice(Number.parseInt(event.target.value))} min={maxAndMinPrice[0]} max={maxAndMinPrice[1]} />
            </div>

            <div className="overflow-x-auto w-full max-w-7xl mx-auto">
                <table className="min-w-full bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200">
                    <thead className="bg-black text-white">
                        <tr>
                            <th className="py-3 px-6 text-left">NO</th>
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
                        {filterProducts.map((product, index) => (
                            <tr
                                key={product.id}
                                className="border-b last:border-none hover:bg-gray-50 transition-colors"
                            >
                                <td className="py-4 px-6 text-gray-700 font-medium">{index + 1}</td>
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
                                <td className="py-4 px-6 text-gray-800 font-bold">${product.price}</td>
                                <td className="py-4 px-6">
                                    <span
                                        className={`px-2 py-1 rounded-full text-sm font-medium ${product.stock > 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                                            }`}
                                    >
                                        {product.stock > 0 ? product.stock : "Out of stock"}
                                    </span>
                                </td>
                                <td className="py-4 px-6 flex gap-2">
                                    <button onClick={() => navigator(`/edit-product/${product.id}`)} className="bg-yellow-500 text-white px-4 py-1 rounded-lg hover:bg-yellow-600 transition-colors shadow-sm">
                                        Edit
                                    </button>
                                    <button onClick={() => deleteProduct(product.id)} className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600 transition-colors shadow-sm">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {filterProducts.length === 0 && (
                    <p className="text-center text-gray-500 py-10">No products available</p>
                )}
            </div>
        </div>
    );
}
