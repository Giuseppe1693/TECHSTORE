import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Routes>
          {/* Pagine pubbliche */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Pagine protette */}
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/prodotti"
            element={
              <ProtectedRoute>
                <ProductsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contatti"
            element={
              <ProtectedRoute>
                <ContactPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/carrello"
            element={
              <ProtectedRoute>
                <CartPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
