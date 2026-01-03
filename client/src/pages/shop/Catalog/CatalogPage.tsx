import React, { useState, useRef } from "react";
import { IonPage, IonContent, useIonRouter, IonToast } from "@ionic/react";
import { gsap } from "gsap";
import ShopHeader from "../ShopHeader";
import ProductModal from "./components/ProductModal";
import CatalogSkeletonLoader from "./components/CatalogSkeletonLoader";
import SearchResults from "./components/SearchResults";
import ProductSections from "./components/ProductSections";
import { useLocation } from "react-router";
import {
    useGetProductsQuery,
    useGetSectionsQuery,
} from "../../../features/products/productsApi";
import "./CatalogPage.css";
import { useAuth } from "../../../hooks/useAuth";
import HeroSection from "./components/HeroSection";

const CatalogPage: React.FC = () => {
    const [productFilter, setProductFilter] = useState("");
    const [toast, setToast] = useState({
        message: "",
        color: "",
        duration: 1000,
    });

    const contentRef = useRef<HTMLIonContentElement>(null);
    const productsRef = useRef<HTMLDivElement>(null);

    const { data: products } = useGetProductsQuery();
    const { data: sections } = useGetSectionsQuery();

    const { user } = useAuth();

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
                      .includes(productFilter.toLowerCase())
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
                onSearchChange={setProductFilter}
            />
            <IonContent ref={contentRef}>
                <HeroSection onStartShopping={handleStartShopping} />
                <div className="ion-padding" ref={productsRef}>
                    {productFilter ? (
                        <SearchResults filteredProducts={filteredProducts} />
                    ) : (
                        <ProductSections
                            sections={sections}
                            products={products}
                            isAdmin={isAdmin}
                        />
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
            <IonToast
                isOpen={toast.message !== ""}
                onDidDismiss={() =>
                    setToast({ message: "", color: "", duration: 1000 })
                }
                message={toast.message}
                duration={toast.duration}
                color={toast.color}
                position="bottom"
            />
        </IonPage>
    );
};

export default CatalogPage;
