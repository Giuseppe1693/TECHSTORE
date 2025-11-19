import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Footer from "../components/Footer.jsx";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
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
