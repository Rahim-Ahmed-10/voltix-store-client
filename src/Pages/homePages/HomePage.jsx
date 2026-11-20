import { Link } from "react-router";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import Hero from "../../components/Hero";
import ProductCard from "../../components/ProductCard";
import products from "../../data/products";

/**
 * HomePage Component.
 *
 * Requirements:
 * 1. Hero banner with primary CTA ("Explore Products") linking to /products.
 * 2. Displays ONLY 3 featured product cards on the Home Page (products.slice(0, 3)).
 * 3. Each card shows ONLY: Image, Product Name, Price, and Category (no cart/checkout buttons).
 * 4. Does NOT show the full 16-item catalog or heavy filter bar.
 * 5. Prominent "View All Products" CTA button linking to /products.
 */
const HomePage = () => {
  // Take exactly 3 featured products for the curated home showcase
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="w-full">
      {/* Hero Banner Section */}
      <Hero />

      {/* Featured Products Showcase (3 Cards Only) */}
      <section id="products" className="scroll-mt-24 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold text-cyan-300">
              <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
              <span>Curated Showcase</span>
            </div>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Featured Electronics
            </h2>

            <p className="mt-2 max-w-xl text-sm sm:text-base text-slate-400">
              Handpicked hardware engineered for uncompromising audio fidelity, rapid-trigger
              gaming response, and modern daily performance.
            </p>
          </div>

          {/* 3 Featured Product Cards Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>

          {/* Clear CTA to navigate to /products */}
          <div className="mt-12 flex justify-center">
            <Link
              to="/products"
              className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-3.5 text-sm font-bold text-slate-950 shadow-[0_0_24px_rgba(6,182,212,0.35)] transition-all duration-300 hover:shadow-[0_0_32px_rgba(6,182,212,0.6)] hover:scale-105 active:scale-95"
            >
              <span>View All Products</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
