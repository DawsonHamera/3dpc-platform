import {
    IonButton,
    IonIcon,
    IonText,
    IonToolbar,
    useIonRouter,
} from "@ionic/react";
import { arrowBackOutline } from "ionicons/icons";
import React from "react";
import { Product } from "../../../../shared/features";
import { ProductCard } from "../product";
import styles from "./SearchResults.module.css";

interface SearchResultsProps {
    filteredProducts: Product[];
    searchTerm: string;
    catalogType?: string;
}

const SearchResults: React.FC<SearchResultsProps> = ({
    filteredProducts,
    searchTerm,
    catalogType = "general",
}) => {
    const router = useIonRouter();
    const catalogPath =
        catalogType === "general" ? "/shop" : `/shop?type=${catalogType}`;

    if (filteredProducts.length === 0) {
        return (
            <div className={styles.searchResultsEmpty}>
                <IonText color="medium">
                    <h3>No products found</h3>
                    <p>
                        No matches for "<strong>{searchTerm}</strong>". Try
                        adjusting your search terms.
                    </p>
                    <IonButton
                        fill="outline"
                        size="small"
                        className={styles.resetSearchButton}
                        onClick={() => router.push(catalogPath, "none")}
                    >
                        <IonIcon slot="start" icon={arrowBackOutline} />
                        Return to catalog
                    </IonButton>
                </IonText>
            </div>
        );
    }

    return (
        <div className={styles.searchResultsSection}>
            <IonToolbar>
                <IonText>
                    <h2 className={styles.sectionTitle}>
                        Search Results ({filteredProducts.length})
                    </h2>
                </IonText>
            </IonToolbar>

            <div className={styles.productList}>
                {filteredProducts.map((product) => {
                    const defaultVariant =
                        product.variants.find((v) => v.type === "DEFAULT") ||
                        product.variants[0];

                    return (
                        <ProductCard
                            key={product.id}
                            product={product}
                            variantId={defaultVariant?.id}
                            onClick={() =>
                                router.push(
                                    `${catalogPath}${
                                        catalogPath.includes("?") ? "&" : "?"
                                    }productId=${product.id}&variantId=${
                                        defaultVariant?.id || ""
                                    }`,
                                    "none",
                                )
                            }
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default SearchResults;
