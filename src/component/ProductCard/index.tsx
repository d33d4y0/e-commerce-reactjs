const ProductCard = () => {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg">
      <div className="h-24 w-full">
        <img
          className="h-full w-full object-cover"
          src="product-image.jpg"
          alt="Product Image"
        />
      </div>
      <div className="p-4">
        <h2 className="mb-2 text-lg font-semibold">Product Name</h2>
        <p className="mb-4 text-sm text-gray-600">Product Description</p>
        <p className="mb-2 text-lg font-bold">$99.99</p>
        <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
};
export default ProductCard;
