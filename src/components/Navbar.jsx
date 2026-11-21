
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  Search,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

const Navbar = ({ searchQuery = "", setSearchQuery = () => { } }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === "/";
  const isProductsPage = location.pathname === "/products";

  const navLinks = [
    { name: "Home", path: "/", active: isHomePage },
    { name: "Products", path: "/products", active: isProductsPage },
    { name: "Categories", path: "/products#categories", active: false },
  ];

  // Close mobile menu after navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  // Handle hash scrolling after route navigation
  useEffect(() => {
    if (!location.hash) return;

    const timer = setTimeout(() => {
      const element = document.querySelector(location.hash);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [location.pathname, location.hash]);

  // Home navigation
  const handleHomeClick = (e) => {
    if (isHomePage) {
      e.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      setMobileMenuOpen(false);
    }
  };

  // Contact scrolling
  const handleContactClick = (e) => {
    if (isHomePage) {
      e.preventDefault();

      const element = document.querySelector("#contact");

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      setMobileMenuOpen(false);
    }
  };

  // Search functionality
  const handleSearchKeyDown = (e) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      navigate("/products");
      setMobileMenuOpen(false);
    }
  };

  // Search clear
  const handleClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#080d18]/85 backdrop-blur-2xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Main Navbar */}
        <div className="flex h-[76px] items-center justify-between gap-4">

          {/* Brand Logo */}
          <Link
            to="/"
            onClick={handleHomeClick}
            className="group flex shrink-0 items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/20 to-blue-500/10 shadow-[0_0_25px_rgba(34,211,238,0.10)] transition duration-300 group-hover:border-cyan-400/50 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.20)]">
              <Zap className="h-5 w-5 fill-cyan-400 text-cyan-400" />
            </div>

            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-white">
                Volt<span className="text-cyan-400">ix</span>
              </span>

              <span className="text-[9px] font-medium uppercase tracking-[2.5px] text-slate-500">
                Tech & Gadgets
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-300 ${link.active
                    ? "bg-cyan-400/10 text-cyan-400"
                    : "text-slate-400 hover:bg-white/[0.04] hover:text-white"
                  }`}
              >
                {link.name}

                {link.active && (
                  <motion.span
                    layoutId="navbar-active"
                    className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full bg-cyan-400"
                  />
                )}
              </Link>
            ))}

            {/* Contact Link */}
            {isHomePage ? (
              <a
                href="#contact"
                onClick={handleContactClick}
                className="rounded-xl px-4 py-2.5 text-sm font-medium text-slate-400 transition hover:bg-white/[0.04] hover:text-white"
              >
                Contact
              </a>
            ) : (
              <Link
                to="/#contact"
                className="rounded-xl px-4 py-2.5 text-sm font-medium text-slate-400 transition hover:bg-white/[0.04] hover:text-white"
              >
                Contact
              </Link>
            )}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-3">

            {/* Desktop Search */}
            <div className="group relative hidden sm:block">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500 transition group-focus-within:text-cyan-400" />

              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearchKeyDown}
                placeholder="Search gadgets..."
                aria-label="Search products"
                className="h-10 w-40 rounded-full border border-white/[0.08] bg-white/[0.03] pl-10 pr-10 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:w-56 focus:border-cyan-400/40 focus:bg-white/[0.05] focus:ring-4 focus:ring-cyan-400/[0.05] md:w-52 md:focus:w-64"
              />

              {searchQuery && (
                <button
                  type="button"
                  onClick={handleClearSearch}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full text-slate-500 transition hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-400 active:scale-95 md:hidden"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden md:hidden"
            >
              <div className="border-t border-white/[0.08] py-4">

                {/* Mobile Search */}
                <div className="relative mb-4 sm:hidden">
                  <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />

                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleSearchKeyDown}
                    placeholder="Search gadgets..."
                    aria-label="Search products"
                    className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] py-3 pl-10 pr-10 text-sm text-white outline-none transition focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-400/10"
                  />

                  {searchQuery && (
                    <button
                      type="button"
                      onClick={handleClearSearch}
                      aria-label="Clear search"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>

                {/* Mobile Links */}
                <div className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition ${link.active
                          ? "bg-cyan-400/10 text-cyan-400"
                          : "text-slate-300 hover:bg-white/[0.04] hover:text-white"
                        }`}
                    >
                      {link.name}

                      {link.active && (
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      )}
                    </Link>
                  ))}

                  {/* Contact */}
                  {isHomePage ? (
                    <a
                      href="#contact"
                      onClick={handleContactClick}
                      className="rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/[0.04] hover:text-white"
                    >
                      Contact
                    </a>
                  ) : (
                    <Link
                      to="/#contact"
                      onClick={() => setMobileMenuOpen(false)}
                      className="rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/[0.04] hover:text-white"
                    >
                      Contact
                    </Link>
                  )}
                </div>

                {/* Mobile CTA */}
                <Link
                  to="/products"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-4 flex items-center justify-between rounded-xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 px-4 py-3 text-sm font-semibold text-cyan-400 transition hover:border-cyan-400/40"
                >
                  Explore Products
                  <ArrowUpRight className="h-4 w-4" />
                </Link>

                {/* Footer Text */}
                <div className="mt-4 border-t border-white/[0.06] pt-4">
                  <p className="text-center text-xs tracking-wide text-slate-600">
                    Discover the latest technology with Voltix
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
