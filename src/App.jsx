import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoryFilter from "./components/CategoryFilter";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";
import useProductFilter from "./hooks/useProductFilter";
import products from "./data/products";

/**
 * Root Single-Page Application Component for Voltix Electronics Store.
 *
 * Implements a pure single-page retail experience with:
 * - Dark mode theme & glassmorphism surfaces
 * - Sticky Navbar with smooth anchor scrolling and live dual-attribute search
 * - Hero banner with key value propositions and featured flagship showcase
 * - Category filter pills (All, Audio, Wearables, Gaming, Accessories)
 * - Responsive 1 to 4 column product grid (Image, Name, Price, Category ONLY)
 * - Clean empty state with filter reset action
 * - Multi-column informative footer
 */
function App() {
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

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950 overflow-x-hidden">
      {/* Top Navigation Bar with Live Search */}
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Main Single-Page Content */}
      <main>
        {/* Hero Banner Section */}
        <Hero />

        {/* Category Filter Pills & Real-time Metrics */}
        <CategoryFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={categories}
          totalCount={totalCount}
          matchCount={matchCount}
          searchQuery={searchQuery}
          onReset={resetFilters}
        />

        {/* Product Grid & Zero-Match Empty State */}
        <ProductGrid
          products={filteredProducts}
          onReset={resetFilters}
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
        />
      </main>

      {/* Multi-Column Footer with Brand Summary and Socials */}
      <Footer />
    </div>
  );
}

export default App;
