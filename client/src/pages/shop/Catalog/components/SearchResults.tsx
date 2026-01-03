import React from "react";
import {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonGrid,
    IonRow,
    IonCol,
    IonText,
    useIonRouter,
} from "@ionic/react";
import ProductCard from "../../components/ProductCard";
import { Product } from "../../../../features/products/productsApi";

interface SearchResultsProps {
    filteredProducts: Product[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ filteredProducts }) => {
    const router = useIonRouter();

    if (filteredProducts.length === 0) {
        return (
            <IonCard>
                <IonCardContent className="ion-text-center">
                    <IonText color="medium">
                        <h3>No products found</h3>
                        <p>Try adjusting your search terms</p>
                    </IonText>
                </IonCardContent>
            </IonCard>
        );
    }

    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>
                    Search Results ({filteredProducts.length})
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
    );
};

export default SearchResults;
