import { createContext, useState } from "react";
import articlesInitial from "../data/articles";

export const StockContext = createContext();

export const StockProvider = ({ children }) => {
  const [articles, setArticles] = useState(articlesInitial);

  const ajouterArticle = (nouvelArticle) => {
    setArticles([...articles, { ...nouvelArticle, id: Date.now() }]);
  };

  return (
    <StockContext.Provider value={{ articles, ajouterArticle }}>
      {children}
    </StockContext.Provider>
  );
};
