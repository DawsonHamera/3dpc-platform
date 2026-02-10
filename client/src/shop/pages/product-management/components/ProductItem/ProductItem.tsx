import { IonButton, IonIcon, IonText } from "@ionic/react";
import { createOutline, trashOutline } from "ionicons/icons";
import React from "react";
import { Product } from "../../../../../shared/features";
import { ProductVariantCard } from "../ProductVariantCard/ProductVariantCard";
import styles from "./ProductItem.module.css";

interface ProductItemProps {
    product: Product;
    onEdit: (product: Product) => void;
    onDelete: (product: Product) => void;
}

export const ProductItem: React.FC<ProductItemProps> = ({
    product,
    onEdit,
    onDelete,
}) => {
    return (
        <div className={styles.productItem}>
            <div className={styles.productItemHeader}>
                <IonText>
                    <h3>{product.name}</h3>
                    <p className={styles.productDescription}>
                        {product.description || "No description"}
                    </p>
                </IonText>
                <div className={styles.productItemActions}>
                    <IonButton fill="clear" onClick={() => onEdit(product)}>
                        <IonIcon slot="icon-only" icon={createOutline} />
                    </IonButton>
                    <IonButton
                        fill="clear"
                        color="danger"
                        onClick={() => onDelete(product)}
                    >
                        <IonIcon slot="icon-only" icon={trashOutline} />
                    </IonButton>
                </div>
            </div>

            <div className={styles.variantsList}>
                {product.variants.map((variant) => (
                    <ProductVariantCard key={variant.id} variant={variant} />
                ))}
            </div>
        </div>
    );
};
