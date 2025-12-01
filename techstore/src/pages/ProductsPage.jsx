import { useState, useEffect } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ProductCard from "../components/ProductCard.jsx";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const urls = [
          "https://dummyjson.com/products/category/smartphones",
          "https://dummyjson.com/products/category/laptops",
        ];

        const requests = urls.map((url) => fetch(url).then((res) => res.json()));
        const results = await Promise.all(requests);

        const merged = [...results[0].products, ...results[1].products];

        const normalized = merged.map((p) => ({
          id: p.id,
          name: p.title,
          description: p.description,
          price: p.price,
          image: p.thumbnail,
          onSale: p.discountPercentage > 0,
        }));

        setProducts(normalized);
      } catch {
        setError("Errore nel caricamento dei prodotti.");
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

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

        {loading && <p className="text-white text-xl font-semibold text-center mt-10">Caricamento dei prodotti...</p>}

        {error && <p className="text-red-400 text-xl font-semibold text-center mt-10">{error}</p>}

        {!loading && filtered.length === 0 && (
          <p className="text-white text-xl font-semibold text-center mt-10">Nessun prodotto trovato</p>
        )}

        <section className="flex justify-center flex-wrap gap-6">
          {!loading && filtered.map((p) => <ProductCard key={p.id} product={p} />)}
        </section>
      </main>

      <Footer />
    </div>
  );
}
