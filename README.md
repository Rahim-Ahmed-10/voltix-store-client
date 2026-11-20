# Voltix — Next-Gen Electronics Store (Retail Home & Products Catalog)

A modern, high-performance retail frontend for **Voltix**, an electronics store specializing in studio audio, smart wearables, mechanical gaming peripherals, and precision desktop accessories.

Designed with dark mode glassmorphism surfaces, vivid cyan/blue neon accents, smooth scrolling navigation, fluid Framer Motion animations, a real-time dual-filtering engine, and a dedicated `/products` catalog route powered by React Router.

---

## 🔗 Project Links

- **Live Demo:** [https://voltix-store.demo.app](https://voltix-store.demo.app) *(Replace with your deployment URL)*
- **GitHub Repository:** [https://github.com/your-username/voltix-store-client](https://github.com/your-username/voltix-store-client) *(Replace with your repository URL)*

---

## ✨ Key Features & UI/UX Highlights

1. **Clean Route Architecture (React Router):**
   - **`/` (Home Page):** Showcases the brand Hero with flagship gear, curated category filters, and featured product grid.
   - **`/products` (Dedicated Products Page):** Complete hardware catalog with a prominent header, in-page search input, category filter pills, real-time result metrics, and responsive product grid.
   - **`RootLayout` & `ScrollToTop`:** Provides persistent navigation and footer, automatically scrolling to the top upon route changes.

2. **Dark Mode & Glassmorphism Design:**
   - Deep slate canvas (`#030712`) enriched with ambient radial cyan/indigo gradients.
   - Frosted glass cards and navigation panels with backdrop blur (`backdrop-blur-xl`), crisp semi-transparent borders (`border-white/10`), and neon glowing accents.

3. **Sticky Navbar with Live Dual-Attribute Search:**
   - Brand logo with glowing icon badge linking to `/`.
   - Router navigation linking `Products` to `/products`, `Home` to `/`, and smooth anchor scrolling for `Categories` (`#categories`) and `Contact` (`#contact`).
   - Responsive mobile drawer menu with smooth open/close transitions.
   - Real-time search bar filtering the catalog simultaneously by **Product Name** and **Category**, with quick-clear support.

4. **Hero Banner Section:**
   - Bold headline, curated subtext, and primary CTA button ("Explore Products") linking to `/products`.
   - Secondary info button ("Browse Categories") scrolling smoothly to `#categories`, and trust metrics (Ultra-Low Latency, Curated Hardware, Premium Support).
   - Glassmorphic flagship visual card highlighting featured studio gear with tech specifications.

5. **Interactive Category Filter Bar:**
   - Filter pills for `All`, `Audio`, `Wearables`, `Gaming`, and `Accessories`.
   - Distinct Lucide icons per category and glowing active indicators.
   - Real-time catalog metrics counter ("Showing X of 16 items") and quick filter reset button.

6. **Product Grid (16 Curated Products):**
   - High-resolution, reliable Unsplash product images across all 4 categories.
   - **Strict Card Specification:** Each product card strictly displays only **Image**, **Product Name**, **Price**, and **Category** (zero Add to Cart / Wishlist / Buy Now button clutter).
   - Responsive layout: 1 column on mobile, 2 columns on tablet, 3 columns on desktop, 4 columns on widescreen, with zero horizontal overflow.
   - Micro-interactions: Subtle card lift (`y: -6px`) and smooth image zoom on hover.

7. **Clean Empty State:**
   - Graceful fallback with icon, descriptive prompt, and a prominent "Reset Filters" button when no items match the current search or category filter.

8. **Comprehensive Multi-Column Footer:**
   - Voltix brand summary and mission statement.
   - Quick navigation links and direct category anchors.
   - Contact channels and social media icons powered by `lucide-react`.
   - Copyright statement and UI/UX evaluation badge.

---

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Routing:** [React Router](https://reactrouter.com/) (v7/v8)
- **Build Tool:** [Vite 8](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite`
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Mock Data:** Static JSON-like ES Module (`src/data/products.js`)

---

## 📁 Folder Structure

```
voltix-store-client/
├── public/
│   ├── favicon.svg               # Brand favicon
│   └── icons.svg
├── src/
│   ├── assets/                   # Static imagery & SVGs
│   ├── components/               # Modular UI components
│   │   ├── Navbar.jsx            # Sticky navigation bar with live search
│   │   ├── Hero.jsx              # Hero section with flagship visual card
│   │   ├── CategoryFilter.jsx    # Category filter pills & item counter
│   │   ├── ProductCard.jsx       # Card displaying Image, Name, Price, Category
│   │   ├── ProductGrid.jsx       # Responsive grid & empty state handler
│   │   ├── ScrollToTop.jsx       # Automatic route & hash scroll restoration
│   │   └── Footer.jsx            # Multi-column footer with social links
│   ├── data/
│   │   └── products.js           # Static catalog of 16 electronics products
│   ├── hooks/
│   │   └── useProductFilter.js   # Custom hook managing category & search filters
│   ├── Layout/
│   │   └── RootLayout.jsx        # Root layout with Navbar, Outlet, and Footer
│   ├── Pages/
│   │   ├── homePages/
│   │   │   └── HomePage.jsx      # Home page with hero, categories, and showcase
│   │   └── products/
│   │       └── Products.jsx      # Dedicated /products page with header & search
│   ├── index.css                 # Base theme styles & custom scrollbars
│   └── main.jsx                  # React Router configuration & application entry
├── index.html                    # HTML shell with meta tags & title
├── package.json                  # Dependencies & npm scripts
├── vite.config.js                # Vite configuration with Tailwind CSS v4 plugin
└── README.md                     # Documentation
```

---

## 🚀 Local Setup & Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18.x or higher recommended)
- `npm` or `pnpm` or `yarn`

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/voltix-store-client.git
   cd voltix-store-client
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

4. **Build for production:**
   ```bash
   npm run build
   ```
   The compiled and optimized bundle will be generated in the `dist/` directory.

5. **Preview production build locally:**
   ```bash
   npm run preview
   ```

---

## 📄 License & Evaluation Note

This project was built strictly as a **Frontend UI/UX Evaluation** for the Voltix electronics retail platform. No backend, database, or payment processing is included or required.
