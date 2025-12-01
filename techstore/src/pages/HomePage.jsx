import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Footer from "../components/Footer.jsx";

export default function HomePage() {
  return (
    <div
      className="min-h-screen flex flex-col text-white bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.7)),url('https://images.unsplash.com/photo-1519389950473-47ba0277781c')",
      }}
    >
      <Navbar />

      <main className="flex-1">
        <Hero
          title="Il meglio della tecnologia"
          subtitle="Scopri tanti prodotti esclusivi solo da noi!"
          ctaText="Scopri i prodotti"
          ctaLink="/prodotti"
        />
      </main>

      <Footer />
    </div>
  );
}
