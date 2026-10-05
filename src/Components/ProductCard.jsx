


const ProductCard = ({ product }) => {
  return (
    <div className="group w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

      {/* Product Image */}
      <div className="flex h-72 items-center justify-center bg-gray-100 p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain transition duration-500 group-hover:scale-110"
        />
      </div>

      {/* Product Details */}
      <div className="p-5">

        {/* Category */}
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-indigo-600">
          {product.category}
        </p>

        {/* Title */}
        <h2 className="line-clamp-2 min-h-[56px] text-lg font-bold text-gray-800">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-2">
          <span className="rounded-md bg-green-100 px-2 py-1 text-sm font-bold text-green-700">
            {product.rating.rate}
          </span>

          <span className="text-sm text-gray-500">
            {product.rating.count} reviews
          </span>
        </div>

        {/* Description */}
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-500">
          {product.description}
        </p>

        {/* Price and Button */}
        <div className="mt-5 flex items-center justify-between">

          <div>
            <p className="text-2xl font-bold text-gray-900">
              ${product.price}
            </p>
          </div>

          <button className="rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition duration-300 hover:bg-indigo-700">
            Add to Cart
          </button>

        </div>
      </div>
    </div>
  );
};

export default ProductCard;