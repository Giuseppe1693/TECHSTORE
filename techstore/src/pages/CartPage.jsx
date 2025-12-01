import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { useCart } from "../context/CartContext.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal.jsx";

function formatEuro(num) {
  return num.toLocaleString("it-IT", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export default function CartPage() {
  const { cart, removeFromCart, clearCart, total } = useCart();

  const navigate = useNavigate();
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 px-4 py-10">
        <h1 className="text-3xl font-bold text-center mb-8">Il tuo carrello</h1>

        {cart.length === 0 ? (
          <div className="max-w-xl mx-auto bg-white text-black rounded-xl shadow-2xl p-8 text-center">
            <h2 className="text-xl font-semibold mb-4">Il carrello è vuoto</h2>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto space-y-4">
            {cart.map((p) => (
              <div key={p.name} className="flex items-center bg-white text-black rounded-xl shadow-lg p-4 gap-4">
                <img src={p.img} alt={p.name} className="w-20 h-20 object-contain rounded-lg" />

                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{p.name}</h3>
                  <p className="font-bold">
                    €{formatEuro(p.price)} x {p.quantity}
                  </p>
                </div>

                <button
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-red-600 text-white hover:bg-red-500 hover:scale-105 transition"
                  onClick={() => removeFromCart(p.name)}
                >
                  <i className="fa fa-trash" />
                </button>
              </div>
            ))}

            <div className="bg-white text-black rounded-xl shadow-2xl p-6 text-center mt-6">
              <h2 className="text-2xl font-bold mb-4">Totale: €{formatEuro(total)}</h2>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button
                  onClick={clearCart}
                  className="bg-red-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-red-400 hover:scale-105 transition shadow-md"
                >
                  Svuota carrello
                </button>

                <button
                  onClick={() => setShowPaymentModal(true)}
                  className="bg-yellow-300 text-black font-semibold px-6 py-2 rounded-lg hover:bg-yellow-200 hover:scale-105 transition shadow-md"
                >
                  Procedi al pagamento
                </button>
              </div>
            </div>

            <Modal
              show={showPaymentModal}
              onClose={() => {
                setShowPaymentModal(false);
                clearCart();
                navigate("/home");
              }}
            >
              <h2 className="text-xl font-bold text-center text-green-600">Pagamento effettuato con successo</h2>
              <p className="text-center mt-2">Grazie per averci preferito!</p>
            </Modal>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
