import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Footer from "../components/Footer.jsx";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar showAuthButtons />
      <main className="flex-1">
        <Hero
          title="Scopri oggi la tecnologia che cambierà il tuo domani."
          subtitle="Innovazione, futuro e passione tech, tutto in un solo click!"
        />
      </main>
      <Footer />
    </div>
  );
}
