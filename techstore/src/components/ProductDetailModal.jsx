export default function ProductDetailModal({ show, onClose, product, onAdd }) {
  if (!show || !product) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
      <div className="bg-white text-black rounded-xl shadow-2xl w-full max-w-lg p-6 animate-pop">
        <img src={product.image} alt={product.name} className="w-full h-64 object-contain rounded-lg mb-4" />

        <h2 className="text-2xl font-bold mb-2 text-center">{product.name}</h2>

        <p className="text-gray-700 text-center mb-4">{product.description}</p>

        <p className="text-2xl font-bold text-center mb-6">
          € {product.price.toLocaleString("it-IT", { minimumFractionDigits: 2 })}
        </p>

        <div className="flex flex-col gap-3">
          <button
            className="w-full bg-yellow-300 font-semibold py-2 rounded-lg hover:bg-yellow-200 transition"
            onClick={onAdd}
          >
            Aggiungi al carrello
          </button>

          <button
            className="w-full bg-gray-300 font-semibold py-2 rounded-lg hover:bg-gray-200 transition"
            onClick={onClose}
          >
            Chiudi
          </button>
        </div>
      </div>
    </div>
  );
}
