import { useOutletContext, Link } from "react-router";
import { motion } from "framer-motion";
import { Search, X, Sparkles, ChevronRight, SlidersHorizontal } from "lucide-react";
import CategoryFilter from "../../components/CategoryFilter";
import ProductGrid from "../../components/ProductGrid";
import useProductFilter from "../../hooks/useProductFilter";
import products from "../../data/products";

/**
 * Dedicated Products Page Component (/products).
 *
 * Features:
 * - Prominent page header with breadcrumb navigation & hero badge
 * - Dedicated functional search bar with clear button
 * - Real-time result counter ("Showing X of 16 items")
 * - Category filter pills (All, Audio, Wearables, Gaming, Accessories)
 * - Responsive 1 to 4 column glassmorphic product grid
 * - Empty state with "Reset Filters" action when no items match
 * - Dark mode theme with cyan/blue accents and Framer Motion animations
 */
const Products = () => {
  const outletContext = useOutletContext();
  const navSearchQuery = outletContext?.navSearchQuery || "";
  const setNavSearchQuery = outletContext?.setNavSearchQuery || (() => {});

  const {
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    filteredProducts,
    categories,
    totalCount,
    matchCount,
    resetFilters,
  } = useProductFilter(products);

  // Sync with global navbar search if provided
  const effectiveSearch = searchQuery || navSearchQuery;

  const handleSearchChange = (value) => {
    setSearchQuery(value);
    setNavSearchQuery(value);
  };

  const handleReset = () => {
    resetFilters();
    setNavSearchQuery("");
  };

  return (
    <div className="relative w-full pt-8 pb-20">
      {/* Ambient Radial Background Glows */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[120px]" />
      <div className="pointer-events-none absolute top-96 right-10 h-72 w-72 rounded-full bg-blue-600/10 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Prominent Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 pt-4 pb-8"
        >
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-slate-400">
            <Link to="/" className="transition hover:text-cyan-400">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-600" />
            <span className="font-semibold text-cyan-400">Products</span>
          </nav>

          {/* Headline & Subtitle */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-white/10 pb-8">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold text-cyan-300">
                <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                <span>Complete Hardware Lineup</span>
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Explore All{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                  Voltix Gear
                </span>
              </h1>
              <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                Browse our entire collection of high-fidelity audio, titanium wearables,
                rapid-trigger mechanical gaming hardware, and fast-charging desktop gear.
              </p>
            </div>

            {/* Dedicated In-Page Functional Search Input */}
            <div className="w-full md:w-80 lg:w-96">
              <div className="relative">
                <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-cyan-400" />
                <input
                  type="text"
                  value={effectiveSearch}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  placeholder="Search products, models, categories..."
                  aria-label="Search all products"
                  className="w-full rounded-2xl border border-white/15 bg-slate-900/60 py-3 pl-10 pr-9 text-sm text-white placeholder-slate-400 outline-none backdrop-blur-xl transition-all duration-200 focus:border-cyan-400 focus:bg-slate-900/90 focus:ring-1 focus:ring-cyan-400/40 shadow-inner"
                />
                {effectiveSearch && (
                  <button
                    type="button"
                    onClick={handleReset}
                    aria-label="Clear product search"
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-slate-400 transition hover:text-white cursor-pointer"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
              <div className="mt-2 flex items-center justify-between px-1 text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <SlidersHorizontal className="h-3 w-3 text-cyan-400" />
                  <span>Real-time instant filter</span>
                </span>
                <span>
                  Showing <strong className="text-cyan-400">{matchCount}</strong> of {totalCount} items
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Category Filter Pills Bar */}
        <CategoryFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={categories}
          totalCount={totalCount}
          matchCount={matchCount}
          searchQuery={effectiveSearch}
          onReset={handleReset}
        />

        {/* Product Grid Showcase & Empty State */}
        <ProductGrid
          products={filteredProducts}
          onReset={handleReset}
          searchQuery={effectiveSearch}
          selectedCategory={selectedCategory}
        />
      </div>
    </div>
  );
};

export default Products;
