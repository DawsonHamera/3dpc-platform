import React from "react";
import {
    IonPage,
    IonContent,
    IonItem,
    IonList,
    IonButton,
    useIonRouter,
    IonIcon,
} from "@ionic/react";
import { useShop } from "./ShopContext";
import ShopHeader from "./ShopHeader";
import Card from "../../components/Card/Card";
import Incrementer from "./components/Incrementer";
import { trash } from "ionicons/icons";
import { useGetProductsQuery } from "../../features/products/productsApi";

const CartPage: React.FC = () => {
    const { cart, updateCartItemQuantity } = useShop();

    const { data: products } = useGetProductsQuery();
    
    const router = useIonRouter();

    if (!products) {
        return (
            <IonPage>
                <IonContent className="ion-padding">Loading...</IonContent>
            </IonPage>
        );
    }

    return (
        <IonPage>
            <ShopHeader title="Cart" backArrow />
            <IonContent className="ion-padding">
                {cart && cart.length > 0 && (
                    <div
                        style={{
                            // width: '50%',
                            display: "grid",
                            gridTemplateColumns:
                                "repeat(auto-fit, minmax(200px, 1fr))",
                            gap: "16px",
                            padding: "16px",
                            paddingBottom: "32px",
                        }}
                    >
                        {cart.map((item) => {
                            const product = products.find(
                                (p) => p.id === item.productId
                            );
                            const variant = product?.variants.find(
                                (v) => v.id === item.variantId
                            );
                            if (!product) return null;

                            if (!variant)
                                return (
                                    <Card key={item.id}>
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                            }}
                                        >
                                            <b>Error loading item</b>
                                            <IonButton
                                                fill="clear"
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
                                                    color="danger"
                                                />
                                            </IonButton>
                                        </div>
                                    </Card>
                                );

                            return (
                                <Card key={item.id}>
                                    <div
                                        style={{
                                            display: "flex",
                                        }}
                                    >
                                        <img
                                            src={variant?.image.path}
                                            alt={product?.name}
                                            style={{
                                                width: "100px",
                                                height: "100px",
                                                borderRadius: "4px",
                                            }}
                                        />
                                        <div
                                            style={{
                                                flex: 1,
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "space-between",
                                                paddingLeft: 10,
                                                position: "relative",
                                            }}
                                        >
                                            <div>
                                                <b>{product.name}</b>
                                                <h3>{variant?.name}</h3>
                                            </div>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    justifyContent:
                                                        "space-between",
                                                    width: "100%",
                                                }}
                                            >
                                                <h1
                                                    style={{
                                                        color: "var(--ion-color-primary)",
                                                        fontWeight: "bold",
                                                        fontSize: "1.5rem",
                                                    }}
                                                >
                                                    ${variant?.price.toFixed(2)}
                                                </h1>
                                                <Incrementer
                                                    value={item.quantity}
                                                    type="small"
                                                    min={1}
                                                    onChange={(value) =>
                                                        updateCartItemQuantity({
                                                            productId:
                                                                item.productId,
                                                            variantId:
                                                                item.variantId,
                                                            quantity: value,
                                                        })
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <IonButton
                                            fill="clear"
                                            style={{
                                                position: "absolute",
                                                right: 2,
                                                top: 0,
                                            }}
                                            onClick={() =>
                                                updateCartItemQuantity({
                                                    productId: item.productId,
                                                    variantId: item.variantId,
                                                    quantity: 0,
                                                })
                                            }
                                        >
                                            <IonIcon
                                                slot="icon-only"
                                                icon={trash}
                                                color="danger"
                                            />
                                        </IonButton>
                                    </div>
                                </Card>
                            );
                        })}
                        <IonButton
                            expand="block"
                            onClick={() => router.push("/shop/checkout")}
                        >
                            Proceed to Checkout
                        </IonButton>
                    </div>
                )}
                {cart && cart.length === 0 && (
                    <div>
                        <p>Your cart is empty.</p>
                        <IonButton
                            expand="block"
                            onClick={() => router.push("/shop")}
                        >
                            Explore the catalog
                        </IonButton>
                    </div>
                )}
            </IonContent>
        </IonPage>
    );
};

export default CartPage;
