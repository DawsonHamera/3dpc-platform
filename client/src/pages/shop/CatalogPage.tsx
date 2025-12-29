import React, { useState } from "react";
import {
    IonPage,
    IonContent,
    useIonRouter,
    IonToast,
    IonLoading,
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

const CatalogPage: React.FC = () => {
    const [productFilter, setProductFilter] = useState("");
    const [toastMessage, setToastMessage] = useState("");
    const [toastColor, setToastColor] = useState<"success" | "danger">(
        "success"
    );

    const { data: products } = useGetProductsQuery();
    const { data: sections } = useGetSectionsQuery();

    const location = useLocation();
    const params = new URLSearchParams(location.search);

    const productId = params.get("productId");

    const router = useIonRouter();

    const handleProductSave = () => {
        setToastMessage("Product added to cart");
        setToastColor("success");
    };

    if (!products || !sections) {
        return <IonLoading isOpen message="Loading products..." />;
    }

    const filteredProducts = productFilter
        ? products.filter((product) =>
              product.name.toLowerCase().includes(productFilter.toLowerCase())
          )
        : [];

    return (
        <IonPage>
            <ShopHeader
                title="Shop"
                searchbar
                onSearchChange={setProductFilter}
            />
            <IonContent>
                {productFilter ? (
                    <div className="filtered-product-list">
                        {filteredProducts.map((product) => (
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
                ) : (
                    <div>
                        {sections.map((section) => (
                            <div key={section.name} title={section.name}>
                                <h1 className="section-title">
                                    {section.name}
                                </h1>
                                <div className="product-list">
                                    {section.productIds.map((productId) => (
                                        <ProductCard
                                            key={productId}
                                            product={
                                                products.find(
                                                    (p) => p.id === productId
                                                )!
                                            }
                                            onClick={() =>
                                                router.push(
                                                    `/shop/?productId=${productId}`,
                                                    "none"
                                                )
                                            }
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </IonContent>
            <ProductModal
                isOpen={!!productId}
                onClose={() => router.push(`/shop`, "none")}
                product={
                    products.find((p) => p.id.toString() === productId!) || null
                }
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
