import { useContext } from "react";
import { StockContext } from "../context/StockContext";

export default function ListeArticles() {
  const { articles } = useContext(StockContext);

  return (
    <div>
      <h2>Liste des articles</h2>
      <ul>
        {articles.map((a) => (
          <li key={a.id}>
            {a.nom} – {a.quantite} en stock ({a.categorie})
          </li>
        ))}
      </ul>
    </div>
  );
}
