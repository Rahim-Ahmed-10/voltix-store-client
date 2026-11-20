import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import RootLayout from "./Layout/RootLayout";
import HomePage from "./Pages/homePages/HomePage";
import Products from "./Pages/products/Products";

/**
 * Voltix Electronics Store — React Router Configuration.
 * - RootLayout wraps the app with Navbar, Footer, and automatic scroll-to-top restoration.
 * - "/" renders HomePage.
 * - "/products" renders dedicated Products page.
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "products",
        element: <Products />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
