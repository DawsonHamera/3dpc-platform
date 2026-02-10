import React from "react";
import { Product } from "../../../../../shared/features";
import { ProductItem } from "../ProductItem/ProductItem";
import styles from "./ProductsList.module.css";

interface ProductsListProps {
    products: Product[];
    onEditProduct: (product: Product) => void;
    onDeleteProduct: (product: Product) => void;
}

export const ProductsList: React.FC<ProductsListProps> = ({
    products,
    onEditProduct,
    onDeleteProduct,
}) => {
    return (
        <div className={styles.productsList}>
            {products?.map((product) => (
                <ProductItem
                    key={product.id}
                    product={product}
                    onEdit={onEditProduct}
                    onDelete={onDeleteProduct}
                />
            ))}
        </div>
    );
};
