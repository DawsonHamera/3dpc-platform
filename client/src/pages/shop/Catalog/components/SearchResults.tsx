import React from "react";
import { IonText, IonToolbar, useIonRouter } from "@ionic/react";
import ProductCard from "../../components/ProductCard";
import { Product } from "../../../../features/products/productsApi";
import "./SearchResults.css";

interface SearchResultsProps {
    filteredProducts: Product[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ filteredProducts }) => {
    const router = useIonRouter();

    if (filteredProducts.length === 0) {
        return (
            <div className="search-results-empty">
                <IonText color="medium">
                    <h3>No products found</h3>
                    <p>Try adjusting your search terms</p>
                </IonText>
            </div>
        );
    }

    return (
        <div className="search-results-section">
            <IonToolbar>
                <IonText>
                    <h2 className="section-title">
                        Search Results ({filteredProducts.length})
                    </h2>
                </IonText>
            </IonToolbar>

            <div className="product-list">
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
        </div>
    );
};

export default SearchResults;
