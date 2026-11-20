import { useEffect } from "react";
import { useLocation } from "react-router";

/**
 * ScrollToTop Component.
 * Automatically scrolls to top (0, 0) upon route change (e.g., navigating to /products),
 * or smoothly scrolls to the target anchor when a hash is specified (e.g., #categories).
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Allow DOM to settle before scrolling to anchor
      const timer = setTimeout(() => {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 60);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
