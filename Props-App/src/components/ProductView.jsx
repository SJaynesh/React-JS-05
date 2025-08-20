export default function ProductView({ p_title, p_color, p_price, p_image }) {
    return (
        <div className="group relative">
            <img
                src={p_image}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
            />
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700">
                        <a href="#">
                            <span aria-hidden="true" className="absolute inset-0" />
                            {p_title}
                        </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{p_color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{p_price}</p>
            </div>
        </div>
    )
}
