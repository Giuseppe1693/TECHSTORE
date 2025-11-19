import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage.js";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useLocalStorage("techstore_user", null);
  const [logged, setLogged] = useLocalStorage("techstore_logged", false);

  function register(data) {
    setUser(data);
    setLogged(false);
  }

  function login(username, password) {
    if (!user) {
      alert("Nessun account registrato.");
      return false;
    }
    if (username === user.username && password === user.password) {
      setLogged(true);
      return true;
    } else {
      alert("Credenziali errate.");
      return false;
    }
  }

  function logout() {
    setLogged(false);
  }

  const value = {
    user,
    logged,
    register,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
