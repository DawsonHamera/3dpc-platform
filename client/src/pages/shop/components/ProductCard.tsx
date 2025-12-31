import {
    IonButton,
    IonIcon,
    IonCard,
    IonCardContent,
    IonImg,
    IonText,
} from "@ionic/react";
import { remove, removeCircle } from "ionicons/icons";
import React, { useMemo } from "react";
import { Product, ProductType } from "../../../features/products/productsApi";

type ProductCardProps = {
    product: Product;
    variantId?: number;
    onClick?: () => void;
    onEditClick?: () => void;
    onRemoveClick?: () => void;
    size?: number;
    editing?: boolean;
};

const ProductCard: React.FC<ProductCardProps> = ({
    product,
    onClick,
    size,
    editing,
    onEditClick,
    onRemoveClick,
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
            ? product.variants.find((v) => v.type === ProductType.DEFAULT)
            : undefined;
    }, [product.variants, variantId]);
    return (
        <IonCard
            style={{
                width: `${size || 200}px`,
                margin: "8px",
                flexShrink: 0,
                cursor: editing ? "default" : "pointer",
            }}
            button={!editing}
            onClick={editing ? undefined : onClick}
        >
            <div
                style={{
                    width: "100%",
                    aspectRatio: "1",
                    backgroundColor:
                        variant?.background_color ?? "#00bf6380",
                    borderRadius: "12px 12px 0 0",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                {variant?.image?.path ? (
                    <IonImg
                        src={variant.image.path}
                        alt={product.name || "Product Image"}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                    />
                ) : (
                    <IonText color="medium">
                        <small>No image</small>
                    </IonText>
                )}
            </div>
            <IonCardContent>
                <IonText>
                    <h3
                        style={{
                            margin: "0 0 8px",
                            fontSize: "1rem",
                            fontWeight: "600",
                        }}
                    >
                        {product.name}
                    </h3>
                </IonText>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "8px",
                    }}
                >
                    <IonText color="primary">
                        <strong style={{ fontSize: "1.25rem" }}>
                            ${variant?.price.toFixed(2)}
                        </strong>
                    </IonText>
                    {editing ? (
                        <div style={{ display: "flex", gap: "4px" }}>
                            <IonButton
                                fill="clear"
                                color="danger"
                                size="small"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onRemoveClick?.();
                                }}
                            >
                                <IonIcon slot="icon-only" icon={removeCircle} />
                            </IonButton>
                            <IonButton
                                fill="solid"
                                color="dark"
                                size="small"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onEditClick?.();
                                }}
                            >
                                Edit
                            </IonButton>
                        </div>
                    ) : (
                        <IonButton
                            color="primary"
                            size="small"
                            onClick={(e) => {
                                e.stopPropagation();
                                onClick?.();
                            }}
                        >
                            View
                        </IonButton>
                    )}
                </div>
            </IonCardContent>
        </IonCard>
    );
};

export default ProductCard;
