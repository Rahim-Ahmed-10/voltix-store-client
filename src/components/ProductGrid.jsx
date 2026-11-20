import { motion, AnimatePresence } from "framer-motion";
import { PackageX, RotateCcw } from "lucide-react";
import ProductCard from "./ProductCard";

/**
 * Product Grid Component.
 * Renders a responsive grid (1 col mobile, 2 col tablet, 3-4 col desktop)
 * or a clean empty state with a "Reset Filters" button if no products match.
 */
const ProductGrid = ({
  products = [],
  onReset = () => {},
  searchQuery = "",
  selectedCategory = "All",
}) => {
  return (
    <section id="products" className="scroll-mt-24 py-8 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Empty State when no matches found */}
        {products.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="my-12 flex flex-col items-center justify-center rounded-3xl border border-dashed border-white/15 bg-slate-900/30 p-12 text-center backdrop-blur-xl"
          >
            <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 ring-1 ring-cyan-500/30 shadow-[0_0_25px_rgba(6,182,212,0.25)]">
              <PackageX className="h-8 w-8" />
            </div>

            <h3 className="mt-5 text-xl font-bold tracking-tight text-white">
              No matching products found
            </h3>

            <p className="mt-2 max-w-md text-sm text-slate-400">
              We couldn't find any items matching{" "}
              {searchQuery ? <span className="text-cyan-300">"{searchQuery}"</span> : null}
              {searchQuery && selectedCategory !== "All" ? " in " : null}
              {selectedCategory !== "All" ? (
                <span className="font-semibold text-cyan-300">{selectedCategory}</span>
              ) : null}
              . Try searching for a different term or reset your filters.
            </p>

            <button
              type="button"
              onClick={onReset}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.35)] transition-transform hover:scale-105 active:scale-95 cursor-pointer"
            >
              <RotateCcw className="h-4 w-4" />
              <span>Reset Filters</span>
            </button>
          </motion.div>
        ) : (
          /* Responsive Product Grid: 1 col on mobile, 2 on tablet, 3 on lg, 4 on xl */
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <AnimatePresence>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
