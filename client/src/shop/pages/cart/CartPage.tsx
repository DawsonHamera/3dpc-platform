import React, { useMemo } from "react";
import {
    IonPage,
    IonContent,
    IonButton,
    useIonRouter,
    IonIcon,
    IonImg,
    IonText,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonList,
    IonItem,
    IonThumbnail,
    IonLabel,
    IonNote,
    IonItemSliding,
    IonItemOptions,
    IonItemOption,
    IonSkeletonText,
} from "@ionic/react";
import { useShop, ShopHeader } from "../shared";
import Incrementer from "./Incrementer";
import { trash, cartOutline, storefrontOutline } from "ionicons/icons";
import {
    useGetProductsQuery,
} from "../../../member-app/features/products/productsApi";

const CartPage: React.FC = () => {
    const { cart, updateCartItemQuantity } = useShop();
    const { data: products } = useGetProductsQuery();
    const router = useIonRouter();

    const cartTotal = useMemo(() => {
        if (!cart || !products) return 0;
        return cart.reduce((total, item) => {
            const product = products.find((p) => p.id === item.productId);
            const variant = product?.variants.find(
                (v) => v.id === item.variantId
            );
            return total + (variant?.price || 0) * item.quantity;
        }, 0);
    }, [cart, products]);

    if (!products) {
        return (
            <IonPage>
                <ShopHeader title="Shopping Cart" backArrow />
                <IonContent className="ion-padding">
                    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                        <IonList>
                            {[1, 2, 3].map((i) => (
                                <IonItem key={i}>
                                    <IonThumbnail slot="start">
                                        <IonSkeletonText animated />
                                    </IonThumbnail>
                                    <IonLabel>
                                        <h3>
                                            <IonSkeletonText
                                                animated
                                                style={{ width: "60%" }}
                                            />
                                        </h3>
                                        <p>
                                            <IonSkeletonText
                                                animated
                                                style={{ width: "40%" }}
                                            />
                                        </p>
                                        <p>
                                            <IonSkeletonText
                                                animated
                                                style={{ width: "30%" }}
                                            />
                                        </p>
                                    </IonLabel>
                                </IonItem>
                            ))}
                        </IonList>
                        <IonCard className="ion-margin-top">
                            <IonCardContent>
                                <IonSkeletonText
                                    animated
                                    style={{ width: "100%", height: "60px" }}
                                />
                            </IonCardContent>
                        </IonCard>
                    </div>
                </IonContent>
            </IonPage>
        );
    }

    return (
        <IonPage>
            <ShopHeader title="Shopping Cart" backArrow />
            <IonContent className="ion-padding">
                {cart && cart.length > 0 ? (
                    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                        {/* Cart Items */}
                        <IonCard>
                            <IonList>
                                {cart.map((item) => {
                                    const product = products.find(
                                        (p) => p.id === item.productId
                                    );
                                    const variant = product?.variants.find(
                                        (v) => v.id === item.variantId
                                    );
                                    if (!product) return null;
                                    if (!variant) {
                                        return (
                                            <IonItem
                                                key={item.id}
                                                color="danger"
                                            >
                                                <IonLabel>
                                                    <IonText color="light">
                                                        <strong>
                                                            Error loading item
                                                        </strong>
                                                    </IonText>
                                                </IonLabel>
                                                <IonButton
                                                    slot="end"
                                                    fill="clear"
                                                    color="light"
                                                    onClick={() =>
                                                        updateCartItemQuantity({
                                                            productId:
                                                                item.productId,
                                                            variantId:
                                                                item.variantId,
                                                            quantity: 0,
                                                        })
                                                    }
                                                >
                                                    <IonIcon
                                                        slot="icon-only"
                                                        icon={trash}
                                                    />
                                                </IonButton>
                                            </IonItem>
                                        );
                                    }
                                    return (
                                        <IonItemSliding key={item.id}>
                                            <IonItem lines="full">
                                                <IonThumbnail slot="start">
                                                    {variant.image?.path ? (
                                                        <IonImg
                                                            src={
                                                                variant.image
                                                                    .path
                                                            }
                                                            alt={product.name}
                                                        />
                                                    ) : (
                                                        <div
                                                            style={{
                                                                width: "100%",
                                                                height: "100%",
                                                                display: "flex",
                                                                alignItems:
                                                                    "center",
                                                                justifyContent:
                                                                    "center",
                                                                backgroundColor:
                                                                    "#f5f5f5",
                                                            }}
                                                        >
                                                            <IonText color="medium">
                                                                <small>
                                                                    No image
                                                                </small>
                                                            </IonText>
                                                        </div>
                                                    )}
                                                </IonThumbnail>
                                                <IonLabel>
                                                    <h2
                                                        style={{
                                                            fontWeight: "bold",
                                                        }}
                                                    >
                                                        {product.name}
                                                    </h2>
                                                    <IonNote color="medium">
                                                        {variant.type ===
                                                        "DEFAULT"
                                                            ? ""
                                                            : variant.name}
                                                    </IonNote>
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            alignItems:
                                                                "center",
                                                            gap: "12px",
                                                            marginTop: "8px",
                                                            flexWrap: "wrap",
                                                        }}
                                                    >
                                                        <IonText
                                                            color="primary"
                                                            style={{
                                                                fontWeight:
                                                                    "bold",
                                                                fontSize:
                                                                    "1.1rem",
                                                            }}
                                                        >
                                                            $
                                                            {variant.price.toFixed(
                                                                2
                                                            )}
                                                        </IonText>
                                                        <Incrementer
                                                            value={
                                                                item.quantity
                                                            }
                                                            type="small"
                                                            min={1}
                                                            onChange={(value) =>
                                                                updateCartItemQuantity(
                                                                    {
                                                                        productId:
                                                                            item.productId,
                                                                        variantId:
                                                                            item.variantId,
                                                                        quantity:
                                                                            value,
                                                                    }
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                </IonLabel>
                                            </IonItem>
                                            <IonItemOptions side="end">
                                                <IonItemOption
                                                    color="danger"
                                                    onClick={() =>
                                                        updateCartItemQuantity({
                                                            productId:
                                                                item.productId,
                                                            variantId:
                                                                item.variantId,
                                                            quantity: 0,
                                                        })
                                                    }
                                                >
                                                    <IonIcon
                                                        slot="icon-only"
                                                        icon={trash}
                                                    />
                                                </IonItemOption>
                                            </IonItemOptions>
                                        </IonItemSliding>
                                    );
                                })}
                            </IonList>
                        </IonCard>
                        <IonNote className="ion-text-center">
                            <p style={{ fontSize: "0.9rem" }}>
                                Swipe left on an item to remove it from your
                                cart.
                            </p>
                        </IonNote>
                        {/* Order Summary */}
                        <IonCard className="ion-margin-top">
                            <IonCardHeader>
                                <IonCardTitle>Order Summary</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <IonItem lines="none">
                                    <IonLabel>Items ({cart.length})</IonLabel>
                                    <IonNote slot="end">
                                        <strong>${cartTotal.toFixed(2)}</strong>
                                    </IonNote>
                                </IonItem>
                                <div
                                    style={{
                                        borderTop:
                                            "2px solid var(--ion-color-primary)",
                                        paddingTop: "12px",
                                        marginTop: "8px",
                                    }}
                                >
                                    <IonItem lines="none">
                                        <IonLabel>
                                            <h2 style={{ fontWeight: "bold" }}>
                                                Total
                                            </h2>
                                        </IonLabel>
                                        <IonNote slot="end">
                                            <h2
                                                style={{
                                                    color: "var(--ion-color-primary)",
                                                    fontWeight: "bold",
                                                    margin: 0,
                                                }}
                                            >
                                                ${cartTotal.toFixed(2)}
                                            </h2>
                                        </IonNote>
                                    </IonItem>
                                </div>
                                <IonButton
                                    expand="block"
                                    onClick={() =>
                                        router.push("/shop/checkout")
                                    }
                                    className="ion-margin-top"
                                >
                                    <IonIcon slot="start" icon={cartOutline} />
                                    Proceed to Checkout
                                </IonButton>
                            </IonCardContent>
                        </IonCard>
                    </div>
                ) : (
                    <div
                        style={{
                            maxWidth: "400px",
                            margin: "0 auto",
                            textAlign: "center",
                            paddingTop: "60px",
                        }}
                    >
                        <IonIcon
                            icon={cartOutline}
                            style={{
                                fontSize: "120px",
                                color: "var(--ion-color-medium)",
                                marginBottom: "24px",
                            }}
                        />
                        <h2>Your cart is empty</h2>
                        <IonText color="medium">
                            <p>
                                Looks like you haven't added any items to your
                                cart yet.
                            </p>
                        </IonText>
                        <IonButton
                            expand="block"
                            onClick={() => router.push("/shop")}
                            className="ion-margin-top"
                        >
                            <IonIcon slot="start" icon={storefrontOutline} />
                            Explore the Catalog
                        </IonButton>
                    </div>
                )}
            </IonContent>
        </IonPage>
    );
};

export default CartPage;
