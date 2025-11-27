export default function AuthRequiredModal({ show, onClose, onConfirm }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
      <div className="bg-white text-black rounded-xl shadow-2xl w-full max-w-sm p-6 animate-pop animate-shake">
        <h2 className="text-xl font-bold text-center text-red-600">Accesso richiesto</h2>

        <p className="text-center mt-3">Per aggiungere prodotti al carrello devi registrarti.</p>

        <div className="flex flex-col gap-3 mt-6">
          <button
            className="w-full bg-yellow-300 font-semibold py-2 rounded-lg hover:bg-yellow-200 transition"
            onClick={onConfirm}
          >
            Registrati!
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
