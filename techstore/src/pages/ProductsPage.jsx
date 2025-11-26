import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ProductCard from "../components/ProductCard.jsx";
import products from "../data/products.js";
import { useState } from "react";

export default function ProductsPage() {
  const [search, setSearch] = useState("");

  const filtered = products.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen flex flex-col bg-linear-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]">
      <Navbar />

      <main className="flex-1 px-4 py-10">
        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Cerca un prodotto..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md px-4 py-2 rounded-lg border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
        </div>

        {filtered.length === 0 && (
          <p className="text-white text-xl font-semibold text-center mt-10">Nessun prodotto trovato</p>
        )}

        <section className="flex justify-center flex-wrap gap-6">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
