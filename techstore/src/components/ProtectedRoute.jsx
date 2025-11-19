import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function ProtectedRoute({ children }) {
  const { logged } = useAuth();
  if (!logged) return <Navigate to="/login" replace />;
  return children;
}
