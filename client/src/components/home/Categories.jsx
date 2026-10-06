const categories = [
  {
    name: "Fashion",
    icon: "👕",
    description: "Trendy clothing and accessories",
  },
  {
    name: "Electronics",
    icon: "💻",
    description: "Latest gadgets and devices",
  },
  {
    name: "Shoes",
    icon: "👟",
    description: "Comfortable and stylish footwear",
  },
  {
    name: "Watches",
    icon: "⌚",
    description: "Classic and modern watches",
  },
  {
    name: "Furniture",
    icon: "🛋️",
    description: "Modern furniture for your home",
  },
  {
    name: "Beauty",
    icon: "💄",
    description: "Beauty and personal care",
  },
];

const Categories = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <p className="text-indigo-600 font-semibold uppercase tracking-wider">
            Shop By Category
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Explore Our Categories
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Discover a wide range of products from different categories,
            all in one place.
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group p-6 bg-gray-50 rounded-2xl text-center cursor-pointer
                         hover:bg-indigo-600 hover:text-white
                         transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="text-4xl mb-4">
                {category.icon}
              </div>

              <h3 className="font-bold text-lg">
                {category.name}
              </h3>

              <p className="text-sm text-gray-500 mt-2 group-hover:text-indigo-100">
                {category.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Categories;