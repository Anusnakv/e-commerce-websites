import { Link } from "react-router-dom";
import { FaArrowRight, FaStar, FaShippingFast } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-linear-to-br from-indigo-50 via-white to-blue-100">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>

            <span className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold">
              <FaStar />
              Trusted by 50,000+ Customers
            </span>

            <h1 className="mt-6 text-5xl lg:text-7xl font-extrabold leading-tight text-gray-900">
              Shop Smarter.
              <br />
              <span className="text-indigo-600">
                Live Better.
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-8 max-w-xl">
              Discover premium electronics, fashion, home essentials,
              groceries and thousands of products from trusted
              sellers—all in one place.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                to="/shop"
                className="px-8 py-4 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition flex items-center gap-3"
              >
                Shop Now
                <FaArrowRight />
              </Link>

              <Link
                to="/"
                className="px-8 py-4 rounded-xl border border-gray-300 bg-white hover:bg-gray-100 font-semibold"
              >
                Explore Categories
              </Link>

            </div>

            {/* Features */}

            <div className="mt-12 flex flex-wrap gap-8">

              <div className="flex items-center gap-3">
                <FaShippingFast className="text-indigo-600 text-2xl" />
                <div>
                  <h4 className="font-bold">
                    Free Shipping
                  </h4>
                  <p className="text-sm text-gray-500">
                    On orders over $50
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaStar className="text-yellow-500 text-2xl" />
                <div>
                  <h4 className="font-bold">
                    4.9 Rating
                  </h4>
                  <p className="text-sm text-gray-500">
                    Customer Satisfaction
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Content */}

          <div className="relative">

            <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-300 rounded-full blur-3xl opacity-40"></div>

            <div className="absolute -bottom-10 -right-10 w-52 h-52 bg-pink-300 rounded-full blur-3xl opacity-40"></div>

            <img
              src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900"
              alt="Shopping"
              className="relative rounded-3xl shadow-2xl w-full object-cover"
            />

            {/* Floating Card */}

            <div className="absolute bottom-6 left-6 bg-white rounded-2xl shadow-xl p-5">

              <h3 className="font-bold text-lg">
                Summer Sale
              </h3>

              <p className="text-gray-500">
                Up to 50% OFF
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;