import React, { useState, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import { StockProvider } from "./context/StockContext";
import "./css/style.css"; // styles globaux

const App = () => {
  const [theme, setTheme] = useState("light");
  const [notification, setNotification] = useState("");

  // basculer le thème
  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  // afficher une notification temporaire
  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(""), 3000);
  };

  // effet de transition légère sur le body
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <StockProvider value={{ showNotification }}>
      <div className={`app-container ${theme}`}>

        <header className="header">
          <button onClick={toggleTheme}>
            {theme === "light" ? "🌙 Mode sombre" : "☀️ Mode clair"}
          </button>
        </header>

        {notification && (
          <div className="notification">
            {notification}
          </div>
        )}


        <RouterProvider router={routes} />
      </div>
    </StockProvider>
  );
};

export default App;
