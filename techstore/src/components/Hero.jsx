import { Link } from "react-router-dom";

export default function Hero({ title, subtitle, ctaText, ctaLink }) {
  return (
    <section
      className="
        flex flex-col justify-center items-center text-center
        py-24 px-4 min-h-[500px] text-white
        animate-fade-up
      "
    >
      <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-down">{title}</h1>

      <p className="text-lg md:text-2xl mb-8 animate-fade-up">{subtitle}</p>

      {ctaText && (
        <Link
          to={ctaLink}
          className="inline-block bg-yellow-300 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-200 hover:scale-105 transition shadow-lg"
        >
          {ctaText}
        </Link>
      )}
    </section>
  );
}
