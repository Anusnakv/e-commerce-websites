  
  import { Link } from "react-router-dom";
  
  
  const newProducts = [
  {
    id: 1,
    name: "Premium Sneakers",
    price: 2499,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 3999,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
  },
  {
    id: 3,
    name: "Leather Handbag",
    price: 2999,
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600",
  },
  {
    id: 4,
    name: "Wireless Headphones",
    price: 1999,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
  },
];

const NewArrivals = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-indigo-600 font-semibold uppercase tracking-wider">
            Just Arrived
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            New Arrivals
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Discover our latest products and stay updated with the newest
            trends.
          </p>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm
                         hover:shadow-xl transition-all duration-300
                         hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover
                             hover:scale-105 transition duration-500"
                />

                {/* New Badge */}
                <span className="absolute top-4 left-4 bg-indigo-600 text-white
                                 text-xs font-semibold px-3 py-1 rounded-full">
                  NEW
                </span>
              </div>

              {/* Product Details */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900">
                  {product.name}
                </h3>

                <p className="text-indigo-600 font-semibold text-lg mt-2">
                  ₹{product.price}
                </p>

                <button
                  className="w-full mt-4 bg-gray-900 text-white py-2.5
                             rounded-lg hover:bg-indigo-600
                             transition duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
      <div className="text-center mt-10">
  <Link
    to="/shop"
    className="inline-block border border-indigo-600 text-indigo-600
               px-8 py-3 rounded-lg font-semibold
               hover:bg-indigo-600 hover:text-white
               transition duration-300"
  >
    View All Products
  </Link>
</div>

      </div>
    </section>
  );
};

export default NewArrivals;

