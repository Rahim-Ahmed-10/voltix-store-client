// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

/**
 * Hero banner section introducing Voltix with primary CTA and featured visual.
 */
const Hero = () => {
    return (
        <section
            id="home"
            className="relative overflow-hidden border-b border-white/10 py-14 sm:py-20 lg:py-24"
        >
            {/* Subtle Ambient Glow */}
            <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />

            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6 lg:col-span-7"
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1.5 text-xs font-medium text-cyan-300">
                        <Sparkles className="h-3.5 w-3.5" />
                        <span>Next-Gen Electronics Collection</span>
                    </div>

                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                        Power Your Setup with{" "}
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Precision Tech
                        </span>
                    </h1>

                    <p className="max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
                        Discover studio-grade audio, ultra-responsive wearables, mechanical
                        peripherals, and smart accessories crafted for everyday performance.
                    </p>

                    <div className="flex flex-wrap items-center gap-4 pt-2">
                        <a
                            href="#products"
                            className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                        >
                            <span>Explore Products</span>
                            <ArrowRight className="h-4 w-4" />
                        </a>

                        <a
                            href="#footer"
                            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:border-white/30 hover:bg-white/10"
                        >
                            <span>Brand Info</span>
                        </a>
                    </div>

                    <div className="flex items-center gap-2 pt-2 text-xs text-slate-400">
                        <ShieldCheck className="h-4 w-4 text-cyan-400" />
                        <span>Curated Hardware Showcase • Responsive UI Preview</span>
                    </div>
                </motion.div>

                {/* Right Featured Visual Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.65, delay: 0.15 }}
                    className="lg:col-span-5"
                >
                    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl">
                        <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80"
                                alt="Featured wireless studio headphones"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="mt-4 flex items-center justify-between px-1 pb-1">
                            <div>
                                <p className="text-xs uppercase tracking-wider text-cyan-400">
                                    Featured Gear
                                </p>
                                <p className="text-base font-semibold text-white">
                                    Studio Wireless Series
                                </p>
                            </div>
                            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-200">
                                2026 Edition
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;