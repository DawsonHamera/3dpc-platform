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
            ? product.variants.find((v) => v.type === ProductType.DEFAULT)
            : undefined;
    }, [product.variants, variantId]);
    return (
        <IonCard
            style={{
                width: `${size || 200}px`,
                margin: "8px",
                flexShrink: 0,
                border: active ? "2px solid var(--ion-color-primary)" : undefined,
            }}
            button={!!onClick}
            onClick={onClick}
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
                    {renderButton && renderButton(onButtonClick!)}
                </div>
            </IonCardContent>
        </IonCard>
    );
};

export default ProductCard;
