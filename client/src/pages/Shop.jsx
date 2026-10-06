import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { useCart } from "../context/CartContext";


const products = [
  {
    id: 1,
    name: "Premium Sneakers",
    category: "Shoes",
    price: 2499,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
  },
  {
    id: 2,
    name: "Smart Watch",
    category: "Watches",
    price: 3999,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
  },
  {
    id: 3,
    name: "Leather Handbag",
    category: "Fashion",
    price: 2999,
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600",
  },
  {
    id: 4,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 1999,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
  },
  {
    id: 5,
    name: "Classic T-Shirt",
    category: "Fashion",
    price: 899,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
  },
  {
    id: 6,
    name: "Running Shoes",
    category: "Shoes",
    price: 3299,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
  },
  {
    id: 7,
    name: "Modern Sunglasses",
    category: "Accessories",
    price: 1499,
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600",
  },
  {
    id: 8,
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: 1799,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600",
  },
];

const Shop = () => {
  const { addToCart } = useCart();
  return (
    <>
      <Navbar />

      <main className="bg-gray-50 min-h-screen">

        {/* Page Header */}
        <section className="bg-liner-to-br from-indigo-50 via-white to-blue-100">
          <div className="max-w-7xl mx-auto px-6 py-16 text-center">
            <p className="text-indigo-600 font-semibold uppercase tracking-wider">
              Our Store
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
              Shop All Products
            </h1>

            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Explore our collection of quality products at great prices.
            </p>
          </div>
        </section>

        {/* Products */}
        <section className="max-w-7xl mx-auto px-6 py-16">

          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              All Products
            </h2>

            <select className="border border-gray-300 rounded-lg px-4 py-2 bg-white">
              <option>Sort By</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm
                           hover:shadow-xl hover:-translate-y-2
                           transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                 <Link to={`/shop/${product.id}`}>
                    <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover
                  hover:scale-105 transition duration-500"
  />
</Link>

                  <span className="absolute top-4 left-4 bg-indigo-600
                                   text-white text-xs px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900">
                    {product.name}
                  </h3>

                  <p className="text-indigo-600 text-xl font-semibold mt-2">
                    ₹{product.price}
                  </p>

                  <button
                     onClick={() => addToCart(product)}
                    className="w-full mt-4 bg-gray-900 text-white py-3
                               rounded-lg hover:bg-indigo-600
                               transition duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

        </section>
      </main>

      <Footer />
    </>
  );
};

export default Shop;