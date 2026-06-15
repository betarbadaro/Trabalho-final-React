import { createContext, useContext, useState } from "react";


export const AppContext = createContext();

export function AppProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [usuarioLogado, setUsuarioLogado] = useState(null);

  function toggleDarkMode() {
    setDarkMode((prev) => !prev);
  }

  function login(dados) {
    setUsuarioLogado(dados);
  }

  function logout() {
    setUsuarioLogado(null);
  }

  return (
    <AppContext.Provider
      value={{ darkMode, usuarioLogado, toggleDarkMode, login, logout }}
    >
      {children}
    </AppContext.Provider>
  );


  }
    export function useApp() {
  
    return useContext(AppContext);
}
