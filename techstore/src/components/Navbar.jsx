import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function Navbar({ showAuthButtons = false }) {
  const [open, setOpen] = useState(false);
  const { logout, logged } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/");
  }

  const desktopLinkBase =
    "relative inline-flex items-center gap-1 px-1 text-white hover:text-yellow-300 " +
    "after:content-[''] after:absolute after:bottom-0 after:left-0 " +
    "after:h-[2px] after:w-full after:bg-yellow-300 " +
    "after:origin-left after:scale-x-0 after:transition-transform after:duration-300 " +
    "hover:after:scale-x-100";

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-black/60 backdrop-blur-md shadow-lg">
      <div className="text-2xl font-bold tracking-wide text-yellow-300">
        <Link to={logged ? "/home" : "/"} className="cursor-pointer">
          TECHSTORE
        </Link>
      </div>

      {!showAuthButtons && (
        <div className="hidden md:flex items-center gap-6">
          <NavLink to="/home" className={desktopLinkBase}>
            <i className="fa fa-home" /> Home
          </NavLink>

          <NavLink to="/prodotti" className={desktopLinkBase}>
            <i className="fa fa-box-open" /> Prodotti
          </NavLink>

          <NavLink to="/contatti" className={desktopLinkBase}>
            <i className="fa fa-envelope" /> Contatti
          </NavLink>

          <NavLink to="/carrello" className={desktopLinkBase}>
            <i className="fa fa-shopping-cart" /> Carrello
          </NavLink>

          {logged && (
            <button
              onClick={handleLogout}
              className="bg-red-500 px-3 py-1 rounded-md text-sm font-semibold hover:bg-red-600 transition flex items-center gap-1"
            >
              <i className="fa fa-sign-out-alt" />
              Logout
            </button>
          )}
        </div>
      )}

      {showAuthButtons && (
        <div className="hidden md:flex gap-3">
          <Link
            to="/login"
            className="bg-yellow-300 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-200 transition"
          >
            Accedi
          </Link>
          <Link
            to="/register"
            className="bg-yellow-300 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-200 transition"
          >
            Registrati
          </Link>
        </div>
      )}

      <button className="md:hidden text-white text-2xl" onClick={() => setOpen((o) => !o)}>
        <i className="fa fa-bars" />
      </button>

      <div
        className={`absolute md:hidden right-4 top-16 bg-black/85 rounded-xl px-6 py-4 flex flex-col gap-3 ${
          open ? "block" : "hidden"
        }`}
      >
        {!showAuthButtons && (
          <>
            <NavLink to="/home" onClick={() => setOpen(false)} className="text-white">
              <i className="fa fa-home mr-1" /> Home
            </NavLink>
            <NavLink to="/prodotti" onClick={() => setOpen(false)} className="text-white">
              <i className="fa fa-box-open mr-1" /> Prodotti
            </NavLink>
            <NavLink to="/contatti" onClick={() => setOpen(false)} className="text-white">
              <i className="fa fa-envelope mr-1" /> Contatti
            </NavLink>
            <NavLink to="/carrello" onClick={() => setOpen(false)} className="text-white">
              <i className="fa fa-shopping-cart mr-1" /> Carrello
            </NavLink>

            {logged && (
              <button
                onClick={() => {
                  setOpen(false);
                  handleLogout();
                }}
                className="text-red-400 flex items-center gap-1"
              >
                <i className="fa fa-sign-out-alt" />
                Logout
              </button>
            )}
          </>
        )}

        {showAuthButtons && (
          <>
            <Link to="/login" onClick={() => setOpen(false)} className="text-white">
              Accedi
            </Link>
            <Link to="/register" onClick={() => setOpen(false)} className="text-white">
              Registrati
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
