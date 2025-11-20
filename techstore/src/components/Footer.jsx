import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-linear-to-b from-[#0d1117] to-[#111827] text-gray-300 mt-16">
      <div className="max-w-5xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-xl font-semibold text-cyan-400 mb-3">TechStore</h3>
          <p>Il tuo negozio online di fiducia per dispositivi e innovazione tecnologica.</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-cyan-400 mb-3">Link Utili</h4>
          <ul className="space-y-1">
            <li>
              <Link to="/home" className="hover:text-yellow-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/prodotti" className="hover:text-yellow-300">
                Prodotti
              </Link>
            </li>
            <li>
              <Link to="/contatti" className="hover:text-yellow-300">
                Contatti
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-cyan-400 mb-3">Contatti</h4>
          <p>Email: info@techstore.it</p>
          <p>Tel: +39 0123 456789</p>
          <p>Via Roma 123, Milano</p>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 px-4 max-w-4xl mx-auto pb-4">
        <p className="mt-2">
          TechStore è un progetto dimostrativo sviluppato esclusivamente a scopo didattico. I nomi, le immagini e i
          marchi relativi ai prodotti Apple appartengono ai rispettivi proprietari. Questo sito non è affiliato,
          approvato o sponsorizzato da Apple Inc. né rappresenta un vero e-commerce.
        </p>
      </div>

      <div className="border-t border-gray-700 text-center text-sm text-gray-500 py-4">
        © 2025 TechStore. Tutti i diritti riservati.
      </div>
    </footer>
  );
}
