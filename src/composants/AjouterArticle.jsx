import { useState, useContext } from "react";
import { StockContext } from "../context/StockContext";
import { useNavigate } from "react-router-dom";

export default function AjouterArticle() {
  const { ajouterArticle } = useContext(StockContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nom: "",
    quantite: "",
    categorie: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    ajouterArticle({ ...form, quantite: parseInt(form.quantite) });
    navigate("/articles");
  };

  return (
    <div>
      <h2>Ajouter un article</h2>
      <form onSubmit={handleSubmit}>
        <input name="nom" placeholder="Nom" onChange={handleChange} required />
        <input name="quantite" type="number" placeholder="Quantité" onChange={handleChange} required />
        <input name="categorie" placeholder="Catégorie" onChange={handleChange} required />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}
