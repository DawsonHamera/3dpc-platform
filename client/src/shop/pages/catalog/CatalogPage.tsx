import {
    IonContent,
    IonLabel,
    IonPage,
    IonSegment,
    IonSegmentButton,
    IonText,
    useIonRouter,
} from "@ionic/react";
import { gsap } from "gsap";
import React, { useMemo, useRef, useState } from "react";
import { useLocation } from "react-router";
import {
    useGetProductsQuery,
    useGetSectionsQuery,
} from "../../../shared/features";
import { useAuth } from "../../../shared/hooks/useAuth";
import { ShopHeader, useShop } from "../shared";
import styles from "./CatalogPage.module.css";
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
    const params = useMemo(
        () => new URLSearchParams(location.search),
        [location.search],
    );
    const { viewMode, setToast } = useShop();
    const isAdminView = viewMode === "admin";
    const urlType = params.get("type");
    const type = urlType === "teachers" ? "teachers" : "general";

    const {
        data: products,
        isLoading: isProductsLoading,
        isFetching: isProductsFetching,
    } = useGetProductsQuery({ type: type || undefined });
    const {
        data: sections,
        isLoading: isSectionsLoading,
        isFetching: isSectionsFetching,
    } = useGetSectionsQuery({ type: type || undefined });

    const { user } = useAuth();

    const router = useIonRouter();

    const productId = params.get("productId");
    const variantId = params.get("variantId");
    const isTeacherCatalog = type === "teachers";

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

    const buildCatalogPath = (
        selectedType: string | null | undefined,
        selectedProductId?: string,
        selectedVariantId?: string,
    ) => {
        const queryParams = new URLSearchParams();

        if (selectedType && selectedType !== "general") {
            queryParams.set("type", selectedType);
        }
        if (selectedProductId) {
            queryParams.set("productId", selectedProductId);
        }
        if (selectedVariantId) {
            queryParams.set("variantId", selectedVariantId);
        }

        const queryString = queryParams.toString();
        return `/shop${queryString ? `?${queryString}` : ""}`;
    };

    const handleTypeChange = (nextType: string | undefined) => {
        const resolvedType =
            !nextType || nextType === "teachers" ? nextType : "general";
        router.push(buildCatalogPath(resolvedType), "none");
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
    const hasCatalogData =
        Boolean(products?.length) && Boolean(sections?.length);
    const isCatalogLoading =
        (isProductsLoading ||
            isSectionsLoading ||
            isProductsFetching ||
            isSectionsFetching) &&
        (!products || !sections);

    // Show loading state
    if (isCatalogLoading) {
        return (
            <IonPage>
                <ShopHeader
                    title="Shop"
                    searchbar
                    contextLabel={
                        isTeacherCatalog
                            ? "Teacher Catalog"
                            : "Customer Catalog"
                    }
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
                breadcrumbs={[
                    { label: "Shop" },
                    ...(isTeacherCatalog
                        ? [{ label: "Teachers" }]
                        : [{ label: "Customers" }]),
                ]}
                contextLabel={
                    isTeacherCatalog ? "Teacher Catalog" : "Customer Catalog"
                }
                onSearchChange={setProductFilter}
            />
            <IonContent
                ref={contentRef}
                className={styles.catalogContent}
                fullscreen
            >
                <div className={styles.pageContent}>
                    {productFilter ? (
                        <div className={styles.searchContent}>
                            <SearchResults
                                filteredProducts={filteredProducts}
                                searchTerm={productFilter}
                                catalogType={type || "general"}
                            />
                        </div>
                    ) : (
                        <>
                            <HeroSection
                                onStartShopping={handleStartShopping}
                                isTeacher={isTeacherCatalog}
                                onSwitchCatalog={(nextType) =>
                                    handleTypeChange(nextType)
                                }
                            />
                            {isAdminView && (
                                <div className={styles.catalogSegmentShell}>
                                    <IonText
                                        color="medium"
                                        className={styles.catalogSegmentLabel}
                                    >
                                        <p>Catalog view</p>
                                    </IonText>
                                    <IonSegment
                                        className={styles.catalogSegment}
                                        value={type || "general"}
                                        onIonChange={(event) =>
                                            handleTypeChange(
                                                (event.detail.value as
                                                    | string
                                                    | undefined) || undefined,
                                            )
                                        }
                                    >
                                        <IonSegmentButton value="general">
                                            <IonLabel>Customers</IonLabel>
                                        </IonSegmentButton>
                                        <IonSegmentButton value="teachers">
                                            <IonLabel>Teachers</IonLabel>
                                        </IonSegmentButton>
                                    </IonSegment>
                                </div>
                            )}
                            <section
                                ref={productsRef}
                                className={styles.productsContent}
                            >
                                {hasCatalogData ? (
                                    <ProductSections
                                        sections={sections || []}
                                        products={products || []}
                                        isAdmin={isAdmin && viewMode !== "user"}
                                        catalogType={type}
                                    />
                                ) : (
                                    <div className={styles.emptyCatalogState}>
                                        <IonText color="medium">
                                            <h2>No items available yet</h2>
                                            <p>
                                                {isTeacherCatalog
                                                    ? "Teacher-specific products have not been published yet."
                                                    : "Catalog sections are still being prepared. Check back soon."}
                                            </p>
                                        </IonText>
                                    </div>
                                )}
                            </section>
                        </>
                    )}
                </div>
            </IonContent>
            <ProductModal
                isOpen={!!productId && !!variantId}
                onClose={() => router.push(buildCatalogPath(type), "none")}
                product={
                    products?.find((p) => p.id.toString() === productId!) ||
                    null
                }
                variantId={variantId!}
                onSave={handleProductSave}
            />
        </IonPage>
    );
};

export default CatalogPage;
