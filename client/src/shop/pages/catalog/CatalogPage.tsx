import { IonContent, IonPage, useIonRouter } from "@ionic/react";
import { gsap } from "gsap";
import React, { useRef, useState } from "react";
import { useLocation } from "react-router";
import {
    useGetProductsQuery,
    useGetSectionsQuery,
} from "../../../shared/features";
import { useAuth } from "../../../shared/hooks/useAuth";
import { ShopHeader, useShop } from "../shared";
import "./CatalogPage.css";
import { HeroSection } from "./hero";
import { ProductModal } from "./product";
import { SearchResults } from "./search";
import { ProductSections } from "./sections";
import { CatalogSkeletonLoader } from "./ui";

const CatalogPage: React.FC = () => {
    const [productFilter, setProductFilter] = useState("");

    const contentRef = useRef<HTMLIonContentElement>(null);
    const productsRef = useRef<HTMLDivElement>(null);

    const { data: products } = useGetProductsQuery();
    const { data: sections } = useGetSectionsQuery();

    const { user } = useAuth();
    const { showUserView, setToast } = useShop();

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const router = useIonRouter();

    const productId = params.get("productId");
    const variantId = params.get("variantId");

    const handleStartShopping = async () => {
        if (contentRef.current && productsRef.current) {
            const scrollElement = await contentRef.current.getScrollElement();
            const productsTop = productsRef.current.offsetTop;

            gsap.to(scrollElement, {
                scrollTop: productsTop - 20,
                duration: 1,
                ease: "power2.inOut",
            });
        }
    };

    const handleProductSave = () => {
        setToast({
            message: "Product added to cart",
            color: "primary",
            duration: 1000,
        });
    };

    const filteredProducts =
        productFilter && products
            ? products.filter((product) =>
                  product.name
                      .toLowerCase()
                      .includes(productFilter.toLowerCase()),
              )
            : [];

    const isAdmin = user?.role?.name === "admin";

    // Show loading state
    if (!products || !sections) {
        return (
            <IonPage>
                <ShopHeader
                    title="Shop"
                    searchbar
                    onSearchChange={setProductFilter}
                />
                <IonContent className="ion-padding">
                    <CatalogSkeletonLoader />
                </IonContent>
            </IonPage>
        );
    }

    return (
        <IonPage>
            <ShopHeader
                title="Shop"
                searchbar
                homeButton
                onSearchChange={setProductFilter}
            />
            <IonContent ref={contentRef}>
                <div>
                    {productFilter ? (
                        <div className="ion-padding">
                            <SearchResults
                                filteredProducts={filteredProducts}
                            />
                        </div>
                    ) : (
                        <>
                            <HeroSection
                                onStartShopping={handleStartShopping}
                            />
                            <div ref={productsRef} className="ion-padding">
                                <ProductSections
                                    sections={sections}
                                    products={products}
                                    isAdmin={isAdmin && !showUserView}
                                />
                            </div>
                        </>
                    )}
                </div>
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
        </IonPage>
    );
};

export default CatalogPage;
