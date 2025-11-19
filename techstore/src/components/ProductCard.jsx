import { useCart } from "../context/CartContext.jsx";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl w-64 text-black overflow-hidden shadow-lg transform transition hover:-translate-y-2 hover:shadow-2xl animate-fadeIn">
      <img
        src={product.image || "https://via.placeholder.com/300"}
        alt={product.name}
        className="w-full h-52 object-contain bg-gray-100"
      />

      <div className="p-4">
        <h3 className="font-semibold mb-1 text-sm line-clamp-2">{product.name}</h3>

        <p className="font-bold mb-3 text-base">
          €
          {Number(product.price).toLocaleString("it-IT", {
            minimumFractionDigits: 2,
          })}
        </p>

        <button
          className="w-full bg-yellow-300 text-black font-semibold py-2 rounded-lg hover:bg-yellow-200 hover:scale-105 transition shadow-md"
          onClick={() =>
            addToCart({
              id: product.id,
              name: product.name,
              price: product.price,
              img: product.image,
            })
          }
        >
          Aggiungi al carrello
        </button>
      </div>
    </div>
  );
}
