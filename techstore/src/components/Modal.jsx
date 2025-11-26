export default function Modal({ show, onClose, children }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
      <div className="bg-white text-black rounded-xl shadow-2xl p-6 w-full max-w-sm animate-pop">
        {children}

        <button
          onClick={onClose}
          className="mt-4 w-full bg-yellow-300 py-2 rounded-lg font-semibold hover:bg-yellow-200 transition"
        >
          Chiudi
        </button>
      </div>
    </div>
  );
}
