import { Link, useLocation } from "react-router";
import {
  Zap,
  Globe,
  Share2,
  Send,
  MessageSquare,
  AtSign,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

/**
 * Footer Component.
 * Multi-column layout with Voltix brand summary, quick links, category links,
 * social media icons (lucide-react), and copyright notice.
 */
const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Products Catalog", href: "/products" },
    { label: "Hardware Categories", href: isHomePage ? "#categories" : "/#categories" },
    { label: "Contact & Specs", href: isHomePage ? "#contact" : "/#contact" },
  ];

  const categoryLinks = [
    { label: "Studio Audio", href: "/products" },
    { label: "Titanium Wearables", href: "/products" },
    { label: "Mechanical Gaming", href: "/products" },
    { label: "Smart Accessories", href: "/products" },
  ];

  const socialLinks = [
    { icon: Globe, label: "Official Web", href: "#" },
    { icon: AtSign, label: "X / Social", href: "#" },
    { icon: MessageSquare, label: "Community Forum", href: "#" },
    { icon: Send, label: "Telegram Drops", href: "#" },
    { icon: Share2, label: "Developer Network", href: "#" },
  ];

  const handleSmoothScroll = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="relative scroll-mt-20 border-t border-white/10 bg-slate-950 pt-16 pb-12">
      {/* Subtle Ambient Glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Multi-Column Main Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Brand Info & Bio (5 cols) */}
          <div className="space-y-4 lg:col-span-5">
            <Link
              to="/"
              onClick={(e) => {
                if (isHomePage) {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-white"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-400 ring-1 ring-cyan-400/30">
                <Zap className="h-4 w-4 fill-cyan-400" />
              </span>
              <span>
                Volt<span className="text-cyan-400">ix</span>
              </span>
            </Link>

            <p className="max-w-sm text-sm leading-relaxed text-slate-400">
              Voltix is a premium electronics showcase engineered for tech enthusiasts. Delivering
              studio-fidelity acoustics, high-precision peripherals, and intelligent accessories.
            </p>

            {/* Contact Micro-Details */}
            <div className="space-y-2 pt-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-cyan-400" />
                <span>support@voltix.store</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-cyan-400" />
                <span>+1 (800) 865-8499</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-cyan-400" />
                <span>San Francisco, California</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="space-y-3 lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-white">
              Navigation
            </p>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  {item.href.startsWith("#") ? (
                    <a
                      href={item.href}
                      onClick={(e) => handleSmoothScroll(e, item.href)}
                      className="text-slate-400 transition hover:text-cyan-400"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-slate-400 transition hover:text-cyan-400"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Categories (2 cols) */}
          <div className="space-y-3 lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-white">
              Categories
            </p>
            <ul className="space-y-2 text-sm">
              {categoryLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-slate-400 transition hover:text-cyan-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Social Icons & Connect (3 cols) */}
          <div className="space-y-3 lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-white">
              Connect With Us
            </p>
            <p className="text-xs leading-relaxed text-slate-400">
              Follow Voltix for product announcements, engineering updates, and community tech drops.
            </p>
            <div className="flex items-center gap-2.5 pt-2">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-slate-900/60 text-slate-400 transition-all duration-200 hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:text-cyan-400 hover:scale-105"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright Notice & UI/UX Evaluation Tag */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Voltix Technologies Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] text-slate-400">
              Voltix Retail UI/UX
            </span>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-slate-400 hover:text-cyan-400 transition cursor-pointer"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
