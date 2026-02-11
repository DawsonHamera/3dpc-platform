import {
    IonContent,
    IonPage,
    IonSegment,
    IonSegmentButton,
    useIonRouter,
} from "@ionic/react";
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
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const { viewMode, setToast } = useShop();

    const [type, setType] = useState<string | null | undefined>(
        viewMode === "admin" ? undefined : params.get("type"),
    );

    const { data: products } = useGetProductsQuery({ type: type || undefined });
    const { data: sections } = useGetSectionsQuery({ type: type || undefined });

    const { user } = useAuth();

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
                                    isTeacher={type === "teachers"}
                            />
                            {viewMode === "admin" && (
                                <IonSegment>
                                    <IonSegmentButton
                                        value="all"
                                        onClick={() => setType(undefined)}
                                    >
                                        All
                                    </IonSegmentButton>
                                    <IonSegmentButton
                                        value="general"
                                        onClick={() => setType("general")}
                                    >
                                        General
                                    </IonSegmentButton>
                                    <IonSegmentButton
                                        value="teachers"
                                        onClick={() => setType("teachers")}
                                    >
                                        Teachers
                                    </IonSegmentButton>
                                </IonSegment>
                            )}
                            <div ref={productsRef} className="ion-padding">
                                <ProductSections
                                    sections={sections}
                                    products={products}
                                    isAdmin={isAdmin && viewMode !== "user"}
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
