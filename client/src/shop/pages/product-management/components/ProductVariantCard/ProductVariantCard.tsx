import { IonIcon, IonText } from "@ionic/react";
import { star } from "ionicons/icons";
import React from "react";
import styles from "./ProductVariantCard.module.css";

interface ProductVariant {
    id: string;
    name: string;
    type: "DEFAULT" | string;
    price: number;
    image?: { path: string };
    background_color: string;
    color: string;
}

interface ProductVariantCardProps {
    variant: ProductVariant;
}

export const ProductVariantCard: React.FC<ProductVariantCardProps> = ({
    variant,
}) => {
    return (
        <div className={styles.variantCard}>
            <div
                className={styles.variantImage}
                style={{ backgroundColor: variant.background_color }}
            >
                {variant.image?.path ? (
                    <img src={variant.image.path} alt={variant.name} />
                ) : (
                    <div className={styles.placeholderImage}>
                        <IonText color="medium">
                            <small>No image</small>
                        </IonText>
                    </div>
                )}
            </div>

            <div className={styles.variantInfo}>
                {/* <div className={styles.variantColors}>
                    <span
                        className={styles.colorDot}
                        style={{
                            backgroundColor: variant.background_color,
                            border: `2px solid ${variant.color}`,
                        }}
                    />
                </div> */}
                <h4 className={styles.variantName}>
                    {variant.type === "DEFAULT" && (
                        <IonIcon
                            icon={star}
                            style={{
                                fontSize: "0.8rem",
                                marginRight: "4px",
                            }}
                        />
                    )}
                    {variant.name}
                </h4>
                <p className={styles.variantPrice}>
                    ${variant.price.toFixed(2)}
                </p>
            </div>
        </div>
    );
};
