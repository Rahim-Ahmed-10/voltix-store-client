import { useState, useMemo } from "react";

/**
 * Custom hook to filter products by category and search keyword.
 *
 * @param {Array} initialProducts - The full static list of products.
 * @param {string} defaultCategory - The initial active category (defaults to 'All').
 * @returns {Object} Filter state, setters, computed products list, and helper handlers.
 */
export const useProductFilter = (initialProducts = [], defaultCategory = "All") => {
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);
  const [searchQuery, setSearchQuery] = useState("");

  // Compute unique list of categories, always keeping 'All' at index 0
  const categories = useMemo(() => {
    const unique = Array.from(new Set(initialProducts.map((p) => p.category)));
    return ["All", ...unique];
  }, [initialProducts]);

  // Filter products by combining selected category and search input
  const filteredProducts = useMemo(() => {
    const trimmed = searchQuery.trim().toLowerCase();

    return initialProducts.filter((product) => {
      // 1. Category matching logic
      const matchesCategory =
        selectedCategory === "All" ||
        product.category.toLowerCase() === selectedCategory.toLowerCase();

      // 2. Search query matching logic (matches either product name or category)
      const matchesSearch =
        trimmed === "" ||
        product.name.toLowerCase().includes(trimmed) ||
        product.category.toLowerCase().includes(trimmed);

      return matchesCategory && matchesSearch;
    });
  }, [initialProducts, selectedCategory, searchQuery]);

  // Reset helper to clear both active category and search filter
  const resetFilters = () => {
    setSelectedCategory("All");
    setSearchQuery("");
  };

  return {
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    filteredProducts,
    categories,
    totalCount: initialProducts.length,
    matchCount: filteredProducts.length,
    resetFilters,
  };
};

export default useProductFilter;
