import React, { useState } from "react";
import {
    IonPage,
    IonContent,
    useIonRouter,
    IonToast,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonGrid,
    IonRow,
    IonCol,
    IonSkeletonText,
    IonText,
} from "@ionic/react";
import ShopHeader from "./ShopHeader";
import ProductCard from "./components/ProductCard";
import ProductModal from "./ProductModal";
import { useLocation } from "react-router";
import {
    useGetProductsQuery,
    useGetSectionsQuery,
} from "../../features/products/productsApi";
import "./CatalogPage.css";
import { useAuth } from "../../hooks/useAuth";

const CatalogPage: React.FC = () => {
    const [productFilter, setProductFilter] = useState("");
    const [toastMessage, setToastMessage] = useState("");
    const [toastColor, setToastColor] = useState<"success" | "danger">(
        "success"
    );

    const { data: products } = useGetProductsQuery();
    const { data: sections } = useGetSectionsQuery();

    const user = useAuth().user;

    const location = useLocation();
    const params = new URLSearchParams(location.search);

    const productId = params.get("productId");
    const variantId = params.get("variantId");
    console.log("Selected variantId:", variantId);


    const router = useIonRouter();

    const handleProductSave = () => {
        setToastMessage("Product added to cart");
        setToastColor("success");
    };

    const filteredProducts =
        productFilter && products
            ? products.filter((product) =>
                  product.name
                      .toLowerCase()
                      .includes(productFilter.toLowerCase())
              )
            : [];

    // Skeleton loader component
    const renderSkeletons = () => (
        <>
            {[1, 2].map((sectionIndex) => (
                <div key={sectionIndex} className="ion-margin-bottom">
                    <h2
                        className="section-title"
                        style={{ paddingLeft: "16px" }}
                    >
                        <IonSkeletonText animated style={{ width: "40%" }} />
                    </h2>
                    <div className="product-list">
                        {[1, 2, 3, 4].map((i) => (
                            <div
                                key={i}
                                style={{
                                    width: "200px",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "8px",
                                    flexShrink: 0,
                                }}
                            >
                                <IonSkeletonText
                                    animated
                                    style={{
                                        width: "100%",
                                        height: "200px",
                                        borderRadius: "16px",
                                    }}
                                />
                                <IonSkeletonText
                                    animated
                                    style={{ width: "60%" }}
                                />
                                <IonSkeletonText
                                    animated
                                    style={{ width: "40%" }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </>
    );

    if (!products || !sections) {
        return (
            <IonPage>
                <ShopHeader
                    title="Shop"
                    searchbar
                    onSearchChange={setProductFilter}
                />
                <IonContent className="ion-padding">
                    {renderSkeletons()}
                </IonContent>
            </IonPage>
        );
    }

    return (
        <IonPage>
            <ShopHeader
                title="Shop"
                searchbar
                onSearchChange={setProductFilter}
            />
            <IonContent className="ion-padding">
                {productFilter ? (
                    <>
                        {filteredProducts.length > 0 ? (
                            <IonCard>
                                <IonCardHeader>
                                    <IonCardTitle>
                                        Search Results (
                                        {filteredProducts.length})
                                    </IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    <IonGrid>
                                        <IonRow>
                                            {filteredProducts.map((product) => (
                                                <IonCol
                                                    key={product.id}
                                                    size="6"
                                                    sizeMd="4"
                                                    sizeLg="3"
                                                >
                                                    <ProductCard
                                                        product={product}
                                                        onClick={() =>
                                                            router.push(
                                                                `/shop/?productId=${product.id}`,
                                                                "none"
                                                            )
                                                        }
                                                    />
                                                </IonCol>
                                            ))}
                                        </IonRow>
                                    </IonGrid>
                                </IonCardContent>
                            </IonCard>
                        ) : (
                            <IonCard>
                                <IonCardContent className="ion-text-center">
                                    <IonText color="medium">
                                        <h3>No products found</h3>
                                        <p>Try adjusting your search terms</p>
                                    </IonText>
                                </IonCardContent>
                            </IonCard>
                        )}
                    </>
                ) : (
                    <>
                        {sections.map((section) => (
                            <div key={section.name}>
                                <h2 className="section-title">
                                    {section.name}
                                </h2>
                                <div className="product-list">
                                    {section.items.map((item) => {
                                        const product = products.find(
                                            (p) => p.id === item.product_id
                                        );

                                        const variant = product?.variants.find(
                                            (v) => v.id === item.variant_id
                                        );

                                        if (!product || !variant) return null;
                                        return (
                                            <ProductCard
                                                key={product.id}
                                                product={product}
                                                variantId={variant.id}
                                                editing={user.role.name === "admin x"}
                                                onClick={() =>
                                                    router.push(
                                                        `/shop/?productId=${product.id}&variantId=${variant.id}`,
                                                        "none"
                                                    )
                                                }
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </>
                )}
            </IonContent>
            <ProductModal
                isOpen={!!productId && !!variantId}
                onClose={() => router.push(`/shop`, "none")}
                product={
                    products.find((p) => p.id.toString() === productId!) || null
                }
                variantId={variantId!}
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
