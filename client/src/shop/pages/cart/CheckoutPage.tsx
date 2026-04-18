import {
    IonButton,
    IonContent,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonPage,
    IonRadio,
    IonRadioGroup,
    IonToast,
    useIonRouter,
} from "@ionic/react";
import React, { useState } from "react";
import {
    useCreateOrderMutation,
    useGetProductsQuery,
} from "../../../shared/features";
import { ShopHeader, useShop } from "../shared";

const CheckoutPage: React.FC = () => {
    const router = useIonRouter();
    const { cart, emptyCart } = useShop();
    const { data: products } = useGetProductsQuery();
    const [checkout, { isError }] = useCreateOrderMutation();
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [toastColor, setToastColor] = useState<"success" | "danger">(
        "success",
    );

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        delivery_method: "pickup",
        location: "",
    });

    const handleInputChange = (field: string, value: string) => {
        setFormData((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    };

    const handleDelivery_methodChange = (value: string) => {
        setFormData((prevState) => ({
            ...prevState,
            delivery_method: value,
            // Clear address if switching to pickup
            location: value === "pickup" ? "" : prevState.location,
        }));
    };

    const calculateTotal = () => {
        if (!cart) return 0;
        return cart.reduce((total: number, item: any) => {
            const product = products?.find((p) => p.id === item.productId);
            const variant = product?.variants?.find(
                (v) => v.id === item.variantId,
            );
            if (!product || !variant) return total;
            return total + variant.price * item.quantity;
        }, 0);
    };

    const handleSubmit = async () => {
        const totalPrice = calculateTotal();
        try {
            const orderResult = await checkout({
                ...formData,
                total_price: totalPrice,
                cart: cart,
            }).unwrap();

            console.log("Checkout submitted:", {
                ...formData,
                totalPrice: totalPrice,
                cart: cart,
            });
            if (isError) {
                setToastColor("danger");
                setToastMessage("Failed to place order. Please check that you filled all required fields and try again.");
            }
            // Show success toast
            setToastMessage("Order placed successfully!");
            setToastColor("success");
            setShowToast(true);
            emptyCart();

            // Navigate after a short delay to let user see the toast
            setTimeout(() => {
                router.push(`/shop/order/${orderResult.key}`);
            }, 1500);
        } catch (error) {
            console.error("Checkout failed:", error);

            // Show error toast
            setToastMessage(
                "Failed to place order. Please check that you filled all required fields and try again.",
            );
            setToastColor("danger");
            setShowToast(true);
        }
    };

    return (
        <IonPage>
            <ShopHeader
                title="Checkout"
                backArrow
                breadcrumbs={[
                    { label: "Shop", path: "/shop" },
                    { label: "Cart", path: "/shop/cart" },
                    { label: "Checkout" },
                ]}
                contextLabel="Checkout Journey"
            />
            <IonContent className="ion-padding">
                <h1>Checkout</h1>
                <p>Complete your purchase.</p>

                {/* Order Summary */}
                <IonList style={{ marginBottom: "50px" }}>
                    <IonItem
                        style={{
                            backgroundColor: "var(--ion-color-primary)",
                            padding: "4px",
                            borderRadius: "4px",
                        }}
                        lines="none"
                    >
                        <IonLabel color="light">
                            <b>Order Summary</b>
                            <p
                                style={{
                                    color: "var(--ion-color-light-shade)",
                                }}
                            >
                                Review your items below.
                            </p>
                            <p></p>
                        </IonLabel>
                    </IonItem>
                    {cart &&
                        cart.map((item: any) => {
                            const product = products?.find(
                                (p) => p.id === item.productId,
                            );
                            const variant = product?.variants?.find(
                                (v) => v.id === item.variantId,
                            );
                            if (!product || !variant) return null;
                            const subtotal = variant.price * item.quantity;
                            return (
                                <IonItem key={item.id}>
                                    <IonLabel>
                                        <h3>
                                            {item.quantity}x{" "}
                                            {variant.type === "DEFAULT"
                                                ? ""
                                                : variant.name}{" "}
                                            {product.name}
                                        </h3>
                                        <p>{product.description}</p>
                                    </IonLabel>
                                    <IonLabel
                                        slot="end"
                                        style={{ textAlign: "right" }}
                                    >
                                        <h3>${subtotal.toFixed(2)}</h3>
                                        <p>${variant.price.toFixed(2)} each</p>
                                    </IonLabel>
                                </IonItem>
                            );
                        })}
                    <IonItem>
                        <IonLabel>
                            <b>Total</b>
                        </IonLabel>
                        <IonLabel slot="end" style={{ textAlign: "right" }}>
                            <b>${calculateTotal().toFixed(2)}</b>
                        </IonLabel>
                    </IonItem>
                </IonList>

                <IonList style={{ marginBottom: "50px" }}>
                    <IonItem
                        style={{
                            backgroundColor: "var(--ion-color-primary)",
                            padding: "4px",
                            borderRadius: "4px",
                        }}
                        lines="none"
                    >
                        <IonLabel color="light">
                            <b>Contact Details</b>
                            <p
                                style={{
                                    color: "var(--ion-color-light-shade)",
                                }}
                            >
                                Enter your contact details below.
                            </p>
                            <p></p>
                        </IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonInput
                            label="First Name"
                            type="text"
                            value={formData.first_name}
                            onIonInput={(e) =>
                                handleInputChange("first_name", e.detail.value!)
                            }
                        />
                    </IonItem>
                    <IonItem>
                        <IonInput
                            label="Last Name"
                            type="text"
                            value={formData.last_name}
                            onIonInput={(e) =>
                                handleInputChange("last_name", e.detail.value!)
                            }
                        />
                    </IonItem>
                    <IonItem>
                        <IonInput
                            label="Email"
                            type="text"
                            value={formData.email}
                            onIonInput={(e) =>
                                handleInputChange("email", e.detail.value!)
                            }
                        />
                    </IonItem>
                </IonList>
                <IonList style={{ marginBottom: "50px" }}>
                    <IonItem
                        style={{
                            backgroundColor: "var(--ion-color-primary)",
                            padding: "4px",
                            borderRadius: "4px",
                        }}
                        lines="none"
                    >
                        <IonLabel color="light">
                            <b>Delivery details</b>
                            <p
                                style={{
                                    color: "var(--ion-color-light-shade)",
                                }}
                            >
                                Enter your delivery details below.
                            </p>
                            <p></p>
                        </IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonRadioGroup
                            value={formData.delivery_method}
                            onIonChange={(e) =>
                                handleDelivery_methodChange(e.detail.value)
                            }
                        >
                            <IonRadio
                                value="pickup"
                                labelPlacement="end"
                                justify="start"
                            >
                                <b>Pickup</b>
                                <p className="ion-text-wrap">
                                    Have a your child or a student pick up the
                                    order from room 117 during lunch. We'll
                                    contact you when the order is ready to
                                    figure out a time that works best for you.
                                </p>
                            </IonRadio>
                            <IonRadio
                                value="delivery"
                                labelPlacement="end"
                                justify="start"
                            >
                                <b>Delivery (school only)</b>
                                <p className="ion-text-wrap">
                                    We can deliver the order during lunch or
                                    after school. We'll contact you when the
                                    order is ready to figure out a time that
                                    works best for you.
                                </p>
                            </IonRadio>
                        </IonRadioGroup>
                    </IonItem>
                    {formData.delivery_method === "delivery" && (
                        <IonItem>
                            <IonInput
                                label="Location"
                                placeholder="Enter your room number or location"
                                type="text"
                                value={formData.location}
                                onIonInput={(e) =>
                                    handleInputChange(
                                        "location",
                                        e.detail.value!,
                                    )
                                }
                            />
                        </IonItem>
                    )}
                </IonList>

                <IonButton
                    expand="block"
                    color="primary"
                    onClick={handleSubmit}
                    style={{ marginTop: "20px" }}
                >
                    Complete Order
                </IonButton>

                <IonToast
                    isOpen={showToast}
                    onDidDismiss={() => setShowToast(false)}
                    message={toastMessage}
                    duration={2000}
                    color={toastColor}
                    position="top"
                />
            </IonContent>
        </IonPage>
    );
};

export default CheckoutPage;
