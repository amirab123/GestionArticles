import { createBrowserRouter } from "react-router-dom";
import Layout from "./composants/Layout";
import Accueil from "./composants/Accueil";
import ListeArticles from "./composants/ListeArticles";
import AjouterArticle from "./composants/AjouterArticle";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Accueil /> },
      { path: "articles", element: <ListeArticles /> },
      { path: "ajouter", element: <AjouterArticle /> },
    ],
  },
]);

export default routes;
