import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Messaggio inviato!");
    setForm({ name: "", surname: "", email: "", message: "" });
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex justify-center items-center px-4 py-16">
        <div className="bg-white text-black rounded-xl shadow-2xl w-full max-w-lg p-8">
          <h1 className="text-2xl font-bold text-center mb-6">Per qualsiasi info compila il form</h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-semibold mb-2" htmlFor="name">
                Nome
              </label>
              <input
                id="name"
                name="name"
                className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block font-semibold mb-2" htmlFor="surname">
                Cognome
              </label>
              <input
                id="surname"
                name="surname"
                className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                value={form.surname}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block font-semibold mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block font-semibold mb-2" htmlFor="message">
                Messaggio
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-400"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-300 text-black font-semibold py-2 rounded-lg hover:bg-yellow-200 hover:scale-105 transition shadow-md"
            >
              Invia
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
