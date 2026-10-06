import { Link, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const products = [
  {
    id: 1,
    name: "Premium Sneakers",
    category: "Shoes",
    price: 2499,
    rating: 4.5,
    reviews: 128,
    stock: 15,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
    description:
      "Premium sneakers designed for everyday comfort and modern style. Perfect for casual wear, walking, and daily activities.",
  },
  {
    id: 2,
    name: "Smart Watch",
    category: "Watches",
    price: 3999,
    rating: 4.7,
    reviews: 95,
    stock: 10,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
    description:
      "A stylish smart watch with a modern design. Track your daily activities while staying connected and looking great.",
  },
  {
    id: 3,
    name: "Leather Handbag",
    category: "Fashion",
    price: 2999,
    rating: 4.4,
    reviews: 76,
    stock: 8,
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800",
    description:
      "Elegant leather handbag with a premium finish. Spacious, stylish, and perfect for everyday use.",
  },
  {
    id: 4,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 1999,
    rating: 4.6,
    reviews: 142,
    stock: 20,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
    description:
      "Enjoy immersive sound with comfortable wireless headphones designed for music, movies, and everyday entertainment.",
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  // Product not found
  if (!product) {
    return (
      <>
        <Navbar />

        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">
              Product Not Found
            </h1>

            <Link
              to="/shop"
              className="inline-block mt-5 bg-indigo-600
                         text-white px-6 py-3 rounded-lg"
            >
              Back to Shop
            </Link>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="bg-gray-50 min-h-screen">

        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-6 pt-8">
          <div className="text-sm text-gray-500">
            <Link to="/" className="hover:text-indigo-600">
              Home
            </Link>

            <span className="mx-2">/</span>

            <Link to="/shop" className="hover:text-indigo-600">
              Shop
            </Link>

            <span className="mx-2">/</span>

            <span className="text-gray-900">
              {product.name}
            </span>
          </div>
        </div>

        {/* Product Details */}
        <section className="max-w-7xl mx-auto px-6 py-12">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Product Image */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">

              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[500px] object-cover rounded-xl"
              />

            </div>

            {/* Product Information */}
            <div className="flex flex-col justify-center">

              <span className="text-indigo-600 font-semibold uppercase
                               tracking-wider">
                {product.category}
              </span>

              <h1 className="text-4xl font-bold text-gray-900 mt-3">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mt-5">

                <div className="text-yellow-400 text-xl">
                  ★★★★★
                </div>

                <span className="text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>

              </div>

              {/* Price */}
              <p className="text-3xl font-bold text-indigo-600 mt-6">
                ₹{product.price}
              </p>

              {/* Description */}
              <div className="mt-6">

                <h2 className="text-lg font-bold text-gray-900">
                  Product Description
                </h2>

                <p className="text-gray-600 leading-7 mt-3">
                  {product.description}
                </p>

              </div>

              {/* Stock */}
              <p className="mt-5 text-green-600 font-medium">
                ✓ {product.stock} items available
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">

                <button
                  onClick={() => addToCart(product)}
                  className="flex-1 bg-indigo-600 text-white
                             py-3 rounded-lg font-semibold
                             hover:bg-indigo-700 transition"
                >
                  Add to Cart
                </button>

                <Link
                  to="/cart"
                  className="flex-1 border border-indigo-600
                             text-indigo-600 py-3 rounded-lg
                             font-semibold text-center
                             hover:bg-indigo-600 hover:text-white
                             transition"
                >
                  Go to Cart
                </Link>

              </div>

            </div>
          </div>

        </section>

      </main>

      <Footer />
    </>
  );
};

export default ProductDetails;