import { useState } from "react"
import { productAPIService } from "../../Service/ProductAPIService";
import { useLoaderData, useNavigate } from "react-router";
import { routerNames } from "../../Routes/routes";



export default function EditProductPage() {
    const data = useLoaderData();
    const navigator = useNavigate();
    const [productFormData, setProductFormData] = useState({
        id: data.id,
        name: data.name,
        price: data.price,
        image: data.image,
        category: data.category,
        stock: data.stock,
        description: data.description,
    });

    const handleEvent = (event: any) => {

        const { name, value } = event.target;

        setProductFormData(prev => ({ ...prev, [name]: value }))
        /*
         {
            id: 5702,
            name: "",
            price: "4561",
            image: "",
            category: "",
            stock: "",
            description: "",
         }
        */
    }

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        console.log(productFormData);
        if (await productAPIService.updateProduct(data.id, productFormData)) {
            alert("Product updated successfully..");
            navigator(routerNames.viewProduct);
        } else {
            alert("Product updation failed...");
        }
    }

    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50 px-4">

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-8 text-center">
                Edit Product
            </h1>

            {/* Card Container */}
            <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-lg">
                <form className="space-y-6" onSubmit={handleSubmit}>

                    {/* Product Name */}
                    <div>
                        <label htmlFor="productName" className="block text-sm font-medium text-gray-700 mb-1">
                            Product Name
                        </label>
                        <input
                            type="text"
                            id="productName"
                            value={productFormData.name}
                            name="name"
                            onChange={handleEvent}
                            placeholder="Enter product name"
                            className="block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Product Price */}
                    <div>
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                            Price ($)
                        </label>
                        <input
                            type="number"
                            id="price"
                            value={productFormData.price}
                            name="price"
                            onChange={handleEvent}
                            placeholder="Enter price"
                            className="block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Product Image */}
                    <div>
                        <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
                            Product Image
                        </label>
                        <input
                            type="url"
                            id="image"
                            value={productFormData.image}
                            name="image"
                            onChange={handleEvent}
                            placeholder="Enter image URL"
                            className="block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Category + Stock (Grid) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                                Category
                            </label>
                            <select
                                id="category"
                                name="category"
                                value={productFormData.category}
                                onChange={handleEvent}
                                className="block w-full rounded-lg border border-gray-300 px-3 py-2 bg-white focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"
                                required
                            >
                                <option value="">Select category</option>
                                <option value="electronics">Electronics</option>
                                <option value="fashion">Fashion</option>
                                <option value="home">Home & Living</option>
                                <option value="sports">Sports</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="stock" className="block text-sm font-medium text-gray-700 mb-1">
                                Stock
                            </label>
                            <input
                                type="number"
                                id="stock"
                                name="stock"
                                value={productFormData.stock}
                                onChange={handleEvent}
                                placeholder="Enter stock quantity"
                                className="block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"
                                required
                            />
                        </div>
                    </div>

                    {/* Description */}
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                            Product Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            value={productFormData.description}
                            onChange={handleEvent}
                            rows={4}
                            placeholder="Enter product description"
                            className="block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"
                            required
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-amber-400 hover:bg-amber-600 text-white font-medium py-2.5 rounded-lg shadow-md transition duration-200"
                    >
                        Edit Product
                    </button>
                </form>
            </div>
        </div>
    )
}
