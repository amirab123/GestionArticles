import { useContext } from "react";
import { StockContext } from "../context/StockContext";

export default function Accueil() {
  const { articles } = useContext(StockContext);
  const total = articles.reduce((acc, a) => acc + a.quantite, 0);

  return (
    <div>
      <h2>Accueil</h2>
      <p>Total d'articles en stock : <strong>{total}</strong></p>
    </div>
  );
}
