import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div
      className="min-h-screen flex flex-col text-white bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.7)),url('https://images.unsplash.com/photo-1519389950473-47ba0277781c')",
      }}
    >
      <Navbar showAuthButtons />

      <main className="flex-1">
        <Hero
          title="Scopri oggi la tecnologia che cambierà il tuo domani."
          subtitle="Innovazione, futuro e passione tech, tutto in un solo click!"
          ctaText="Esplora i prodotti"
          ctaLink="/prodotti"
        />

        <section className="py-24 px-6">
          <div
            className="
      bg-white/10 backdrop-blur-lg
      rounded-3xl shadow-xl border border-white/20
      p-10 max-w-5xl mx-auto text-center
      animate-fade-up"
          >
            <h2
              className="
    text-4xl font-extrabold mb-4 tracking-wide 
    bg-linear-to-r from-cyan-300 via-blue-400 to-purple-400 
    bg-clip-text text-transparent 
    drop-shadow-[0_0_10px_rgba(0,0,0,0.4)]"
            >
              Chi siamo
            </h2>

            <p className="text-lg text-gray-200 leading-relaxed tracking-wide">
              TechStore nasce dalla passione per l’innovazione e il design. Offriamo solo prodotti premium selezionati
              con cura, garantendo qualità, affidabilità e un'esperienza di acquisto moderna e intuitiva.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 animate-fade-up">
            <div className="bg-black/40 p-6 rounded-2xl shadow-xl text-center">
              <i className="fa fa-shield-alt text-yellow-300 text-4xl mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Qualità garantita</h3>
              <p className="text-gray-300">Ogni prodotto è scelto con attenzione da fornitori certificati.</p>
            </div>

            <div className="bg-black/40 p-6 rounded-2xl shadow-xl text-center">
              <i className="fa fa-truck text-yellow-300 text-4xl mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Spedizioni rapide</h3>
              <p className="text-gray-300">Consegniamo in tutta Italia con spedizioni veloci e tracciate.</p>
            </div>

            <div className="bg-black/40 p-6 rounded-2xl shadow-xl text-center">
              <i className="fa fa-headset text-yellow-300 text-4xl mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Supporto dedicato</h3>
              <p className="text-gray-300">La nostra assistenza è sempre disponibile per supportarti.</p>
            </div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div
            className="
      bg-white/10 backdrop-blur-lg
      rounded-3xl shadow-xl border border-white/20
      p-12 max-w-5xl mx-auto text-center
      animate-fade-up"
          >
            <h2
              className="
    text-4xl font-extrabold mb-6 tracking-wide 
    bg-linear-to-r from-yellow-300 via-orange-300 to-red-400 
    bg-clip-text text-transparent 
    drop-shadow-[0_0_10px_rgba(0,0,0,0.4)]"
            >
              La nostra missione
            </h2>

            <p className="text-lg text-gray-200 leading-relaxed tracking-wide">
              Crediamo che la tecnologia debba essere semplice, accessibile e in grado di migliorare la vita quotidiana.
              Il nostro obiettivo è unire design, performance e affidabilità per offrire un'esperienza davvero
              superiore.
            </p>
          </div>
        </section>

        <section className="py-24 px-6">
          <div
            className="
      bg-white/10 backdrop-blur-lg
      rounded-3xl shadow-xl border border-white/20
      p-12 max-w-3xl mx-auto text-center
      animate-fade-up"
          >
            <h2 className="text-3xl font-bold mb-6 text-white">Pronto a scoprire i nostri prodotti?</h2>

            <Link
              to="/prodotti"
              className="
        inline-block mt-4 bg-yellow-300 text-black px-10 py-4 rounded-xl
        font-semibold shadow-lg hover:bg-yellow-200 transition"
            >
              Vai ai prodotti
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
