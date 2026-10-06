import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const purchasedProducts = [
  {
    id: 1,
    name: "Premium Sneakers",
    price: 2499,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300",
    status: "Delivered",
    date: "20 Sep 2026",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 3999,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300",
    status: "Delivered",
    date: "15 Sep 2026",
  },
];

const Account = () => {
  const navigate = useNavigate();

  const [reviews, setReviews] = useState({});

  const handleRating = (productId, rating) => {
    setReviews((prev) => ({
      ...prev,
      [productId]: {
        ...prev[productId],
        rating,
      },
    }));
  };

  const handleReview = (productId, review) => {
    setReviews((prev) => ({
      ...prev,
      [productId]: {
        ...prev[productId],
        review,
      },
    }));
  };

  const handleLogout = () => {
    alert("You have been logged out.");
    navigate("/login");
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50">

        {/* Header */}
        <section className="bg-gradient-to-br from-indigo-50 via-white to-blue-100">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <p className="text-indigo-600 font-semibold uppercase tracking-wider">
              My Account
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
              Account Dashboard
            </h1>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-12">

          {/* Account Information */}
          <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">

            <div className="flex flex-col sm:flex-row items-center gap-5">

              <div className="w-20 h-20 rounded-full bg-indigo-100
                              flex items-center justify-center">
                <span className="text-3xl">👤</span>
              </div>

              <div className="flex-1 text-center sm:text-left">
                <h2 className="text-2xl font-bold text-gray-900">
                  Anusna KV
                </h2>

                <p className="text-gray-500">
                  anusna@example.com
                </p>

                <p className="text-sm text-gray-400 mt-1">
                  Member since 2026
                </p>
              </div>

              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-6 py-3 rounded-lg
                           font-semibold hover:bg-red-600 transition"
              >
                Logout
              </button>

            </div>
          </div>

          {/* Purchased Products */}
          <div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              My Purchases
            </h2>

            <div className="space-y-6">

              {purchasedProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl shadow-sm p-6"
                >

                  {/* Product */}
                  <div className="flex flex-col md:flex-row gap-6">

                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full md:w-32 h-32 object-cover rounded-xl"
                    />

                    <div className="flex-1">

                      <div className="flex flex-col sm:flex-row
                                      sm:justify-between gap-2">

                        <div>
                          <h3 className="text-xl font-bold text-gray-900">
                            {product.name}
                          </h3>

                          <p className="text-indigo-600 font-semibold mt-1">
                            ₹{product.price}
                          </p>
                        </div>

                        <div>
                          <span className="inline-block bg-green-100
                                           text-green-700 px-3 py-1
                                           rounded-full text-sm font-medium">
                            {product.status}
                          </span>

                          <p className="text-gray-400 text-sm mt-2">
                            Purchased: {product.date}
                          </p>
                        </div>

                      </div>

                      {/* Rating */}
                      <div className="mt-6">

                        <h4 className="font-semibold text-gray-800">
                          Rate this product
                        </h4>

                        <div className="flex gap-2 mt-3">

                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              onClick={() =>
                                handleRating(product.id, star)
                              }
                              className={`text-3xl transition ${
                                reviews[product.id]?.rating >= star
                                  ? "text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            >
                              ★
                            </button>
                          ))}

                        </div>

                      </div>

                      {/* Review */}
                      <div className="mt-5">

                        <h4 className="font-semibold text-gray-800 mb-2">
                          Write a review
                        </h4>

                        <textarea
                          value={reviews[product.id]?.review || ""}
                          onChange={(e) =>
                            handleReview(product.id, e.target.value)
                          }
                          placeholder="Share your experience with this product..."
                          rows="3"
                          className="w-full border border-gray-300
                                     rounded-lg px-4 py-3
                                     focus:outline-none
                                     focus:ring-2 focus:ring-indigo-500"
                        />

                        <button
                          onClick={() => {
                            alert("Review submitted!");
                          }}
                          className="mt-3 bg-indigo-600 text-white
                                     px-5 py-2.5 rounded-lg
                                     font-semibold hover:bg-indigo-700
                                     transition"
                        >
                          Submit Review
                        </button>

                      </div>

                    </div>
                  </div>

                </div>
              ))}

            </div>
          </div>

        </section>
      </main>

      <Footer />
    </>
  );
};

export default Account;