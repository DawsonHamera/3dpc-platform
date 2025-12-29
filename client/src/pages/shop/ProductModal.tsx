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
import Incrementer from "./components/Incrementer";
import { useShop } from "./ShopContext";
import { Product, ProductType } from "../../features/products/productsApi";

const ProductModal: React.FC<{
    isOpen: boolean;
    onClose: () => void;
    product: Product | null;
    onSave?: () => void;
}> = ({ isOpen, onClose, product, onSave }) => {
    // const { data: product, error, isLoading } = useGetProductByIdQuery(id);
    if (!product || !product.variants || product.variants.length === 0) {
        return null;
    }

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
                    <IonButton
                        slot="end"
                        fill="clear"
                        onClick={() => router.push("/shop/cart", "forward")}
                    >
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
                            src={selectedVariant?.image?.path}
                            alt={selectedVariant?.name || "Product Image"}
                            style={{
                                width: "100%",
                                height: "auto",
                                backgroundColor:
                                    selectedVariant?.background_color ??
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
                        <div style={{ margin: "16px 0" }}>
                            <h2
                                style={{
                                    fontSize: "1.5rem",
                                    fontWeight: "bold",
                                    margin: "0",
                                }}
                            >
                                {product.name}
                            </h2>
                            {selectedVariant?.type != ProductType.DEFAULT && (
                                <p
                                    style={{
                                        fontSize: "1rem",
                                        color: "var(--ion-color-medium)",
                                        margin: "4px 0",
                                    }}
                                >
                                    {selectedVariant?.name}
                                </p>
                            )}
                        </div>
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
                                ${selectedVariant?.price.toFixed(2)}
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
