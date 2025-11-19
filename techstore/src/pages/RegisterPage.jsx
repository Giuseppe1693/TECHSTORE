import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate, Link } from "react-router-dom";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !surname || !username || !email || !password) {
      alert("Compila tutti i campi!");
      return;
    }

    register({ name, surname, username, email, password });
    alert("Registrazione completata!");
    navigate("/login");
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar showAuthButtons />
      <main className="flex-1 flex justify-center items-center px-4 py-16">
        <section className="bg-white text-black rounded-xl shadow-2xl w-full max-w-lg p-8">
          <h1 className="text-2xl font-bold text-center mb-6">Crea il tuo account</h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-semibold mb-2" htmlFor="name">
                Nome
              </label>
              <input
                id="name"
                className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block font-semibold mb-2" htmlFor="surname">
                Cognome
              </label>
              <input
                id="surname"
                className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block font-semibold mb-2" htmlFor="username">
                Username
              </label>
              <input
                id="username"
                className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block font-semibold mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block font-semibold mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full mt-4 bg-yellow-300 text-black font-semibold py-2 rounded-lg hover:bg-yellow-200 hover:scale-105 transition shadow-md"
            >
              Registrati
            </button>

            <p className="text-center text-sm text-gray-700 mt-4">
              Sei già registrato?{" "}
              <Link to="/login" className="text-cyan-500 font-semibold">
                Accedi qui
              </Link>
            </p>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}
