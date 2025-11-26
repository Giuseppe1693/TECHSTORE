import { useState } from "react";
import { useCart } from "../context/CartContext.jsx";
import Modal from "./Modal.jsx";
import ProductDetailModal from "./ProductDetailModal.jsx";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [showModal, setShowModal] = useState(false);
  const [openDetail, setOpenDetail] = useState(false);

  function handleAdd() {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      img: product.image,
    });
    setShowModal(true);
  }

  return (
    <>
      <div
        className="bg-white rounded-xl w-64 text-black overflow-hidden shadow-lg transform transition hover:-translate-y-2 hover:shadow-2xl animate-fadeIn cursor-pointer"
        onClick={() => setOpenDetail(true)}
      >
        <img src={product.image} alt={product.name} className="w-full h-52 object-contain bg-gray-100" />

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
            onClick={(e) => {
              e.stopPropagation();
              handleAdd();
            }}
          >
            Aggiungi al carrello
          </button>
        </div>
      </div>

      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <h2 className="text-xl font-bold text-center">Prodotto aggiunto!</h2>
        <p className="text-center mt-2">{product.name} è stato aggiunto al carrello.</p>
      </Modal>

      <ProductDetailModal
        show={openDetail}
        onClose={() => setOpenDetail(false)}
        product={product}
        onAdd={() => {
          handleAdd();
          setOpenDetail(false);
        }}
      />
    </>
  );
}
