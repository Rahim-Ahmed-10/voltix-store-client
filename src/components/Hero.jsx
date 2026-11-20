import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Zap,
  Volume2,
  BatteryCharging,
  Radio,
} from "lucide-react";

/**
 * Hero Banner Section for Voltix.
 * Highlights high-performance electronics with dark mode aesthetics,
 * glassmorphism surfaces, animated headlines, CTAs, and a flagship visual card.
 *
 * Primary CTA ("Explore Products") navigates to the dedicated /products page.
 * Secondary CTA ("View Featured Drops") scrolls to the Home Page featured 3-card showcase.
 */
const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-32"
    >
      {/* Ambient Radial Glowing Background Orbs */}
      <div className="pointer-events-none absolute -top-36 left-1/4 h-96 w-96 rounded-full bg-cyan-500/15 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-blue-600/15 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Headline, Description & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 sm:space-y-8"
          >
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold text-cyan-300 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
              <span>Next-Gen Electronics Collection 2026</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.12]">
              Engineered for{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                Peak Performance
              </span>{" "}
              & Pure Sound.
            </h1>

            {/* Subheadline */}
            <p className="max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Discover precision-tuned studio audio, titanium smart wearables, ultra-fast mechanical
              gaming peripherals, and fast-charging desktop gear at Voltix.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* Primary CTA navigating to /products */}
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-[0_0_24px_rgba(6,182,212,0.4)] transition-all duration-300 hover:shadow-[0_0_32px_rgba(6,182,212,0.6)] hover:scale-105 active:scale-95"
              >
                <span>Explore Products</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              {/* Secondary CTA scrolling to the 3-card featured section */}
              <a
                href="#products"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-900/40 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition hover:border-cyan-400/40 hover:bg-slate-800/60"
              >
                <span>View Featured Drops</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
              <div>
                <p className="text-xl font-bold text-white">40ms</p>
                <p className="text-xs text-slate-400">Ultra-Low Latency</p>
              </div>
              <div>
                <p className="text-xl font-bold text-cyan-400">100%</p>
                <p className="text-xs text-slate-400">Curated Hardware</p>
              </div>
              <div>
                <p className="text-xl font-bold text-white">24/7</p>
                <p className="text-xs text-slate-400">Premium Support</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Featured Flagship Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/30 to-blue-600/30 blur-xl opacity-75" />

              {/* Glassmorphism Card */}
              <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-slate-900/70 p-5 backdrop-blur-2xl shadow-2xl">
                {/* Visual Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-950/80">
                  <img
                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80"
                    alt="Voltix AuraPulse Studio Edition"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full border border-cyan-400/40 bg-slate-950/80 px-3 py-1 text-[11px] font-semibold text-cyan-300 backdrop-blur-md">
                    <Zap className="h-3 w-3 text-cyan-400" />
                    <span>Featured Flagship</span>
                  </div>
                </div>

                {/* Card Information */}
                <div className="mt-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                        Audio • Studio Series
                      </p>
                      <h3 className="text-lg font-bold text-white">
                        AuraPulse ANC Headphones
                      </h3>
                    </div>
                    <span className="text-xl font-extrabold text-cyan-400">
                      $249.99
                    </span>
                  </div>

                  {/* Feature Highlights Pills */}
                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/5 text-[11px] text-slate-300 font-medium">
                    <div className="flex items-center gap-1.5 rounded-lg bg-white/5 px-2.5 py-1.5">
                      <Volume2 className="h-3.5 w-3.5 text-cyan-400" />
                      <span>Spatial Audio</span>
                    </div>
                    <div className="flex items-center gap-1.5 rounded-lg bg-white/5 px-2.5 py-1.5">
                      <BatteryCharging className="h-3.5 w-3.5 text-cyan-400" />
                      <span>45h Battery</span>
                    </div>
                    <div className="flex items-center gap-1.5 rounded-lg bg-white/5 px-2.5 py-1.5">
                      <Radio className="h-3.5 w-3.5 text-cyan-400" />
                      <span>Zero Lag</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
