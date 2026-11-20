import { useState } from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

/**
 * RootLayout Component.
 * Wraps all application routes with:
 * - ScrollToTop handler for automatic scroll restoration
 * - Global Navbar with responsive mobile menu & live search
 * - Outlet rendering either HomePage or Products page
 * - Global Footer with brand info, quick links, and social icons
 */
const RootLayout = () => {
  const [navSearchQuery, setNavSearchQuery] = useState("");

  return (
    <div className="flex min-h-screen flex-col justify-between bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950 overflow-x-hidden">
      {/* Route & Hash Scroll Handler */}
      <ScrollToTop />

      {/* Global Navbar */}
      <Navbar
        searchQuery={navSearchQuery}
        setSearchQuery={setNavSearchQuery}
      />

      {/* Page Content Outlet */}
      <main className="flex-1">
        <Outlet context={{ navSearchQuery, setNavSearchQuery }} />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default RootLayout;
