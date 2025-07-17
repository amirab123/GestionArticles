import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import { StockProvider } from "./context/StockContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StockProvider>
      <RouterProvider router={routes} />
    </StockProvider>
  </React.StrictMode>
);
