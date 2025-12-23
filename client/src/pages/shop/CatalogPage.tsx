import React, { useEffect, useMemo } from "react";
import {
    IonPage,
    IonContent,
    IonButton,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonModal,
    IonButtons,
    IonIcon,
    IonItem,
    IonSelect,
    IonSelectOption,
    useIonRouter,
    IonCol,
    IonGrid,
    IonRow,
    IonToolbar,
    IonTitle,
    IonToast,
} from "@ionic/react";
import { chevronBack, chevronForward, close } from "ionicons/icons";
import { useShop } from "./ShopContext";
import ShopHeader from "./ShopHeader";
import { Product } from "stream-chat";
import ProductCard from "./components/ProductCard";
import { ProductType } from "./types";
import ProductModal, { product } from "./ProductModal";
import { useLocation } from "react-router";

export const dummyProductData = {
    products: [
        {
            id: 1,
            name: "Spiral Passthrough",
            description:
                "A spiral model that demonstrates a passthrough design.",
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
        },
        {
            id: 2,
            name: "Cube Connector",
            description: "A cube model for connecting modular parts.",
            price: 5.5,
            variants: [
                {
                    id: 201,
                    type: ProductType.DEFAULT,
                    name: "Default",
                    image: {
                        url: "https://deloro3dpc.tech/api/uploads/1763335592952_ze95jsvy_spiral.png",
                    },
                    backgroundColor: "#ff573380",
                    customizations: {},
                },
            ],
        },
    ],

    sections: {
        Featured: [1, 2],
        Popular: [2],
    },
};

const CatalogPage: React.FC = () => {
    const [productFilter, setProductFilter] = React.useState("standard");
    const [toastMessage, setToastMessage] = React.useState("");
    const [toastColor, setToastColor] = React.useState<"success" | "danger">(
        "success"
    );

    const location = useLocation();
    const params = new URLSearchParams(location.search);

    const productId = params.get("productId");

    const router = useIonRouter();

    const { products, sections } = dummyProductData;

    const productsById = Object.fromEntries(products.map((p) => [p.id, p]));

    const sectionsResolved = Object.entries(sections).map(
        ([sectionName, productIds]) => ({
            sectionName,
            products: productIds.map((id) => productsById[id]),
        })
    );

    const handleProductSave = () => {
        setToastMessage("Product added to cart");
        setToastColor("success");
    };

    return (
        <IonPage>
            <ShopHeader
                title="Shop"
                searchbar
                onSearchChange={(value) => console.log(value)}
            />
            <IonContent>
                <div>
                    {sectionsResolved.map((section) => (
                        <div
                            key={section.sectionName}
                            title={section.sectionName}
                        >
                            <h1
                                style={{
                                    fontSize: "1.3rem",
                                    fontWeight: "bold",
                                    padding: "0 16px",
                                }}
                            >
                                {section.sectionName}
                            </h1>
                            <div
                                style={{
                                    display: "flex",
                                    padding: "16px",
                                    gap: "16px",
                                    overflowX: "auto",
                                    scrollbarWidth: "none", // For Firefox
                                    msOverflowStyle: "none", // For Internet Explorer and Edge
                                }}
                            >
                                {section.products.map((product) => (
                                    <ProductCard
                                        key={product.id}
                                        product={product}
                                        onClick={() =>
                                            router.push(
                                                `/shop/?productId=${product.id}`,
                                                "none"
                                            )
                                        }
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </IonContent>
            <ProductModal
                isOpen={!!productId}
                onClose={() => router.push(`/shop`, "none")}
                product={productsById[Number(productId)]}
                onSave={handleProductSave}
            />
            <IonToast
                isOpen={toastMessage !== ""}
                onDidDismiss={() => setToastMessage("")}
                message={toastMessage}
                duration={1000}
                color={toastColor}
                position="top"
            />
        </IonPage>
    );
};

export default CatalogPage;
