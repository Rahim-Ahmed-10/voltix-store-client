import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

/**
 * Voltix Electronics Store — Clean Single-Page Entry Point.
 * Renders the single-page retail application without multi-page routing overhead.
 */
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
