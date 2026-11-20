import { motion } from "framer-motion";

/**
 * Product Card Component.
 * Strict Constraint: Displays ONLY Image, Product Name, Price, and Category.
 * No Add to Cart, Buy Now, or Wishlist buttons.
 */
const ProductCard = ({ product }) => {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-xl shadow-lg transition-all duration-300 hover:border-cyan-500/40 hover:bg-slate-900/70 hover:shadow-[0_12px_32px_-8px_rgba(6,182,212,0.18)]"
    >
      {/* Top Accent Glow on Hover */}
      <div className="pointer-events-none absolute -top-12 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-cyan-500/0 blur-2xl transition-all duration-500 group-hover:bg-cyan-500/25" />

      {/* 1. Product Image Container */}
      <div className="relative aspect-square w-full overflow-hidden bg-slate-950/60">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-40 transition-opacity duration-300 group-hover:opacity-20" />
      </div>

      {/* Content Section: Category, Name, Price */}
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          {/* 2. Category Badge */}
          <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-0.5 text-xs font-semibold tracking-wide text-cyan-300">
            {product.category}
          </span>

          {/* 3. Product Name */}
          <h3 className="mt-2.5 text-base font-semibold text-white transition-colors duration-200 group-hover:text-cyan-200 line-clamp-1">
            {product.name}
          </h3>
        </div>

        {/* 4. Product Price */}
        <div className="mt-4 pt-3 border-t border-white/5 flex items-baseline justify-between">
          <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">Price</span>
          <span className="text-xl font-bold tracking-tight text-cyan-400">
            ${product.price.toFixed(2)}
          </span>
        </div>
      </div>
    </motion.article>
  );
};

export default ProductCard;
