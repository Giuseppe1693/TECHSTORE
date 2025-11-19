import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-linear-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]">
      <Navbar />

      <main className="flex-1 px-4 py-10">
        <section className="flex justify-center flex-wrap gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
