import ProductView from "./components/ProductView"

function App() {
  const h1_virtual = <h1 className="name">Hello World</h1>
  // console.log(h1_virtual);

  const products = [
    {
      id: 1,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 2,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg',
      imageAlt: "Front of men's Basic Tee in white.",
      price: '$35',
      color: 'Aspen White',
    },
    {
      id: 3,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg',
      imageAlt: "Front of men's Basic Tee in dark gray.",
      price: '$35',
      color: 'Charcoal',
    },
    {
      id: 4,
      name: 'Artwork Tee',
      href: '#',
      imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg',
      imageAlt: "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
      price: '$35',
      color: 'Iso Dots',
    },
  ]

  return (
    <>
      <h1 className="bg-pink-300 text-white m-5 p-3 rounded-xl">Hello Jay Pawar</h1>

      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">All Products</h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => <div key={product.id}>
              <ProductView p_title={product.name} p_color={product.color} p_price={product.price} p_image={product.imageSrc} />
            </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
