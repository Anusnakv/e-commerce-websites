import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const {
    cartItems,
    cartTotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50">

        {/* Header */}
        <section className=".bg-gradient-to-br from-indigo-50 via-white to-blue-100">
          <div className="max-w-7xl mx-auto px-6 py-16 text-center">

            <p className="text-indigo-600 font-semibold uppercase tracking-wider">
              Shopping Cart
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
              Your Cart
            </h1>

          </div>
        </section>

        {/* Cart Content */}
        <section className="max-w-7xl mx-auto px-6 py-16">

          {cartItems.length === 0 ? (
            /* Empty Cart */
            <div className="text-center py-20">

              <div className="text-6xl mb-5">
                🛒
              </div>

              <h2 className="text-2xl font-bold text-gray-900">
                Your cart is empty
              </h2>

              <p className="text-gray-500 mt-3">
                Add some products to your cart to see them here.
              </p>

            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-5">

                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl p-5 shadow-sm
                               flex flex-col sm:flex-row gap-5"
                  >

                    {/* Product Image */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full sm:w-32 h-32
                                 object-cover rounded-xl"
                    />

                    {/* Product Details */}
                    <div className="flex-1">

                      <div className="flex justify-between gap-4">

                        <h2 className="text-lg font-bold text-gray-900">
                          {item.name}
                        </h2>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          Remove
                        </button>

                      </div>

                      <p className="text-indigo-600 font-semibold mt-2">
                        ₹{item.price}
                      </p>

                      {/* Quantity */}
                      <div className="flex items-center gap-3 mt-5">

                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="w-9 h-9 border rounded-lg
                                     hover:bg-gray-100"
                        >
                          −
                        </button>

                        <span className="font-semibold">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="w-9 h-9 border rounded-lg
                                     hover:bg-gray-100"
                        >
                          +
                        </button>

                      </div>

                    </div>

                    {/* Item Total */}
                    <div className="font-bold text-gray-900">
                      ₹{item.price * item.quantity}
                    </div>

                  </div>
                ))}

              </div>

              {/* Order Summary */}
              <div className="bg-white rounded-2xl p-6 shadow-sm h-fit">

                <h2 className="text-2xl font-bold text-gray-900">
                  Order Summary
                </h2>

                <div className="flex justify-between mt-6 text-gray-600">
                  <span>Subtotal</span>
                  <span>₹{cartTotal}</span>
                </div>

                <div className="flex justify-between mt-3 text-gray-600">
                  <span>Shipping</span>
                  <span className="text-green-600">
                    Free
                  </span>
                </div>

                <div className="border-t mt-5 pt-5 flex justify-between">

                  <span className="font-bold text-lg">
                    Total
                  </span>

                  <span className="font-bold text-lg text-indigo-600">
                    ₹{cartTotal}
                  </span>

                </div>

                <button
                  className="w-full mt-6 bg-indigo-600
                             text-white py-3 rounded-lg
                             font-semibold hover:bg-indigo-700
                             transition"
                >
                  Proceed to Checkout
                </button>

              </div>

            </div>
          )}

        </section>
      </main>

      <Footer />
    </>
  );
};

export default Cart;