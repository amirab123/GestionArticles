import { Outlet, Link } from "react-router-dom";
import "../css/style.css";

export default function Layout() {
  return (
    <div className="layout">
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/articles">Articles</Link>
        <Link to="/ajouter">Ajouter</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
