import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Search, Menu, X } from "lucide-react";

/**
 * Navigation Bar Component.
 * Features:
 * - Brand logo & name ("Voltix") linking to Home (/)
 * - React Router navigation: "Products" links to /products; "Home" links to /
 * - "Categories" links to /products#categories (where full filter buttons reside)
 * - "Contact" links to #contact / /#contact
 * - Live search input that syncs across routes; pressing Enter on Home navigates to /products
 * - Responsive mobile drawer menu
 */
const Navbar = ({ searchQuery = "", setSearchQuery = () => {} }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";
  const isProductsPage = location.pathname === "/products";

  const handleAnchorClick = (e, targetHash) => {
    if (isHomePage) {
      e.preventDefault();
      setMobileMenuOpen(false);
      const element = document.querySelector(targetHash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      setMobileMenuOpen(false);
    }
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === "Enter" && !isProductsPage) {
      navigate("/products");
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Brand Logo & Name */}
        <Link
          to="/"
          onClick={(e) => {
            if (isHomePage) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="group flex shrink-0 items-center gap-2.5 text-xl font-bold tracking-tight text-white"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-cyan-400 ring-1 ring-cyan-400/40 shadow-[0_0_15px_rgba(6,182,212,0.25)] transition-transform group-hover:scale-105">
            <Zap className="h-5 w-5 fill-cyan-400" />
          </span>
          <span className="text-xl font-extrabold tracking-tight">
            Volt<span className="text-cyan-400">ix</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            onClick={(e) => {
              if (isHomePage) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className={`text-sm font-medium transition-colors duration-200 ${
              isHomePage ? "text-cyan-400 font-semibold" : "text-slate-300 hover:text-cyan-400"
            }`}
          >
            Home
          </Link>

          {/* Products Link - Dedicated Route */}
          <Link
            to="/products"
            className={`text-sm font-medium transition-colors duration-200 ${
              isProductsPage ? "text-cyan-400 font-semibold" : "text-slate-300 hover:text-cyan-400"
            }`}
          >
            Products
          </Link>

          {/* Categories Link - Links to full filter bar on /products#categories */}
          <Link
            to="/products#categories"
            className="text-sm font-medium text-slate-300 transition-colors duration-200 hover:text-cyan-400"
          >
            Categories
          </Link>

          {/* Contact Anchor Link */}
          {isHomePage ? (
            <a
              href="#contact"
              onClick={(e) => handleAnchorClick(e, "#contact")}
              className="text-sm font-medium text-slate-300 transition-colors duration-200 hover:text-cyan-400"
            >
              Contact
            </a>
          ) : (
            <Link
              to="/#contact"
              className="text-sm font-medium text-slate-300 transition-colors duration-200 hover:text-cyan-400"
            >
              Contact
            </Link>
          )}
        </nav>

        {/* Right Section: Live Search & Mobile Toggle */}
        <div className="flex items-center gap-3">
          {/* Live Search Input */}
          <div className="relative w-44 sm:w-64 lg:w-72">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearchKeyDown}
              placeholder="Search gadgets..."
              aria-label="Search electronics products or categories"
              className="w-full rounded-full border border-white/10 bg-white/5 py-2 pl-9 pr-8 text-xs sm:text-sm text-white placeholder-slate-400 outline-none transition-all duration-200 focus:border-cyan-400 focus:bg-slate-900 focus:ring-1 focus:ring-cyan-400/40"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search query"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-full p-0.5 text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

          {/* Mobile Menu Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation drawer"
            className="inline-flex md:hidden items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-400 active:scale-95 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col space-y-1 px-4 py-4">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-white/5 hover:text-cyan-400 ${
                  isHomePage ? "text-cyan-400 font-semibold bg-white/5" : "text-slate-300"
                }`}
              >
                Home
              </Link>

              <Link
                to="/products"
                onClick={() => setMobileMenuOpen(false)}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-white/5 hover:text-cyan-400 ${
                  isProductsPage ? "text-cyan-400 font-semibold bg-white/5" : "text-slate-300"
                }`}
              >
                Products
              </Link>

              <Link
                to="/products#categories"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-cyan-400"
              >
                Categories
              </Link>

              {isHomePage ? (
                <a
                  href="#contact"
                  onClick={(e) => handleAnchorClick(e, "#contact")}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-cyan-400"
                >
                  Contact
                </a>
              ) : (
                <Link
                  to="/#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-cyan-400"
                >
                  Contact
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
