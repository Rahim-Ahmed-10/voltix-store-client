import { motion } from "framer-motion";
import {
  Layers,
  Headphones,
  Watch,
  Gamepad2,
  Cpu,
  X,
} from "lucide-react";

/**
 * Maps each category to a distinct Lucide icon.
 */
const getCategoryIcon = (category) => {
  switch (category) {
    case "Audio":
      return Headphones;
    case "Wearables":
      return Watch;
    case "Gaming":
      return Gamepad2;
    case "Accessories":
      return Cpu;
    default:
      return Layers;
  }
};

/**
 * Category Filter component providing interactive pills for All, Audio, Wearables, Gaming, and Accessories.
 * Works seamlessly with search query filtering.
 */
const CategoryFilter = ({
  selectedCategory,
  setSelectedCategory,
  categories = [],
  totalCount = 0,
  matchCount = 0,
  searchQuery = "",
  onReset = () => {},
}) => {
  return (
    <section id="categories" className="scroll-mt-24 pt-12 pb-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>Browse Catalog</span>
            </div>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Curated Collections
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              Filter by category or search to explore our hardware lineup.
            </p>
          </div>

          {/* Real-time Results Counter & Filter Reset Status */}
          <div className="flex items-center gap-2 text-xs">
            <span className="rounded-full border border-white/10 bg-slate-900/60 px-3 py-1 font-medium text-slate-300 backdrop-blur-md">
              Showing <span className="font-semibold text-cyan-400">{matchCount}</span> of {totalCount} items
            </span>

            {(selectedCategory !== "All" || searchQuery) && (
              <button
                type="button"
                onClick={onReset}
                className="inline-flex items-center gap-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300 transition hover:bg-cyan-500/20 cursor-pointer"
              >
                <span>Reset</span>
                <X className="h-3 w-3" />
              </button>
            )}
          </div>
        </div>

        {/* Interactive Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 py-2">
          {categories.map((category) => {
            const Icon = getCategoryIcon(category);
            const isActive = selectedCategory === category;

            return (
              <motion.button
                key={category}
                type="button"
                whileTap={{ scale: 0.96 }}
                onClick={() => setSelectedCategory(category)}
                className={`relative inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                    : "border border-white/10 bg-slate-900/50 text-slate-300 backdrop-blur-md hover:border-cyan-400/40 hover:bg-slate-800/60 hover:text-white"
                }`}
              >
                <Icon className={`h-4 w-4 ${isActive ? "text-slate-950" : "text-cyan-400"}`} />
                <span>{category}</span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryFilter;
