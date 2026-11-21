
import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Truck,
  Headphones,
} from "lucide-react";

const floatingImages = [
  {
    src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=85",
    position: "left-[2%] top-[27%] rotate-[-14deg]",
    size: "w-36 h-36 lg:w-48 lg:h-48",
  },
  {
    src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=85",
    position: "left-[18%] top-[7%] rotate-[-10deg]",
    size: "w-32 h-32 lg:w-40 lg:h-40",
  },
  {
    src: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=700&q=85",
    position: "left-[38%] top-[2%] rotate-[6deg]",
    size: "w-32 h-32 lg:w-40 lg:h-40",
  },
  {
    src: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&w=700&q=85",
    position: "right-[19%] top-[7%] rotate-[12deg]",
    size: "w-32 h-32 lg:w-40 lg:h-40",
  },
  {
    src: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=700&q=85",
    position: "right-[2%] top-[26%] rotate-[14deg]",
    size: "w-36 h-36 lg:w-48 lg:h-48",
  },
  {
    src: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99b?auto=format&fit=crop&w=700&q=85",
    position: "left-[5%] bottom-[13%] rotate-[10deg]",
    size: "w-32 h-32 lg:w-44 lg:h-44",
  },
  {
    src: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=700&q=85",
    position: "right-[5%] bottom-[13%] rotate-[-10deg]",
    size: "w-32 h-32 lg:w-44 lg:h-44",
  },
  {
    src: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=700&q=85",
    position: "left-[23%] bottom-[3%] rotate-[8deg]",
    size: "w-28 h-28 lg:w-36 lg:h-36",
  },
  {
    src: "https://images.unsplash.com/photo-1518441902117-f0a9b6a6c9f5?auto=format&fit=crop&w=700&q=85",
    position: "right-[23%] bottom-[3%] rotate-[-8deg]",
    size: "w-28 h-28 lg:w-36 lg:h-36",
  },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[#020617] text-white"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(148,163,184,0.06)_1px,transparent_1px)] [background-size:30px_30px]" />
      </div>

      {/* Main Container */}
      <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">

        {/* Floating Images */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">

          {floatingImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className={`absolute hidden overflow-hidden rounded-[24px] border border-white/10 bg-slate-900 p-1.5 shadow-[0_18px_40px_rgba(0,0,0,0.4)] sm:block ${image.position} ${image.size}`}
            >
              <motion.img
                src={image.src}
                alt=""
                aria-hidden="true"
                loading={index < 5 ? "eager" : "lazy"}
                onError={(e) => {
                  e.currentTarget.parentElement.style.display = "none";
                }}
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 4 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-full w-full rounded-[18px] object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex min-h-[700px] flex-col items-center justify-center py-24 text-center sm:min-h-[760px] sm:py-28 lg:min-h-[820px] lg:py-32">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold text-cyan-300 shadow-sm backdrop-blur-xl sm:text-sm"
          >
            <Sparkles className="h-4 w-4" />
            Discover the Future of Technology
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-[950px] text-4xl font-black leading-[1.12] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-[76px] xl:text-[84px]"
          >
            Discover the Power
            <br />

            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              of Next-Gen Tech
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-[680px] text-sm leading-7 text-slate-400 sm:text-base sm:leading-8"
          >
            Explore premium gadgets, powerful electronics and smart
            innovations designed to make your everyday life better.
            Experience quality, performance and style with Voltix.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row"
          >
            {/* Primary Button */}
            <Link
              to="/products"
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-[0_10px_25px_rgba(6,182,212,0.2)] transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/30 active:scale-95 sm:w-auto"
            >
              Explore Products

              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            {/* Secondary Button */}
            <a
              href="#products"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-semibold text-slate-300 transition duration-300 hover:border-cyan-400/30 hover:bg-white/10 hover:text-white active:scale-95 sm:w-auto"
            >
              View Featured
            </a>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-14 w-full max-w-3xl border-t border-white/10 pt-7 sm:mt-16"
          >
            <div className="grid grid-cols-3">

              {/* Quality */}
              <div className="flex flex-col items-center px-2">
                <ShieldCheck className="h-6 w-6 text-cyan-400" />

                <h3 className="mt-3 text-xs font-bold text-white sm:text-sm">
                  Quality Products
                </h3>

                <p className="mt-1 hidden text-xs text-slate-400 sm:block">
                  Carefully selected
                </p>
              </div>

              {/* Delivery */}
              <div className="flex flex-col items-center border-x border-white/10 px-2">
                <Truck className="h-6 w-6 text-cyan-400" />

                <h3 className="mt-3 text-xs font-bold text-white sm:text-sm">
                  Fast Delivery
                </h3>

                <p className="mt-1 hidden text-xs text-slate-400 sm:block">
                  Convenient shopping
                </p>
              </div>

              {/* Support */}
              <div className="flex flex-col items-center px-2">
                <Headphones className="h-6 w-6 text-cyan-400" />

                <h3 className="mt-3 text-xs font-bold text-white sm:text-sm">
                  Customer Support
                </h3>

                <p className="mt-1 hidden text-xs text-slate-400 sm:block">
                  Here to help
                </p>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
