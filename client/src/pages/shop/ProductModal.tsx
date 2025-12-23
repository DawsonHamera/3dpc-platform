import {
    IonButton,
    IonContent,
    IonHeader,
    IonIcon,
    IonModal,
    IonPage,
    IonTitle,
    IonToast,
    IonToolbar,
    useIonRouter,
} from "@ionic/react";
import { useParams } from "react-router";
import MaterialPicker from "./components/ColorPicker";
import { arrowBackOutline, cartOutline, close, remove } from "ionicons/icons";
import { useEffect, useMemo, useState } from "react";
import { ProductType } from "./types";
import Incrementer from "./components/Incrementer";
import { useShop } from "./ShopContext";

export const product = {
    id: 1,
    name: "Spiral Passthrough 2",
    description: "A spiral model that demonstrates a passthrough design.",
    price: 7.0,
    variants: [
        {
            id: 101,
            type: ProductType.DEFAULT,
            name: "Default",
            image: {
                url: "https://deloro3dpc.tech/api/uploads/1763335592952_ze95jsvy_spiral.png",
            },
            color: "Gold",
            backgroundColor: "#00bf6380",
            customizations: {},
        },
        {
            id: 102,
            type: ProductType.STANDARD,
            name: "Red one",
            image: {
                url: "https://deloro3dpc.tech/api/uploads/1763335592952_ze95jsvy_spiral.png",
            },
            color: "Red",
            backgroundColor: "#00027e80",
            customizations: {},
        },
        {
            id: 103,
            type: ProductType.STANDARD,
            name: "Pink one",
            image: {
                url: "https://deloro3dpc.tech/api/uploads/1763335592952_ze95jsvy_spiral.png",
            },
            color: "Pink",
            backgroundColor: "#ffe60080",
            customizations: {},
        },
        {
            id: 104,
            type: ProductType.STANDARD,
            name: "Black one",
            image: {
                url: "https://deloro3dpc.tech/api/uploads/1763357907054_78wywnfu_star.png",
            },
            color: "Black",
            backgroundColor: "#80808080",
            customizations: {},
        },
    ],
};

const ProductModal: React.FC<{
    isOpen: boolean;
    onClose: () => void;
    product: typeof product;
    onSave?: () => void;
}> = ({ isOpen, onClose, product, onSave }) => {
    // const { data: product, error, isLoading } = useGetProductByIdQuery(id);

    const [selectedVariantId, setSelectedVariantId] = useState<number | null>(
        null
    );
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        if (
            product &&
            product.variants &&
            product.variants.length > 0 &&
            !selectedVariantId
        ) {
            setSelectedVariantId(
                product.variants.find((v) => v.type === ProductType.DEFAULT)
                    ?.id ?? null
            );
        }
    }, [product]);

    const { addItemToCart } = useShop();

    const selectedVariant = useMemo(() => {
        return product?.variants?.find(
            (variant) => variant.id === selectedVariantId
        );
    }, [product, selectedVariantId]);

    const maxVariants = 4;

    const router = useIonRouter();

    const handleAddToCart = () => {
        if (!product || selectedVariantId === null) return;

        addItemToCart({
            productId: product.id,
            variantId: selectedVariantId,
            quantity: quantity,
        });
        setQuantity(1);
        onSave && onSave();
        onClose();
    };

    return (
        <IonModal isOpen={isOpen}>
            <IonHeader>
                <IonToolbar>
                    <IonButton slot="start" fill="clear" onClick={onClose}>
                        <IonIcon icon={close} />
                    </IonButton>
                    <IonTitle>{product?.name || "Product"}</IonTitle>
                    <IonButton slot="end" fill="clear" onClick={() => router.push('/shop/cart', 'forward')}>
                        <IonIcon icon={cartOutline} />
                    </IonButton>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                {product && (
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            height: "100%",
                            justifyItems: "space-between",
                        }}
                    >
                        <img
                            src={selectedVariant?.image?.url}
                            alt={selectedVariant?.name || "Product Image"}
                            style={{
                                width: "100%",
                                height: "auto",
                                backgroundColor:
                                    selectedVariant?.backgroundColor ??
                                    "#00bf6380",
                                borderRadius: "16px",
                                display: "block",
                            }}
                        />
                        <div
                            style={{ position: "absolute", top: 16, right: 16 }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    padding: 4,
                                    gap: 10,
                                    flexDirection: "column",
                                    width: "100%",
                                }}
                            >
                                {product.variants
                                    .slice(0, maxVariants)
                                    .map((variant) => (
                                        <button
                                            key={variant.id}
                                            onClick={() =>
                                                setSelectedVariantId(variant.id)
                                            }
                                            style={{
                                                height: 32,
                                                width: 32,
                                                border:
                                                    variant.id ===
                                                    selectedVariantId
                                                        ? "2px solid var(--ion-color-primary)"
                                                        : "1px solid #ccc",
                                                borderRadius: "50%",
                                                backgroundColor: variant.color,
                                                cursor: "pointer",
                                            }}
                                        ></button>
                                    ))}
                            </div>
                        </div>
                        <h2 style={{ fontSize: 20, fontWeight: "bold" }}>
                            {product.name}
                        </h2>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <b
                                style={{
                                    fontSize: 20,
                                    color: "var(--ion-color-primary)",
                                }}
                            >
                                ${product.price.toFixed(2)}
                            </b>
                        </div>
                        <p
                            style={{
                                fontSize: 14,
                                color: "var(--ion-color-medium)",
                            }}
                        >
                            {product.description}
                        </p>
                        <Incrementer
                            min={1}
                            step={1}
                            value={quantity}
                            label="Quantity"
                            onChange={(value) => setQuantity(value)}
                        />
                        <div style={{ flex: 1 }}></div>
                        <IonButton
                            expand="block"
                            color="primary"
                            onClick={handleAddToCart}
                        >
                            Add to Cart
                        </IonButton>
                    </div>
                )}
            </IonContent>
        </IonModal>
    );
};

export default ProductModal;
