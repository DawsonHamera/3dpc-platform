// Main shop page
export { default as Shop } from "./Shop";

// Shared components and context
export * from "./shared";

// Feature exports - specific to avoid conflicts
export {
    CatalogPage,
    HeroSection,
    SearchResults,
    ProductSections,
    ProductCard,
    CatalogSkeletonLoader,
} from "./catalog";
export { ProductModal as CatalogProductModal } from "./catalog";
export * from "./cart";
export { ProductManagementPage } from "./product-management";
export { ProductModal as ManagementProductModal } from "./product-management";
export * from "./order-tracking";
