import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const Login = () => {
  return (
    <>
      <Navbar />

      <main className="min-h-screen .bg-gradient-to-br from-indigo-50 via-white to-blue-100 flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-md">

          {/* Login Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8">

            {/* Heading */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">
                Welcome Back
              </h1>

              <p className="text-gray-500 mt-2">
                Login to your ShopHub account
              </p>
            </div>

            {/* Login Form */}
            <form className="space-y-5">

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg
                             focus:outline-none focus:ring-2 focus:ring-indigo-500
                             focus:border-indigo-500"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg
                             focus:outline-none focus:ring-2 focus:ring-indigo-500
                             focus:border-indigo-500"
                />
              </div>

              {/* Remember + Forgot */}
              <div className="flex items-center justify-between text-sm">

                <label className="flex items-center gap-2 text-gray-600">
                  <input
                    type="checkbox"
                    className="w-4 h-4 accent-indigo-600"
                  />
                  Remember me
                </label>

                <a
                  href="#"
                  className="text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  Forgot password?
                </a>

              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-lg
                           font-semibold hover:bg-indigo-700
                           transition duration-300"
              >
                Login
              </button>

            </form>

            {/* Register */}
            <div className="text-center mt-6">
              <p className="text-gray-500">
                Don't have an account?{" "}

                <Link
                  to="/register"
                  className="text-indigo-600 font-semibold hover:underline"
                >
                  Create Account
                </Link>
              </p>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
};

export default Login;