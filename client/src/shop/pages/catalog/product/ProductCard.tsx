import { IonCard, IonCardContent, IonImg, IonText } from "@ionic/react";
import React, { useMemo } from "react";
import { Product } from "../../../../shared/features";
import styles from "./ProductCard.module.css";

type ProductCardProps = {
    product: Product;
    variantId?: number;
    onButtonClick?: () => void;
    onClick?: () => void | undefined;
    size?: number;
    active?: boolean;
    renderButton?: ((onClick: () => void) => React.ReactNode) | undefined;
};

const ProductCard: React.FC<ProductCardProps> = ({
    product,
    onClick,
    onButtonClick,
    size,
    active,
    renderButton,
    variantId,
}) => {
    if (!product || !product.variants || product.variants.length === 0) {
        return null;
    }

    const variant = useMemo(() => {
        if (variantId) {
            return product.variants.find((v) => v.id === variantId);
        }
        return product.variants && product.variants.length > 0
            ? product.variants.find((v) => v.type === "DEFAULT")
            : undefined;
    }, [product.variants, variantId]);

    const cardStyle = {
        "--card-width": `${size || 200}px`,
    } as React.CSSProperties;

    const mediaStyle = {
        "--variant-bg":
            variant?.background_color ??
            "rgba(var(--ion-color-success-rgb), 0.25)",
    } as React.CSSProperties;

    return (
        <IonCard
            style={cardStyle}
            className={`${styles.card} ${onClick ? styles.clickable : ""} ${
                active ? styles.cardActive : ""
            }`}
            button={!!onClick}
            onClick={onClick}
        >
            <div style={mediaStyle} className={styles.media}>
                {variant?.image?.path ? (
                    <IonImg
                        src={variant.image.path}
                        alt={product.name || "Product Image"}
                        className={styles.image}
                    />
                ) : (
                    <IonText color="medium" className={styles.noImage}>
                        <small>No image</small>
                    </IonText>
                )}
            </div>
            <IonCardContent className={styles.content}>
                <IonText>
                    <h3 className={styles.productTitle}>{product.name}</h3>
                </IonText>
                <div className={styles.priceRow}>
                    <IonText color="primary">
                        <strong className={styles.productPrice}>
                            ${variant?.price.toFixed(2)}
                        </strong>
                    </IonText>
                    {renderButton && renderButton(onButtonClick!)}
                </div>
            </IonCardContent>
        </IonCard>
    );
};

export default ProductCard;
